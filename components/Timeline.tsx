const events = [
  {
    year: "2010",
    title: "Where it began",
    org: "Saint Thomas Educational Center",
    description:
      "High school diploma. The first chapter closes, the river starts to move.",
    type: "education",
  },
  {
    year: "2014",
    title: "Learning to build",
    org: "Universidad Fidelitas",
    description:
      "Web Development & Design. First encounter with how the internet is made — HTML, CSS, the fundamentals. The curiosity that would define everything after.",
    type: "education",
  },
  {
    year: "2015",
    title: "First current",
    org: "Accenture SRL · CMS Developer",
    description:
      "Built and tested secure financial web applications for Citibank using TeamSite CMS. First professional contact with real-world security requirements, compliance standards, and production systems that people actually depend on.",
    type: "work",
  },
  {
    year: "2016",
    title: "Going deeper",
    org: "Universidad Veritas · Web Design & Interaction",
    description:
      "Kept studying while working. Design, interaction, the human side of software. A river doesn't stop — it picks up new things along the way.",
    type: "education",
  },
  {
    year: "2017",
    title: "The pivot",
    org: "Micro Focus · Application Security Engineer",
    description:
      "This is where security became the work. Code reviews, vulnerability scanning, penetration testing across enterprise applications using the Fortify suite. Led incident response during critical breaches — coordinating containment under pressure, restoring integrity, and learning what it means to operate when stakes are real.",
    type: "work",
    highlight: true,
  },
  {
    year: "2018–2019",
    title: "Formalizing the craft",
    org: "CENFOTEC · CyberSec506",
    description:
      "SQL Developer certification. Certified Ethical Hacker (CEH) course. The river flows into new channels — deeper technical knowledge, sharper instincts.",
    type: "education",
  },
  {
    year: "2020",
    title: "Named and certified",
    org: "Elev8 · Cybersecurity Certificate",
    description:
      "Cybersecurity Certificate. A formal acknowledgment of what had been built over three years in the trenches at Micro Focus. Letting that chapter go, ready for the next bend.",
    type: "education",
  },
  {
    year: "2022",
    title: "Enterprise scale",
    org: "OpenText · Enterprise Support Engineer",
    description:
      "Security at enterprise scale. Secure deployments, vulnerability diagnostics across hardware, software, and network environments. Trend analysis, proactive defense recommendations. A wider view of how organizations fail and how they can be hardened.",
    type: "work",
  },
  {
    year: "2023",
    title: "Where the river flows now",
    org: "Torq · Technical Support Engineer",
    description:
      "Designing and optimizing automated security workflows. Real-time threat detection, API payload inspection, OAuth2 and gRPC integrations. Python scripting for threat correlation. Advising enterprise customers on OWASP Top 10 and API Top 10. The intersection of security and automation — everything the journey was building toward.",
    type: "work",
    highlight: true,
    current: true,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-white/20 text-xs tracking-[0.4em] uppercase mb-4">The Current</p>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-20 leading-tight">
          The journey so far
        </h2>

        <div className="relative">
          {/* River line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-0">
            {events.map((event, i) => (
              <div key={i} className="relative pl-10 pb-16 last:pb-0">
                {/* Node */}
                <div
                  className={`absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[3px] border ${
                    event.current
                      ? "bg-white border-white"
                      : event.highlight
                      ? "bg-white/40 border-white/40"
                      : "bg-transparent border-white/20"
                  }`}
                />

                {/* Year */}
                <p className="text-white/20 text-xs tracking-widest uppercase mb-2">
                  {event.year}
                  {event.current && (
                    <span className="ml-3 text-white/40">· Present</span>
                  )}
                </p>

                {/* Title */}
                <h3 className={`text-xl font-light mb-1 ${event.highlight ? "text-white" : "text-white/70"}`}>
                  {event.title}
                </h3>

                {/* Org */}
                <p className="text-white/30 text-sm mb-4">{event.org}</p>

                {/* Description */}
                <p className="text-white/40 font-light leading-relaxed max-w-2xl">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
