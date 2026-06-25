"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";

const copy = {
  h: {
    headline: "Glas am Bau & in der Industrie.",
    sub: "Beratung, Fachplanung und Veredelung aus einer Hand — Ihr Glasfachgroßhandel aus Frohburg.",
  },
  licht: {
    headline: "Wir bringen Licht in Ihre Architektur.",
    sub: "Vom Sicherheitsglas bis zur Ganzglasfassade — wir liefern, veredeln und planen Glas für Bau und Industrie.",
  },
};

const MASK =
  "url(/assets/mark-h-white.png) center/contain no-repeat";

export function Hero() {
  const [hero, setHero] = useState<"h" | "licht">("h");
  const c = copy[hero];

  const sw = (active: boolean) =>
    `font-mono text-[11px] tracking-[.04em] px-3 py-[7px] rounded-[100px] border cursor-pointer transition-colors ${
      active
        ? "bg-blue text-white border-blue"
        : "bg-transparent text-ice border-[rgba(159,195,233,.3)]"
    }`;

  return (
    <section className="relative overflow-hidden border-b border-[rgba(159,195,233,.18)] bg-navy text-white">
      {/* ===== Variant: Lichtwanderung ===== */}
      {hero === "licht" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#062046_0%,#001031_55%,#00081f_100%)]" />
          <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.10)_0_1px,transparent_1px_78px),repeating-linear-gradient(0deg,rgba(159,195,233,.07)_0_1px,transparent_1px_78px)]" />
          <div className="absolute -right-[6%] -top-[12%] h-[128%] w-[60%] -skew-x-[9deg] overflow-hidden border-l border-[rgba(159,195,233,.3)] bg-[linear-gradient(180deg,rgba(13,118,199,.28),rgba(159,195,233,.05))]">
            <div className="absolute left-0 top-0 h-full w-[34%] animate-sweep bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)] blur-[6px]" />
          </div>
          <div className="absolute right-[18%] top-[8%] h-[120%] w-[30%] -skew-x-[9deg] border-l border-[rgba(159,195,233,.18)] bg-[rgba(159,195,233,.06)]" />
        </div>
      )}

      {/* ===== Variant: H-Icon (Glaskörper) ===== */}
      {hero === "h" && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#062046_0%,#001031_55%,#00081f_100%)]" />
          <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.10)_0_1px,transparent_1px_78px),repeating-linear-gradient(0deg,rgba(159,195,233,.07)_0_1px,transparent_1px_78px)]" />
          <div className="absolute -top-[12%] right-[2%] h-[128%] w-[42%] -skew-x-[9deg] border-l border-[rgba(159,195,233,.14)] bg-[linear-gradient(180deg,rgba(13,118,199,.12),transparent_70%)]" />
          <div
            className="pointer-events-none absolute right-[7%] top-1/2 hidden aspect-[380/764] h-[94%] -translate-y-1/2 md:block"
            style={{ ["--m" as string]: MASK }}
          >
            <div className="absolute -inset-x-[14%] -inset-y-[8%] bg-[radial-gradient(58%_56%_at_50%_42%,rgba(13,118,199,.42),transparent_72%)] blur-[24px]" />
            <div className="absolute inset-0 bg-[linear-gradient(152deg,rgba(64,150,224,.92),rgba(159,195,233,.55)_55%,rgba(13,118,199,.7))] [mask:var(--m)] [-webkit-mask:var(--m)]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.10)_0_1px,transparent_1px_24px)] [mask:var(--m)] [-webkit-mask:var(--m)]" />
            <div className="absolute inset-0 overflow-hidden [mask:var(--m)] [-webkit-mask:var(--m)]">
              <div className="absolute -top-[12%] left-0 h-[124%] w-[46%] animate-sweep-fast bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.95),transparent)] blur-[6px]" />
            </div>
            <img
              src="/assets/mark-h-white.png"
              alt=""
              className="absolute inset-0 h-full w-full object-contain opacity-[.32]"
            />
          </div>
        </div>
      )}

      {/* Hero content */}
      <Container className="relative flex min-h-[600px] flex-col justify-center py-[118px] pb-[128px]">
        <div className="flex items-center gap-[11px] font-mono text-[12.5px] uppercase tracking-[.2em] text-ice">
          <span className="inline-block h-2 w-2 bg-blue" />
          Hubert Heinze GmbH · Glasfachgroßhandel
        </div>
        <h1 className="mt-6 max-w-[14ch] font-display text-[44px] font-semibold leading-[1.04] tracking-[-.02em] text-balance sm:text-[58px] sm:leading-[1.02] lg:text-[74px]">
          {c.headline}
        </h1>
        <p className="mt-[26px] max-w-[52ch] text-[17px] leading-[1.6] text-white/[.74] sm:text-[19px]">
          {c.sub}
        </p>
        <div className="mt-[38px] flex flex-wrap gap-[14px]">
          <Link
            href="/kontakt"
            className="flex items-center gap-[10px] rounded-[3px] bg-blue px-7 py-4 text-[16px] font-semibold text-white shadow-[0_16px_40px_-16px_rgba(13,118,199,.9)] transition-colors hover:bg-blue-hover"
          >
            Angebot anfragen<span className="font-mono">→</span>
          </Link>
          <Link
            href="/leistungen"
            className="rounded-[3px] border border-[rgba(159,195,233,.4)] bg-white/[.07] px-7 py-4 text-[16px] font-medium text-white backdrop-blur-[8px] transition-colors hover:bg-white/[.14]"
          >
            Leistungen entdecken
          </Link>
        </div>

        {/* spec ticker */}
        <div className="mt-[54px] flex flex-wrap gap-[26px] border-t border-[rgba(159,195,233,.18)] pt-[26px] font-mono text-[12.5px] tracking-[.04em] text-[rgba(159,195,233,.85)]">
          <span>SCHNELL GELIEFERT · GEPRÜFTE QUALITÄT · PERSÖNLICH BERATEN</span>
          <span className="text-white/40">|</span>
          <span>FROHBURG · SACHSEN</span>
        </div>
      </Container>

      {/* Hero concept switcher */}
      <div className="absolute bottom-[22px] left-1/2 z-[5] flex -translate-x-1/2 items-center gap-2 rounded-[100px] border border-[rgba(159,195,233,.28)] bg-[rgba(0,8,31,.5)] py-[7px] pl-4 pr-[9px] backdrop-blur-[16px]">
        <span className="hidden font-mono text-[10.5px] uppercase tracking-[.16em] text-ice sm:inline">
          Hero-Konzept
        </span>
        <button onClick={() => setHero("licht")} className={sw(hero === "licht")}>
          Lichtwanderung
        </button>
        <button onClick={() => setHero("h")} className={sw(hero === "h")}>
          H-Icon
        </button>
      </div>
    </section>
  );
}
