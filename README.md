# Handoff: Hubert Heinze GmbH – Website-Redesign

Vollständiges Entwickler-Paket zur 1:1-Umsetzung des neuen Webauftritts der **Hubert Heinze GmbH – Glasfachgroßhandel** (Frohburg, Sachsen) in einem echten Codebase mit Claude Code.

---

## 1. Überblick

Moderner, „größer wirkender" Webauftritt für einen Glasfachgroßhandel. Eine **Single-Page-Website** mit fünf Ansichten (Start, Über uns, Leistungen, Referenzen, Kontakt) plus drei **druckbaren Dokumenten** (Vertrag, Visitenkarte, Angebotsformular) im identischen Corporate Design.

Leitidee: Glas als Material erlebbar machen — durch **wanderndes Licht**, **Frosted-Glass-Flächen** und das **3D-„H"** der Bildmarke als wiederkehrendes Stilelement. Technisch-kompetenter, zugleich premium-architektonischer Ton.

---

## 2. Über die Design-Dateien (bitte zuerst lesen)

Die Dateien unter `reference/` sind **Design-Referenzen, in HTML erstellt** — Prototypen, die Aussehen und Verhalten zeigen, **kein Produktionscode zum 1:1-Kopieren**.

**Aufgabe:** Diese Designs in der **bestehenden Umgebung des Zielprojekts** nachbauen (React, Vue, Svelte, Astro, plain HTML/CSS o. ä.) mit dessen etablierten Mustern. Existiert noch keine Umgebung, das passendste Framework wählen (Empfehlung für eine Firmen-Website dieser Art: **Next.js/React** oder **Astro** mit Tailwind oder CSS-Modulen) und die Designs dort implementieren.

Die Referenz-HTMLs sind in einem hauseigenen „Design Component"-Format geschrieben (`*.dc.html` + `support.js`). Sie laufen zwar im Browser, sind aber **nur als visuelle Referenz** gedacht. Maßgeblich sind: dieser README, die Screenshots in `screenshots/` und die Asset-Dateien in `assets/`.

> **Ziel-Stack: Next.js (App Router) + Tailwind v4 + React.** Dafür liegt ein konkreter Umsetzungs-Guide bei: **`NEXTJS_TAILWIND.md`** — mit CSS-first `@theme`-Tokens, `next/font`-Setup, Keyframes als Tailwind-Utilities und fertigen TSX-Komponenten (Hero-Glaskörper, Sticky-Navbar, Count-up-Hooks, Konfigurator-State, Pop-up). Dieser README liefert die Inhalte/Tokens/Verhalten, `NEXTJS_TAILWIND.md` die Stack-konkrete Implementierung.

---

## 3. Fidelity

**High-Fidelity (hifi).** Finale Farben, Typografie, Abstände, Interaktionen und Texte. Bitte pixelgenau mit den Bibliotheken/Patterns des Zielcodebases nachbauen. Alle Hex-Werte, Schriftgrößen und Verhaltensregeln sind unten dokumentiert.

---

## 4. Marke & Firmendaten

| Feld | Wert |
|---|---|
| Firma | Hubert Heinze GmbH |
| Zusatz | Glasfachgroßhandel |
| Claim | Glas am Bau & in der Industrie |
| Geschäftsführer | Tilo Zeibig |
| Anschrift | Ringstraße 10, 04654 Frohburg |
| Telefon | +49 34348 556 58 |
| E-Mail | t.zeibig@glashandel-heinze.de |
| Domain | glashandel-heinze.de |
| Öffnungszeiten | Mo–Do 7:00–16:30 Uhr · Fr 7:00–13:00 Uhr |

---

## 5. Design-Tokens

### 5.1 Farben (exakte Hex/RGBA)

