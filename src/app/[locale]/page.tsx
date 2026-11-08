import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";

const Services = dynamic(() =>
  import("@/components/Services").then((mod) => mod.Services),
);
const Work = dynamic(() =>
  import("@/components/Work").then((mod) => mod.Work),
);
const Process = dynamic(() =>
  import("@/components/Process").then((mod) => mod.Process),
);
const Studies = dynamic(() =>
  import("@/components/Studies").then((mod) => mod.Studies),
);

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <Studies />
    </>
  );
}
