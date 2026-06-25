"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { MonoKicker } from "@/components/ui/MonoKicker";
import { leistungen, staerkeOptions, bearbeitungOptions } from "@/lib/content";

type Form = {
  glasart: string;
  breite: string;
  hoehe: string;
  staerke: string;
  bearbeitung: string[];
  menge: string;
  anwendung: string;
  name: string;
  firma: string;
  email: string;
  telefon: string;
  nachricht: string;
  datenschutz: boolean;
};

const emptyForm: Form = {
  glasart: "",
  breite: "",
  hoehe: "",
  staerke: "",
  bearbeitung: [],
  menge: "1",
  anwendung: "",
  name: "",
  firma: "",
  email: "",
  telefon: "",
  nachricht: "",
  datenschutz: false,
};

const STEPS = [
  { t: "Glasart", d: "Bereich wählen" },
  { t: "Maße", d: "Format & Stärke" },
  { t: "Veredelung", d: "Bearbeitung & Menge" },
  { t: "Kontakt", d: "Angebot erhalten" },
];

const MASK = "url(/assets/mark-h-white.png) center/contain no-repeat";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const labelCls = "font-mono text-[11px] uppercase tracking-[.08em] text-label";
const inputCls =
  "mt-2 w-full rounded-[5px] border border-[rgba(0,16,49,.16)] bg-white px-[14px] py-[13px] text-[15px] text-navy outline-none transition-colors focus:border-blue focus:ring-4 focus:ring-blue/10";

