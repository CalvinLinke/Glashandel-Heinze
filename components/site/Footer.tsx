import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";
import { leistungen } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.07)_0_1px,transparent_1px_90px)]" />
      <Container className="relative pb-[30px] pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <img src="/assets/logo-white.png" alt="Hubert Heinze GmbH" className="h-[62px] w-auto" />
            <p className="mt-[18px] max-w-[34ch] text-[14.5px] leading-[1.6] text-white/60">
              Glasfachgroßhandel für Bau und Industrie. Beratung, Fachplanung, Veredelung und
              Lieferung — aus Frohburg in ganz Mitteldeutschland.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Glashandel Heinze auf Instagram"
              className="mt-5 inline-flex items-center gap-[10px] rounded-[100px] border border-[rgba(159,195,233,.28)] bg-white/[.06] px-4 py-[9px] text-[13px] font-medium text-ice transition-colors hover:border-blue hover:text-white"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
              {site.instagramHandle}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[.14em] text-ice">
              Navigation
            </div>
            <div className="flex flex-col gap-[11px]">
              <Link href="/" className="text-left text-[14.5px] text-white/[.78] transition-colors hover:text-white">Start</Link>
              <Link href="/ueber-uns" className="text-left text-[14.5px] text-white/[.78] transition-colors hover:text-white">Über uns</Link>
              <Link href="/leistungen" className="text-left text-[14.5px] text-white/[.78] transition-colors hover:text-white">Leistungen</Link>
              <Link href="/referenzen" className="text-left text-[14.5px] text-white/[.78] transition-colors hover:text-white">Referenzen</Link>
            </div>
          </div>

          {/* Glasbereiche */}
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[.14em] text-ice">
              Glasbereiche
            </div>
            <div className="flex flex-col gap-[11px] text-[14.5px] text-white/[.78]">
              {leistungen.map((l) => (
                <span key={l.key}>{l.name}</span>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[.14em] text-ice">
              Kontakt
            </div>
            <div className="text-[14.5px] leading-[1.7] text-white/[.78]">
              {site.strasse}
              <br />
              {site.plzOrt}
              <br />
              <a href={site.telefonHref} className="transition-colors hover:text-white">{site.telefon}</a>
              <br />
              <a href={site.emailHref} className="break-all transition-colors hover:text-white">{site.email}</a>
            </div>
            <Link
              href="/kontakt"
              className="mt-[18px] inline-flex rounded-[3px] bg-blue px-[18px] py-3 text-[14px] font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              Angebot anfragen →
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[rgba(159,195,233,.16)] pt-[22px] font-mono text-[13px] text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {site.name} · {site.zusatz}</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/impressum" className="transition-colors hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="transition-colors hover:text-white">Datenschutz</Link>
            <span className="text-white/40">{site.ort} · {site.region} · Made with Klarheit</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
