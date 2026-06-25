import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/site/PageHero";
import { Konfigurator } from "@/components/konfigurator/Konfigurator";
import { InstagramIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Angebot — in wenigen Schritten zum Glas-Angebot",
  description:
    "Ihr Projekt — in wenigen Schritten zum Angebot. Kontaktieren Sie die Hubert Heinze GmbH in Frohburg per Telefon, E-Mail oder direkt über den Angebots-Konfigurator.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <main>
      <PageHero
        kicker="Kontakt & Angebot"
        className="py-[84px] pb-[66px]"
        title="Ihr Projekt — in wenigen Schritten zum Angebot."
      />

      <section className="pb-10 pt-16">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[340px_1fr]">
            {/* contact rail */}
            <div>
              <div className="rounded-[8px] border border-[rgba(0,16,49,.09)] bg-white p-[30px] shadow-[0_24px_50px_-40px_rgba(0,16,49,.5)]">
                <div className="font-mono text-[12px] uppercase tracking-[.14em] text-blue">
                  Direkter Draht
                </div>
                <div className="mt-5 flex flex-col gap-[18px]">
                  <div>
                    <div className="font-mono text-[12px] tracking-[.06em] text-label">TELEFON</div>
                    <a
                      href={site.telefonHref}
                      className="font-display text-[18px] font-semibold text-navy no-underline"
                    >
                      {site.telefon}
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-[12px] tracking-[.06em] text-label">E-MAIL</div>
                    <a
                      href={site.emailHref}
                      className="break-all text-[16px] font-medium text-blue no-underline"
                    >
                      {site.email}
                    </a>
                  </div>
                  <div>
                    <div className="font-mono text-[12px] tracking-[.06em] text-label">ANSCHRIFT</div>
                    <div className="text-[16px] leading-[1.5] text-ink-2">
                      {site.name}
                      <br />
                      {site.strasse}
                      <br />
                      {site.plzOrt}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[12px] tracking-[.06em] text-label">
                      ÖFFNUNGSZEITEN
                    </div>
                    <div className="text-[15px] leading-[1.5] text-ink-2">
                      {site.oeffnungszeiten[0]}
                      <br />
                      {site.oeffnungszeiten[1]}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[12px] tracking-[.06em] text-label">
                      SOCIAL MEDIA
                    </div>
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-[10px] text-[16px] font-medium text-blue no-underline transition-colors hover:text-blue-hover2"
                    >
                      <InstagramIcon className="h-5 w-5" />
                      Instagram · {site.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Karten-Platzhalter */}
              <div className="relative mt-[18px] h-[170px] overflow-hidden rounded-[8px] bg-[linear-gradient(140deg,#0a2a52,#001031)]">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.13)_0_1px,transparent_1px_34px),repeating-linear-gradient(0deg,rgba(159,195,233,.1)_0_1px,transparent_1px_34px)]" />
                <span className="absolute bottom-3 left-3 border border-white/20 bg-white/[.12] px-[9px] py-[5px] font-mono text-[10.5px] tracking-[.1em] text-white/85 backdrop-blur-[6px]">
                  [ KARTE · FROHBURG, SACHSEN ]
                </span>
              </div>
            </div>

            {/* configurator */}
            <Konfigurator />
          </div>
        </Container>
      </section>

      {/* Impressum compact */}
      <section className="pb-[86px] pt-[30px]">
        <Container>
          <div className="rounded-[8px] border border-[rgba(0,16,49,.09)] bg-white p-[30px_34px]">
            <div className="font-mono text-[12px] uppercase tracking-[.14em] text-blue">
              Impressum · Angaben gemäß § 5 DDG
            </div>
            <div className="mt-[18px] grid grid-cols-1 gap-6 text-[14.5px] leading-[1.6] text-ink-3 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <b className="text-navy">Hubert Heinze GmbH</b>
                <br />
                Glasfachgroßhandel
                <br />
                {site.strasse}
                <br />
                {site.plzOrt}
              </div>
              <div>
                <b className="text-navy">Geschäftsführer</b>
                <br />
                {site.geschaeftsfuehrer}
                <br />
                Tel. {site.telefon}
                <br />
                {site.email}
              </div>
              <div>
                <b className="text-navy">Mehr Informationen</b>
                <br />
                Vollständiges{" "}
                <a href="/impressum" className="text-blue underline underline-offset-2">
                  Impressum
                </a>
                <br />
                und{" "}
                <a href="/datenschutz" className="text-blue underline underline-offset-2">
                  Datenschutz
                </a>
                .
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
