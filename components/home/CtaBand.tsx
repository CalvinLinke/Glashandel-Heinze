import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ctaBenefits, ctaSteps } from "@/lib/content";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="py-[90px]">
      <Container>
        <div className="relative overflow-hidden rounded-[10px] bg-[linear-gradient(120deg,#0D76C7,#0a3a6b)] shadow-[0_40px_80px_-50px_rgba(13,118,199,.9)]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.07)_0_1px,transparent_1px_64px)]" />
          {/* vollbreiter Licht-Sweep */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-55">
            <div className="absolute left-0 top-0 h-full w-[30%] -skew-x-[16deg] animate-sweep-slow bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent)]" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.25fr_1fr]">
            {/* left: pitch */}
            <div className="p-[40px] sm:p-[58px_50px_58px_56px]">
              <div className="inline-flex items-center gap-[9px] rounded-[100px] border border-white/30 bg-white/[.14] px-[15px] py-[7px] font-mono text-[11.5px] uppercase tracking-[.12em] text-white">
                <span className="inline-block h-[7px] w-[7px] animate-blink bg-ice" />
                Kostenlos &amp; unverbindlich
              </div>
              <h2 className="mt-[18px] max-w-[16ch] font-display text-[32px] font-semibold leading-[1.06] tracking-[-.02em] text-white sm:text-[42px]">
                In 2 Minuten zum Glas-Angebot.
              </h2>
              <p className="mt-4 max-w-[42ch] text-[17px] leading-[1.6] text-white/[.88]">
                Maße rein, Glasart wählen, abschicken — den Rest übernehmen wir. Persönliche
                Fachberatung statt Wartemusik.
              </p>
              <div className="my-[26px] mb-[30px] grid max-w-[46ch] grid-cols-1 gap-x-[22px] gap-y-[11px] sm:grid-cols-2">
                {ctaBenefits.map((b) => (
                  <div key={b} className="flex items-center gap-[10px] text-[14.5px] font-medium text-white">
                    <span className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-white/40 bg-white/[.18] text-[11px]">
                      ✓
                    </span>
                    {b}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-[14px]">
                <Link
                  href="/kontakt"
                  className="rounded-[3px] bg-white px-[30px] py-[17px] text-[16px] font-bold text-blue shadow-[0_16px_34px_-16px_rgba(0,8,31,.6)] transition-colors hover:bg-[#eaf2fb]"
                >
                  Angebot anfordern →
                </Link>
                <a
                  href={site.telefonHref}
                  className="inline-flex items-center gap-[10px] rounded-[3px] border border-white/45 px-6 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-white/[.12]"
                >
                  <span className="font-mono">☎</span>
                  {site.telefon}
                </a>
              </div>
            </div>

            {/* right: trust panel */}
            <div className="relative border-t border-white/[.16] bg-[rgba(0,8,31,.22)] p-[44px_40px] backdrop-blur-[8px] sm:p-[44px_48px] lg:border-l lg:border-t-0">
              <img
                src="/assets/mark-h-white.png"
                alt=""
                className="absolute -bottom-[26px] right-6 h-[200px] opacity-[.12]"
              />
              <div className="relative">
                <div className="font-mono text-[11px] uppercase tracking-[.14em] text-ice">
                  So einfach geht&apos;s
                </div>
                <div className="mt-5 flex flex-col gap-[2px]">
                  {ctaSteps.map((s) => (
                    <div
                      key={s.no}
                      className="flex items-start gap-4 border-b border-white/[.12] py-[14px]"
                    >
                      <span className="w-[34px] flex-none font-display text-[22px] font-bold text-ice">
                        {s.no}
                      </span>
                      <div>
                        <div className="text-[15.5px] font-semibold text-white">{s.t}</div>
                        <div className="mt-[2px] text-[13px] text-white/[.66]">{s.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-[22px] flex gap-[26px]">
                  <div>
                    <div className="font-display text-[30px] font-semibold leading-none text-white">24 h</div>
                    <div className="mt-[5px] font-mono text-[10.5px] uppercase tracking-[.06em] text-ice">
                      bis zur Antwort
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-[30px] font-semibold leading-none text-white">30+</div>
                    <div className="mt-[5px] font-mono text-[10.5px] uppercase tracking-[.06em] text-ice">
                      Jahre Erfahrung
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
