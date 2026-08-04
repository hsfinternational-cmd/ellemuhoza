import { NextResponse } from "next/server";

/**
 * Accepts an RSVP and forwards it to whatever collector you point
 * RSVP_WEBHOOK_URL at — a Google Apps Script endpoint, Zapier, Formspree,
 * a Slack incoming webhook. With no webhook configured the RSVP is logged to
 * the server console so the site is still usable out of the box.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();

  if (!name) {
    return NextResponse.json(
      { error: "Please tell us your name." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const rsvp = {
    name,
    email,
    phone: String(payload.phone ?? "").trim(),
    organisation: String(payload.organisation ?? "").trim(),
    guests: Number(payload.guests) || 1,
    message: String(payload.message ?? "").trim(),
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.RSVP_WEBHOOK_URL;

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rsvp),
      });

      if (!res.ok) {
        console.error("RSVP webhook rejected the request", res.status, rsvp);
        return NextResponse.json(
          { error: "We couldn't record your RSVP. Please try again." },
          { status: 502 },
        );
      }
    } catch (error) {
      console.error("RSVP webhook failed", error, rsvp);
      return NextResponse.json(
        { error: "We couldn't record your RSVP. Please try again." },
        { status: 502 },
      );
    }
  } else {
    console.log("RSVP received (no RSVP_WEBHOOK_URL configured):", rsvp);
  }

  return NextResponse.json({ ok: true });
}
