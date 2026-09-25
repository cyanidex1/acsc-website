/**
 * 3D wireframe globe (pure CSS 3D, no assets/JS animation):
 * meridian rings spin around the vertical axis inside a tilted frame,
 * so it reads as a desktop globe rotating on its stand.
 */
const MERIDIANS = [0, 30, 60, 90, 120, 150]

export default function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`globe3d ${className}`} aria-hidden="true">
      <span className="g-tilt">
        <span className="g-spin">
          {MERIDIANS.map((d) => (
            <span key={d} className="g-ring" style={{ transform: `rotateY(${d}deg)` }} />
          ))}
          {/* equator + latitude rings */}
          <span className="g-ring" style={{ transform: "rotateX(90deg)" }} />
          <span
            className="g-ring g-lat"
            style={{ transform: "rotateX(90deg) translateZ(9px)" }}
          />
          <span
            className="g-ring g-lat"
            style={{ transform: "rotateX(90deg) translateZ(-9px)" }}
          />
        </span>
      </span>
    </span>
  )
}