| Token | Wert | Verwendung |
|---|---|---|
| `--navy` | `#001031` | Dunkelblau: Hero-/Footer-/Sektions-Hintergrund, Überschriften auf hell |
| `--navy-900` | `#00081f` / `#00060f` | tiefste Navy-Stufen (Verläufe, Footer) |
| `--navy-700` | `#062046` / `#07224a` | obere Verlaufsstufe Navy |
| `--navy-panel` | `#0a2a52` / `#0b1f3d` | Bild-Platzhalter, Prozess-Sektion |
| `--blue` | `#0D76C7` | **Primär-Hellblau**: Buttons, Akzente, Mono-Labels, Links |
| `--blue-hover` | `#1685db` | Button-Hover (auf dunkel) |
| `--blue-hover-2` | `#0961a8` | Button-Hover (auf hell) |
| `--blue-deep` | `#0a3a6b` | CTA-Verlauf-Endpunkt |
| `--blue-bright` | `rgb(64,150,224)` | helle Glas-Tönung im H-Hero |
| `--ice` | `#9FC3E9` = `rgb(159,195,233)` | Hellblau-Glas: Mono-Labels auf dunkel, Glasschatten, Glanzkanten |
| `--paper` | `#EEF3F8` | Seiten-Hintergrund (kühles Off-White) |
| `--surface` | `#FFFFFF` | Karten, Panels |
| `--surface-2` | `#f4f7fb` | eingelassene Boxen (Zusammenfassung, Impressum) |
| `--chip-bg` | `#f1f5fa` | inaktive Chips |
| `--ink` | `#0B1119` | Standard-Textfarbe |
| `--ink-2` | `#1c2935` | kräftiger Fließtext |
| `--ink-3` | `#33414f` | Fließtext sekundär |
| `--muted` | `#5a6b7d` | gedämpfter Text |
| `--label` | `#8593a1` | Feld-/Meta-Labels |
| Border hell | `rgba(0,16,49,0.09 / 0.12 / 0.14 / 0.16 / 0.18)` | Karten-/Input-Ränder |
| Border dunkel | `rgba(159,195,233,0.14 … 0.3)` | Ränder auf Navy |
| Selektion | bg `#0D76C7`, color `#fff` | `::selection` |

Farbphilosophie laut Briefing: **Dunkelblau, Hellblau, Schwarz** — exakt aus dem Original-Logo gezogen.

### 5.2 Typografie

Google Fonts (eine Zeile im `<head>`):
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

| Rolle | Font | Einsatz |
|---|---|---|
| Display / Headlines | **Space Grotesk** (600; 700 für XL-Wasserzeichen) | H1–H3, Statzahlen, Karten-Titel |
| Body | **IBM Plex Sans** (400/500/600/700) | Fließtext, Buttons, Nav |
| Mono / Specs | **IBM Plex Mono** (400/500) | Kicker-Labels, Feld-Labels, Specs, Adressblöcke |

**Type-Scale (px):**
- Hero H1: **74** / line-height **1.02** / letter-spacing **-0.02em** / max-width **14ch** / `text-wrap:balance`
- Subseiten-H1: **54–58** / lh 1.04
- Sektions-H2: **34–42** / letter-spacing -0.02em
- Karten-Titel: **19–28**
- Fließtext: **15–19** / lh 1.6–1.7
- Mono-Kicker: **10.5–12.5** / letter-spacing **0.14–0.2em** / `text-transform:uppercase`
- Statzahlen Home: **54** (Space Grotesk 600, ls -0.03em)
- Statzahlen CTA-Panel: **30**

### 5.3 Abstände & Layout
- Container: `max-width: 1280px; margin: 0 auto; padding: 0 28px`
- Sektions-Vertikal-Padding: **90–96px** (`64px` bei Bändern)
- Navbar-Höhe: **74px**
- Grid-Gaps: 14–18px (Karten), 34–64px (Spaltenlayouts)

### 5.4 Radien
- Buttons: **3px**
- Karten: **5–6px**
- Große Panels / CTA: **8–10px**
- Pills (Switcher, Badges): **100px**

### 5.5 Schatten
- Karte: `0 18px–24px 40px–50px -30px…-36px rgba(0,16,49,.5)`
- CTA-Band: `0 40px 80px -50px rgba(13,118,199,.9)`
- Button primär: `0 16px 40px -16px rgba(13,118,199,.9)`

---

