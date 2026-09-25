/**
 * Rotating circular text badge: SVG text-on-path, one full revolution
 * every 24s (ambient, ever-present motion).
 */
export default function RotatingBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`animate-spin-slow ${className}`}
      aria-hidden="true"
    >
      <defs>
        <path
          id="badge-circle"
          d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
        />
      </defs>
      <text
        className="font-terminal"
        fontSize="7.5"
        letterSpacing="0.9"
        fill="#0b0b0b"
      >
        <textPath href="#badge-circle">
          HACK · LEARN · SECURE · AIUB CYBERSECURITY CLUB ·
        </textPath>
      </text>
      <circle cx="60" cy="60" r="3" fill="#0b0b0b" />
    </svg>
  )
}
