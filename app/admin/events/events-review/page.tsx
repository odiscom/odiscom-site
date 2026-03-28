"use client";

import { useEffect, useMemo, useState } from "react";

type CandidateStatus = "queued" | "approved" | "rejected";
type SourceName = "all" | "nate" | "wia" | "fiberconnect" | "eventbrite" | "other";

type EventCandidate = {
  id: string;
  candidate_key: string;
  title: string;
  source: Exclude<SourceName, "all">;
  description: string | null;
  location: string | null;
  starts_at: string | null;
  ends_at: string | null;
  url: string;
  organizer: string | null;
  discovery_url: string | null;
  confidence_score: number | null;
  confidence_reason: string | null;
  status: CandidateStatus;
  created_at: string;
  updated_at: string;
};

const SOURCE_LABELS: Record<SourceName, string> = {
  all: "All",
  nate: "NATE",
  wia: "WIA",
  fiberconnect: "Fiber Connect",
  eventbrite: "Eventbrite",
  other: "Other",
};

const SOURCE_BADGES: Record<Exclude<SourceName, "all">, string> = {
  nate: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  wia: "bg-sky-50 text-sky-700 ring-sky-200",
  fiberconnect: "bg-amber-50 text-amber-700 ring-amber-200",
  eventbrite: "bg-orange-50 text-orange-700 ring-orange-200",
  other: "bg-slate-100 text-slate-700 ring-slate-200",
};

const STATUS_STYLES: Record<CandidateStatus | "all", string> = {
  all: "bg-slate-100 text-slate-700",
  queued: "bg-amber-50 text-amber-800",
  approved: "bg-emerald-50 text-emerald-800",
  rejected: "bg-rose-50 text-rose-800",
};

function fmtDate(value?: string | null) {
  if (!value) return "No date";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Invalid date";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function decodeHtmlEntities(input?: string | null) {
  if (!input) return "";
  if (typeof window === "undefined") return input;
  const textarea = document.createElement("textarea");
  textarea.innerHTML = input;
  return textarea.value;
}

function truncate(text?: string | null, max = 180) {
  const clean = decodeHtmlEntities(text);
  if (!clean) return "";
  return clean.length > max ? `${clean.slice(0, max)}...` : clean;
}

