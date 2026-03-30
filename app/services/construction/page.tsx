import type { Metadata } from "next";
import Link from "next/link";
import BottomCta from "@/components/BottomCta";

export const metadata: Metadata = {
  title: "Telecom Construction Support",
  description:
    "Odiscom provides construction-ready telecom support, execution-focused coordination, field documentation, and project delivery alignment for fiber, wireless, and tower programs.",
};

export default function ConstructionPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <h1 className="text-4xl font-semibold md:text-6xl">
            Telecom Construction Support
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Odiscom supports telecom construction programs with practical
            coordination, field-ready documentation, and execution-focused
            planning built for real deployment environments.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold">
            Construction-Ready Project Delivery
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            We help telecom projects move from planning into execution with
            documentation, coordination, and delivery support designed for field
            conditions. Our focus is on reducing friction between engineering,
            contractors, and project teams.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Built Around Real Field Conditions
          </h2>

          <p className="mt-4 text-slate-600 leading-8">
            Construction support only works when it reflects how crews actually
            build. Odiscom takes a practical approach that helps teams stay
            aligned, avoid unnecessary delays, and keep work moving through the
            field.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Services Include</h2>

          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Construction-ready documentation</