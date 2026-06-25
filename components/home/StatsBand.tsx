"use client";

import { Container } from "@/components/ui/Container";
import { statDefs } from "@/lib/content";
import { useInView } from "@/lib/useInView";
import { useCountUp } from "@/lib/useCountUp";

function Stat({
  num,
  suffix,
  label,
  run,
}: {
  num: number;
  suffix: string;
  label: string;
  run: boolean;
}) {
  const v = useCountUp(num, run);
  return (
    <div>
      <div className="font-display text-[54px] font-semibold leading-none tracking-[-.03em] text-white">
        {v}
        {suffix}
      </div>
      <div className="mt-[10px] font-mono text-[12.5px] uppercase tracking-[.05em] text-ice">
        {label}
      </div>
    </div>
  );
}

export function StatsBand() {
  const { ref, seen } = useInView<HTMLDivElement>(0.3);
  return (
    <section className="relative mt-[60px] overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.1)_0_1px,transparent_1px_90px)]" />
      <img
        src="/assets/mark-h-white.png"
        alt=""
        className="absolute right-[3%] top-1/2 hidden h-[240px] -translate-y-1/2 opacity-[.07] sm:block"
      />
      <Container className="relative">
        <div
          ref={ref}
          className="grid grid-cols-2 gap-[34px] py-16 lg:grid-cols-4"
        >
          {statDefs.map((s) => (
            <Stat key={s.label} num={s.num} suffix={s.suffix} label={s.label} run={seen} />
          ))}
        </div>
      </Container>
    </section>
  );
}
