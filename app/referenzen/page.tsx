import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/site/PageHero";
import { referenzen } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenzen — Projekte, die für sich sprechen",
  description:
    "Ein Auszug aus realisierten Verglasungen — von der Industriefassade bis zur privaten Ganzglasdusche. Beispielprojekte der Hubert Heinze GmbH zur Veranschaulichung.",
  alternates: { canonical: "/referenzen" },
};

export default function ReferenzenPage() {
  return (
    <main>
      <PageHero
        kicker="Referenzen"
        title="Projekte, die für sich sprechen."
        intro="Ein Auszug aus realisierten Verglasungen — von der Industriefassade bis zur privaten Ganzglasdusche. Beispielprojekte zur Veranschaulichung."
      />

      <section className="pb-24 pt-[60px]">
        <Container>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {referenzen.map((r) => (
              <div
                key={r.t}
                className="overflow-hidden rounded-[6px] border border-[rgba(0,16,49,.09)] bg-white shadow-[0_20px_44px_-34px_rgba(0,16,49,.5)]"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-[linear-gradient(140deg,#0a2a52,#001031)]">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.12)_0_1px,transparent_1px_44px),repeating-linear-gradient(0deg,rgba(159,195,233,.08)_0_1px,transparent_1px_44px)]" />
                  <div className="absolute -left-[30%] top-0 h-full w-[42%] -skew-x-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)]" />
                  <span className="absolute left-[13px] top-3 border border-white/25 bg-[rgba(13,118,199,.55)] px-[9px] py-1 font-mono text-[10px] tracking-[.14em] text-white/85 backdrop-blur-[6px]">
                    {r.tag}
                  </span>
                </div>
                <div className="px-[22px] pb-6 pt-5">
                  <div className="font-mono text-[11px] uppercase tracking-[.1em] text-blue">
                    {r.cat}
                  </div>
                  <h3 className="mt-2 font-display text-[20px] font-semibold text-navy">{r.t}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-muted">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
