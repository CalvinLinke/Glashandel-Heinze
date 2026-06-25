# Glashandel Heinze — Website (Next.js + Tailwind v4)

Umsetzung des Webauftritts der Hubert Heinze GmbH gemäß `README.md` (Handoff) und
`NEXTJS_TAILWIND.md` (Stack-Guide).

## Befehle

```bash
npm install        # Abhängigkeiten installieren
npm run icons      # Favicon, App-Icons & OG-Banner aus der H-Marke erzeugen (nach Asset-Änderung)
npm run dev        # Entwicklungsserver → http://localhost:3000
npm run build      # Produktions-Build
npm run start      # Produktionsserver
```

## Struktur

```
app/
  layout.tsx            globale Metadaten (SEO/OG), Fonts, Navbar/Footer, Cookie-Banner, JSON-LD
  page.tsx              Start (Hero, Intro, Leistungen-Preview, Stats, Drei e, Prozess, CTA, Pop-up)
  ueber-uns/            Über uns
  leistungen/           Leistungen (5 Glasbereiche)
  referenzen/           Referenzen
  kontakt/              Kontakt + Angebots-Konfigurator + Impressum-Block
  impressum/            Impressum (§ 5 DDG)
  datenschutz/          Datenschutzerklärung (DSGVO)
  sitemap.ts robots.ts manifest.ts   SEO-/PWA-Infrastruktur
components/             site/ ui/ home/ konfigurator/ promo/
lib/                    site.ts (Firmendaten), content.ts (Texte), Hooks
public/                 assets/ (Logos/H-Marke), favicon.ico, icon*.png, apple-icon.png, og-image.png
scripts/generate-icons.mjs   Icon-/OG-Generator (sharp)
```

## Noch zu erledigen vor Live-Gang

- **Impressum:** Handelsregister-Nummer (HRB), zuständiges Registergericht und USt-IdNr. eintragen
  (im Code mit „[bitte ergänzen]“ markiert).
- **Datenschutz:** Hosting-Anbieter benennen + AVV-Vertrag sicherstellen.
- **Konfigurator:** Formular an Backend (E-Mail/CRM) anbinden — aktuell Demo ohne Versand
  (`components/konfigurator/Konfigurator.tsx`). Danach Datenschutz-Abschnitt 5 ggf. ergänzen.
- **Domain:** `lib/site.ts → url` ist auf `https://www.glashandel-heinze.de` gesetzt (für OG/Canonical/Sitemap).
- **Echte Fotos** statt der Platzhalter (`ImagePlaceholder`) einsetzen.
