import type { Metadata } from "next";
import {
  LegalPage,
  LegalH2,
  LegalH3,
  LegalP,
  LegalUl,
  LegalLi,
  LegalNote,
} from "@/components/site/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Hubert Heinze GmbH gemäß DSGVO — Informationen zur Verarbeitung personenbezogener Daten auf glashandel-heinze.de.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPage
      kicker="Rechtliches"
      title="Datenschutzerklärung"
      intro="Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie gemäß der Datenschutz-Grundverordnung (DSGVO) über Art, Umfang und Zweck der Verarbeitung."
    >
      <LegalH2>1. Verantwortlicher</LegalH2>
      <LegalP>
        Verantwortlicher im Sinne der DSGVO ist:
        <br />
        <br />
        <strong className="text-navy">Hubert Heinze GmbH</strong>
        <br />
        {site.geschaeftsfuehrer} (Geschäftsführer)
        <br />
        {site.strasse}, {site.plzOrt}
        <br />
        Telefon:{" "}
        <a href={site.telefonHref} className="text-blue underline underline-offset-2">
          {site.telefon}
        </a>
        <br />
        E-Mail:{" "}
        <a href={site.emailHref} className="text-blue underline underline-offset-2">
          {site.email}
        </a>
      </LegalP>

      <LegalH2>2. Allgemeines zur Datenverarbeitung</LegalH2>
      <LegalP>
        Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
        Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
        erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur nach Einwilligung des Nutzers oder
        wenn die Verarbeitung durch gesetzliche Vorschriften gestattet ist.
      </LegalP>
      <LegalP>
        Als Rechtsgrundlagen dienen insbesondere Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6
        Abs. 1 lit. b DSGVO (Vertrag bzw. vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit. c DSGVO
        (rechtliche Verpflichtung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
      </LegalP>

      <LegalH2>3. Hosting</LegalH2>
      <LegalP>
        Diese Website wird bei einem externen Dienstleister (Hoster) gehostet. Die personenbezogenen
        Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters
        gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
        Kommunikationsdaten sowie sonstige Daten handeln, die über eine Website generiert werden. Das
        Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
        bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
        und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO). Mit dem
        Hoster wurde ein Vertrag über die Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO
        geschlossen.
      </LegalP>
      <LegalNote>
        Bitte Namen und Anschrift des konkreten Hosting-Anbieters ergänzen und sicherstellen, dass
        ein Auftragsverarbeitungsvertrag (AVV) vorliegt.
      </LegalNote>

      <LegalH2>4. Server-Logfiles</LegalH2>
      <LegalP>
        Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
        Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies sind:
      </LegalP>
      <LegalUl>
        <LegalLi>Browsertyp und Browserversion</LegalLi>
        <LegalLi>verwendetes Betriebssystem</LegalLi>
        <LegalLi>Referrer-URL</LegalLi>
        <LegalLi>Hostname des zugreifenden Rechners</LegalLi>
        <LegalLi>Uhrzeit der Serveranfrage</LegalLi>
        <LegalLi>IP-Adresse</LegalLi>
      </LegalUl>
      <LegalP>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
        Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
        Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und
        der Optimierung seiner Website — hierzu müssen die Server-Logfiles erfasst werden.
      </LegalP>

      <LegalH2>5. Kontaktaufnahme &amp; Angebots-Konfigurator</LegalH2>
      <LegalP>
        Auf unserer Website bieten wir Ihnen verschiedene Möglichkeiten, mit uns in Kontakt zu treten
        und ein Angebot anzufordern — insbesondere über den <strong>Angebots-Konfigurator</strong>,
        per E-Mail und per Telefon. Wenn Sie uns über den Konfigurator oder per E-Mail eine Anfrage
        zukommen lassen, werden die von Ihnen gemachten Angaben zum Zweck der Bearbeitung der Anfrage
        und für den Fall von Anschlussfragen bei uns gespeichert.
      </LegalP>
      <LegalH3>Verarbeitete Daten</LegalH3>
      <LegalUl>
        <LegalLi>Kontaktdaten: Name, ggf. Firma, E-Mail-Adresse, Telefonnummer</LegalLi>
        <LegalLi>
          Projektangaben: gewählte Glasart, Maße, Glasstärke, gewünschte Bearbeitung/Veredelung,
          Stückzahl, Anwendung/Einbauort
        </LegalLi>
        <LegalLi>Ihre freiwillige Nachricht</LegalLi>
      </LegalUl>
      <LegalP>
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
        Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
        vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
        auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie im Konfigurator ausdrücklich
        erteilen, sowie auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
        gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Eine erteilte Einwilligung können Sie
        jederzeit mit Wirkung für die Zukunft widerrufen.
      </LegalP>
      <LegalH3>Speicherdauer</LegalH3>
      <LegalP>
        Die von Ihnen im Rahmen einer Anfrage übermittelten Daten verbleiben bei uns, bis Sie uns zur
        Löschung auffordern, Ihre Einwilligung widerrufen oder der Zweck für die Datenspeicherung
        entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
        Bestimmungen — insbesondere handels- und steuerrechtliche Aufbewahrungsfristen — bleiben
        unberührt.
      </LegalP>
      <LegalNote>
        Der Angebots-Konfigurator ist in der ausgelieferten Demo-Fassung noch nicht an einen
        E-Mail-/CRM-Versand angebunden (es werden keine Daten übertragen). Sobald eine
        serverseitige Verarbeitung (z. B. E-Mail-Versand, CRM) eingerichtet wird, ist dieser Abschnitt
        ggf. um den konkreten Empfänger/Dienstleister zu ergänzen.
      </LegalNote>

      <LegalH2>6. Cookies &amp; lokale Speicherung</LegalH2>
      <LegalP>
        Unsere Website verwendet <strong>keine Tracking-Cookies und keine Cookies zu Marketing-
        oder Analysezwecken</strong>. Wir setzen lediglich technisch notwendige Speichereinträge im
        lokalen Speicher (localStorage) Ihres Browsers ein, die für grundlegende Funktionen der
        Website erforderlich sind und keine Profilbildung ermöglichen:
      </LegalP>
      <LegalUl>
        <LegalLi>
          <strong>hh_cookie_consent</strong> — speichert Ihre Entscheidung im Datenschutz-Hinweis,
          damit dieser nicht bei jedem Besuch erneut erscheint.
        </LegalLi>
        <LegalLi>
          <strong>hh_aufmass_promo</strong> — merkt sich, dass Ihnen unser einmaliger Aktionshinweis
          bereits angezeigt wurde, damit er Sie nicht wiederholt stört.
        </LegalLi>
      </LegalUl>
      <LegalP>
        Diese Einträge werden ausschließlich lokal in Ihrem Browser gespeichert und nicht an uns oder
        Dritte übertragen. Rechtsgrundlage für den Einsatz dieser unbedingt erforderlichen Speicherung
        ist § 25 Abs. 2 TDDDG sowie unser berechtigtes Interesse an einer nutzerfreundlichen
        Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO). Sie können in den Einstellungen Ihres
        Browsers die lokale Speicherung jederzeit löschen oder einschränken.
      </LegalP>

      <LegalH2>7. Schriftarten (Google Fonts, lokal gehostet)</LegalH2>
      <LegalP>
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts (Space
        Grotesk, IBM Plex Sans, IBM Plex Mono). Die Schriftarten werden <strong>lokal von unserem
        eigenen Server</strong> ausgeliefert (Self-Hosting über die Next.js-Funktion „next/font“).
        Eine Verbindung zu Servern von Google wird dabei <strong>nicht</strong> aufgebaut; es werden
        keine personenbezogenen Daten (insbesondere keine IP-Adresse) an Google übertragen.
      </LegalP>

      <LegalH2>8. Verlinkung zu sozialen Netzwerken (Instagram)</LegalH2>
      <LegalP>
        Auf unserer Website verlinken wir auf unser Profil im sozialen Netzwerk Instagram. Es handelt
        sich dabei ausschließlich um einen <strong>einfachen Hyperlink</strong> — es werden keine
        Social-Media-Plugins oder eingebetteten Inhalte geladen. Erst wenn Sie aktiv auf den Link
        klicken, werden Sie zu Instagram weitergeleitet und es gelten die Datenschutzbestimmungen des
        Anbieters Meta Platforms Ireland Ltd. Auf die dortige Datenverarbeitung haben wir keinen
        Einfluss. Weitere Informationen finden Sie in der Datenschutzerklärung von Instagram:{" "}
        <a
          href="https://privacycenter.instagram.com/policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue underline underline-offset-2"
        >
          privacycenter.instagram.com/policy
        </a>
        .
      </LegalP>

      <LegalH2>9. SSL- bzw. TLS-Verschlüsselung</LegalH2>
      <LegalP>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
        eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass
        die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und am Schloss-Symbol in
        Ihrer Browserzeile.
      </LegalP>

      <LegalH2>10. Ihre Rechte als betroffene Person</LegalH2>
      <LegalP>Ihnen stehen hinsichtlich Ihrer personenbezogenen Daten folgende Rechte zu:</LegalP>
      <LegalUl>
        <LegalLi>Recht auf Auskunft (Art. 15 DSGVO)</LegalLi>
        <LegalLi>Recht auf Berichtigung (Art. 16 DSGVO)</LegalLi>
        <LegalLi>Recht auf Löschung (Art. 17 DSGVO)</LegalLi>
        <LegalLi>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</LegalLi>
        <LegalLi>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</LegalLi>
        <LegalLi>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</LegalLi>
        <LegalLi>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</LegalLi>
      </LegalUl>
      <LegalP>
        Zur Ausübung dieser Rechte genügt eine formlose Mitteilung an die oben genannten
        Kontaktdaten.
      </LegalP>

      <LegalH2>11. Beschwerderecht bei der Aufsichtsbehörde</LegalH2>
      <LegalP>
        Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei einer
        Aufsichtsbehörde zu. Zuständig ist der/die Sächsische Datenschutzbeauftragte. Eine Liste der
        Aufsichtsbehörden sowie deren Kontaktdaten finden Sie unter:{" "}
        <a
          href="https://www.bfdi.bund.de/DE/Service/Anschriften/anschriften_node.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue underline underline-offset-2"
        >
          bfdi.bund.de
        </a>
        .
      </LegalP>

      <LegalH2>12. Aktualität und Änderung dieser Datenschutzerklärung</LegalH2>
      <LegalP>
        Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website
        und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es
        notwendig werden, diese Datenschutzerklärung anzupassen.
      </LegalP>
    </LegalPage>
  );
}