## 6. Wiederkehrende Stilelemente (das „CI-System")

1. **3D-„H"-Bildmarke** (`assets/mark-h*.png`) — als großflächiges Wasserzeichen (Opacity 0.05–0.14) auf Navy-Bändern und als **Glaskörper im Hero** (Licht wandert hindurch).
2. **Mono-Spec-Label**: ein **8×8px blaues Quadrat** (`#0D76C7`) + Mono-Text (uppercase, letter-spacing 0.14–0.2em). Leitet jede Sektion ein.
   ```html
   <div style="display:flex;align-items:center;gap:10px;font:12px 'IBM Plex Mono';letter-spacing:.18em;color:#0D76C7;text-transform:uppercase">
     <span style="width:8px;height:8px;background:#0D76C7"></span>LABEL
   </div>
   ```
3. **Frosted Glass**: `backdrop-filter: blur(16–18px) saturate(1.3)` — Navbar, Badges, Pop-up, Hero-Panes.
4. **Fugen-/Rasterlinien** auf Navy: `repeating-linear-gradient(90deg, rgba(159,195,233,.1) 0 1px, transparent 1px 78–90px)` (oft beide Achsen) — wirkt wie Glassegmente.
5. **Diagonaler Licht-Sweep** (Keyframe `hhSweep`) über Glasflächen, Karten-Headern und im CTA-Band.
6. **Bild-Platzhalter** (statt echter Fotos): Navy-Verlauf + Rasterlinien + diagonaler Glanz + Mono-Caption `[ PLATZHALTER · … ]` in einer Frosted-Pille. Beim Einbau durch echte Projektfotos ersetzen.

---

## 7. Assets

Alle in `assets/` (transparente PNGs). Quelle: vom Kunden gelieferte Original-Logodatei; die Varianten wurden daraus abgeleitet.

| Datei | Inhalt | Einsatz |
|---|---|---|
| `logo.png` | Volles Lockup „Hubert Heinze GmbH / GLASFACHGROSSHANDEL" + 3D-H (1322×804) | Navbar (**Höhe 56px**), Dokumenten-Briefkopf |
| `logo-white.png` | dasselbe als Weiß-Knockout | Footer (**Höhe 62px**), dunkle Flächen |
| `mark-h.png` | isoliertes 3D-„H" in Blau (380×764, AR ≈ 0.497) | Wasserzeichen auf hell, Visitenkarten-Motiv |
| `mark-h-white.png` | „H" in Weiß | Hero-Glaskörper (als CSS-`mask`), Wasserzeichen auf Navy |

**Hero-Glaskörper-Technik (H-Variante):** das `mark-h-white.png` wird als `mask-image` über mehrere Layer gelegt (blaue Glas-Tönung, Fugenlinien, wandernder Licht-Streifen, plus das Bild selbst bei Opacity 0.32 als Kontur). So „leuchtet" das Licht nur innerhalb der H-Form. Siehe `reference/Glashandel Heinze Website.dc.html`, Block „Variant: H-Icon".

> Markenfarben/Logo sind Kundeneigentum. Falls im Zielprojekt bereits ein Markensystem existiert, dieses verwenden; ansonsten die hier gelieferten Dateien.

---

## 8. Ansichten / Screens

Globale Navigation (sticky, s. §9): **Start · Über uns · Leistungen · Referenzen · Kontakt** + Primär-Button „Angebot anfragen". Logo links (56px). Aktiver Link: zarter blauer Hintergrund `rgba(13,118,199,.1)` + Text `#0D76C7`, Gewicht 600.

### 8.1 Start (`screenshots/home-*`)

