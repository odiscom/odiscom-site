"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          projectDetails,
        }),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSuccessMessage(
        "Your inquiry was submitted successfully. We will get back to you soon."
      );
      setName("");
      setEmail("");
      setCompany("");
      setProjectDetails("");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting your inquiry."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1f8a84]">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
            Connect with Odiscom
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Whether you're planning a fiber deployment, tower upgrade, or
            infrastructure program, our team is ready to support.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* CALL + TEAMS */}
          <div className="rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold">Call</h3>
            <p className="mt-3 text-slate-600">Speak directly with our team</p>

            <div className="mt-6 flex flex-col gap-3 items-center">
              <a
                href="tel:+14695311176"
                className="text-lg font-semibold text-[#1f8a84]"
              >
                (469) 531-1176
              </a>

              <a
                href="https://teams.microsoft.com/l/call/0/0?users=+14695311176"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#1f8a84] px-5 py-2 text-sm font-semibold text-[#1f8a84] hover:bg-[#f0f7f7]"
              >
                Call on Teams
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="mt-3 text-slate-600">
              Send us project details or questions
            </p>

            <a
              href="mailto:owners@odiscom.com"
              className="mt-6 inline-block text-lg font-semibold text-[#1f8a84]"
            >
              owners@odiscom.com
            </a>
          </div>

          {/* SCHEDULER */}
          <div className="rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold">Book a Meeting</h3>
            <p className="mt-3 text-slate-600">Schedule directly with our team</p>

            <a
              href="https://outlook.office.com/book/Odiscom@odiscom.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-[#1f8a84] px-6 py-3 font-semibold text-white transition hover:bg-[#18716c]"
            >
              Open Scheduler
            </a>
          </div>
        </div>
      </section>

      {/* (rest of your file unchanged) */}
    </main>
  );
}