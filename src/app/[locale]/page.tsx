import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";

const Process = dynamic(() =>
  import("@/components/Process").then((mod) => mod.Process),
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
//
// The Services section (#servicos) is hidden for now. To bring it back, import
// it with `dynamic` like the others, render <Services /> right after
// <Process />, and restore its `#servicos` link in both dictionaries. The
// component and its copy (`services` in the dictionaries) are kept as they were.
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Process />
      <Work />
      <Studies />
      <Skills />
    </>
  );
}