**A) Hero** (Navy, `min-height:600px`, padding 118px/128px). Zwei umschaltbare Konzepte (Default = **H-Icon**), Umschalt-Pille zentriert unten:
- **H-Icon** (`home-01`): großes 3D-„H" rechts als blauer Glaskörper, durch den ein Licht-Streifen wandert; Verlauf `135deg #062046→#001031→#00081f` + Rasterlinien.
- **Lichtwanderung** (`home-02`): zwei schräg gestellte (`skewX(-9deg)`) Glas-Scheiben rechts, durch die linke wandert der Licht-Streifen.
- Kicker (Mono, ice): `HUBERT HEINZE GMBH · GLASFACHGROSSHANDEL`
- H1 (je Variante): „**Glas am Bau & in der Industrie.**" (H) bzw. „**Wir bringen Licht in Ihre Architektur.**" (Licht)
- Sub: „Beratung, Fachplanung und Veredelung aus einer Hand — Ihr Glasfachgroßhandel aus Frohburg." (H) / „Vom Sicherheitsglas bis zur Ganzglasfassade — wir liefern, veredeln und planen Glas für Bau und Industrie." (Licht)
- Buttons: **Angebot anfragen →** (blau, → Konfigurator) · **Leistungen entdecken** (Ghost/Frosted)
- Spec-Ticker (Mono, ice, oben Trennlinie): `SCHNELL GELIEFERT · GEPRÜFTE QUALITÄT · PERSÖNLICH BERATEN` | `FROHBURG · SACHSEN`

**B) Intro-Band** (`home-03`): 2-Spalten. Kicker „Glas am Bau & in der Industrie". H2 „Das passende Glas für jedes Projekt — außen wie innen." + zwei Absätze (außen: Wärme-/Sonnenschutz, Normen ohne Designabstriche; innen: Dekorgläser, Glastüren/-duschen/-treppen).

**C) Leistungen-Preview** (`home-04`): Headline „Unser Leistungsspektrum" + Button „Alle Leistungen →". 5 Karten (Navy-Header mit Nr. + Glanz, Titel + Tagline): Basisglas, Designglas, Fassadenglas, Raumglas, Systemglas. Klick → Leistungen.

**D) Stats-Band** (`home-05`, Navy, **Zahlen zählen beim Scrollen hoch**, s. §9): `30+` Jahre Glaskompetenz · `5` Glasbereiche · `40+` Glasarten & Veredelungen · `24 h` Reaktion auf Anfragen. H-Wasserzeichen rechts (opacity .07).

**E) Die drei „e"** (`home-06`): Kicker `Die drei „e"`, H2 „Was uns von anderen unterscheidet". 3 weiße Karten mit XL-„e"-Wasserzeichen (`rgba(13,118,199,.07)`), Mono-Nr. `e.01/02/03`, Titel **Erfahrung / Effizienz / Entwicklung** + Text. **Hover-Effekt** (s. §9).

**F) Prozess** (`home-07`, Navy `#0b1f3d`): „So arbeiten wir" → „Von der Anfrage bis zur Montage — ein klarer Weg". 4 Spalten mit linker Trennlinie: 01 Anfrage & Beratung · 02 Fachplanung & Bemusterung · 03 Fertigung & Veredelung · 04 Lieferung & Montage.

**G) CTA-Band** (`home-08`, blauer Verlauf `120deg #0D76C7→#0a3a6b`, Radius 10px): Links Pitch, rechts Frosted-Trust-Panel.
- Badge (pulsierend): „Kostenlos & unverbindlich". H2 „**In 2 Minuten zum Glas-Angebot.**" Sub „Maße rein, Glasart wählen, abschicken — den Rest übernehmen wir. Persönliche Fachberatung statt Wartemusik."
- 4 Häkchen: Unverbindlich & kostenlos · Persönliche Fachberatung · **Antwort in 24 Stunden** · Alle Glasarten aus einer Hand
- Buttons: **Angebot anfordern →** (weiß) · **☎ +49 34348 556 58** (Ghost)
- Rechtes Panel „So einfach geht's": 1 Anfrage stellen · 2 Angebot erhalten · 3 Liefern lassen + Kennzahlen **24 h** / **30+**
- **Licht-Sweep** läuft über die **volle Breite** des Bandes (s. §9).
- **Footer** (Navy `#00081f`): Logo-White (62px) + Claim, Navigation, Glasbereiche, Kontakt + Button. Untenzeile: „© 2026 Hubert Heinze GmbH · Glasfachgroßhandel" / „Frohburg · Sachsen · Made with Klarheit".

