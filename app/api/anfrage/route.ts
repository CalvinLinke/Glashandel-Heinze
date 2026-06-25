import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  glasart?: string;
  breite?: string;
  hoehe?: string;
  staerke?: string;
  bearbeitung?: string[];
  menge?: string;
  anwendung?: string;
  name?: string;
  firma?: string;
  email?: string;
  telefon?: string;
  nachricht?: string;
  datenschutz?: boolean;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
  }

  // Server-seitige Pflichtfeld- & Einwilligungsprüfung
  if (!data.name || !data.email || !EMAIL_RE.test(data.email) || !data.glasart || !data.datenschutz) {
    return NextResponse.json(
      { ok: false, error: "Bitte Name, gültige E-Mail, Glasart und Einwilligung angeben." },
      { status: 422 }
    );
  }

  // Übersichtlicher Klartext der Anfrage (wird später als E-Mail-Body versendet)
  const summary = [
    "Neue Angebotsanfrage über glashandel-heinze.de",
    "",
    `Glasart:      ${data.glasart}`,
    `Maße:         ${data.breite && data.hoehe ? `${data.breite} × ${data.hoehe} mm` : "—"}`,
    `Glasstärke:   ${data.staerke || "—"}`,
    `Bearbeitung:  ${data.bearbeitung?.length ? data.bearbeitung.join(", ") : "keine Angabe"}`,
    `Stückzahl:    ${data.menge || "1"}`,
    `Anwendung:    ${data.anwendung || "—"}`,
    "",
    `Name:         ${data.name}`,
    `Firma:        ${data.firma || "—"}`,
    `E-Mail:       ${data.email}`,
    `Telefon:      ${data.telefon || "—"}`,
    `Nachricht:    ${data.nachricht || "—"}`,
  ].join("\n");

  // -------------------------------------------------------------------------
  // TODO (E-Mail-Versand wird später eingerichtet):
  // Hier die Anfrage an `${site.email}` senden – z. B. via Resend oder Nodemailer/SMTP.
  // Beispiel (Resend):
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Website <anfrage@glashandel-heinze.de>",
  //     to: site.email,
  //     replyTo: data.email,
  //     subject: `Angebotsanfrage – ${data.glasart} (${data.name})`,
  //     text: summary,
  //   });
  // Optional: Bestätigungsmail an data.email.
  // -------------------------------------------------------------------------

  // Solange kein Versand konfiguriert ist, protokollieren wir die Anfrage serverseitig.
  console.info("[anfrage] Eingang ->", site.email, "\n" + summary);

  return NextResponse.json({ ok: true });
}
