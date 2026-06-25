import { Container } from "@/components/ui/Container";
import { MonoKicker } from "@/components/ui/MonoKicker";
import { prozess } from "@/lib/content";

export function Prozess() {
  return (
    <section className="relative overflow-hidden bg-prozess text-white">
      <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(0deg,rgba(159,195,233,.08)_0_1px,transparent_1px_70px)]" />
      <Container className="relative py-[90px]">
        <MonoKicker tone="ice">So arbeiten wir</MonoKicker>
        <h2 className="mb-[46px] mt-[14px] max-w-[22ch] font-display text-[30px] font-semibold tracking-[-.02em] sm:text-[38px]">
          Von der Anfrage bis zur Montage — ein klarer Weg
        </h2>
        <div className="grid grid-cols-1 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {prozess.map((p) => (
            <div
              key={p.no}
              className="border-l border-[rgba(159,195,233,.22)] pl-[22px] pr-[26px]"
            >
              <div className="font-mono text-[13px] tracking-[.08em] text-blue">{p.no}</div>
              <h3 className="mt-4 font-display text-[21px] font-semibold">{p.t}</h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-white/[.66]">{p.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
