"use client";

import { useEffect, useState } from "react";

type ProposalItem = {
  id: string;
  ai_confidence: number | null;
  proposed_data: Record<string, unknown>;
  source_url?: string | null;
};

export default function AdminEventsPage() {
  const [proposals, setProposals] = useState<ProposalItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [workingId, setWorkingId] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  async function load() {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/admin/get-proposals", {
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to load proposals");
      }

      setProposals(data);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to load proposals");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function approve(id: string) {
    setWorkingId(id);
    setMessage("");

    try {
      const res = await fetch("/api/admin/approve-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ proposalId: id }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Approval failed");
      }

      setMessage("Proposal approved successfully.");
      setProposals((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Approval failed");
    } finally {
      setWorkingId(null);
    }
  }

  async function reject(id: string) {
    setWorkingId(id);
    setMessage("");

    try {
      const res = await fetch("/api/admin/reject-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ proposalId: id }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Rejection failed");
      }

      setMessage("Proposal rejected.");
      setProposals((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Rejection failed");
    } finally {
      setWorkingId(null);
    }
  }

  return (
    <main className="bg-white px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold text-[#0f3f3b]">AI Event Queue</h1>
        <p className="mb-8 text-lg text-slate-600">
          Review AI-submitted event proposals before they go live.
        </p>

        {message ? (
          <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-[#0f3f3b]">
            {message}
          </div>
        ) : null}

        {loading ? (
          <p className="text-slate-600">Loading...</p>
        ) : proposals.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg font-medium text-[#0f3f3b]">No pending AI updates.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {proposals.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
                    Pending Review
                  </span>

                  <span className="text-sm text-slate-500">
                    Confidence: {item.ai_confidence ?? "N/A"}
                  </span>
                </div>

                {item.source_url ? (
                  <p className="mb-4 text-sm text-slate-600">
                    Source:{" "}
                    <a
                      href={item.source_url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-[#166e68] underline"
                    >
                      {item.source_url}
                    </a>
                  </p>
                ) : null}

                <pre className="overflow-x-auto rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                  {JSON.stringify(item.proposed_data, null, 2)}
                </pre>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={() => approve(item.id)}
                    disabled={workingId === item.id}
                    className="btn btn-sm disabled:opacity-60"
                  >
                    {workingId === item.id ? "Working..." : "Approve"}
                  </button>

                  <button
                    onClick={() => reject(item.id)}
                    disabled={workingId === item.id}
                    className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-60"
                  >
                    {workingId === item.id ? "Working..." : "Reject"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}