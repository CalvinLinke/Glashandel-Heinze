import { ReactNode } from "react";

export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto w-full max-w-[1280px] px-7 ${className}`}>{children}</div>
);
