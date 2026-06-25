import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({
  kicker,
  title,
  intro,
  watermark = false,
  className = "py-[90px] pb-[70px]",
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  watermark?: boolean;
  className?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.1)_0_1px,transparent_1px_84px)]" />
      {watermark && (
        <img
          src="/assets/mark-h-white.png"
          alt=""
          className="absolute right-[6%] top-1/2 hidden h-[280px] -translate-y-1/2 opacity-[.08] md:block"
        />
      )}
      <Container className={`relative ${className}`}>
        <div className="flex items-center gap-[10px] font-mono text-[12.5px] uppercase tracking-[.2em] text-ice">
          <span className="inline-block h-2 w-2 bg-blue" />
          {kicker}
        </div>
        <h1 className="mt-[22px] max-w-[18ch] font-display text-[38px] font-semibold leading-[1.04] tracking-[-.02em] sm:text-[48px] lg:text-[58px]">
          {title}
        </h1>
        {intro && (
          <p className="mt-[22px] max-w-[56ch] text-[18px] leading-[1.6] text-white/[.73] sm:text-[19px]">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
