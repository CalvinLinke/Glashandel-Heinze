# Stack-Guide: Next.js (App Router) + Tailwind v4 + React

Konkrete Umsetzung der Designs aus diesem Paket im Ziel-Stack. Ergänzt `README.md` (dort stehen alle Tokens, Texte und Verhaltensregeln). Alle Werte hier sind 1:1 aus dem Prototyp.

---

## 1. Projektstruktur (Vorschlag)

```
app/
├─ layout.tsx                 # Fonts + <html>/<body>, Navbar, Footer
├─ globals.css                # Tailwind v4 @theme + Keyframes (s. §3)
├─ page.tsx                   # Start
├─ ueber-uns/page.tsx
├─ leistungen/page.tsx
├─ referenzen/page.tsx
└─ kontakt/page.tsx           # inkl. Konfigurator
components/
├─ site/Navbar.tsx  Footer.tsx
├─ ui/MonoKicker.tsx  Container.tsx  ImagePlaceholder.tsx  GlassButton.tsx
├─ home/Hero.tsx  StatsBand.tsx  DreiE.tsx  Prozess.tsx  CtaBand.tsx
├─ konfigurator/Konfigurator.tsx
└─ promo/AktionPopup.tsx
lib/
├─ content.ts                 # alle Texte/Daten (leistungen, dreiE, stats, referenzen …)
└─ useCountUp.ts  useInView.ts
public/assets/                # logo.png, logo-white.png, mark-h.png, mark-h-white.png
```

Statt SPA-State (`page`) echte **Routen**. Hero-Variante kann als Konstante fix auf `"h"` stehen (Default) — der sichtbare Umschalter aus dem Prototyp ist nur Abstimmungs-Hilfe.

---

## 2. Fonts via `next/font`

```ts
// app/fonts.ts
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

export const display = Space_Grotesk({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-display" });
export const sans    = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-sans" });
export const mono    = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono" });
```

```tsx
// app/layout.tsx
import { display, sans, mono } from "./fonts";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

---

## 3. `globals.css` — Tailwind v4 CSS-first Theme

Tailwind v4 wird **CSS-first** konfiguriert (kein `tailwind.config.js` nötig). `@theme`-Keys erzeugen automatisch Utilities: `--color-navy` → `bg-navy`/`text-navy`, `--font-display` → `font-display`, `--animate-sweep` → `animate-sweep`.

```css
@import "tailwindcss";

@theme {
  /* Farben */
  --color-navy: #001031;
  --color-navy-900: #00081f;
  --color-navy-700: #062046;
  --color-navy-panel: #0a2a52;
  --color-prozess: #0b1f3d;
  --color-blue: #0D76C7;
  --color-blue-hover: #1685db;
  --color-blue-hover2: #0961a8;
  --color-blue-deep: #0a3a6b;
  --color-ice: #9FC3E9;
  --color-paper: #EEF3F8;
  --color-surface-2: #f4f7fb;
  --color-chip: #f1f5fa;
  --color-ink: #0B1119;
  --color-ink-2: #1c2935;
  --color-ink-3: #33414f;
  --color-muted: #5a6b7d;
  --color-label: #8593a1;

  /* Fonts (an next/font-Variablen gekoppelt) */
  --font-display: var(--font-display), "Space Grotesk", sans-serif;
  --font-sans: var(--font-sans), "IBM Plex Sans", sans-serif;
  --font-mono: var(--font-mono), "IBM Plex Mono", monospace;

  /* Animationen → animate-sweep, animate-fade, animate-blink, animate-popin, animate-squeegee */
  --animate-sweep: hhSweep 7s ease-in-out infinite;
  --animate-sweep-slow: hhSweep 8s ease-in-out infinite;
  --animate-fade: hhFade .35s ease both;
  --animate-blink: hhBlink 2s ease-in-out infinite;
  --animate-popin: hhPopIn .5s cubic-bezier(.2,.8,.2,1) both;
  --animate-squeegee: hhSqueegee .85s cubic-bezier(.7,0,.25,1) .22s forwards;
}

