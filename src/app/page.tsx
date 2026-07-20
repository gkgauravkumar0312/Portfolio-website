import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { DSA } from "@/components/sections/DSA";
import { GitHubStats } from "@/components/sections/GitHubStats";
import { Achievements } from "@/components/sections/Achievements";
import { Certificates } from "@/components/sections/Certificates";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <DSA />
      <GitHubStats />
      <Achievements />
      <Certificates />
      <Resume />
      <Contact />
    </>
  );
}
