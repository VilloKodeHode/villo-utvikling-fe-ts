import { Resend } from "resend";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // ✅ prevent Next.js from pre-evaluating this route at build

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!resend) {
      console.error("Missing RESEND_API_KEY in environment.");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 503 }
      );
    }

    const response = await resend.emails.send({
      from: "Contact Form <contact@villoutvikling.com>",
      to: "villokodehode@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 24px; color: #333; background-color: #f9f9f9;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 24px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
          <h2 style="margin-top: 0; font-size: 20px; color: #111;">📥 New Contact Form Submission</h2>
          <p style="margin: 16px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 16px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4a90e2;">${email}</a></p>
          <p style="margin: 16px 0;"><strong>Message:</strong></p>
          <div style="white-space: pre-wrap; padding: 12px; border-left: 3px solid #eee; background-color: #fdfdfd; border-radius: 4px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #888; text-align: center;">
            This message was sent from the contact form on <strong>villoutvikling.com</strong>
          </p>
        </div>
      </div>
    `,
    });

    return NextResponse.json(
      { success: true, data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
