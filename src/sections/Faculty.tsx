const FACULTY = [
  {
    name: "Md. Manirul Islam",
    role: "Associate Professor · Director, ICE & IT (Network Operations)",
    dept: "Department of Computer Science",
    desc: "Club supervisor — oversees the club's activities and connects members with certification pathways through the Institute of Continuing Education.",
    email: "manirul@aiub.edu",
    profile: "https://www.aiub.edu/faculty-list/faculty-profile?q=manirul",
    tag: "supervisor",
    lead: true,
  },
  {
    name: "Rifat Tasnim Anannya",
    role: "Assistant Professor",
    dept: "Department of Computer Science",
    desc: "Guides the club's technical direction, mentors research and CTF training, and connects members with the Cyber Security and Digital Forensics Lab.",
    email: "rifat.tasnim@aiub.edu",
    profile: "https://www.aiub.edu/faculty-list/faculty-profile?q=rifat.tasnim",
    tag: "advisor-1",
  },
  {
    name: "Md. Mazid-Ul-Haque",
    role: "Assistant Professor · Special Assistant, OSA",
    dept: "Department of Computer Science",
    desc: "Supports the club through the Office of Student Affairs — advising event planning, campus logistics, and student engagement initiatives.",
    email: "mazid@aiub.edu",
    profile: "https://www.aiub.edu/faculty-list/faculty-profile?q=mazid",
    tag: "advisor-2",
  },
  {
    name: "Md Sajid Bin-Faisal",
    role: "Assistant Professor",
    dept: "Department of Computer Science",
    desc: "Mentors technical workshops and research circles, with a research focus on blockchain algorithms and applied security.",
    email: "sajid@aiub.edu",
    profile: "https://www.aiub.edu/faculty-list/faculty-profile?q=sajid",
    tag: "advisor-3",
  },
]

export default function Faculty() {
  return (
    <section id="faculty" className="px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-terminal text-xs uppercase tracking-[0.25em] opacity-40 mb-3">
          03 / Faculty
        </p>
        <h2 className="ghost-heading mb-10">THE MENTORS.</h2>

        <div className="grid md:grid-cols-6 gap-4 md:gap-5">
          {FACULTY.map((f, i) => (
            <div key={f.email} className={f.lead ? "group col-span-full md:col-span-6" : "group md:col-span-2"}>
              <div
                className={`relative overflow-hidden flex flex-col justify-between p-4 md:p-5 min-h-56 md:min-h-60 h-full ${
                  f.lead ? "bg-ink border-2 border-[#00ff00]" : "bg-ink"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-terminal text-[10px] text-white/30 group-hover:text-term transition-colors duration-300">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-terminal text-[10px] text-term opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    uid=0({f.tag})
                  </span>
                </div>

                <div>
                  <div className="font-terminal text-sm md:text-[15px] text-paper leading-snug">
                    {f.name}
                  </div>
                  <div className="font-terminal text-[11px] text-term opacity-80 mt-1 tracking-wider">
                    {f.role}
                  </div>
                  <div className="font-terminal text-[11px] text-white/40 mt-0.5 tracking-wider">
                    {f.dept}
                  </div>
                  <div className="font-terminal text-[11px] text-white/50 mt-2 leading-relaxed">
                    {f.desc}
                  </div>
                  <div className="font-terminal text-[10px] text-white/40 mt-2 space-x-3">
                    <a
                      href={`mailto:${f.email}`}
                      className="underline underline-offset-4 decoration-white/20 hover:decoration-term hover:text-term transition-colors"
                    >
                      {f.email}
                    </a>
                    <a
                      href={f.profile}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 decoration-white/20 hover:decoration-term hover:text-term transition-colors"
                    >
                      profile ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="font-terminal text-xs opacity-40 mt-8">
          // club mentors & supervisor, American International University-Bangladesh
        </p>
      </div>
    </section>
  )
}
