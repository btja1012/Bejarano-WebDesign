import Image from "next/image";
import type { PhilosophyT } from "@/lib/translations";

interface Props {
  t: PhilosophyT;
}

export default function Philosophy({ t }: Props) {
  return (
    <section id="philosophy" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <p className="text-white/20 text-xs tracking-[0.4em] uppercase mb-16">{t.eyebrow}</p>

        <div className="grid md:grid-cols-3 gap-16 items-start">
          {/* Photo */}
          <div className="md:col-span-1">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src="/andres.jpg"
                alt="Andres Bejarano"
                fill
                className="object-cover object-top grayscale"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <p className="text-white/15 text-xs mt-3 tracking-widest uppercase">{t.caption}</p>
          </div>

          {/* Main story */}
          <div className="md:col-span-2 space-y-12">
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              {t.heading1}<br />
              <span className="text-white/40">{t.heading2}</span>
            </h2>

            <div className="space-y-5 text-white/50 font-light leading-relaxed text-lg">
              {t.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Facts */}
            <div className="space-y-0 pt-4 border-t border-white/5">
              {t.facts.map((item) => (
                <div key={item.label} className="flex gap-6 py-4 border-b border-white/5">
                  <span className="text-white/20 text-xs tracking-widest uppercase w-28 flex-shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-white/60 font-light text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
