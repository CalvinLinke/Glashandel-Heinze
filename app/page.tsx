import { Hero } from "@/components/home/Hero";
import { IntroBand } from "@/components/home/IntroBand";
import { LeistungenPreview } from "@/components/home/LeistungenPreview";
import { StatsBand } from "@/components/home/StatsBand";
import { DreiE } from "@/components/home/DreiE";
import { Prozess } from "@/components/home/Prozess";
import { CtaBand } from "@/components/home/CtaBand";
import { AktionPopup } from "@/components/promo/AktionPopup";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <IntroBand />
      <LeistungenPreview />
      <StatsBand />
      <DreiE />
      <Prozess />
      <CtaBand />
      <AktionPopup />
    </main>
  );
}
