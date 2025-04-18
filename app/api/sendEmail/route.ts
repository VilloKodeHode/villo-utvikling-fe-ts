import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const signature = `
    <p style="margin-top: 32px; font-size: 14px; line-height: 1.6; color: #333;">
        Mvh,
        <br />
        <strong>Joakim Villo</strong>
        <br />
        Villo Utvikling
        <br />
        <a href="tel:+4793285044" style="color: #4a90e2; text-decoration: none;">+47 932 85 044</a>
        <br />
        <a href="mailto:Villokodehode@gmail.com" style="color: #4a90e2; text-decoration: none;">Villokodehode@gmail.com</a>
        <br />
        <a href="https://www.villoutvikling.com" style="color: #4a90e2; text-decoration: none;">www.villoutvikling.com</a>
        <br />
    </p>
    <img 
        src="https://www.villoutvikling.com/images/logo/WindLogoLightMode.svg" 
        alt="Villo Utvikling Logo" 
        width="120" 
        style="margin-top: 16px;" 
    />`;

    const response = await resend.emails.send({
      from: "Contact Form <contact@villoutvikling.com>", // Must be verified in Resend
      to: "villokodehode@gmail.com", // Your receiving email
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
      ${signature}
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
