import { useEffect, useState } from "react"

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#activities", label: "activities" },
  { href: "#faculty", label: "faculty" },
  { href: "#team", label: "team" },
  { href: "#join", label: "join" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper border-b border-black/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1388px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative w-9 h-9 rounded-full overflow-hidden bg-ink shrink-0">
            <video
              src={`${import.meta.env.BASE_URL}images/hero-loop.mp4`}
              className="absolute inset-0 w-full h-full object-cover scale-[1.6] animate-spin-slow"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/acsc-logo.png`}
              alt="ACSC club logo"
              className="absolute inset-0 w-full h-full object-contain p-1 invert"
            />
          </span>
          <span className="font-terminal font-bold text-sm tracking-widest uppercase">
            acsc<span className="opacity-40 group-hover:opacity-100 transition-opacity">@aiub</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="font-terminal text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
            >
              <span className="opacity-50 mr-1.5">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#join"
          className="font-terminal text-xs uppercase tracking-widest bg-ink text-paper px-5 py-2 hover:opacity-75 transition-opacity"
        >
          Join
        </a>
      </div>
    </header>
  )
}
