"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [contactPerson, setContactPerson] = useState("Jeff");
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
          contactPerson,
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
      setContactPerson("Jeff");
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

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
            <h3 className="text-xl font-semibold">Call</h3>
            <p className="mt-3 text-slate-600">Speak directly with our team</p>

            <div className="mt-6 flex flex-col items-center gap-3">
              <a
                href="tel:+14695311176"
                className="text-lg font-semibold text-[#1f8a84]"
              >
                (469) 531-1176
              </a>
            </div>
          </div>

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

      <section className="mx-auto max-w-3xl px-6 pb-20 lg:px-8">
        <div
          id="project-inquiry"
          className="rounded-2xl border border-slate-200 p-8 shadow-sm"
        >
          <h2 className="text-2xl font-semibold">Project Inquiry</h2>

          <p className="mt-3 text-slate-600">
            Tell us about your project, timeline, and support needs.
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#1f8a84] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#1f8a84] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium">
                Company
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#1f8a84] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contactPerson"
                className="block text-sm font-medium"
              >
                Who would you like to connect with?
              </label>
              <select
                id="contactPerson"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-[#1f8a84] focus:outline-none"
              >
                <option value="Jeff">Jeff</option>
                <option value="Jacob">Jacob</option>
                <option value="Royce">Royce</option>
                <option value="Carolyn">Carolyn</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="projectDetails"
                className="block text-sm font-medium"
              >
                Project Details
              </label>
              <textarea
                id="projectDetails"
                rows={5}
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-[#1f8a84] focus:outline-none"
              />
            </div>

            {successMessage ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {successMessage}
              </div>
            ) : null}

            {errorMessage ? (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-[#1f8a84] px-6 py-4 font-semibold text-white transition hover:bg-[#18716c] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#1f8a84]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Need support on a fiber, tower, or telecom infrastructure project?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Reach out and we’ll help you move forward quickly and efficiently.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#project-inquiry"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#1f8a84] transition hover:bg-[#f0f7f7]"
            >
              Request Proposal
            </a>

            <a
              href="https://outlook.office.com/book/Odiscom@odiscom.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Book a Meeting
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}