import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MonoKicker } from "@/components/ui/MonoKicker";
import { ImagePlaceholder } from "@/components/ui/Placeholder";
import { PageHero } from "@/components/site/PageHero";
import { DreiECards } from "@/components/home/DreiE";

export const metadata: Metadata = {
  title: "Über uns — Glasfachgroßhandel mit Knowhow aus drei Jahrzehnten",
  description:
    "Die Hubert Heinze GmbH ist Partner für Architekten, Bauunternehmen, Glasverarbeiter und Industrie. Von Frohburg liefern wir Glas in nahezu jeder Ausführung — beraten, geplant und veredelt.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <main>
      <PageHero
        kicker="Über uns"
        watermark
        className="py-24 pb-[86px]"
        title="Glasfachgroßhandel mit Knowhow aus drei Jahrzehnten."
        intro="Die Hubert Heinze GmbH ist Partner für Architekten, Bauunternehmen, Glasverarbeiter und Industrie. Von unserem Standort in Frohburg liefern wir Glas in nahezu jeder Ausführung — beraten, geplant und veredelt."
      />

      {/* Story */}
      <section className="py-[90px]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[60px]">
            <ImagePlaceholder
              caption="[ PLATZHALTER · LAGER & ZUSCHNITT FROHBURG ]"
              className="aspect-[4/3] rounded-[6px]"
            />
            <div>
              <MonoKicker>Unser Anspruch</MonoKicker>
              <h2 className="mt-[14px] font-display text-[28px] font-semibold leading-[1.12] tracking-[-.02em] text-navy sm:text-[34px]">
                Wir denken Glas vom Bauteil bis zum fertigen Raum.
              </h2>
              <p className="mt-5 text-[17px] leading-[1.7] text-ink-3">
                Ob Basisglas für die Weiterverarbeitung, beschichtetes Fassadenglas oder komplette
                Ganzglasanlagen — wir kombinieren ein breites Lieferprogramm mit fundierter
                Fachberatung. So finden wir auf dem schnellsten Weg die passende Lösung für Ihr
                Bauvorhaben.
              </p>
              <p className="mt-4 text-[17px] leading-[1.7] text-ink-3">
                Dabei analysieren wir unsere Abläufe ständig und strukturieren Veränderungen gezielt
                — damit Qualität und Liefertreue auch bei wachsenden Anforderungen stimmen.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Drei e */}
      <section className="px-0 pb-[30px] pt-[10px]">
        <Container>
          <DreiECards compact />
        </Container>
      </section>

      {/* Geschäftsführer-Karte */}
      <section className="pb-24 pt-[60px]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-8 rounded-[8px] border border-[rgba(0,16,49,.09)] bg-white p-[42px_44px] shadow-[0_24px_50px_-38px_rgba(0,16,49,.5)] md:grid-cols-[auto_1fr_auto] md:gap-10">
            <div className="flex h-[118px] w-[118px] items-center justify-center overflow-hidden rounded-[6px] bg-[linear-gradient(140deg,#0a2a52,#001031)]">
              <span className="font-display text-[40px] font-bold text-ice">TZ</span>
            </div>
            <div>
              <div className="font-mono text-[12px] uppercase tracking-[.14em] text-blue">
                Geschäftsführung
              </div>
              <div className="mt-2 font-display text-[28px] font-semibold text-navy">
                Tilo Zeibig
              </div>
              <p className="mt-[10px] max-w-[60ch] text-[15.5px] leading-[1.6] text-muted">
                „Gutes Glas beginnt mit guter Beratung. Wir nehmen uns Zeit für Ihr Projekt und
                liefern eine Lösung, die technisch wie gestalterisch überzeugt.“
              </p>
            </div>
            <Link
              href="/kontakt"
              className="whitespace-nowrap rounded-[3px] bg-blue px-[22px] py-[14px] text-[15px] font-semibold text-white transition-colors hover:bg-blue-hover2"
            >
              Kontakt aufnehmen →
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
