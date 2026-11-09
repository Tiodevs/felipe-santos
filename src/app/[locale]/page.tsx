import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";

const Process = dynamic(() =>
  import("@/components/Process").then((mod) => mod.Process),
);
const Services = dynamic(() =>
  import("@/components/Services").then((mod) => mod.Services),
);
const Work = dynamic(() =>
  import("@/components/Work").then((mod) => mod.Work),
);
const Studies = dynamic(() =>
  import("@/components/Studies").then((mod) => mod.Studies),
);
const Skills = dynamic(() =>
  import("@/components/Skills").then((mod) => mod.Skills),
);

// The menu lists the sections in this same order (`nav.links` in the
// dictionaries); keep both in step when moving a section.
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Process />
      <Services />
      <Work />
      <Studies />
      <Skills />
    </>
  );
}
