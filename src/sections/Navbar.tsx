import { useEffect, useState } from "react"
import GlobeIcon from "@/components/GlobeIcon"

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#activities", label: "activities" },
  { href: "#faculty", label: "faculty" },
  { href: "#team", label: "team" },
  { href: "#join", label: "join" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-paper border-b border-black/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1388px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <GlobeIcon className="w-8 h-8" />
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

        <div className="flex items-center gap-3">
          <a
            href="#join"
            className="font-terminal text-xs uppercase tracking-widest bg-ink text-paper px-5 py-2 hover:opacity-75 transition-opacity"
          >
            Join
          </a>

          {/* mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden font-terminal text-xs uppercase tracking-widest border border-black/25 px-3 py-2 hover:border-black transition-colors"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* mobile overlay */}
      {open && (
        <nav className="md:hidden fixed inset-0 top-14 z-40 bg-paper border-t border-black/10 flex flex-col">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-terminal uppercase tracking-widest text-lg px-6 py-5 border-b border-black/10 opacity-60 hover:opacity-100 hover:bg-black/5 transition-all"
            >
              <span className="opacity-50 mr-3">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <p className="font-terminal text-[10px] uppercase tracking-[0.25em] opacity-30 px-6 mt-6">
            // acsc@aiub — navigate
          </p>
        </nav>
      )}
    </header>
  )
}
