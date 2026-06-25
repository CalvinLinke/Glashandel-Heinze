import { Container } from "@/components/ui/Container";
import { MonoKicker } from "@/components/ui/MonoKicker";

export function IntroBand() {
  return (
    <section className="pb-10 pt-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div>
            <MonoKicker>Glas am Bau &amp; in der Industrie</MonoKicker>
            <h2 className="mt-[18px] font-display text-[30px] font-semibold leading-[1.08] tracking-[-.02em] text-navy sm:text-[40px]">
              Das passende Glas für jedes Projekt — außen wie innen.
            </h2>
          </div>
          <div className="pt-[6px]">
            <p className="text-[18px] leading-[1.7] text-ink-3">
              Wir liefern für jedes Bauvorhaben die richtige Lösung. Je nach Standort des Gebäudes
              kombinieren wir Wärme- und Sonnenschutzgläser — unsere beschichteten Gläser erfüllen
              alle Normen ohne Abstriche beim Design.
            </p>
            <p className="mt-[18px] text-[18px] leading-[1.7] text-ink-3">
              Innenräume lassen sich mit Glas spannend gestalten: von der Wandverkleidung über
              exklusive Dekorgläser bis zu Glastüren, Glasduschen und begehbaren Glastreppen. Als
              Glasfachgroßhandel sind wir Partner für Architekten, Verarbeiter und Industrie.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
