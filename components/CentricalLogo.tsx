/**
 * Original mark echoing Centrical's ring-figure motif: an open ring drawn in
 * three brand arcs (green, lime, magenta) with a violet head-dot. Not their
 * logo; a from-scratch cousin so the wordmark reads native on their palette.
 */
export function RingMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* head dot */}
      <circle cx="16" cy="6.5" r="3.1" fill="#8B5CF6" />
      {/* open ring, three arcs */}
      <path
        d="M 8.9 24.9 A 9.5 9.5 0 0 1 7.2 13.4"
        stroke="#2BB673"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M 24.8 13.2 A 9.5 9.5 0 0 1 23.2 24.8"
        stroke="#C6D92D"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M 20.4 27.2 A 9.5 9.5 0 0 1 11.7 27.2"
        stroke="#E11C8E"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function CentricalLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`ce-logo${inverted ? " ce-logo--inverted" : ""}`}>
      <RingMark />
      <span className="ce-logo-word">
        bar<span className="ce-logo-for"> for </span>centrical
      </span>
    </span>
  );
}
