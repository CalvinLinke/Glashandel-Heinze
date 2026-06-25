// Alle Texte/Daten der Website (README §8, support.js renderVals)

export type Leistung = {
  key: string;
  no: string;
  label: string;
  name: string;
  tagline: string;
  desc: string;
  items: string[];
};

export const leistungen: Leistung[] = [
  {
    key: "basis",
    no: "01",
    label: "BASIS",
    name: "Basisglas",
    tagline: "Das Fundament jeder Verglasung.",
    desc: "Float-, Sicherheits- und Funktionsgläser als Grundlage für nahezu jede Weiterverarbeitung — geprüft, normgerecht und in vielen Formaten lieferbar.",
    items: [
      "Floatglas",
      "ESG · Einscheibensicherheitsglas",
      "VSG · Verbundsicherheitsglas",
      "Spiegel",
      "Gussglas",
    ],
  },
  {
    key: "design",
    no: "02",
    label: "DESIGN",
    name: "Designglas",
    tagline: "Glas als Gestaltungselement.",
    desc: "Dekorative Veredelungen in nahezu unendlicher Vielfalt an Mustern und Farben — für Wandverkleidungen, Möbel und exklusive Innenarchitektur.",
    items: [
      "Bedrucktes Glas",
      "Emailliertes Glas",
      "Lackiertes Glas",
      "Satiniertes Glas",
      "Geschliffenes Glas",
      "Getöntes Glas",
    ],
  },
  {
    key: "fassade",
    no: "03",
    label: "FASSADE",
    name: "Fassadenglas",
    tagline: "Schutz, Energie & Architektur.",
    desc: "Kombinierte Wärme- und Sonnenschutzgläser, die alle Normen ohne Abstriche beim Design erfüllen — bis hin zu kompletten Fassadenelementen.",
    items: [
      "Sonnenschutz",
      "Wärmedämmung",
      "Schallschutz",
      "Einbruchschutz",
      "Fassadenelemente",
    ],
  },
  {
    key: "raum",
    no: "04",
    label: "RAUM",
    name: "Raumglas",
    tagline: "Innenräume neu gedacht.",
    desc: "Glas, das Räumen ein individuelles Erscheinungsbild gibt — von begehbaren Böden über Trennwände bis zu Bädern und Duschen.",
    items: [
      "Böden & Treppen",
      "Trennwände",
      "Wandverkleidung",
      "Geländer & Brüstungen",
      "Türen & Ganzglasanlagen",
      "Decken",
      "Möbel",
      "Bäder & Duschen",
    ],
  },
  {
    key: "system",
    no: "05",
    label: "SYSTEM",
    name: "Systemglas",
    tagline: "Komplette Glassysteme.",
    desc: "Durchdachte Systemlösungen für Türen, Geländer, Trennwände und Duschen — abgestimmte Komponenten aus einer Hand.",
    items: [
      "Begehbares Glas",
      "Geländersysteme",
      "Ganzglastüren",
      "Drehtüren",
      "Trennwandsysteme",
      "Profilbauglas",
      "Duschsysteme",
    ],
  },
];

export const dreiE = [
  {
    e: "Erfahrung",
    no: "e.01",
    big: "e",
    text: "Knowhow aus drei Jahrzehnten Glasfachgroßhandel — Wissen, das in jedem Projekt steckt.",
  },
  {
    e: "Effizienz",
    no: "e.02",
    big: "e",
    text: "Wir finden auf dem schnellsten Weg zu dem für Sie passenden Produkt — ohne Umwege.",
  },
  {
    e: "Entwicklung",
    no: "e.03",
    big: "e",
    text: "Wir analysieren ständig unsere Abläufe und strukturieren Veränderungen gezielt.",
  },
];

export const statDefs = [
  { num: 30, suffix: "+", label: "Jahre Glaskompetenz" },
  { num: 5, suffix: "", label: "Glasbereiche" },
  { num: 40, suffix: "+", label: "Glasarten & Veredelungen" },
  { num: 24, suffix: " h", label: "Reaktion auf Anfragen" },
];

export const prozess = [
  {
    no: "01",
    t: "Anfrage & Beratung",
    d: "Sie schildern Ihr Vorhaben — wir beraten zu Glasart, Norm und Machbarkeit.",
  },
  {
    no: "02",
    t: "Fachplanung & Bemusterung",
    d: "Wir planen Aufbau und Veredelung und stellen auf Wunsch Muster bereit.",
  },
  {
    no: "03",
    t: "Fertigung & Veredelung",
    d: "Zuschnitt, Härtung, Beschichtung und Bearbeitung nach Ihren Maßen.",
  },
  {
    no: "04",
    t: "Lieferung & Montage",
    d: "Termingerechte Lieferung — auf Wunsch inklusive Montagepartner.",
  },
];

export const referenzen = [
  {
    cat: "Fassade",
    tag: "FASSADENGLAS",
    t: "Bürogebäude, Leipzig",
    d: "Pfosten-Riegel-Fassade mit Sonnenschutz-Isolierglas und Schallschutz.",
  },
  {
    cat: "Raum",
    tag: "SYSTEMGLAS",
    t: "Ganzglas-Treppe, Villa",
    d: "Begehbares VSG mit satinierten Stufen und gläsernem Geländer.",
  },
  {
    cat: "Bad",
    tag: "RAUMGLAS",
    t: "Walk-in-Dusche, Privat",
    d: "Rahmenlose Duschtrennwand aus 10 mm ESG mit Klarlack-Veredelung.",
  },
  {
    cat: "Design",
    tag: "DESIGNGLAS",
    t: "Empfang, Praxisklinik",
    d: "Bedruckte Glaswand als Markenträger im Eingangsbereich.",
  },
  {
    cat: "Industrie",
    tag: "BASISGLAS",
    t: "Maschinenschutz, Werk",
    d: "Verbundsicherheitsglas für Sicht- und Schutzverglasungen in der Produktion.",
  },
  {
    cat: "Trennwand",
    tag: "SYSTEMGLAS",
    t: "Open Space, Agentur",
    d: "Ganzglas-Trennwandsystem mit integrierten Drehtüren.",
  },
];

export const ctaBenefits = [
  "Unverbindlich & kostenlos",
  "Persönliche Fachberatung",
  "Antwort in 24 Stunden",
  "Alle Glasarten aus einer Hand",
];

export const ctaSteps = [
  { no: "1", t: "Anfrage stellen", d: "Glasart, Maße & Bearbeitung im Konfigurator angeben." },
  { no: "2", t: "Angebot erhalten", d: "Individuelles Festpreis-Angebot — geprüft von Tilo Zeibig." },
  { no: "3", t: "Liefern lassen", d: "Fertigung, Veredelung und Lieferung termingerecht." },
];

// Konfigurator-Optionen
export const staerkeOptions = ["4 mm", "6 mm", "8 mm", "10 mm", "12 mm", "VSG 8.8"];
export const bearbeitungOptions = [
  "Polierte Kanten",
  "Facettenschliff",
  "Bohrungen",
  "ESG-Härtung",
  "Ausschnitte",
  "Sandstrahl-Motiv",
];
