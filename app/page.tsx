import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects";
import { ExperienceSection } from "@/components/sections/experience";
import { WorkProcessSection } from "@/components/sections/work-process";
import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <WorkProcessSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