### 8.2 Über uns (`screenshots/ueber-uns.png`)
Navy-Header „Glasfachgroßhandel mit Knowhow aus drei Jahrzehnten." + Intro. Story-Block (Bild-Platzhalter „Lager & Zuschnitt Frohburg" + 2 Absätze „Wir denken Glas vom Bauteil bis zum fertigen Raum."). Die-drei-e-Karten (mit Hover). **Geschäftsführer-Karte**: Monogramm „TZ", „Geschäftsführung / **Tilo Zeibig**", Zitat „Gutes Glas beginnt mit guter Beratung. …", Button „Kontakt aufnehmen →".

### 8.3 Leistungen (`screenshots/leistungen-*`)
Navy-Header „Das passende Glas für Ihr Projekt." Danach **5 detaillierte Bereiche** (je: Bild-Platzhalter 5∶4 mit Nr. + Label links, rechts Titel + Beschreibung + 2-spaltige Punktliste mit blauem 6px-Quadrat + Button „… anfragen →"):

| Nr | Bereich | Punkte |
|---|---|---|
| 01 | **Basisglas** | Floatglas · ESG Einscheibensicherheitsglas · VSG Verbundsicherheitsglas · Spiegel · Gussglas |
| 02 | **Designglas** | Bedrucktes · Emailliertes · Lackiertes · Satiniertes · Geschliffenes · Getöntes Glas |
| 03 | **Fassadenglas** | Sonnenschutz · Wärmedämmung · Schallschutz · Einbruchschutz · Fassadenelemente |
| 04 | **Raumglas** | Böden & Treppen · Trennwände · Wandverkleidung · Geländer & Brüstungen · Türen & Ganzglasanlagen · Decken · Möbel · Bäder & Duschen |
| 05 | **Systemglas** | Begehbares Glas · Geländersysteme · Ganzglastüren · Drehtüren · Trennwandsysteme · Profilbauglas · Duschsysteme |

Taglines: Basis „Das Fundament jeder Verglasung." · Design „Glas als Gestaltungselement." · Fassade „Schutz, Energie & Architektur." · Raum „Innenräume neu gedacht." · System „Komplette Glassysteme." (Längere Beschreibungstexte siehe `reference/`.)

### 8.4 Referenzen (`screenshots/referenzen-*`)
Navy-Header „Projekte, die für sich sprechen." 6 Beispiel-Karten (Bild-Platzhalter mit Kategorie-Pille, Kategorie-Mono-Label, Titel, Text):
Bürogebäude Leipzig (Fassade) · Ganzglas-Treppe Villa (System) · Walk-in-Dusche Privat (Bad/Raum) · Empfang Praxisklinik (Design) · Maschinenschutz Werk (Industrie/Basis) · Open Space Agentur (Trennwand/System).

### 8.5 Kontakt & Angebot (`screenshots/kontakt-*`, `konfigurator-*`)
Navy-Header „Ihr Projekt — in wenigen Schritten zum Angebot." 2-Spalten:
- **Kontakt-Schiene** (links): Telefon, E-Mail, Anschrift, Öffnungszeiten + Karten-Platzhalter „Frohburg, Sachsen".
- **Angebots-Konfigurator** (rechts, weiße Karte, Progress-Bar). Schritte s. §9.4.
- **Impressum-Block** unten (Angaben gem. § 5 TMG, GF Tilo Zeibig).

---

## 9. Interaktionen & Verhalten

### 9.1 Sticky Navbar
`position: sticky; top: 0; z-index: 60`. Frosted (`background: rgba(238,243,248,.72); backdrop-filter: blur(18px) saturate(1.3)`), untere Hairline `rgba(0,16,49,.09)`. **Wichtig:** Der Seiten-Wrapper darf **kein** `overflow` setzen (sonst bricht `sticky`). Heller Bar mit dunklem Text hat über hellen **und** dunklen Sektionen ausreichend Kontrast. Aktiver Link wie in §8.

