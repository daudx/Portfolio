import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000),
  // Honeypot field (must remain empty for human submissions)
  website: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message, website } = result.data;

    // Honeypot spam protection: If bot filled the hidden website field, return fake success
    if (website && website.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Message received." },
        { status: 200 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "daudx619@gmail.com";

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: `Portfolio Inquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `<div style="font-family:sans-serif;line-height:1.6;color:#121212">
            <h2>New Inquiry from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border:none;border-top:1px solid #e0e0e0;margin:16px 0;" />
            <h3>Message:</h3>
            <p style="white-space:pre-wrap;">${message}</p>
          </div>`
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          { error: "Failed to dispatch email via service provider." },
          { status: 502 }
        );
      }
    } else {
      // In development or when no Resend key is provided, log to server console
      console.log(`[Contact Form Received] From: ${name} (${email})\nMessage: ${message}`);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for reaching out! Dawood will review your message and reply shortly." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}
