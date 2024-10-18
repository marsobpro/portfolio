"use client";
import SectionHeader from "@/components/SectionHeader";
import { useMemo } from "react";
import { portfolioProjects } from "@/utils/constants";
import Card from "@/components/Card/Card";
import ProjectCardContent from "@/components/Projects/ProjectCardContent";

export const ProjectsSection = () => {
  const projectCards = useMemo(
    () =>
      portfolioProjects.map((project, index) => (
        <Card
          className="sticky top-16 px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
          style={{ top: `calc(64px + ${index * 40}px)` }}
          key={project.title}
        >
          <ProjectCardContent project={project} />
        </Card>
      )),
    [portfolioProjects]
  );

  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          title={"Featured projects"}
          eyebrow={"Featured projects"}
          description={
            " See how i transformed concepts into engaging digital experiences."
          }
        />

        {/* Cards */}
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {projectCards}
        </div>
      </div>
    </section>
  );
};