### 9.2 Hero-Konzept-Umschalter
State `hero ∈ {'h','licht'}`, Default **`'h'`**. Pille unten zentriert: „Lichtwanderung" / „H-Icon". Aktiver Button: bg `#0D76C7`, weiß; inaktiv: transparent, ice, Border `rgba(159,195,233,.3)`. (In Produktion optional als reiner Default ohne sichtbaren Umschalter umsetzbar — der Umschalter diente der Designabstimmung.)

### 9.3 Stats-Zähl-Animation (Scroll-Trigger)
Beim ersten Sichtbarwerden des Stats-Bandes zählen alle Werte **von 0 auf den Zielwert**.
- Trigger: Scroll-Listener (oder IntersectionObserver), Bedingung `rect.top < innerHeight*0.85`. **Nur einmal** auslösen.
- Dauer **1400 ms**, Easing **easeOutCubic** `1-(1-t)^3`.
- Suffix bleibt erhalten: Ziel `30 → "30+"`, `5 → "5"`, `40 → "40+"`, `24 → "24 h"`.
- Hinweis: Im Prototyp wurde `setInterval(25ms)` statt `requestAnimationFrame` genutzt (rAF wird in Hintergrund-Tabs gedrosselt). Im Zielcode ist rAF im Vordergrund die sauberere Wahl.

### 9.4 Angebots-Konfigurator (3 Schritte)
State: `step ∈ {1,2,3}`, `form{ glasart, breite, hoehe, staerke, bearbeitung[], menge, anwendung, name, firma, email, telefon, nachricht }`, `sent`.
- **Progress-Bar**: `width = step/3*100%`, Transition `.4s`.
- **Schritt 1 – Glasart** (`konfigurator-1`): 5 Karten (Basis/Design/Fassade/Raum/System), **Einfachauswahl**. Ausgewählt: bg `#eaf3fc`, Border `2px solid #0D76C7`, gefüllter Radio-Punkt. „Weiter" ist **deaktiviert**, solange keine Glasart gewählt ist (`opacity .5; cursor:not-allowed`).
- **Schritt 2 – Maße & Ausführung** (`konfigurator-2`): Inputs **Breite/Höhe (mm)**; **Glasstärke**-Chips (Einfachauswahl): `4 / 6 / 8 / 10 / 12 mm`, `VSG 8.8`; **Bearbeitung/Veredelung**-Chips (**Mehrfachauswahl**): Polierte Kanten, Facettenschliff, Bohrungen, ESG-Härtung, Ausschnitte, Sandstrahl-Motiv; **Stückzahl**; **Anwendung/Einbauort**. Aktiver Chip: bg `#0D76C7`, weiß; inaktiv: bg `#f1f5fa`, Text `#33414f`.
- **Schritt 3 – Kontaktdaten** (`konfigurator-3`): Felder Name, Firma (optional), E-Mail, Telefon, Nachricht (optional) + **Zusammenfassung** (Glasart, Maße `B × H mm`, Stärke, Stück, Bearbeitung). Button „**Anfrage senden ✓**".
- **Erfolg** (Demo): Checkmark-Kreis, „Vielen Dank, {Name}!", Hinweis „(Demo — es wurde keine Nachricht versendet.)", Button „Neue Anfrage" (Reset). → Im echten Projekt an Backend/E-Mail/CRM anbinden; Pflichtfelder & E-Mail-Validierung ergänzen.
- Navigation: „← Zurück" (ab Schritt 2 sichtbar) / „Weiter →".

### 9.5 „Drei e"-Hover
Karten: `transition: transform .28s cubic-bezier(.2,.8,.2,1), box-shadow .28s, border-color .28s`. Hover: `transform: translateY(-8px); border-color: rgba(13,118,199,.55); box-shadow: 0 34px 66px -30px rgba(13,118,199,.5)`.

### 9.6 CTA-Licht-Sweep
Über die **volle Breite** des CTA-Bandes: Overlay `position:absolute; inset:0; overflow:hidden; opacity:.55`; innen ein `30%`-breiter, `skewX(-16deg)` Glanzstreifen mit `animation: hhSweep 8s ease-in-out infinite`.

