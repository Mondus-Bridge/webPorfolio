import React from 'react';

type Props = React.SVGProps<SVGSVGElement>;

export default function SunIcon(props: Props) {
  return (
    <svg
      {...props} /* Spread incoming variables first */
      viewBox="0 0 24 24" /* Verify this viewBox values array matches your original vector graphic asset */
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}