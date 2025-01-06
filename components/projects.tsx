"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

import { useActiveSectionInView } from "@/lib/hooks";



/*interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}*/

export default function Projects() {
  const {ref} = useActiveSectionInView('Projects',0.3);

  return (
    <section ref = {ref} id="projects" className="scroll-mt-28 mb-28">
      
      
      <SectionHeading>My projects</SectionHeading>
      <div>
      
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            
            <Project {...project} />
            
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

