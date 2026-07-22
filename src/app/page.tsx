import { AboutSection } from "@/components/AboutSection";
import { Capabilities } from "@/components/Capabilities";
import { ContactCTA } from "@/components/ContactCTA";
import { EducationCertification } from "@/components/EducationCertification";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { PortfolioEcosystem } from "@/components/PortfolioEcosystem";
import { SelectedWork } from "@/components/SelectedWork";
import { SkillGroups } from "@/components/SkillGroups";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { projects } from "@/data/projects";

export default function HomePage() {
  const visibleProjects = projects.filter(
    (project) => !project.hidden && !project.ecosystemOnly,
  );

  return (
    <>
      <Hero />
      <SelectedWork projects={visibleProjects} />
      <PortfolioEcosystem />
      <Capabilities />
      <WorkflowDiagram />
      <AboutSection />
      <ExperienceTimeline />
      <SkillGroups />
      <EducationCertification />
      <ContactCTA />
    </>
  );
}
