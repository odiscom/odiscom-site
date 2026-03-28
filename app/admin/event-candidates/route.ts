import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type CandidateAction = "approve" | "reject" | "reset";
type SourceName = "nate" | "wia" | "fiberconnect" | "eventbrite" | "other";

function normalizeWhitespace(value?: string | null) {
  return (value || "").replace(/\s+/g, " ").trim();
}

function decodeHtml(input: string) {
  return input
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&#x2F;/gi, "/")
    .replace(/&#8211;/gi, "-")
    .replace(/&#8212;/gi, "-")
    .replace(/&#038;/gi, "&");
}

function cleanText(input?: string | null) {
  if (!input) return null;

  return normalizeWhitespace(
    decodeHtml(
      input
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
    )
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function makeSlug(source: SourceName, title: string, startsAt: string) {
  const yyyyMmDd = new Date(startsAt).toISOString().slice(0, 10);
  return `${source}-${slugify(title)}-${yyyyMmDd}`;
}

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const action = body?.action as CandidateAction;

    if (!["approve", "reject", "reset"].includes(action)) {
      return NextResponse.json({ error: "Invalid action." }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { error: "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data: candidate, error: candidateError } = await supabase
      .from("event_candidates")
      .select("*")
      .eq("id", id)
      .single();

    if (candidateError || !candidate) {
      return NextResponse.json({ error: "Candidate not found." }, { status: 404 });
    }

    if (action === "approve") {
      if (!candidate.starts_at) {
        return NextResponse.json(
          { error: "Candidate has no starts_at and cannot be approved." },
          { status: 400 }
        );
      }

      const cleanedTitle = cleanText(candidate.title) || "Untitled Event";
      const startsAtIso = new Date(candidate.starts_at).toISOString();

      const eventRow = {
        title: cleanedTitle,
        slug: makeSlug(candidate.source as SourceName, cleanedTitle, startsAtIso),
        source: candidate.source,
        description: cleanText(candidate.description),
        location: cleanText(candidate.location),
        starts_at: startsAtIso,
        ends_at: candidate.ends_at ? new Date(candidate.ends_at).toISOString() : null,
        url: cleanText(candidate.url) || candidate.url,
        organizer: cleanText(candidate.organizer),
      };

      const { error: publishError } = await supabase.from("events").upsert(eventRow, {
        onConflict: "slug",
      });

      if (publishError) {
        return NextResponse.json(
          { error: publishError.message },
          { status: 500 }
        );
      }

      const { error: updateError } = await supabase
        .from("event_candidates")
        .update({
          status: "approved",
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (updateError) {
        return NextResponse.json(
          { error: updateError.message },
          { status: 500 }
        );
      }

      return NextResponse.json({ ok: true, action: "approved" });
    }

    if (action === "reject") {
      const { error: rejectError } = await supabase
        .from("event_candidates")
        .update({
          status: "rejected",
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (rejectError) {
        return NextResponse.json(
          { error: rejectError.message },
          { status: 500 }
        );
      }

      return NextResponse.json({ ok: true, action: "rejected" });
    }

    const { error: resetError } = await supabase
      .from("event_candidates")
      .update({
        status: "queued",
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (resetError) {
      return NextResponse.json(
        { error: resetError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, action: "queued" });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown API error",
      },
      { status: 500 }
    );
  }
}