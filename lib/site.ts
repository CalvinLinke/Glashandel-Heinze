// Zentrale Firmen- & Site-Daten (README §4)
export const site = {
  name: "Hubert Heinze GmbH",
  legalName: "Hubert Heinze GmbH",
  zusatz: "Glasfachgroßhandel",
  claim: "Glas am Bau & in der Industrie",
  geschaeftsfuehrer: "Tilo Zeibig",
  strasse: "Ringstraße 10",
  plzOrt: "04654 Frohburg",
  ort: "Frohburg",
  region: "Sachsen",
  telefon: "+49 34348 556 58",
  telefonHref: "tel:+493434855658",
  telefonKurz: "034348 556 58",
  email: "t.zeibig@glashandel-heinze.de",
  emailHref: "mailto:t.zeibig@glashandel-heinze.de",
  domain: "glashandel-heinze.de",
  url: "https://www.glashandel-heinze.de",
  instagram: "https://www.instagram.com/glashandel_heinze?igsh=cTZ2czl5bDk2cHRy",
  instagramHandle: "@glashandel_heinze",
  oeffnungszeiten: ["Mo–Do 7:00–16:30 Uhr", "Fr 7:00–13:00 Uhr"],
} as const;

export const nav = [
  { href: "/", label: "Start" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
