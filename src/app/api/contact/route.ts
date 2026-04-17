import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/server/db";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, contactMethod, contactValue, pageUrl, utmSource, utmMedium, utmCampaign } = body;

    if (!name || !email || !contactMethod || !contactValue) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // 1. Save to DB
    const contactFields: Record<string, string> = {};
    if (contactMethod === "phone") contactFields.phone = contactValue;
    else if (contactMethod === "telegram") contactFields.telegram = contactValue;
    else if (contactMethod === "whatsapp") contactFields.whatsapp = contactValue;

    try {
      await saveLead({
        source: "contact_page",
        name,
        email,
        ...contactFields,
        interestType: "general",
        pageUrl: pageUrl || null,
        utmSource: utmSource || null,
        utmMedium: utmMedium || null,
        utmCampaign: utmCampaign || null,
        rawPayload: body,
      });
    } catch (dbErr) {
      console.error("[Contact] Failed to save lead to DB:", dbErr);
    }

    // 2. Send email notification
    const contactLabel =
      contactMethod === "phone" ? "Phone" :
      contactMethod === "telegram" ? "Telegram" :
      contactMethod === "whatsapp" ? "WhatsApp" : contactMethod;

    const messageContent = [
      `New lead from only-fans.ai`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Preferred Contact: ${contactLabel}`,
      `${contactLabel}: ${contactValue}`,
      ``,
      `Submitted at: ${new Date().toISOString()}`,
    ].join("\n");

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: (process.env.SMTP_PORT || "587") === "465",
          auth: { user: smtpUser, pass: smtpPass },
        });

        const recipients = [
          "hidmitrykotov@gmail.com",
          "Logexwise@gmail.com",
        ];

        await transporter.sendMail({
          from: smtpUser,
          to: recipients.join(", "),
          subject: `New Lead from only-fans.ai: ${name}`,
          text: messageContent,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #d4a843;">New Lead from only-fans.ai</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Contact</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${contactLabel}</td></tr>
                <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">${contactLabel}</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${contactValue}</td></tr>
              </table>
              <p style="color: #888; font-size: 12px; margin-top: 20px;">Submitted at ${new Date().toISOString()}</p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.warn("[Contact] Email sending failed:", emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact] Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
