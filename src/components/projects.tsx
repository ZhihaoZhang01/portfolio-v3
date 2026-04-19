"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { projectsData } from "@/data/data";

interface ProjectsProps {
  delay?: number;
}

export function Projects({ delay = 0 }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    detailedDescription?: string;
    keyFeatures?: readonly string[];
    dates: string;
    technologies: readonly { name: string; icon?: string }[];
    images?: string[];
    video?: string;
    links?: readonly {
      icon: React.ReactNode;
      type: string;
      href: string;
    }[];
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    // Convert project data to match ProjectModal interface
    const modalProject = {
      title: project.title,
      description: project.description,
      detailedDescription: project.detailedDescription,
      keyFeatures: project.keyFeatures,
      dates: project.dates,
      technologies: project.technologies,
      images: project.image ? [project.image] : undefined,
      video: project.video,
      links: project.links,
    };
    setSelectedProject(modalProject);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (!projectsData.length) return null;

  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={delay}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Projects</h2>
          </div>
        </BlurFade>
        <div className="grid gap-5 max-w-[800px] mx-auto">
          {projectsData.map((project, id) => (
            <BlurFade key={project.title} delay={delay + 0.01 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                image={project.image}
                video={project.video}
                links={project.links}
                onClick={() => handleProjectClick(project)}
              />
            </BlurFade>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
}
