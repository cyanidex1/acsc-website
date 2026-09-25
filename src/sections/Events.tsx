import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Kind =
  | "training"
  | "ctf"
  | "talk"
  | "game"
  | "p2p"
  | "awareness"
  | "network"
  | "research"

type Activity = {
  freq: string
  title: string
  kind: Kind
  desc: string
}

const SEMESTER: Activity[] = [
  {
    freq: "WEEKLY",
    title: "Workshops & Training Sessions",
    kind: "training",
    desc: "Hands-on training on ethical hacking, penetration testing, web & application security, digital forensics, cloud security and IoT/hardware security.",
  },
  {
    freq: "WEEKLY",
    title: "Peer-to-Peer Learning",
    kind: "p2p",
    desc: "Members sit down together and work through real-world cybersecurity problems.",
  },
  {
    freq: "MONTHLY",
    title: "Capture the Flag",
    kind: "ctf",
    desc: "CTF competitions and simulation challenges, from your first flag to full burnout.",
  },
  {
    freq: "MONTHLY",
    title: "Industry Seminars",
    kind: "talk",
    desc: "Career-focused seminars with professionals working across the cybersecurity industry.",
  },
  {
    freq: "QUARTERLY",
    title: "Cyber Quiz & Fun Games",
    kind: "game",
    desc: "Quiz competitions and cyber games that keep every member sharp and engaged.",
  },
]

const ANNUAL: Activity[] = [
  {
    freq: "OCTOBER",
    title: "Cybersecurity Awareness Week",
    kind: "awareness",
    desc: "A campus-wide awareness program aligned with Cybersecurity Awareness Month, open to the entire AIUB community.",
  },
  {
    freq: "ANNUAL",
    title: "Inter-University CTF",
    kind: "ctf",
    desc: "Our flagship competition, with wider participation and harder challenges.",
  },
  {
    freq: "ANNUAL",
    title: "Industry Networking & Career Fair",
    kind: "network",
    desc: "Networking events and career fairs connecting cybersecurity-focused students with employers.",
  },
  {
    freq: "ANNUAL",
    title: "Security Research Seminars",
    kind: "talk",
    desc: "Research and awareness seminars open to all of AIUB: students, faculty and staff.",
  },
  {
    freq: "ONGOING",
    title: "Collaborative Research & Publications",
    kind: "research",
    desc: "Opportunities to work with peers and faculty on publishable cybersecurity research.",
  },
]

const KIND_STYLE: Record<Kind, string> = {
  training: "[TRAINING]",
  ctf: "[CTF]",
  talk: "[SEMINAR]",
  game: "[GAME]",
  p2p: "[P2P]",
  awareness: "[AWARENESS]",
  network: "[NETWORK]",
  research: "[RESEARCH]",
}

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
}

const rowVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

/**
 * Numbered archive entry: oversized index numeral at the left edge,
 * stacked title/meta/desc lines, and a full-row inverse mask on hover
 * (black field + green meta, 0.2s ease).
 */
function ArchiveRow({ e, i }: { e: Activity; i: number }) {
  const num = String(i + 1).padStart(3, "0")
  return (
    <motion.a
      variants={rowVariants}
      href="#join"
      className="group block -mx-4 px-4 py-7 md:py-9 border-b border-black/15 transition-colors duration-200 ease-[ease] hover:bg-ink"
    >
      <div className="grid grid-cols-[auto_1fr] md:grid-cols-[110px_1fr_auto] gap-x-5 md:gap-x-10 items-start">
        <span className="font-pixel text-3xl md:text-5xl leading-none opacity-20 group-hover:opacity-100 group-hover:text-term transition-all duration-200 select-none">
          {num}
        </span>

        <div className="min-w-0">
          <h3 className="text-2xl md:text-4xl font-medium tracking-tight leading-[1.05] group-hover:text-paper transition-colors duration-200">
            {e.title}
          </h3>
          <p className="font-terminal text-xs md:text-sm uppercase tracking-widest mt-2.5 opacity-50 group-hover:opacity-100 group-hover:text-term transition-all duration-200">
            {e.freq} · {KIND_STYLE[e.kind]}
          </p>
          <p className="text-sm md:text-base text-black/60 group-hover:text-white/60 mt-2 max-w-xl transition-colors duration-200">
            {e.desc}
          </p>
        </div>

        <span className="hidden md:block font-terminal text-xs tracking-widest opacity-0 group-hover:opacity-100 group-hover:text-term transition-all duration-200 pt-2">
          [ RSVP -&gt; ]
        </span>
      </div>
    </motion.a>
  )
}

export default function Events() {
  return (
    <section id="activities" className="px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-terminal text-xs uppercase tracking-[0.25em] opacity-40 mb-3">
          02 / Activities
        </p>
        <h2 className="ghost-heading mb-10">THE PLAYBOOK.</h2>

        <Tabs defaultValue="semester">
          <TabsList className="bg-transparent border border-black/20 rounded-none h-9 mb-4">
            <TabsTrigger
              value="semester"
              className="rounded-none font-terminal text-xs uppercase tracking-widest data-[state=active]:bg-ink data-[state=active]:text-term"
            >
              Every Semester
            </TabsTrigger>
            <TabsTrigger
              value="annual"
              className="rounded-none font-terminal text-xs uppercase tracking-widest data-[state=active]:bg-ink data-[state=active]:text-term"
            >
              Every Year
            </TabsTrigger>
          </TabsList>

          <TabsContent value="semester">
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {SEMESTER.map((e, i) => (
                <ArchiveRow key={e.title} e={e} i={i} />
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="annual">
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {ANNUAL.map((e, i) => (
                <ArchiveRow key={e.title} e={e} i={i} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
