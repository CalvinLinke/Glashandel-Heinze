// Navy-Verlauf + Fugenraster + diagonaler Glanz + Mono-Caption (README §6.6)
export const ImagePlaceholder = ({
  caption,
  className = "",
  lines = 56,
}: {
  caption: string;
  className?: string;
  lines?: number;
}) => (
  <div
    className={`relative overflow-hidden bg-[linear-gradient(140deg,#0a2a52,#001031)] ${className}`}
  >
    <div
      className="absolute inset-0"
      style={{
        background: `repeating-linear-gradient(90deg,rgba(159,195,233,.12) 0 1px,transparent 1px ${lines}px),repeating-linear-gradient(0deg,rgba(159,195,233,.09) 0 1px,transparent 1px ${lines}px)`,
      }}
    />
    <div className="absolute -left-[30%] top-0 h-full w-[42%] -skew-x-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)]" />
    <span className="absolute bottom-3 left-3 border border-white/25 bg-white/10 px-[10px] py-[6px] font-mono text-[11px] tracking-[.12em] text-white/85 backdrop-blur-[6px]">
      {caption}
    </span>
  </div>
);
