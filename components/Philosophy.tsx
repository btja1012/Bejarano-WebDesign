export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <p className="text-white/20 text-xs tracking-[0.4em] uppercase mb-16">The Source</p>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Main story */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              川 means river.<br />
              <span className="text-white/40">It also means let go.</span>
            </h2>

            <div className="space-y-5 text-white/50 font-light leading-relaxed text-lg">
              <p>
                I picked the name Kawa because a river doesn&apos;t fight its path.
                It flows around obstacles, carves through rock over time, and always
                finds its way forward. That&apos;s how I&apos;ve tried to approach my career.
              </p>
              <p>
                I started in web development — building financial applications, learning
                how the web works from the inside. Then I saw the other side: how those
                same systems get broken. That curiosity pulled me into security, and I
                never looked back.
              </p>
              <p>
                Nine years later I&apos;ve worked incident response under pressure, automated
                threat detection pipelines, guided enterprise teams through OWASP hardening,
                and kept building side projects on nights and weekends because I genuinely
                love making things.
              </p>
              <p>
                Kawa is the thread that ties all of it together — the mindset of staying in
                motion, letting go of what doesn&apos;t serve the journey, and trusting that
                the current knows where it&apos;s going.
              </p>
            </div>
          </div>

          {/* Facts */}
          <div className="space-y-6 pt-4">
            {[
              { label: "Based in", value: "Heredia, Costa Rica" },
              { label: "Current role", value: "Technical Support Engineer · Torq" },
              { label: "Experience", value: "9+ years in AppSec & Software Development" },
              { label: "Specialty", value: "Application Security · API Security · Automation" },
              { label: "Studying", value: "Web Development & Design · Universidad Fidelitas" },
              { label: "Philosophy", value: "Let it flow — keep building, keep learning" },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 py-5 border-b border-white/5">
                <span className="text-white/20 text-xs tracking-widest uppercase w-28 flex-shrink-0 pt-0.5">
                  {item.label}
                </span>
                <span className="text-white/70 font-light">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
