import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
