import { motion } from "framer-motion"
import RotatingBadge from "@/components/RotatingBadge"

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-24">
      <div className="max-w-[1388px] mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* left: editorial type */}
        <div>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="font-terminal text-xs uppercase tracking-[0.25em] opacity-50 mb-8"
          >
            AIUB · Dhaka, Bangladesh
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-pixel text-[13vw] md:text-[64px] lg:text-[84px] leading-[1.05] tracking-tight"
          >
            HACK.
            <br />
            LEARN.
            <br />
            <span className="opacity-30">SECURE.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl leading-relaxed max-w-md text-black/70"
          >
            The student community for ethical hacking, defense and digital
            forensics at American International University-Bangladesh. Practical
            training, real challenges, and a direct line to industry
            professionals from day one.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="#join"
              className="bg-ink text-paper font-terminal text-xs uppercase tracking-widest px-6 py-3.5 hover:opacity-75 transition-opacity"
            >
              Join the club
            </a>
            <a
              href="#events"
              className="font-terminal text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
            >
              See events →
            </a>
          </motion.div>
        </div>

        {/* right: ambient video panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden bg-ink group">
            <img
              src={`${import.meta.env.BASE_URL}images/hero.jpg`}
              alt="Wireframe globe of network particles forming a padlock"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="absolute bottom-0 left-0 bg-ink text-term font-terminal text-[10px] px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            [ LIVE NETWORK FEED ]
          </div>
          <RotatingBadge className="absolute -bottom-6 -right-3 w-20 h-20 sm:w-24 sm:h-24 md:-bottom-8 md:-right-8 md:w-28 md:h-28 bg-paper rounded-full p-1.5" />
        </motion.div>
      </div>
    </section>
  )
}