### 9.7 Aktions-Pop-up (`screenshots/popup-aktion.png`)
- **Trigger: 5 Sekunden nach Laden** (`setTimeout 5000`). **Nur Startseite.**
- **Einmal pro Besucher**: bei Schließen/CTA `localStorage['hh_aufmass_promo']='1'` setzen; beim Laden prüfen und dann nicht mehr zeigen.
- Position: `fixed`, unten rechts (24px). Frosted-Navy-Karte (354px), Glas-H-Motiv, oben wandernde Licht-Kante.
- Eintritt: `hhPopIn` (Slide/Fade) **+ einmaliger „Glas-Wisch"** (`hhSqueegee`: eine Milchglas-Fläche fährt einmal nach rechts aus dem Bild und gibt die Karte frei).
- Inhalt: Badge „Aktion", „**Kostenloses Aufmaß**", „Sichern Sie sich Ihren Vor-Ort-Termin — unverbindlich und gratis. Nur noch **bis 31.07.**", Button „Termin anfragen →" (→ Konfigurator) + „☎ 034348 556 58", Schließen-„×".

> Implementierungs-Hinweis: `position:fixed` muss relativ zum Viewport sein — keinen `transform`/`filter` auf einem Vorfahren-Container setzen, sonst wird `fixed` daran verankert.

---

## 10. State-Management (Zusammenfassung)

| State | Typ | Zweck |
|---|---|---|
| `page` | `'home'\|'ueber'\|'leistungen'\|'referenzen'\|'kontakt'` | SPA-Navigation (bei echtem Routing → Routen/Pfade) |
| `hero` | `'h'\|'licht'` | Hero-Variante (Default `'h'`) |
| `step` | `1\|2\|3` | Konfigurator-Schritt |
| `form` | Objekt | Konfigurator-Eingaben (s. §9.4) |
| `sent` | bool | Konfigurator-Erfolgszustand |
| `promoVisible` | bool | Aktions-Pop-up sichtbar |
| `statT` | 0…1 | Fortschritt der Stats-Zählung |

Navigationswechsel scrollt nach oben (`window.scrollTo(0,0)`). Bei echtem Routing pro Ansicht eine eigene URL/Route verwenden.

---

## 11. Animationen / Keyframes

Aktiv genutzt:
```css
@keyframes hhSweep   {0%{transform:translateX(-130%) skewX(-14deg)}55%{transform:translateX(360%) skewX(-14deg)}100%{transform:translateX(360%) skewX(-14deg)}} /* Licht-Sweep */
@keyframes hhFade    {from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}        /* Konfigurator-Schrittwechsel */
@keyframes hhBlink   {0%,100%{opacity:.35}50%{opacity:1}}                                                    /* pulsierende Punkte/Badge */
@keyframes hhPopIn   {0%{opacity:0;transform:translateY(26px) scale(.97)}100%{opacity:1;transform:none}}     /* Pop-up-Eintritt */
@keyframes hhSqueegee{0%{transform:translateX(0)}100%{transform:translateX(102%)}}                           /* Glas-Wisch im Pop-up */
@keyframes hhFloat   {0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}                      /* optional, sanftes Schweben */
```
Standard-Easing für UI-Transitions: `cubic-bezier(.2,.8,.2,1)`.

---

## 12. Dateien in diesem Paket

