import { ReactNode } from "react";

// Wiederkehrendes Mono-Label mit 8x8px blauem Quadrat (README §6.2)
export const MonoKicker = ({
  children,
  tone = "blue",
  className = "",
}: {
  children: ReactNode;
  tone?: "blue" | "ice";
  className?: string;
}) => (
  <div
    className={`flex items-center gap-[10px] font-mono text-[12px] uppercase tracking-[.18em] ${
      tone === "ice" ? "text-ice" : "text-blue"
    } ${className}`}
  >
    <span className="inline-block h-2 w-2 flex-none bg-blue" />
    {children}
  </div>
);
