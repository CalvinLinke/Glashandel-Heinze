import type { Metadata } from "next";
import {
  LegalPage,
  LegalH2,
  LegalH3,
  LegalP,
  LegalNote,
} from "@/components/site/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Hubert Heinze GmbH — Glasfachgroßhandel, Frohburg (Sachsen).",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage kicker="Rechtliches" title="Impressum">
      <LegalH2>Angaben gemäß § 5 DDG</LegalH2>
      <LegalP>
        <strong className="text-navy">Hubert Heinze GmbH</strong>
        <br />
        Glasfachgroßhandel
        <br />
        {site.strasse}
        <br />
        {site.plzOrt}
        <br />
        Deutschland
      </LegalP>

      <LegalH3>Vertreten durch</LegalH3>
      <LegalP>Geschäftsführer: {site.geschaeftsfuehrer}</LegalP>

      <LegalH3>Kontakt</LegalH3>
      <LegalP>
        Telefon:{" "}
        <a href={site.telefonHref} className="text-blue underline underline-offset-2">
          {site.telefon}
        </a>
        <br />
        E-Mail:{" "}
        <a href={site.emailHref} className="text-blue underline underline-offset-2">
          {site.email}
        </a>
        <br />
        Website:{" "}
        <a href={site.url} className="text-blue underline underline-offset-2">
          {site.domain}
        </a>
      </LegalP>

      <LegalH3>Registereintrag</LegalH3>
      <LegalP>
        Eintragung im Handelsregister.
        <br />
        Registergericht: Amtsgericht Leipzig
        <br />
        Registernummer: HRB [bitte ergänzen]
      </LegalP>

      <LegalH3>Umsatzsteuer-Identifikationsnummer</LegalH3>
      <LegalP>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        DE [bitte ergänzen]
      </LegalP>

      <LegalNote>
        Bitte die mit „[bitte ergänzen]“ markierten Angaben (Registernummer HRB, ggf. zuständiges
        Registergericht und USt-IdNr.) vor dem Live-Gang durch die tatsächlichen Werte der Hubert
        Heinze GmbH ersetzen. Diese Pflichtangaben gemäß § 5 DDG müssen für eine vollständige
        Rechtssicherheit korrekt hinterlegt sein.
      </LegalNote>

      <LegalH2>Redaktionell verantwortlich</LegalH2>
      <LegalP>
        Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
        <br />
        {site.geschaeftsfuehrer}, {site.strasse}, {site.plzOrt}
      </LegalP>

      <LegalH2>EU-Streitschlichtung</LegalH2>
      <LegalP>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue underline underline-offset-2"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </LegalP>

      <LegalH2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</LegalH2>
      <LegalP>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </LegalP>

      <LegalH2>Haftung für Inhalte</LegalH2>
      <LegalP>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach
        den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
        jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
        oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
        allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
        ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </LegalP>

      <LegalH2>Haftung für Links</LegalH2>
      <LegalP>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
        Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
        erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
        konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </LegalP>

      <LegalH2>Urheberrecht</LegalH2>
      <LegalP>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
        privaten, nicht kommerziellen Gebrauch gestattet. Die Marke, das Logo sowie die Bildmarke
        „H“ sind Eigentum der Hubert Heinze GmbH.
      </LegalP>
    </LegalPage>
  );
}
