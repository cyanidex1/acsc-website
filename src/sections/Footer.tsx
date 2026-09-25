import { ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="pt-20">
      <div className="px-6 md:px-12">
        <div className="max-w-5xl mx-auto border-t border-black/15 pt-10 pb-14 grid md:grid-cols-3 gap-10">
          <div>
            <img src={`${import.meta.env.BASE_URL}images/acsc-logo.png`} alt="ACSC logo" className="w-24 mix-blend-multiply" />
            <p className="font-terminal text-xs opacity-50 mt-4 leading-relaxed">
              HACK. LEARN. SECURE.
              <br />
              AIUB Cybersecurity Club
            </p>
          </div>

          <div className="font-terminal text-sm space-y-2.5">
            <div className="text-xs uppercase tracking-widest opacity-40 mb-4">Navigate</div>
            {[
              ["#about", "About"],
              ["#activities", "Activities"],
              ["#team", "Team"],
              ["#join", "Join"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="block w-fit underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="font-terminal text-sm space-y-2.5">
            <div className="text-xs uppercase tracking-widest opacity-40 mb-4">Channels</div>
            <a
              href="https://www.facebook.com/acscaiub"
              target="_blank"
              rel="noreferrer"
              className="block w-fit underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors"
            >
              Facebook
            </a>
            <a
              href="mailto:aiubcybersecclub@gmail.com"
              className="block w-fit underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-black/15 py-6 flex items-center justify-between font-terminal text-xs opacity-50">
          <span>© 2026 ACSC / AIUB Cybersecurity Club</span>
          <a
            href="#top"
            className="flex items-center gap-1.5 hover:opacity-100 transition-opacity"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
