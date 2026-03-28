import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type SourceName = "all" | "nate" | "wia" | "fiberconnect" | "other";

function monthStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

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

    const url = new URL(req.url);
    const monthParam = url.searchParams.get("month");
    const sourceParam = (url.searchParams.get("source") || "all") as SourceName;

    const selectedMonth =
      monthParam && /^\d{4}-\d{2}$/.test(monthParam)
        ? monthParam
        : new Date().toISOString().slice(0, 7);

    const baseDate = new Date(`${selectedMonth}-01T12:00:00`);
    const start = monthStart(baseDate).toISOString();
    const end = new Date(
      baseDate.getFullYear(),
      baseDate.getMonth() + 1,
      1
    ).toISOString();

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    let query = supabase
      .from("events")
      .select("id,title,slug,source,description,location,starts_at,ends_at,url,organizer")
      .gte("starts_at", start)
      .lt("starts_at", end)
      .order("starts_at", { ascending: true });

    if (sourceParam !== "all") {
      query = query.eq("source", sourceParam);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ events: data || [] });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unknown API error",
      },
      { status: 500 }
    );
  }
}