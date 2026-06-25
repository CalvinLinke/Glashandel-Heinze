import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/site/PageHero";

export function LegalPage({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main>
      <PageHero kicker={kicker} title={title} intro={intro} className="py-[84px] pb-[64px]" />
      <section className="pb-24 pt-16">
        <Container>
          <div className="max-w-[78ch]">{children}</div>
        </Container>
      </section>
    </main>
  );
}

export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-3 mt-12 font-display text-[24px] font-semibold tracking-[-.01em] text-navy first:mt-0 sm:text-[27px]">
      {children}
    </h2>
  );
}

export function LegalH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-2 mt-8 font-display text-[18px] font-semibold text-navy sm:text-[19px]">
      {children}
    </h3>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-[15.5px] leading-[1.7] text-ink-3">{children}</p>;
}

export function LegalUl({ children }: { children: ReactNode }) {
  return (
    <ul className="mb-4 flex flex-col gap-[10px] text-[15.5px] leading-[1.6] text-ink-3">
      {children}
    </ul>
  );
}

export function LegalLi({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-[11px]">
      <span className="mt-[9px] inline-block h-[6px] w-[6px] flex-none bg-blue" />
      <span>{children}</span>
    </li>
  );
}

// Hinweisbox für noch zu ergänzende Angaben
export function LegalNote({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-[6px] border border-[rgba(13,118,199,.25)] bg-surface-2 p-[18px_20px] text-[14px] leading-[1.6] text-ink-3">
      <span className="mr-2 font-mono text-[11px] uppercase tracking-[.12em] text-blue">
        Hinweis
      </span>
      {children}
    </div>
  );
}
