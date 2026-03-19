import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    console.log("SERVICE KEY EXISTS:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);

    const body = await req.json();
    const { proposalId } = body;

    if (!proposalId) {
      return NextResponse.json({ error: "Missing proposalId" }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data: proposal, error: proposalError } = await supabase
      .from("event_update_queue")
      .select("*")
      .eq("id", proposalId)
      .single();

    if (proposalError || !proposal) {
      console.error("PROPOSAL FETCH ERROR:", proposalError);
      return NextResponse.json(
        { error: proposalError?.message || "Proposal not found" },
        { status: 404 }
      );
    }

    const eventData = proposal.proposed_data as Record<string, any>;

    console.log("EVENT DATA:", eventData);

    const slug = eventData.slug;
    if (!slug) {
      return NextResponse.json({ error: "Proposal is missing slug" }, { status: 400 });
    }

    const officialUrl =
      eventData.official_url ??
      eventData.external_url ??
      proposal.source_url ??
      `https://odiscom.com/events/${slug}`;

    const mappedEvent = {
      title: eventData.title ?? null,
      slug,
      description: eventData.description ?? null,
      category: eventData.category ?? null,
      city: eventData.city ?? null,
      state: eventData.state ?? null,
      venue_name: eventData.venue_name ?? null,
      external_url: eventData.external_url ?? officialUrl,
      official_url: officialUrl,
      status: "published",
      start_date: eventData.starts_at ?? null,
      end_date: eventData.ends_at ?? null,
      starts_at: eventData.starts_at ?? null,
      ends_at: eventData.ends_at ?? null,
    };

    console.log("MAPPED EVENT:", mappedEvent);

    const { data: existingEvent, error: existingEventError } = await supabase
      .from("events")
      .select("id, slug")
      .eq("slug", slug)
      .maybeSingle();

    if (existingEventError) {
      console.error("EXISTING EVENT LOOKUP ERROR:", existingEventError);
      return NextResponse.json(
        { error: existingEventError.message, details: existingEventError },
        { status: 500 }
      );
    }

    if (existingEvent) {
      const { error: updateEventError } = await supabase
        .from("events")
        .update(mappedEvent)
        .eq("id", existingEvent.id);

      if (updateEventError) {
        console.error("EVENT UPDATE ERROR:", updateEventError);
        return NextResponse.json(
          { error: updateEventError.message, details: updateEventError },
          { status: 500 }
        );
      }
    } else {
      const { error: insertError } = await supabase.from("events").insert(mappedEvent);

      if (insertError) {
        console.error("INSERT ERROR:", insertError);
        return NextResponse.json(
          { error: insertError.message, details: insertError },
          { status: 500 }
        );
      }
    }

    const { error: queueUpdateError } = await supabase
      .from("event_update_queue")
      .update({
        review_status: "approved",
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", proposalId);

    if (queueUpdateError) {
      console.error("QUEUE UPDATE ERROR:", queueUpdateError);
      return NextResponse.json(
        { error: queueUpdateError.message, details: queueUpdateError },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("APPROVE EVENT ROUTE ERROR:", error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}