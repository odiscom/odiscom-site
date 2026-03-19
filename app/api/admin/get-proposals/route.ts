import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data } = await supabase
    .from("event_update_queue")
    .select("*")
    .eq("review_status", "pending_review")
    .order("created_at", { ascending: false });

  return NextResponse.json(data || []);
}