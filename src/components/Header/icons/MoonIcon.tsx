import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function MoonIcon(props: Props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24" /* Verify this viewBox matches your original moon vector file specifications */
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ 
        width: '1rem',  /* Forces precise Tailwind h-4 rendering */
        height: '1rem', /* Forces precise Tailwind w-4 rendering */
        ...props.style 
      }}
    >
      {/* Keep your exact original vector path strings here! For example: */}
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}