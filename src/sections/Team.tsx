const COMMITTEE = [
  {
    name: "MD Tanvir Rayhan",
    id: "24-57762-2",
    role: "Club lead",
    desc: "Sets the direction, chairs the committee, and represents ACSC on campus.",
    tag: "root",
    lead: true,
  },
  {
    name: "Mushfika Islam Meem",
    id: "24-57937-2",
    role: "Operations Coordinator",
    desc: "Plans workshops and events, then makes sure they actually run on time.",
    tag: "ops-1",
  },
  {
    name: "MD. Tasnim Hossain Mahir",
    id: "24-58406-2",
    role: "Operations Coordinator",
    desc: "Works the schedule, the rooms, and the run-of-show for every session.",
    tag: "ops-2",
  },
  {
    name: "Jannat Mim",
    id: "24-58446-2",
    role: "Public relation",
    desc: "Runs the club's social media, outreach, and public image.",
    tag: "pr",
  },
  {
    name: "Shabab Hasan Kafi",
    id: "24-57419-2",
    role: "Finance and documentation",
    desc: "Manages the budget and keeps the club's records and paperwork straight.",
    tag: "vault",
  },
  {
    name: "Sahdat Hossain Nabid",
    id: "24-57176-2",
    role: "Logistic",
    desc: "Sources venues, equipment, and whatever an event needs on the day.",
    tag: "supply",
  },
  {
    name: "Tarikul Islam Sajib",
    id: "24-58718-2",
    role: "Technical operation",
    desc: "Maintains the club's infrastructure: labs, tooling, and CTF platforms.",
    tag: "tech-ops",
  },
  {
    name: "Nadman Alvee Haque",
    id: "24-58715-2",
    role: "Training and research secretary",
    desc: "Builds the workshop calendar and coordinates research projects.",
    tag: "r&d",
  },
  {
    name: "A.S.M Mushfiqur Rahman",
    id: "24-58362-2",
    role: "General secretaries",
    desc: "Takes minutes, handles correspondence, and keeps the committee coordinated.",
    tag: "gs",
  },
  {
    name: "Noushin Tasnim",
    id: "24-58426-2",
    role: "Executive member",
    desc: "Supports events and initiatives wherever an extra pair of hands is needed.",
    tag: "exec-1",
  },
  {
    name: "Sadia Sarwar",
    id: "24-58821-2",
    role: "Executive member",
    desc: "Helps run events, workshops, and member activities across the board.",
    tag: "exec-2",
  },
]

const OPEN_ROLES = [
  {
    title: "Media Secretary",
    blurb: "Runs announcements, covers club news, and keeps the feed alive.",
    tag: "open-media",
  },
  {
    title: "Photographer",
    blurb: "Owns the lens at every event, workshop, and competition.",
    tag: "open-photo",
  },
  {
    title: "Graphics Designer",
    blurb: "Designs posters, banners, and the club's visual identity.",
    tag: "open-design",
  },
]

export default function Team() {
  return (
    <section id="team" className="px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-terminal text-xs uppercase tracking-[0.25em] opacity-40 mb-3">
          04 / Team
        </p>
        <h2 className="ghost-heading mb-10">THE OPERATORS.</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {COMMITTEE.map((m, i) => (
            <div
              key={m.id}
              className={m.lead ? "group col-span-2 md:col-span-1 lg:col-span-2" : "group"}
            >
              <div
                className={`relative overflow-hidden flex flex-col justify-between p-4 md:p-5 min-h-56 md:min-h-60 h-full ${
                  m.lead ? "bg-ink border-2 border-[#00ff00]" : "bg-ink"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-terminal text-[10px] text-white/30 group-hover:text-term transition-colors duration-300">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-terminal text-[10px] text-term opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    uid=0({m.tag})
                  </span>
                </div>

                <div>
                  <div className="font-terminal text-sm md:text-[15px] text-paper leading-snug">
                    {m.name}
                  </div>
                  <div className="font-terminal text-[11px] text-term opacity-80 mt-1 tracking-wider">
                    {m.role}
                  </div>
                  <div className="font-terminal text-[11px] text-white/50 mt-2 leading-relaxed">
                    {m.desc}
                  </div>
                  <div className="font-terminal text-[10px] text-white/40 mt-2">
                    ID {m.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="font-terminal text-xs uppercase tracking-[0.25em] opacity-40 mb-4">
            // open positions
          </p>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {OPEN_ROLES.map((r, i) => (
              <div key={r.tag} className="group">
                <div className="relative overflow-hidden flex flex-col justify-between p-4 h-32 bg-ink border border-dashed border-term/50">
                  <div className="flex items-start justify-between">
                    <span className="font-terminal text-[10px] text-white/30 group-hover:text-term transition-colors duration-300">
                      /R-{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-terminal text-[10px] text-term opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                      uid=0({r.tag})
                    </span>
                  </div>
                  <div>
                    <div className="font-terminal text-sm text-paper leading-snug">
                      {r.title}
                    </div>
                    <div className="font-terminal text-[11px] text-term opacity-80 mt-1 tracking-wider">
                      {r.blurb}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="font-terminal text-xs opacity-40 mt-4">
            // apply via the join form — mention the role you're applying for
          </p>
        </div>

        <p className="font-terminal text-xs opacity-40 mt-8">
          // adhoc committee; the executive committee forms from dedicated members after each tenure
        </p>
      </div>
    </section>
  )
}
