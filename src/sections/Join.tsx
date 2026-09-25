import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const inputCls =
  "bg-transparent border-0 border-b border-black/30 rounded-none px-0 font-terminal text-sm focus-visible:ring-0 focus-visible:border-black transition-colors"

export default function Join() {
  const [sent, setSent] = useState(false)

  return (
    <section id="join" className="px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20">
        <div>
          <p className="font-terminal text-xs uppercase tracking-[0.25em] opacity-40 mb-3">
            04 / Join
          </p>
          <h2 className="ghost-heading mb-8">REQUEST<br />ACCESS.</h2>
          <p className="text-lg leading-relaxed text-black/70 max-w-md">
            Membership is open to all registered AIUB students interested in
            cybersecurity and ethical hacking. No experience required;
            curiosity is the only prerequisite.
          </p>

          <ul className="mt-8 space-y-2.5 font-terminal text-sm">
            <li>
              <span className="opacity-40 mr-3">EMAIL</span>
              <a href="mailto:aiubcybersecclub@gmail.com" className="underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors">
                aiubcybersecclub@gmail.com
              </a>
            </li>
            <li>
              <span className="opacity-40 mr-3">ROOM</span>
              <span className="opacity-70">AIUB campus, see bulletin for lab no.</span>
            </li>
            <li>
              <span className="opacity-40 mr-3">SOCIAL</span>
              <a href="https://www.facebook.com/acscaiub" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-black/30 hover:decoration-black transition-colors">
                facebook.com/acscaiub
              </a>
            </li>
          </ul>

          <div className="mt-10 border-t border-black/15 pt-6">
            <p className="font-terminal text-xs uppercase tracking-widest opacity-40 mb-4">
              Membership guidelines
            </p>
            <ul className="space-y-2.5 font-terminal text-sm text-black/70 leading-relaxed">
              <li>» Members are encouraged to actively participate in events, challenges and training programs.</li>
              <li>» An executive committee is formed from dedicated, skilled students willing to lead initiatives.</li>
              <li>» Certificates are awarded for contribution, leadership and successful completion of tenure.</li>
            </ul>
          </div>
        </div>

        <div className="self-start md:pt-16">
          {sent ? (
            <div className="font-terminal text-sm leading-loose border-t-2 border-black pt-6">
              <p className="font-pixel text-lg mb-3">[✓] Received.</p>
              <p className="text-black/70">
                Welcome to ACSC. Our outreach team will reach out within 48
                hours. Keep an eye on your inbox.
              </p>
            </div>
          ) : (
            <form
              className="space-y-7"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <div>
                <label className="font-terminal text-xs uppercase tracking-widest opacity-50 block mb-1.5">
                  Your name
                </label>
                <Input required placeholder="Jane Doe" className={inputCls} />
              </div>

              <div>
                <label className="font-terminal text-xs uppercase tracking-widest opacity-50 block mb-1.5">
                  AIUB email
                </label>
                <Input required type="email" placeholder="xxxx@aiub.edu" className={inputCls} />
              </div>

              <div>
                <label className="font-terminal text-xs uppercase tracking-widest opacity-50 block mb-1.5">
                  Why you <span className="normal-case">(optional)</span>
                </label>
                <Textarea
                  rows={2}
                  placeholder="I want to understand how systems break…"
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ink text-paper font-terminal text-sm uppercase tracking-widest py-4 hover:opacity-75 transition-opacity"
              >
                Request access →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
