import type { SkillsT } from "@/lib/translations";

interface Props {
  t: SkillsT;
}

export default function Skills({ t }: Props) {
  return (
    <section id="skills" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-white/20 text-xs tracking-[0.4em] uppercase mb-4">{t.eyebrow}</p>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-20 leading-tight">
          {t.heading}
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {t.groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-white/30 text-xs tracking-[0.3em] uppercase mb-8 border-b border-white/5 pb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/50 font-light text-sm">
                    <span className="text-white/15 mt-1.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