export default function EventsReviewPage() {
  const [items, setItems] = useState<EventCandidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [workingId, setWorkingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [status, setStatus] = useState<"all" | CandidateStatus>("queued");
  const [source, setSource] = useState<SourceName>("all");
  const [query, setQuery] = useState("");

  async function loadCandidates() {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      if (status !== "all") params.set("status", status);
      if (source !== "all") params.set("source", source);
      if (query.trim()) params.set("q", query.trim());

      const res = await fetch(`/api/admin/event-candidates?${params.toString()}`, {
        cache: "no-store",
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json?.error || "Failed to load candidates.");
      }

      setItems(Array.isArray(json.items) ? json.items : []);
    } catch (err) {
      setItems([]);
      setError(err instanceof Error ? err.message : "Failed to load candidates.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      loadCandidates();
    }, query ? 250 : 0);

    return () => clearTimeout(timeout);
  }, [status, source, query]);

  async function runAction(id: string, action: "approve" | "reject" | "reset") {
    try {
      setWorkingId(id);
      setError(null);

      const res = await fetch(`/api/admin/event-candidates/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json?.error || `Failed to ${action} candidate.`);
      }

      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status:
                  action === "approve"
                    ? "approved"
                    : action === "reject"
                    ? "rejected"
                    : "queued",
              }
            : item
        )
      );

      if (status !== "all" && action !== "reset") {
        setItems((prev) => prev.filter((item) => item.id !== id));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Action failed.");
    } finally {
      setWorkingId(null);
    }
  }

  const counts = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        acc.all += 1;
        acc[item.source] += 1;
        return acc;
      },
      {
        all: 0,
        nate: 0,
        wia: 0,
        fiberconnect: 0,
        eventbrite: 0,
        other: 0,
      } as Record<SourceName, number>
    );
  }, [items]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Admin Review
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Event candidate approval queue
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Review scraped event candidates, approve trusted ones into the live
            calendar, and reject noise before it reaches users.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Visible
              </div>
              <div className="mt-1 text-2xl font-semibold text-slate-900">
                {loading ? "..." : items.length}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </div>
              <div className="mt-1 text-base font-semibold text-slate-900 capitalize">
                {status}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Source
              </div>
              <div className="mt-1 text-base font-semibold text-slate-900">
                {SOURCE_LABELS[source]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {error ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <div className="mb-6 grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, description, organizer, or location..."
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-emerald-300"
          />

          <div className="flex flex-wrap gap-2">
            {(["queued", "approved", "rejected", "all"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setStatus(value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  status === value
                    ? "bg-slate-900 text-white"
                    : STATUS_STYLES[value]
                }`}
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {(Object.keys(SOURCE_LABELS) as SourceName[]).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setSource(value)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  source === value
                    ? "bg-emerald-700 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>{SOURCE_LABELS[value]}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    source === value ? "bg-white/20 text-white" : "bg-white text-slate-600"
                  }`}
                >
                  {counts[value]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-end">
          <button
            type="button"
            onClick={loadCandidates}
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="h-3 w-24 rounded bg-slate-100" />
              <div className="mt-3 h-6 w-1/2 rounded bg-slate-100" />
              <div className="mt-3 h-4 w-2/3 rounded bg-slate-100" />
              <div className="mt-5 h-10 w-full rounded bg-slate-100" />
            </div>
          ))
        ) : items.length ? (
          items.map((item) => {
            const decodedTitle = decodeHtmlEntities(item.title);
            const disabled = workingId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ${
                          SOURCE_BADGES[item.source]
                        }`}
                      >
                        {SOURCE_LABELS[item.source]}
                      </span>

                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                          STATUS_STYLES[item.status]
                        }`}
                      >
                        {item.status}
                      </span>

                      <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-700">
                        Confidence {item.confidence_score?.toFixed(2) ?? "0.00"}
                      </span>

                      {item.confidence_reason ? (
                        <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                          {item.confidence_reason}
                        </span>
                      ) : null}
                    </div>

                    <h2 className="text-2xl font-semibold text-slate-900">
                      {decodedTitle}
                    </h2>

                    <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Start
                        </div>
                        <div className="mt-1 text-sm text-slate-900">
                          {fmtDate(item.starts_at)}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Location
                        </div>
                        <div className="mt-1 text-sm text-slate-900">
                          {decodeHtmlEntities(item.location) || "Not listed"}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Organizer
                        </div>
                        <div className="mt-1 text-sm text-slate-900">
                          {decodeHtmlEntities(item.organizer) || "Not listed"}
                        </div>
                      </div>

                      <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Updated
                        </div>
                        <div className="mt-1 text-sm text-slate-900">
                          {fmtDate(item.updated_at)}
                        </div>
                      </div>
                    </div>

                    {item.description ? (
                      <p className="mt-4 text-sm leading-6 text-slate-600">
                        {truncate(item.description, 280)}
                      </p>
                    ) : null}

                    <div className="mt-4 flex flex-wrap gap-3 text-sm">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-emerald-700 hover:text-emerald-800"
                      >
                        Open candidate page
                      </a>

                      {item.discovery_url ? (
                        <a
                          href={item.discovery_url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-slate-600 hover:text-slate-800"
                        >
                          Open discovery page
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2 lg:w-[220px] lg:flex-col">
                    <button
                      type="button"
                      disabled={disabled}
                      onClick={() => runAction(item.id, "approve")}
                      className="rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-medium text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {disabled ? "Working..." : "Approve"}
                    </button>

                    <button
                      type="button"
                      disabled={disabled}
                      onClick={() => runAction(item.id, "reject")}
                      className="rounded-2xl bg-rose-600 px-4 py-3 text-sm font-medium text-white hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Reject
                    </button>

                    <button
                      type="button"
                      disabled={disabled}
                      onClick={() => runAction(item.id, "reset")}
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Reset to queue
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500 shadow-sm">
            No candidates found for the current filters.
          </div>
        )}
      </div>
    </div>
  );
}