@keyframes hhSweep { 0%{transform:translateX(-130%) skewX(-14deg)} 55%{transform:translateX(360%) skewX(-14deg)} 100%{transform:translateX(360%) skewX(-14deg)} }
@keyframes hhFade  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
@keyframes hhBlink { 0%,100%{opacity:.35} 50%{opacity:1} }
@keyframes hhPopIn { 0%{opacity:0;transform:translateY(26px) scale(.97)} 100%{opacity:1;transform:none} }
@keyframes hhSqueegee { 0%{transform:translateX(0)} 100%{transform:translateX(102%)} }

::selection { background: #0D76C7; color: #fff; }
```

Größen/Radien/Schatten bleiben am besten Tailwind-Standard; Sonderwerte als Arbitrary Values (`text-[74px]`, `rounded-[10px]`, `shadow-[0_40px_80px_-50px_rgba(13,118,199,.9)]`).

---

## 4. UI-Primitive (Beispiele)

```tsx
// components/ui/Container.tsx
export const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto max-w-[1280px] px-7 ${className}`}>{children}</div>
);
```

```tsx
// components/ui/MonoKicker.tsx  — das wiederkehrende Mono-Label mit blauem Quadrat
export const MonoKicker = ({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "ice" }) => (
  <div className={`flex items-center gap-[10px] font-mono text-[12px] tracking-[.18em] uppercase ${tone === "ice" ? "text-ice" : "text-blue"}`}>
    <span className="inline-block h-2 w-2 bg-blue" />
    {children}
  </div>
);
```

```tsx
// components/ui/GlassButton.tsx
export const PrimaryButton = (p: React.ComponentProps<"button">) => (
  <button {...p} className="inline-flex items-center gap-[10px] rounded-[3px] bg-blue px-7 py-4 text-[16px] font-semibold text-white shadow-[0_16px_40px_-16px_rgba(13,118,199,.9)] transition-colors hover:bg-blue-hover" />
);
```

```tsx
// components/ui/ImagePlaceholder.tsx — Navy-Verlauf + Fugenraster + Mono-Caption
export const ImagePlaceholder = ({ caption, className = "" }: { caption: string; className?: string }) => (
  <div className={`relative overflow-hidden bg-[linear-gradient(140deg,#0a2a52,#001031)] ${className}`}>
    <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.12)_0_1px,transparent_1px_56px),repeating-linear-gradient(0deg,rgba(159,195,233,.09)_0_1px,transparent_1px_56px)]" />
    <div className="absolute -left-[30%] top-0 h-full w-[42%] -skew-x-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)]" />
    <span className="absolute bottom-3 left-3 border border-white/25 bg-white/10 px-[10px] py-[6px] font-mono text-[11px] tracking-[.12em] text-white/85 backdrop-blur-[6px]">{caption}</span>
  </div>
);
```

> **Echte Fotos** später per `next/image` einsetzen und die Platzhalter ersetzen.

---

## 5. Sticky Navbar

```tsx
// Wichtig: KEIN overflow am Wrapper/Body (sonst bricht sticky)
<header className="sticky top-0 z-[60] border-b border-[rgba(0,16,49,.09)] bg-paper/70 backdrop-blur-[18px] backdrop-saturate-[1.3]">
  <Container className="flex h-[74px] items-center justify-between gap-6 px-7">
    <Link href="/"><img src="/assets/logo.png" alt="Hubert Heinze GmbH" className="h-14 w-auto" /></Link>
    <nav className="flex items-center gap-1">
      {nav.map((n) => (
        <Link key={n.href} href={n.href}
          className={`rounded-[3px] px-[14px] py-[10px] text-[14.5px] ${active === n.href ? "bg-blue/10 font-semibold text-blue" : "font-medium text-ink-3"}`}>
          {n.label}
        </Link>
      ))}
    </nav>
    <PrimaryButton>Angebot anfragen</PrimaryButton>
  </Container>
