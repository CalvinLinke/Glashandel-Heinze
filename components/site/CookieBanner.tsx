"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "hh_cookie_consent"; // 'all' | 'essential'

// Dezentes Cookie-/Einwilligungs-Banner im Corporate Design.
// Aktuell werden ausschließlich technisch notwendige Speicher (localStorage)
// verwendet — das Banner dokumentiert die Einwilligung und ist vorbereitet,
// falls künftig optionale Dienste (z. B. Karten, Statistik) ergänzt werden.
export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* ignore */
    }
  }, []);

  const decide = (value: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    // Signal an das Aktions-Pop-up: Banner ist weg, jetzt darf es erscheinen
    // (verhindert Überlappung beider Banner, v. a. auf dem Smartphone)
    try {
      window.dispatchEvent(new Event("hh-consent-set"));
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Hinweis zu Cookies und Datenschutz"
      className="fixed bottom-6 left-6 z-[210] w-[360px] max-w-[calc(100vw-32px)] animate-popin"
    >
      <div className="relative overflow-hidden rounded-[10px] border border-[rgba(159,195,233,.22)] bg-[linear-gradient(150deg,#06224a,#001031)] shadow-[0_30px_70px_-22px_rgba(0,8,31,.7)]">
        {/* top light edge */}
        <div className="absolute left-0 right-0 top-0 h-[2px] overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[40%] animate-sweep-edge bg-[linear-gradient(90deg,transparent,rgba(159,195,233,.95),transparent)]" />
        </div>
        <div className="relative p-[22px_22px_24px]">
          <div className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[.16em] text-ice">
            <span className="inline-block h-[7px] w-[7px] bg-blue" />
            Datenschutz
          </div>
          <div className="mt-[10px] font-display text-[18px] font-semibold leading-[1.2] text-white">
            Wir respektieren Ihre Privatsphäre
          </div>
          <p className="mt-2 text-[13px] leading-[1.55] text-white/[.74]">
            Diese Website verwendet nur technisch notwendige Speicherung, damit grundlegende
            Funktionen (z. B. dieser Hinweis) zuverlässig arbeiten. Es findet kein Tracking statt.
            Mehr dazu in unserer{" "}
            <Link href="/datenschutz" className="text-ice underline underline-offset-2 hover:text-white">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="mt-[18px] flex flex-wrap items-center gap-2">
            <button
              onClick={() => decide("all")}
              className="rounded-[3px] bg-blue px-[18px] py-[10px] text-[13.5px] font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              Akzeptieren
            </button>
            <button
              onClick={() => decide("essential")}
              className="rounded-[3px] border border-[rgba(159,195,233,.35)] px-[18px] py-[10px] text-[13.5px] font-medium text-ice transition-colors hover:bg-white/[.08]"
            >
              Nur notwendige
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
