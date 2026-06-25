import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/site/PageHero";
import { leistungen } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leistungen — Basisglas, Designglas, Fassadenglas, Raumglas & Systemglas",
  description:
    "Von der einzelnen Scheibe bis zum kompletten Glassystem — fünf Glasbereiche mit eigenem Lieferprogramm und Veredelungsoptionen. Floatglas, ESG, VSG, Sonnenschutz, Ganzglasanlagen und mehr.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <main>
      <PageHero
        kicker="Leistungen · Fünf Glasbereiche"
        title="Das passende Glas für Ihr Projekt."
        intro="Von der einzelnen Scheibe bis zum kompletten Glassystem — gegliedert in fünf Bereiche, jeder mit eigenem Lieferprogramm und Veredelungsoptionen."
      />

      <section className="pb-[90px] pt-[30px]">
        <Container>
          {leistungen.map((l) => (
            <div
              key={l.key}
              className="grid grid-cols-1 gap-10 border-b border-[rgba(0,16,49,.1)] py-[54px] lg:grid-cols-[340px_1fr] lg:gap-12"
            >
              <div>
                <div className="relative aspect-[5/4] overflow-hidden rounded-[6px] bg-[linear-gradient(140deg,#0a2a52,#001031)]">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.13)_0_1px,transparent_1px_40px),repeating-linear-gradient(0deg,rgba(159,195,233,.09)_0_1px,transparent_1px_40px)]" />
                  <div className="absolute -left-[30%] top-0 h-full w-[42%] -skew-x-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)]" />
                  <span className="absolute left-4 top-[14px] font-display text-[34px] font-bold text-[rgba(159,195,233,.5)]">
                    {l.no}
                  </span>
                  <span className="absolute bottom-[14px] left-4 border border-white/[.22] bg-white/10 px-[9px] py-[5px] font-mono text-[10.5px] tracking-[.16em] text-white/80 backdrop-blur-[6px]">
                    {l.label}
                  </span>
                </div>
              </div>
              <div>
                <h2 className="font-display text-[28px] font-semibold tracking-[-.02em] text-navy sm:text-[32px]">
                  {l.name}
                </h2>
                <p className="mt-[10px] max-w-[60ch] text-[16.5px] leading-[1.6] text-muted">
                  {l.desc}
                </p>
                <div className="mt-6 grid grid-cols-1 gap-x-[26px] gap-y-2 sm:grid-cols-2">
                  {l.items.map((it) => (
                    <div
                      key={it}
                      className="flex items-center gap-[11px] border-t border-[rgba(0,16,49,.08)] py-[10px] text-[15.5px] text-ink-2"
                    >
                      <span className="inline-block h-[6px] w-[6px] flex-none bg-blue" />
                      {it}
                    </div>
                  ))}
                </div>
                <Link
                  href="/kontakt"
                  className="mt-6 inline-flex rounded-[3px] border border-[rgba(0,16,49,.18)] px-[18px] py-[11px] text-[14.5px] font-medium text-navy transition-colors hover:border-blue hover:text-blue"
                >
                  {l.name} anfragen →
                </Link>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}
