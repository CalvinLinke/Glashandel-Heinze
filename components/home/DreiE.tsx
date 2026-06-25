import { Container } from "@/components/ui/Container";
import { MonoKicker } from "@/components/ui/MonoKicker";
import { dreiE } from "@/lib/content";

// Karten mit Hover-Effekt (README §9.5). `compact` für die Über-uns-Seite.
export function DreiECards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
      {dreiE.map((d) => (
        <div
          key={d.e}
          className={`group relative overflow-hidden rounded-[6px] border border-[rgba(0,16,49,.09)] bg-white ${
            compact ? "p-[30px]" : "p-[34px_30px_36px]"
          } shadow-[0_24px_50px_-36px_rgba(0,16,49,.5)] transition-[transform,box-shadow,border-color] duration-[280ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-2 hover:border-[rgba(13,118,199,.55)] hover:shadow-[0_34px_66px_-30px_rgba(13,118,199,.5)]`}
        >
          <div
            className={`absolute -right-[10px] -top-[22px] font-display ${
              compact ? "text-[110px]" : "text-[120px]"
            } font-bold leading-none text-[rgba(13,118,199,.07)]`}
          >
            {d.big}
          </div>
          <div className="font-mono text-[12px] tracking-[.1em] text-blue">{d.no}</div>
          <h3
            className={`mt-[14px] font-display ${
              compact ? "text-[24px]" : "text-[26px]"
            } font-semibold text-navy`}
          >
            {d.e}
          </h3>
          <p className="mt-[14px] text-[15.5px] leading-[1.65] text-muted">{d.text}</p>
        </div>
      ))}
    </div>
  );
}

export function DreiE() {
  return (
    <section className="py-24">
      <Container>
        <MonoKicker>Die drei „e“</MonoKicker>
        <h2 className="mb-11 mt-[14px] max-w-[20ch] font-display text-[30px] font-semibold tracking-[-.02em] text-navy sm:text-[38px]">
          Was uns von anderen unterscheidet
        </h2>
        <DreiECards />
      </Container>
    </section>
  );
}
