import { motion } from "framer-motion"
import { useGlitchKeywords } from "@/hooks/useGlitch"

const KEYWORDS = ["offensive", "defensive", "forensics", "careers"]

const SCOPE = [
  {
    title: "Offensive Security",
    desc: "Ethical hacking, penetration testing, red teaming.",
  },
  {
    title: "Defensive Security",
    desc: "Network security, system hardening, incident response.",
  },
  {
    title: "Career Development",
    desc: "Certifications, job readiness, professional networking.",
  },
  {
    title: "Problem-Solving & Innovation",
    desc: "Community-driven projects, knowledge-sharing, applied learning.",
  },
]

export default function About() {
  const glitch = useGlitchKeywords(KEYWORDS)

  return (
    <section id="about" className="px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-terminal text-xs uppercase tracking-[0.25em] opacity-40 mb-3">
          01 / Mission
        </p>
        <h2 className="ghost-heading mb-10">WE BREAK TO<br />PROTECT.</h2>

        <p className="text-lg md:text-2xl leading-relaxed max-w-3xl">
          ACSC prepares students for {glitch("careers")} in cybersecurity
          through practical training in ethical hacking, penetration testing,
          and {glitch("defensive")} security practices. We create a platform
          where students develop technical skills, learn from industry
          professionals, and build a strong community dedicated to
          problem-solving, innovation, and professional growth. Our scope runs
          from {glitch("offensive")} operations to digital {glitch("forensics")}{" "}
          and the work they open up.
        </p>

        <div className="mt-16 grid md:grid-cols-[auto_1fr] gap-6 md:gap-14 border-t border-black/15 pt-10">
          <p className="font-terminal text-xs uppercase tracking-[0.25em] opacity-40">
            01.5 / Vision
          </p>
          <p className="text-base md:text-xl leading-relaxed text-black/70 max-w-3xl">
            To position AIUB as a hub for future-ready cybersecurity
            professionals by fostering hands-on skills, encouraging teamwork,
            and building a network of ethical hackers and information security
            researchers who protect digital infrastructure, both nationally and
            globally.
          </p>
        </div>

        <div className="mt-16">
          <p className="font-terminal text-xs uppercase tracking-[0.25em] opacity-40 mb-8">
            Scope of operations
          </p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/15 border border-black/15"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {SCOPE.map((s, i) => (
              <motion.div
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="bg-paper p-7 md:p-9 group hover:bg-ink transition-colors duration-200"
              >
                <div className="font-terminal text-xs opacity-40 group-hover:text-term group-hover:opacity-100 transition-colors duration-200">
                  /{String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-pixel text-lg md:text-xl mt-4 leading-snug group-hover:text-paper transition-colors duration-200">
                  {s.title}
                </div>
                <div className="font-terminal text-xs md:text-sm mt-3 text-black/60 group-hover:text-white/60 transition-colors duration-200 leading-relaxed">
                  {s.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
