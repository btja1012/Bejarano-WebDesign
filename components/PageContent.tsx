import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RiverLine from "@/components/RiverLine";
import Philosophy from "@/components/Philosophy";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { translations, type Lang } from "@/lib/translations";

interface Props {
  lang: Lang;
}

export default function PageContent({ lang }: Props) {
  const t = translations[lang];

  return (
    <main>
      <Navbar />
      <Hero t={t.hero} />
      <RiverLine />
      <Philosophy t={t.philosophy} />
      <RiverLine />
      <Timeline t={t.timeline} />
      <RiverLine />
      <Projects t={t.projects} />
      <RiverLine />
      <Skills t={t.skills} />
      <RiverLine />
      <Contact t={t.contact} />
    </main>
  );
}