export function LeadFunnel() {
  const [step, setStep] = useState(0); // 0..3
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState<Form>(emptyForm);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));
  const toggleBearb = (name: string) =>
    setForm((f) => ({
      ...f,
      bearbeitung: f.bearbeitung.includes(name)
        ? f.bearbeitung.filter((x) => x !== name)
        : [...f.bearbeitung, name],
    }));

  const masse = form.breite && form.hoehe ? `${form.breite} × ${form.hoehe} mm` : "—";
  const step4Valid = !!form.name && EMAIL_RE.test(form.email) && form.datenschutz;
  const canNext = step === 0 ? !!form.glasart : step === 3 ? step4Valid : true;

  const progress = useMemo(() => (step / (STEPS.length - 1)) * 100, [step]);

  const submit = async () => {
    if (!step4Valid) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Es ist ein Fehler aufgetreten.");
      }
      setStatus("sent");
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Es ist ein Fehler aufgetreten.");
    }
  };

  const next = () => {
    if (!canNext) return;
    if (step === 3) {
      submit();
      return;
    }
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };
  const prev = () => setStep((s) => Math.max(0, s - 1));

  const reset = () => {
    setForm(emptyForm);
    setStep(0);
    setStatus("idle");
  };

  const chip = (active: boolean) =>
    `cursor-pointer rounded-[100px] border px-[15px] py-[9px] text-[13.5px] font-medium transition-all ${
      active
        ? "border-blue bg-blue text-white shadow-[0_8px_20px_-10px_rgba(13,118,199,.8)]"
        : "border-[rgba(0,16,49,.12)] bg-chip text-ink-3 hover:border-blue/50 hover:bg-white"
    }`;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[16px] bg-[linear-gradient(135deg,#062046_0%,#001031_55%,#00081f_100%)] shadow-[0_50px_100px_-60px_rgba(0,16,49,.9)]">
          {/* dekorativer Hintergrund */}
          <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(90deg,rgba(159,195,233,.08)_0_1px,transparent_1px_84px),repeating-linear-gradient(0deg,rgba(159,195,233,.05)_0_1px,transparent_1px_84px)]" />
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
            <div className="absolute -top-[20%] left-0 h-[140%] w-[26%] -skew-x-[16deg] animate-sweep-slow bg-[linear-gradient(90deg,transparent,rgba(159,195,233,.16),transparent)]" />
          </div>

          {/* Kopf */}
          <div className="relative px-7 pt-10 sm:px-12 sm:pt-12">
            <MonoKicker tone="ice">Angebots-Assistent</MonoKicker>
            <h2 className="mt-[14px] max-w-[20ch] font-display text-[28px] font-semibold leading-[1.1] tracking-[-.02em] text-white sm:text-[36px]">
              In wenigen Schritten zu Ihrem Glas-Angebot.
            </h2>
            <p className="mt-3 max-w-[52ch] text-[15.5px] leading-[1.6] text-white/70">
              Klicken Sie sich durch — wir stellen Ihnen passend zu Ihrem Vorhaben ein individuelles
              Angebot zusammen. Unverbindlich, kostenlos und in unter 2 Minuten.
            </p>
          </div>

          {/* Karte */}
          <div className="relative px-4 pb-4 pt-8 sm:px-8 sm:pb-8 sm:pt-9">
            <div className="grid grid-cols-1 overflow-hidden rounded-[12px] bg-white shadow-[0_30px_60px_-40px_rgba(0,8,31,.8)] lg:grid-cols-[1.55fr_1fr]">
              {/* ---- linke Spalte: Stepper + Schritt-Inhalt ---- */}
              <div className="p-6 sm:p-9">
                {status === "sent" ? (
                  <SuccessPanel name={form.name} onReset={reset} />
                ) : (
                  <>
                    {/* Stepper */}
                    <div className="relative mb-9">
                      <div className="absolute left-0 right-0 top-[15px] h-[2px] bg-[rgba(0,16,49,.1)]" />
                      <div
                        className="absolute left-0 top-[15px] h-[2px] bg-blue transition-[width] duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                      />
                      <div className="relative flex justify-between">
                        {STEPS.map((s, i) => {
                          const done = i < step;
                          const active = i === step;
                          return (
                            <button
                              key={s.t}
                              type="button"
                              onClick={() => i < step && setStep(i)}
                              className={`group flex flex-col items-center ${
                                i < step ? "cursor-pointer" : "cursor-default"
                              }`}
                              style={{ width: `${100 / STEPS.length}%` }}
                            >
                              <span
                                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-[13px] font-semibold transition-all ${
                                  active
                                    ? "border-blue bg-blue text-white shadow-[0_8px_20px_-8px_rgba(13,118,199,.9)]"
                                    : done
                                    ? "border-blue bg-blue text-white"
                                    : "border-[rgba(0,16,49,.18)] bg-white text-label"
                                }`}
                              >
                                {done ? "✓" : i + 1}
                              </span>
                              <span
                                className={`mt-[10px] hidden text-[12.5px] font-semibold sm:block ${
                                  active ? "text-navy" : "text-muted"
                                }`}
                              >
                                {s.t}
                              </span>
                              <span className="mt-[2px] hidden font-mono text-[10px] uppercase tracking-[.08em] text-label md:block">
                                {s.d}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Schritt-Inhalt */}
                    <div key={step} className="animate-fade">
                      {step === 0 && (
                        <div>
                          <StepTitle n={1} title="Welche Glasart benötigen Sie?" sub="Wählen Sie den passenden Bereich — Details folgen gleich." />
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {leistungen.map((l) => {
                              const selected = form.glasart === l.name;
                              return (
                                <button
                                  key={l.key}
                                  onClick={() => set("glasart", l.name)}
                                  className={`group relative overflow-hidden rounded-[10px] border p-[16px_18px] text-left transition-all ${
                                    selected
                                      ? "border-blue bg-[linear-gradient(135deg,#eaf3fc,#ffffff)] shadow-[0_18px_40px_-26px_rgba(13,118,199,.7)]"
                                      : "border-[rgba(0,16,49,.12)] bg-white hover:-translate-y-[2px] hover:border-blue/50 hover:shadow-[0_18px_40px_-28px_rgba(0,16,49,.5)]"
                                  }`}
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div>
                                      <div className="font-mono text-[11px] tracking-[.1em] text-blue">
                                        {l.no}
                                      </div>
                                      <div className="mt-[6px] font-display text-[18px] font-semibold text-navy">
                                        {l.name}
                                      </div>
                                      <div className="mt-1 text-[13px] text-muted">{l.tagline}</div>
                                    </div>
                                    <span
                                      className={`mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px] transition-all ${
                                        selected
                                          ? "bg-blue text-white"
                                          : "border-2 border-[rgba(0,16,49,.2)] text-transparent"
                                      }`}
                                    >
                                      ✓
                                    </span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {step === 1 && (
                        <div>
                          <StepTitle n={2} title="Maße & Glasstärke" sub="Sie haben noch keine genauen Maße? Lassen Sie die Felder einfach frei." />
                          <div className="grid grid-cols-2 gap-4">
                            <label className="block">
                              <span className={labelCls}>Breite (mm)</span>
                              <input value={form.breite} onChange={(e) => set("breite", e.target.value)} inputMode="numeric" placeholder="z. B. 1200" className={inputCls} />
                            </label>
                            <label className="block">
                              <span className={labelCls}>Höhe (mm)</span>
                              <input value={form.hoehe} onChange={(e) => set("hoehe", e.target.value)} inputMode="numeric" placeholder="z. B. 2400" className={inputCls} />
                            </label>
                          </div>
                          <div className="mt-5">
                            <span className={labelCls}>Glasstärke</span>
                            <div className="mt-[10px] flex flex-wrap gap-2">
                              {staerkeOptions.map((v) => (
                                <button key={v} onClick={() => set("staerke", form.staerke === v ? "" : v)} className={chip(form.staerke === v)}>
                                  {v}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div>
                          <StepTitle n={3} title="Bearbeitung & Menge" sub="Mehrfachauswahl möglich — wählen Sie alle gewünschten Veredelungen." />
                          <div>
                            <span className={labelCls}>Bearbeitung / Veredelung</span>
                            <div className="mt-[10px] flex flex-wrap gap-2">
                              {bearbeitungOptions.map((v) => (
                                <button key={v} onClick={() => toggleBearb(v)} className={chip(form.bearbeitung.includes(v))}>
                                  {v}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-[1fr_2fr]">
                            <label className="block">
                              <span className={labelCls}>Stückzahl</span>
                              <input value={form.menge} onChange={(e) => set("menge", e.target.value)} inputMode="numeric" placeholder="1" className={inputCls} />
                            </label>
                            <label className="block">
                              <span className={labelCls}>Anwendung / Einbauort</span>
                              <input value={form.anwendung} onChange={(e) => set("anwendung", e.target.value)} placeholder="z. B. Duschtrennwand, Fassade …" className={inputCls} />
                            </label>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div>
                          <StepTitle n={4} title="Wohin dürfen wir Ihr Angebot senden?" sub="Wir melden uns innerhalb von 24 Stunden mit Ihrem individuellen Angebot." />
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <label className="block">
                              <span className={labelCls}>Name *</span>
                              <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Vor- & Nachname" className={inputCls} />
                            </label>
                            <label className="block">
                              <span className={labelCls}>Firma (optional)</span>
                              <input value={form.firma} onChange={(e) => set("firma", e.target.value)} placeholder="Unternehmen" className={inputCls} />
                            </label>
                            <label className="block">
                              <span className={labelCls}>E-Mail *</span>
                              <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="name@firma.de" className={inputCls} />
                            </label>
                            <label className="block">
                              <span className={labelCls}>Telefon</span>
                              <input value={form.telefon} onChange={(e) => set("telefon", e.target.value)} placeholder="für Rückfragen" className={inputCls} />
                            </label>
                          </div>
                          <label className="mt-4 block">
                            <span className={labelCls}>Nachricht (optional)</span>
                            <textarea value={form.nachricht} onChange={(e) => set("nachricht", e.target.value)} placeholder="Weitere Details zu Ihrem Projekt …" className={`${inputCls} min-h-[80px] resize-y`} />
                          </label>
                          <label className="mt-4 flex items-start gap-3 text-[13px] leading-[1.5] text-ink-3">
                            <input type="checkbox" checked={form.datenschutz} onChange={(e) => set("datenschutz", e.target.checked)} className="mt-[3px] h-4 w-4 flex-none accent-blue" />
                            <span>
                              Ich habe die{" "}
                              <a href="/datenschutz" className="text-blue underline underline-offset-2">Datenschutzerklärung</a>{" "}
                              gelesen und willige in die Verarbeitung meiner Angaben zur Bearbeitung der Anfrage ein. *
                            </span>
                          </label>
                          {status === "error" && (
                            <p className="mt-3 rounded-[6px] border border-red-200 bg-red-50 px-4 py-2 text-[13.5px] text-red-700">
                              {errorMsg}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Navigation */}
                    <div className="mt-8 flex items-center justify-between border-t border-[rgba(0,16,49,.08)] pt-6">
                      <button
                        onClick={prev}
                        className={`rounded-[3px] border border-[rgba(0,16,49,.18)] px-[22px] py-[13px] text-[15px] font-medium text-ink-3 transition-colors hover:border-ink-3 ${
                          step === 0 ? "invisible" : "visible"
                        }`}
                      >
                        ← Zurück
                      </button>
                      <button
                        onClick={next}
                        disabled={!canNext || status === "loading"}
                        className={`inline-flex items-center gap-2 rounded-[3px] bg-blue px-7 py-[13px] text-[15px] font-semibold text-white shadow-[0_14px_34px_-16px_rgba(13,118,199,.9)] transition-colors hover:bg-blue-hover ${
                          !canNext || status === "loading" ? "cursor-not-allowed opacity-50 hover:bg-blue" : ""
                        }`}
                      >
                        {status === "loading"
                          ? "Wird gesendet …"
                          : step === 3
                          ? "Anfrage senden ✓"
                          : "Weiter →"}
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* ---- rechte Spalte: Live-Zusammenfassung ---- */}
              <div className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(160deg,#0a2a52,#001031)] p-6 sm:p-9 lg:border-l lg:border-t-0">
                <div
                  className="pointer-events-none absolute -bottom-6 -right-8 aspect-[380/764] h-[220px] opacity-[.12]"
                  style={{ ["--m" as string]: MASK }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(64,150,224,.6),rgba(159,195,233,.2))] [mask:var(--m)] [-webkit-mask:var(--m)]" />
                </div>
                <div className="relative">
                  <div className="font-mono text-[11px] uppercase tracking-[.14em] text-ice">
                    Ihre Anfrage
                  </div>
                  <div className="mt-5 flex flex-col divide-y divide-white/10">
                    <SummaryRow label="Glasart" value={form.glasart} highlight={step === 0} />
                    <SummaryRow label="Maße" value={masse} highlight={step === 1} />
                    <SummaryRow label="Glasstärke" value={form.staerke} highlight={step === 1} />
                    <SummaryRow
                      label="Bearbeitung"
                      value={form.bearbeitung.length ? form.bearbeitung.join(", ") : ""}
                      highlight={step === 2}
                    />
                    <SummaryRow label="Stückzahl" value={form.menge} highlight={step === 2} />
                    <SummaryRow label="Anwendung" value={form.anwendung} highlight={step === 2} />
                  </div>

                  <div className="mt-7 flex flex-col gap-[10px]">
                    {["Unverbindlich & kostenlos", "Persönliche Fachberatung", "Antwort in 24 Stunden"].map(
                      (b) => (
                        <div key={b} className="flex items-center gap-[10px] text-[13.5px] font-medium text-white/85">
                          <span className="inline-flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full border border-white/30 bg-white/15 text-[10px]">
                            ✓
                          </span>
                          {b}
                        </div>
                      )
                    )}
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

function StepTitle({ n, title, sub }: { n: number; title: string; sub: string }) {
  return (
    <div className="mb-6">
      <div className="font-mono text-[11px] uppercase tracking-[.12em] text-blue">
        Schritt {n} / {STEPS.length}
      </div>
      <h3 className="mt-2 font-display text-[22px] font-semibold leading-[1.2] text-navy sm:text-[24px]">
        {title}
      </h3>
      <p className="mt-[6px] text-[14.5px] text-muted">{sub}</p>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight: boolean;
}) {
  const filled = value && value !== "—";
  return (
    <div className={`flex items-baseline justify-between gap-4 py-[11px] ${highlight ? "" : ""}`}>
      <span className="font-mono text-[10.5px] uppercase tracking-[.08em] text-ice/70">{label}</span>
      <span
        className={`text-right text-[13.5px] ${
          filled ? "font-medium text-white" : "text-white/35"
        }`}
      >
        {filled ? value : "—"}
      </span>
    </div>
  );
}

function SuccessPanel({ name, onReset }: { name: string; onReset: () => void }) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center px-4 py-10 text-center">
      <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-blue text-[32px] text-white shadow-[0_18px_40px_-18px_rgba(13,118,199,.9)]">
        ✓
      </div>
      <h3 className="mt-6 font-display text-[26px] font-semibold text-navy">
        Vielen Dank, {name || "für Ihre Anfrage"}!
      </h3>
      <p className="mx-auto mt-3 max-w-[44ch] text-[15.5px] leading-[1.6] text-muted">
        Ihre Anfrage ist bei uns eingegangen. Wir prüfen Ihr Projekt und melden uns innerhalb von 24
        Stunden mit einem individuellen Angebot — selbstverständlich unverbindlich.
      </p>
      <button
        onClick={onReset}
        className="mt-7 rounded-[3px] border border-[rgba(0,16,49,.18)] px-5 py-3 text-[14.5px] font-medium text-navy transition-colors hover:border-blue hover:text-blue"
      >
        Neue Anfrage starten
      </button>
    </div>
  );
}
