// src/components/icons/QrIcon.tsx
import * as React from "react";

export default function QrIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Top Left Alignment Anchor */}
      <path d="M3 3h6v6H3V3zm3 3h0" />
      
      {/* Top Right Alignment Anchor */}
      <path d="M15 3h6v6h-6V3zm3 3h0" />
      
      {/* Bottom Left Alignment Anchor */}
      <path d="M3 15h6v6H3v-6zm3 3h0" />
      
      {/* Structured Internal Matrix Data Fragments */}
      <path d="M15 15h2v2h-2zm2 2h2v2h-2zm2-2h2v2h-2zm-2 2v2h-2v-2zm4 2v2h-2v-2zm-4-4h2v2h-2zm2-2h2v2h-2zm-2-2h2v2h-2zm2-2h2v2h-2z" />
    </svg>
  );
}