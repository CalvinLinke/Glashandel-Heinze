"use client";

import { useState } from "react";
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

const labelCls =
  "font-mono text-[11px] uppercase tracking-[.08em] text-label";
const inputCls =
  "mt-2 w-full rounded-[4px] border border-[rgba(0,16,49,.16)] px-[14px] py-[13px] text-[15px] text-navy outline-none transition-colors focus:border-blue";

export function Konfigurator() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<Form>(emptyForm);

  const set = <K extends keyof Form>(k: K, v: Form[K]) =>
    setForm((f) => ({ ...f, [k]: v }));
  const toggleBearb = (name: string) =>
    setForm((f) => ({
      ...f,
      bearbeitung: f.bearbeitung.includes(name)
        ? f.bearbeitung.filter((x) => x !== name)
        : [...f.bearbeitung, name],
    }));

  const next = () => {
    if (step >= 3) {
      // Demo: Validierung Pflichtfelder Schritt 3
      if (!form.name || !form.email || !form.datenschutz) return;
      setSent(true);
      try {
        window.scrollTo({ top: 0 });
      } catch {}
      return;
    }
    if (step === 1 && !form.glasart) return;
    setStep((s) => (Math.min(3, s + 1) as 1 | 2 | 3));
  };
  const prev = () => setStep((s) => (Math.max(1, s - 1) as 1 | 2 | 3));

  const masse = form.breite && form.hoehe ? `${form.breite} × ${form.hoehe} mm` : "—";
  const chip = (active: boolean) =>
    `cursor-pointer rounded-[100px] border px-[15px] py-[9px] text-[13.5px] font-medium transition-colors ${
      active
        ? "border-blue bg-blue text-white"
        : "border-[rgba(0,16,49,.12)] bg-chip text-ink-3 hover:border-blue/40"
    }`;

  const step3Valid = !!form.name && !!form.email && form.datenschutz;
  const nextDisabled = (step === 1 && !form.glasart) || (step === 3 && !step3Valid);

  return (
    <div className="overflow-hidden rounded-[8px] border border-[rgba(0,16,49,.09)] bg-white shadow-[0_30px_60px_-44px_rgba(0,16,49,.55)]">
      {/* progress */}
      <div className="px-[34px] pt-[26px]">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[12px] uppercase tracking-[.14em] text-blue">
            Angebots-Konfigurator
          </div>
          <div className="font-mono text-[12px] text-label">Schritt {step} / 3</div>
        </div>
        <div className="mt-[14px] h-1 overflow-hidden rounded-[4px] bg-[#e4ebf2]">
          <div
            className="h-full rounded-[4px] bg-blue transition-[width] duration-[400ms] ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <div className="px-[34px] pb-9 pt-[30px]">
        {/* STEP 1 */}
        {step === 1 && (
          <div key="s1" className="animate-fade">
            <h2 className="mb-[6px] font-display text-[24px] font-semibold text-navy">
              1 · Welche Glasart benötigen Sie?
            </h2>
            <p className="mb-[22px] text-[15px] text-muted">
              Wählen Sie den passenden Bereich — Details folgen im nächsten Schritt.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {leistungen.map((l) => {
                const selected = form.glasart === l.name;
                return (
                  <button
                    key={l.key}
                    onClick={() => set("glasart", l.name)}
                    className={`relative w-full rounded-[6px] text-left transition-colors ${
                      selected
                        ? "border-2 border-blue bg-[#eaf3fc] p-[15px_16px]"
                        : "border border-[rgba(0,16,49,.14)] bg-white p-[16px_17px] hover:border-blue/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[18px] font-semibold text-navy">
                        {l.name}
                      </span>
                      <span
                        className="inline-block h-4 w-4 rounded-full"
                        style={{
                          border: selected
                            ? "5px solid #0D76C7"
                            : "2px solid rgba(0,16,49,.2)",
                        }}
                      />
                    </div>
                    <div className="mt-[6px] text-left text-[13.5px] text-muted">{l.tagline}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div key="s2" className="animate-fade">
            <h2 className="mb-[6px] font-display text-[24px] font-semibold text-navy">
              2 · Maße &amp; Ausführung
            </h2>
            <p className="mb-[22px] text-[15px] text-muted">
              Gewählt: <strong className="text-blue">{form.glasart}</strong> — beschreiben Sie die
              gewünschte Ausführung.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className={labelCls}>Breite (mm)</span>
                <input
                  value={form.breite}
                  onChange={(e) => set("breite", e.target.value)}
                  inputMode="numeric"
                  placeholder="z. B. 1200"
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className={labelCls}>Höhe (mm)</span>
                <input
                  value={form.hoehe}
                  onChange={(e) => set("hoehe", e.target.value)}
                  inputMode="numeric"
                  placeholder="z. B. 2400"
                  className={inputCls}
                />
              </label>
            </div>
            <div className="mt-[18px]">
              <span className={labelCls}>Glasstärke</span>
              <div className="mt-[10px] flex flex-wrap gap-2">
                {staerkeOptions.map((v) => (
                  <button key={v} onClick={() => set("staerke", v)} className={chip(form.staerke === v)}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-[18px]">
              <span className={labelCls}>Bearbeitung / Veredelung</span>
              <div className="mt-[10px] flex flex-wrap gap-2">
                {bearbeitungOptions.map((v) => (
                  <button
                    key={v}
                    onClick={() => toggleBearb(v)}
                    className={chip(form.bearbeitung.includes(v))}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-[18px] grid grid-cols-1 gap-4 sm:grid-cols-[1fr_2fr]">
              <label className="block">
                <span className={labelCls}>Stückzahl</span>
                <input
                  value={form.menge}
                  onChange={(e) => set("menge", e.target.value)}
                  inputMode="numeric"
                  placeholder="1"
                  className={inputCls}
                />
              </label>
              <label className="block">
                <span className={labelCls}>Anwendung / Einbauort</span>
                <input
                  value={form.anwendung}
                  onChange={(e) => set("anwendung", e.target.value)}
                  placeholder="z. B. Duschtrennwand, Fassade …"
                  className={inputCls}
                />
              </label>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div key="s3" className="animate-fade">
            {!sent ? (
              <div>
                <h2 className="mb-[6px] font-display text-[24px] font-semibold text-navy">
                  3 · Ihre Kontaktdaten
                </h2>
                <p className="mb-[22px] text-[15px] text-muted">
                  Wohin dürfen wir Ihr individuelles Angebot senden?
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className={labelCls}>Name *</span>
                    <input
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Vor- & Nachname"
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className={labelCls}>Firma (optional)</span>
                    <input
                      value={form.firma}
                      onChange={(e) => set("firma", e.target.value)}
                      placeholder="Unternehmen"
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className={labelCls}>E-Mail *</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="name@firma.de"
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className={labelCls}>Telefon</span>
                    <input
                      value={form.telefon}
                      onChange={(e) => set("telefon", e.target.value)}
                      placeholder="für Rückfragen"
                      className={inputCls}
                    />
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className={labelCls}>Nachricht (optional)</span>
                  <textarea
                    value={form.nachricht}
                    onChange={(e) => set("nachricht", e.target.value)}
                    placeholder="Weitere Details zu Ihrem Projekt …"
                    className={`${inputCls} min-h-[84px] resize-y`}
                  />
                </label>

                {/* summary */}
                <div className="mt-5 rounded-[6px] border border-[rgba(0,16,49,.08)] bg-surface-2 p-[18px_20px]">
                  <div className="font-mono text-[11px] uppercase tracking-[.12em] text-blue">
                    Zusammenfassung
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-[22px] gap-y-2 text-[14px] text-ink-2">
                    <span><b className="font-medium text-label">Glasart:</b> {form.glasart || "—"}</span>
                    <span><b className="font-medium text-label">Maße:</b> {masse}</span>
                    <span><b className="font-medium text-label">Stärke:</b> {form.staerke || "—"}</span>
                    <span><b className="font-medium text-label">Stück:</b> {form.menge || "1"}</span>
                    <span className="w-full">
                      <b className="font-medium text-label">Bearbeitung:</b>{" "}
                      {form.bearbeitung.length ? form.bearbeitung.join(", ") : "keine Angabe"}
                    </span>
                  </div>
                </div>

                {/* Datenschutz-Einwilligung (rechtssicher) */}
                <label className="mt-4 flex items-start gap-3 text-[13.5px] leading-[1.5] text-ink-3">
                  <input
                    type="checkbox"
                    checked={form.datenschutz}
                    onChange={(e) => set("datenschutz", e.target.checked)}
                    className="mt-[3px] h-4 w-4 flex-none accent-blue"
                  />
                  <span>
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-blue underline underline-offset-2">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und willige ein, dass meine Angaben zur Bearbeitung der Anfrage
                    verarbeitet werden. *
                  </span>
                </label>
              </div>
            ) : (
              <div className="px-[10px] py-[30px] text-center">
                <div className="inline-flex h-[62px] w-[62px] items-center justify-center rounded-full bg-blue text-[30px] text-white">
                  ✓
                </div>
                <h2 className="mt-[18px] font-display text-[26px] font-semibold text-navy">
                  Vielen Dank, {form.name || "für Ihre Anfrage"}!
                </h2>
                <p className="mx-auto mt-3 max-w-[46ch] text-[16px] leading-[1.6] text-muted">
                  Ihre Anfrage ist bei uns eingegangen. Wir prüfen Ihr Projekt und melden uns zeitnah
                  mit einem individuellen Angebot.
                  <span className="mt-2 block font-mono text-[13px] text-label">
                    (Demo — es wurde keine Nachricht versendet.)
                  </span>
                </p>
                <button
                  onClick={() => {
                    setStep(1);
                    setSent(false);
                    setForm(emptyForm);
                  }}
                  className="mt-6 rounded-[3px] border border-[rgba(0,16,49,.18)] px-5 py-3 text-[14.5px] font-medium text-navy transition-colors hover:border-blue hover:text-blue"
                >
                  Neue Anfrage
                </button>
              </div>
            )}
          </div>
        )}

        {/* nav buttons */}
        {!sent && (
          <div className="mt-7 flex items-center justify-between border-t border-[rgba(0,16,49,.08)] pt-[22px]">
            <button
              onClick={prev}
              className={`rounded-[3px] border border-[rgba(0,16,49,.18)] px-[22px] py-[14px] text-[15px] font-medium text-ink-3 ${
                step === 1 ? "invisible" : "visible"
              }`}
            >
              ← Zurück
            </button>
            <button
              onClick={next}
              disabled={nextDisabled}
              className={`rounded-[3px] bg-blue px-6 py-[14px] text-[15px] font-semibold text-white transition-colors hover:bg-blue-hover ${
                nextDisabled ? "cursor-not-allowed opacity-50 hover:bg-blue" : ""
              }`}
            >
              {step >= 3 ? "Anfrage senden ✓" : "Weiter →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