</header>
```
Logo: Navbar `h-14` (56px), Footer `logo-white.png` `h-[62px]`.

---

## 6. Hero-Glaskörper (H-Variante) — der Signature-Effekt

Das „H" als Maske; Licht wandert **innerhalb** der Form (`animate-sweep`).

```tsx
<section className="relative overflow-hidden border-b border-ice/20 bg-navy text-white">
  {/* Hintergrund */}
  <div className="absolute inset-0 bg-[linear-gradient(135deg,#062046_0%,#001031_55%,#00081f_100%)]" />
  <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.10)_0_1px,transparent_1px_78px),repeating-linear-gradient(0deg,rgba(159,195,233,.07)_0_1px,transparent_1px_78px)]" />

  {/* H-Glaskörper rechts */}
  <div className="pointer-events-none absolute right-[7%] top-1/2 h-[94%] -translate-y-1/2 aspect-[380/764]"
       style={{ ["--m" as any]: "url(/assets/mark-h-white.png) center/contain no-repeat" }}>
    <div className="absolute -inset-x-[14%] -inset-y-[8%] blur-[24px] bg-[radial-gradient(58%_56%_at_50%_42%,rgba(13,118,199,.42),transparent_72%)]" />
    <div className="absolute inset-0 [mask:var(--m)] [-webkit-mask:var(--m)] bg-[linear-gradient(152deg,rgba(64,150,224,.92),rgba(159,195,233,.55)_55%,rgba(13,118,199,.7))]" />
    <div className="absolute inset-0 overflow-hidden [mask:var(--m)] [-webkit-mask:var(--m)]">
      <div className="absolute -top-[12%] left-0 h-[124%] w-[46%] blur-[6px] animate-sweep bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.95),transparent)]" />
    </div>
    <img src="/assets/mark-h-white.png" alt="" className="absolute inset-0 h-full w-full object-contain opacity-30" />
  </div>

  {/* Inhalt */}
  <Container className="relative flex min-h-[600px] flex-col justify-center px-7 py-[118px] pb-[128px]">
    <MonoKicker tone="ice">Hubert Heinze GmbH · Glasfachgroßhandel</MonoKicker>
    <h1 className="mt-6 max-w-[14ch] font-display text-[74px] font-semibold leading-[1.02] tracking-[-.02em] text-balance">Glas am Bau &amp; in der Industrie.</h1>
    <p className="mt-[26px] max-w-[52ch] text-[19px] leading-[1.6] text-white/75">Beratung, Fachplanung und Veredelung aus einer Hand — Ihr Glasfachgroßhandel aus Frohburg.</p>
    {/* Buttons … */}
  </Container>
</section>
```

---

## 7. Stats-Zähl-Animation (Hooks)

```ts
// lib/useInView.ts
import { useEffect, useRef, useState } from "react";
export function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null); const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold });
    io.observe(ref.current); return () => io.disconnect();
  }, [seen, threshold]);
  return { ref, seen };
}
```

```ts
// lib/useCountUp.ts — easeOutCubic, 1400ms; Suffix bleibt erhalten
import { useEffect, useState } from "react";
export function useCountUp(target: number, run: boolean, ms = 1400) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return; let raf = 0; const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / ms);
      setV(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf);
  }, [target, run, ms]);
  return v;
}
```
Stats-Ziele: `{num:30,suffix:"+"}`, `{5,""}`, `{40,"+"}`, `{24," h"}`. Auf Navy-Band (`bg-navy`), Zahlen `font-display text-[54px] font-semibold tracking-[-.03em]`, Labels `font-mono text-[12.5px] tracking-[.05em] uppercase text-ice`.

---

## 8. „Drei e"-Hover

```tsx
<div className="group relative overflow-hidden rounded-[6px] border border-[rgba(0,16,49,.09)] bg-white p-[34px_30px_36px] shadow-[0_24px_50px_-36px_rgba(0,16,49,.5)] transition-[transform,box-shadow,border-color] duration-[280ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-2 hover:border-blue/55 hover:shadow-[0_34px_66px_-30px_rgba(13,118,199,.5)]">
  <div className="absolute -right-[10px] -top-[22px] font-display text-[120px] font-bold leading-none text-blue/[.07]">e</div>
  {/* e.0x · Titel · Text */}
