import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MonoKicker } from "@/components/ui/MonoKicker";
import { leistungen } from "@/lib/content";

export function LeistungenPreview() {
  return (
    <section className="pb-10 pt-14">
      <Container>
        <div className="mb-[30px] flex flex-wrap items-end justify-between gap-4">
          <div>
            <MonoKicker>Fünf Glasbereiche</MonoKicker>
            <h2 className="mt-[14px] font-display text-[28px] font-semibold tracking-[-.02em] text-navy sm:text-[34px]">
              Unser Leistungsspektrum
            </h2>
          </div>
          <Link
            href="/leistungen"
            className="rounded-[3px] border border-[rgba(0,16,49,.18)] px-[18px] py-[11px] text-[14.5px] font-medium text-navy transition-colors hover:border-blue hover:text-blue"
          >
            Alle Leistungen →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-[14px] md:grid-cols-3 lg:grid-cols-5">
          {leistungen.map((l) => (
            <Link
              key={l.key}
              href="/leistungen"
              className="group relative overflow-hidden rounded-[5px] border border-[rgba(0,16,49,.09)] bg-white text-left shadow-[0_18px_40px_-30px_rgba(0,16,49,.5)] transition-colors hover:border-blue"
            >
              <div className="relative h-[122px] overflow-hidden bg-[linear-gradient(140deg,#0a2a52,#001031)]">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.12)_0_1px,transparent_1px_30px)]" />
                <div className="absolute -left-[30%] top-0 h-full w-[40%] -skew-x-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent)]" />
                <span className="absolute left-[14px] top-3 font-mono text-[11px] tracking-[.1em] text-ice">
                  {l.no}
                </span>
                <span className="absolute bottom-3 left-[14px] border border-white/[.22] bg-white/10 px-2 py-1 font-mono text-[10px] tracking-[.16em] text-white/65 backdrop-blur-[6px]">
                  {l.label}
                </span>
              </div>
              <div className="px-4 pb-5 pt-4">
                <div className="font-display text-[19px] font-semibold text-navy">{l.name}</div>
                <div className="mt-[6px] text-[13px] leading-[1.5] text-muted">{l.tagline}</div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
