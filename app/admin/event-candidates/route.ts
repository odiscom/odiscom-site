import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
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

    const status = req.nextUrl.searchParams.get("status");
    const source = req.nextUrl.searchParams.get("source");
    const q = req.nextUrl.searchParams.get("q");
    const limit = Number(req.nextUrl.searchParams.get("limit") || "100");

    let query = supabase
      .from("event_candidates")
      .select(
        "id,candidate_key,title,source,description,location,starts_at,ends_at,url,organizer,discovery_url,confidence_score,confidence_reason,status,created_at,updated_at"
      )
      .order("confidence_score", { ascending: false })
      .order("starts_at", { ascending: true, nullsFirst: false })
      .limit(Math.min(limit, 250));

    if (status && status !== "all") {
      query = query.eq("status", status);
    }

    if (source && source !== "all") {
      query = query.eq("source", source);
    }

    if (q?.trim()) {
      const safe = q.trim().replace(/,/g, " ");
      query = query.or(
        `title.ilike.%${safe}%,description.ilike.%${safe}%,location.ilike.%${safe}%,organizer.ilike.%${safe}%`
      );
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ items: data || [] });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown API error",
      },
      { status: 500 }
    );
  }
}