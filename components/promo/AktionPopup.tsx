"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const MASK = "url(/assets/mark-h-white.png) center/contain no-repeat";

// Aktions-Pop-up: 5 s nach Laden, once-per-visitor via localStorage, nur Startseite (README §9.7)
export function AktionPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("hh_aufmass_promo") === "1") return;
    } catch {
      /* localStorage nicht verfügbar */
    }

    let timer: ReturnType<typeof setTimeout>;
    const start = () => {
      timer = setTimeout(() => setShow(true), 5000); // 5 s nach Laden/Consent
    };

    // Solange das Cookie-Banner noch sichtbar ist, warten wir mit dem Pop-up —
    // sonst überdecken sich beide (besonders auf dem Smartphone).
    let consent: string | null = null;
    try {
      consent = localStorage.getItem("hh_cookie_consent");
    } catch {
      /* ignore */
    }

    if (consent) {
      start();
      return () => clearTimeout(timer);
    }

    const onConsent = () => start();
    window.addEventListener("hh-consent-set", onConsent, { once: true });
    return () => {
      window.removeEventListener("hh-consent-set", onConsent);
      clearTimeout(timer);
    };
  }, []);

  const close = () => {
    try {
      localStorage.setItem("hh_aufmass_promo", "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[200] w-[354px] max-w-[calc(100vw-32px)] animate-popin">
      <div className="relative overflow-hidden rounded-[10px] border border-[rgba(159,195,233,.22)] bg-[linear-gradient(150deg,#06224a,#001031)] shadow-[0_30px_70px_-22px_rgba(0,8,31,.7)]">
        {/* top light edge */}
        <div className="absolute left-0 right-0 top-0 h-[2px] overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[40%] animate-sweep-edge bg-[linear-gradient(90deg,transparent,rgba(159,195,233,.95),transparent)]" />
        </div>
        {/* glass H motif */}
        <div
          className="pointer-events-none absolute -bottom-[22px] -right-4 aspect-[380/764] h-[150px]"
          style={{ ["--m" as string]: MASK }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(64,150,224,.5),rgba(159,195,233,.18))] [mask:var(--m)] [-webkit-mask:var(--m)]" />
          <img
            src="/assets/mark-h-white.png"
            alt=""
            className="absolute inset-0 h-full w-full object-contain opacity-[.18]"
          />
        </div>
        {/* content */}
        <div className="relative p-[24px_24px_26px]">
          <button
            onClick={close}
            aria-label="Schließen"
            className="absolute right-[13px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(159,195,233,.25)] bg-white/10 text-[15px] leading-none text-[#cfe0f2] transition-colors hover:bg-white/20"
          >
            ×
          </button>
          <div className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[.16em] text-ice">
            <span className="inline-block h-[7px] w-[7px] animate-blink bg-blue" />
            Aktion
          </div>
          <div className="mt-3 font-display text-[24px] font-semibold leading-[1.12] tracking-[-.01em] text-white">
            Kostenloses Aufmaß
          </div>
          <p className="mt-2 max-w-[30ch] text-[13.5px] leading-[1.55] text-white/[.74]">
            Sichern Sie sich Ihren Vor-Ort-Termin — unverbindlich und gratis. Nur noch{" "}
            <b className="text-ice">bis 31.07.</b>
          </p>
          <div className="mt-[18px] flex items-center gap-3">
            <Link
              href="/kontakt"
              onClick={close}
              className="rounded-[3px] bg-blue px-[18px] py-3 text-[14px] font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              Termin anfragen →
            </Link>
            <a href={site.telefonHref} className="font-mono text-[12.5px] text-ice">
              ☎ {site.telefonKurz}
            </a>
          </div>
        </div>
        {/* one-shot squeegee wipe */}
        <div className="absolute inset-0 animate-squeegee bg-[rgba(196,214,238,.9)] backdrop-blur-[7px]">
          <div className="absolute bottom-0 right-0 top-0 w-[7px] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.95))] shadow-[0_0_16px_2px_rgba(255,255,255,.6)]" />
        </div>
      </div>
    </div>
  );
}
