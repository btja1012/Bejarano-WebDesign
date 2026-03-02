const chapters = [
  {
    number: "I",
    title: "The Builder",
    body: `It started with curiosity about how things are made. Early on I was building web applications — real ones, in production, for real banks. That experience gave me something most security people don't have: I understood the code before I learned to break it. I knew what it felt like to ship something and care about whether it worked. That foundation never left.`,
  },
  {
    number: "II",
    title: "The Pivot",
    body: `At some point I stopped just building and started asking a different question — how does this break? That question pulled me into application security and never let go. I spent years in the trenches: code reviews, penetration testing, vulnerability management, and incident response under real pressure. The kind of incidents where something is on fire and you're the one who has to put it out. That's where the craft got serious.`,
  },
  {
    number: "III",
    title: "The Current",
    body: `Today I work at Torq — a security hyperautomation startup that has grown into a unicorn, recently valued at $1.2B. Being part of that journey has meant operating at the intersection of security and automation at enterprise scale. Designing workflows that detect and respond to threats autonomously. Working with Fortune 100 teams. Watching a bold idea become a platform that runs millions of security operations every day. The river is moving fast — and I'm in it.`,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-white/20 text-xs tracking-[0.4em] uppercase mb-4">The Journey</p>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-24 leading-tight">
          Three chapters,<br />
          <span className="text-white/40">one river.</span>
        </h2>

        <div className="space-y-24">
          {chapters.map((chapter) => (
            <div key={chapter.number} className="grid md:grid-cols-[80px_1fr] gap-8 md:gap-16 items-start">
              {/* Chapter number */}
              <div className="flex-shrink-0">
                <span className="text-6xl font-thin text-white/8 leading-none select-none">
                  {chapter.number}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4 border-t border-white/5 pt-6">
                <h3 className="text-xl font-light text-white tracking-wide">
                  {chapter.title}
                </h3>
                <p className="text-white/45 font-light leading-relaxed text-lg">
                  {chapter.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
