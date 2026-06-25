"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { nav } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    // WICHTIG: KEIN overflow am Wrapper/Body (sonst bricht sticky)
    <header className="sticky top-0 z-[60] border-b border-[rgba(0,16,49,.09)] bg-paper/[.72] backdrop-blur-[18px] backdrop-saturate-[1.3]">
      <Container className="flex h-[74px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="Hubert Heinze GmbH — Startseite">
          {/* Logo: Navbar-Höhe 56px */}
          <img
            src="/assets/logo.png"
            alt="Hubert Heinze GmbH — Glasfachgroßhandel"
            className="block h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-[3px] px-[14px] py-[10px] text-[14.5px] transition-colors ${
                isActive(n.href)
                  ? "bg-blue/10 font-semibold text-blue"
                  : "font-medium text-ink-3 hover:text-blue"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="hidden items-center gap-[9px] rounded-[3px] bg-blue px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(13,118,199,.8)] transition-colors hover:bg-blue-hover2 sm:flex"
        >
          <span className="inline-block h-[7px] w-[7px] bg-ice" />
          Angebot anfragen
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-[3px] border border-[rgba(0,16,49,.14)] md:hidden"
        >
          <span className={`h-[2px] w-5 bg-ink-2 transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-[2px] w-5 bg-ink-2 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-5 bg-ink-2 transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </Container>

      {open && (
        <div className="border-t border-[rgba(0,16,49,.09)] bg-paper/95 backdrop-blur-[18px] md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`rounded-[3px] px-3 py-3 text-[15px] ${
                  isActive(n.href) ? "bg-blue/10 font-semibold text-blue" : "font-medium text-ink-3"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-[9px] rounded-[3px] bg-blue px-5 py-3 text-[15px] font-semibold text-white"
            >
              Angebot anfragen →
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
