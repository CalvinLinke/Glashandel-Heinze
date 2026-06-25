import { SVGProps } from "react";

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.4" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <span className={`font-mono ${className}`}>→</span>
);
