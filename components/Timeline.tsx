import type { TimelineT } from "@/lib/translations";

interface Props {
  t: TimelineT;
}

export default function Timeline({ t }: Props) {
  return (
    <section id="timeline" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-white/20 text-xs tracking-[0.4em] uppercase mb-4">{t.eyebrow}</p>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-24 leading-tight">
          {t.heading1}<br />
          <span className="text-white/40">{t.heading2}</span>
        </h2>

        <div className="space-y-24">
          {t.chapters.map((chapter) => (
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