</div>
```

---

## 9. CTA-Band — vollbreiter Licht-Sweep

```tsx
<div className="relative overflow-hidden rounded-[10px] bg-[linear-gradient(120deg,#0D76C7,#0a3a6b)] shadow-[0_40px_80px_-50px_rgba(13,118,199,.9)]">
  <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.07)_0_1px,transparent_1px_64px)]" />
  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-55">
    <div className="absolute left-0 top-0 h-full w-[30%] -skew-x-[16deg] animate-sweep-slow bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent)]" />
  </div>
  <div className="relative grid grid-cols-[1.25fr_1fr]"> {/* links Pitch (24-h-Texte!), rechts Frosted-Trust-Panel */} </div>
</div>
```
Badge-Punkt pulsiert: `animate-blink`.

---

## 10. Konfigurator (State)

```ts
type Form = {
  glasart: string; breite: string; hoehe: string; staerke: string;
  bearbeitung: string[]; menge: string; anwendung: string;
  name: string; firma: string; email: string; telefon: string; nachricht: string;
};
const [step, setStep] = useState<1|2|3>(1);
const [sent, setSent] = useState(false);
const [form, setForm] = useState<Form>({ glasart:"", breite:"", hoehe:"", staerke:"", bearbeitung:[], menge:"1", anwendung:"", name:"", firma:"", email:"", telefon:"", nachricht:"" });
```
- Progress: `style={{ width: `${step/3*100}%` }}`, `transition-[width] duration-[400ms]`.
- Schritt-Inhalt: Wrapper `animate-fade` bei Wechsel (`key={step}`).
- Optionen exakt wie README §9.4. „Weiter" in Schritt 1 disabled, solange `!form.glasart`.
- Aktiver Chip `bg-blue text-white`, sonst `bg-chip text-ink-3 border border-[rgba(0,16,49,.12)]`.
- **Absenden** an Backend anbinden (Route Handler `app/api/anfrage/route.ts` → E-Mail/CRM), Pflichtfeld- + E-Mail-Validierung ergänzen (z. B. `react-hook-form` + `zod`).

---

## 11. Aktions-Pop-up

```tsx
"use client";
export function AktionPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("hh_aufmass_promo") === "1") return;
    const t = setTimeout(() => setShow(true), 5000);   // 5 s nach Laden
    return () => clearTimeout(t);
  }, []);
  const close = () => { localStorage.setItem("hh_aufmass_promo", "1"); setShow(false); };
  if (!show) return null;
  return (
    <div className="fixed bottom-6 right-6 z-[200] w-[354px] animate-popin">
      {/* Frosted-Navy-Karte; Eintritt zusätzlich mit einmaligem animate-squeegee-Overlay */}
      {/* Inhalt: „Aktion · Kostenloses Aufmaß · … bis 31.07." + Termin anfragen → + ☎ + × */}
    </div>
  );
}
```
Nur auf der Startseite einbinden. **Kein** `transform`/`filter` auf Vorfahren (sonst verankert sich `fixed` daran).

---

## 12. Hinweise

- **Responsiveness:** Prototyp ist Desktop-first (1280px). Breakpoints ergänzen — Hero-H darf auf Mobile kleiner/zentriert werden, Grid-Spalten (`grid-cols-5`, `grid-cols-3`, `grid-cols-[340px_1fr]`) auf `md:`/`lg:` umstellen, Stats `grid-cols-2 md:grid-cols-4`.
- **Texte/Daten** zentral in `lib/content.ts` halten (alle Listen aus README §8 sind dort gut aufgehoben).
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` → Sweeps/Count-up deaktivieren bzw. Endwert direkt setzen.
- **Dokumente:** als eigene Print-Routen (`@media print` + `@page { size: A4; margin: 0 }`) oder PDF-Service (Puppeteer/react-pdf) mit denselben Tokens.