```
design_handoff_glashandel_heinze/
├─ README.md                      ← dieses Dokument
├─ assets/                        ← Logo-/H-Marken (PNG, transparent)
│  ├─ logo.png  logo-white.png  mark-h.png  mark-h-white.png
├─ reference/                     ← HTML-Design-Referenzen (nur zur Ansicht)
│  ├─ Glashandel Heinze Website.dc.html   ← komplette Website
│  ├─ Vertrag.dc.html  Visitenkarte.dc.html  Angebotsformular.dc.html
│  ├─ support.js                  ← Runtime der Referenz-HTMLs
│  └─ assets/                     ← Kopie der Assets (relativer Pfad)
└─ screenshots/                   ← „Prompt-Bilder" je Ansicht/Zustand
   ├─ home-01-hero-h-icon.png         home-02-hero-lichtwanderung.png
   ├─ home-03-intro.png               home-04-leistungen-preview.png
   ├─ home-05-stats.png               home-06-drei-e.png
   ├─ home-07-prozess.png             home-08-cta.png
   ├─ ueber-uns.png
   ├─ leistungen-01-hero.png          leistungen-02-detail.png
   ├─ referenzen-01-hero.png          referenzen-02-grid.png
   ├─ kontakt-01-hero.png             kontakt-02-konfigurator.png
   ├─ konfigurator-1.png  konfigurator-2.png  konfigurator-3.png
   ├─ popup-aktion.png
   ├─ dok-vertrag-seite-1.png  dok-vertrag-seite-2.png
   ├─ dok-visitenkarte.png
   └─ dok-angebot-1.png  dok-angebot-2.png
```

### Referenz-HTML lokal ansehen
Die `reference/*.dc.html` mit relativem `assets/`-Ordner und `support.js` in einem lokalen Webserver öffnen (z. B. `npx serve reference`), **nicht** per `file://`. Sie dienen ausschließlich als visuelle Referenz.

---

## 13. Die drei Dokumente (Druck/PDF, gleiches CI)

Alle im A4-Briefpapier-System: Briefkopf mit Logo + Mono-Kontaktblock, blaue 3px-Trennlinie, H-Wasserzeichen, Mono-Footer mit blauem Quadrat. **Alle Inhalte sind Beispieltexte.**

- **Vertrag** (`dok-vertrag-*`): 2-seitiger „Liefer- und Montagevertrag", §§ 1–8, Vertragsparteien (Auftragnehmer Hubert Heinze GmbH / Auftraggeber „Mustermann Bau GmbH"), Unterschriftenfelder.
- **Visitenkarte** (`dok-visitenkarte`): 85×54 mm, **Vorder- & Rückseite**. Vorn: Logo, „**Tilo Zeibig** · Geschäftsführer", Kontakt, blaue Akzentkante links. Hinten: Navy mit Glas-H, Claim „Glas am Bau & in der Industrie", Glasbereiche.
- **Angebotsformular** (`dok-angebot-*`): A4, Empfänger/Projekt, Anschreiben, **Positions-Tabelle** (Navy-Kopf) mit 5 Beispielpositionen, Summen (Zwischensumme / 19 % USt / Gesamt), Konditionen + Hinweis.

Für die echte Umsetzung: als druckbares HTML/CSS-Template (`@page A4`) oder serverseitige PDF-Generierung (z. B. Puppeteer / react-pdf) mit denselben Tokens.

---

## 14. Umsetzungs-Checkliste

- [ ] Fonts einbinden (Space Grotesk, IBM Plex Sans, IBM Plex Mono)
- [ ] Tokens als CSS-Variablen/Theme anlegen (§5)
- [ ] Globale Layoutprimitive: Container 1280px, Sektions-Padding, Mono-Kicker-Komponente, Bild-Platzhalter-Komponente
- [ ] Sticky Navbar (kein `overflow` am Wrapper!) + aktiver Zustand
- [ ] Hero: H-Glaskörper via `mask` + `hhSweep`; Default-Variante „H"
- [ ] 5 Ansichten als Routen/Seiten mit exakten Texten (§8)
- [ ] Stats-Zähl-Animation (Scroll-Trigger, easeOutCubic, Suffixe)
- [ ] „Drei e"-Hover
- [ ] CTA-Band inkl. vollbreitem Licht-Sweep, 24-h-Texte
- [ ] Konfigurator (3 Schritte, Validierung, Backend-Anbindung)
- [ ] Aktions-Pop-up (5 s, once-per-visitor via localStorage, nur Start)
- [ ] Echte Fotos statt Platzhalter einsetzen
- [ ] Drei Dokumente als Druck-/PDF-Templates
- [ ] Responsives Verhalten ergänzen (Prototyp ist Desktop-first; Breakpoints für Tablet/Mobile definieren)
