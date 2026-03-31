import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  details?: string;
  projectDetails?: string;
  contactPerson?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const body = (await req.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const company = body.company?.trim() ?? "";
    const contactPerson = body.contactPerson?.trim() ?? "General Team";
    const projectDetails =
      body.details?.trim() ??
      body.projectDetails?.trim() ??
      "";

    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const fallbackTo = process.env.CONTACT_TO || "owners@odiscom.com";
    const contactMap: Record<string, string> = {
      Jeff: process.env.CONTACT_TO_JEFF || fallbackTo,
      Jacob: process.env.CONTACT_TO_JACOB || fallbackTo,
      Royce: process.env.CONTACT_TO_ROYCE || fallbackTo,
      Carolyn: process.env.CONTACT_TO_CAROLYN || fallbackTo,
      "General Team": fallbackTo,
    };

    const contactTo = contactMap[contactPerson] || fallbackTo;
    const from = process.env.CONTACT_FROM || "Odiscom Website <admin@odiscom.com>";
    const subject = `New Odiscom Project Inquiry from ${name}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Requested Contact: ${contactPerson}`,
      `Deliver To: ${contactTo}`,
      "",
      "Project Details:",
      projectDetails,
    ].join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin-bottom: 16px;">New Odiscom Project Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Requested Contact:</strong> ${escapeHtml(contactPerson)}</p>
        <p><strong>Deliver To:</strong> ${escapeHtml(contactTo)}</p>
        <p><strong>Project Details:</strong></p>
        <div style="white-space: pre-wrap; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; background: #f8fafc;">
          ${escapeHtml(projectDetails)}
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from,
      to: [contactTo],
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: "Something went wrong while sending your inquiry." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your inquiry." },
      { status: 500 }
    );
  }
}