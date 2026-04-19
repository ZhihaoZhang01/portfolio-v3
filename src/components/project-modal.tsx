"use client";

import { useState, memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import { Icon } from "@iconify/react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
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
  };
}

export const ProjectModal = memo(function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project?.images && project.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === project.images!.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (project?.images && project.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images!.length - 1 : prev - 1,
      );
    }
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6 space-y-6">
            {/* Image Carousel */}
            {project.images && project.images.length > 0 && (
              <div className="relative">
                <div className="relative w-full h-80 md:h-96 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    unoptimized={project.images[currentImageIndex]
                      .toLowerCase()
                      .endsWith(".gif")}
                    className="object-contain"
                  />

                  {/* Navigation arrows */}
                  {project.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>

                {/* Image indicators */}
                {project.images.length > 1 && (
                  <div className="flex justify-center mt-4 space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? "bg-blue-500"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Video */}
            {project.video && (
              <div className="w-full h-64 md:h-80 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Project Details */}
            <div className="space-y-4">
              <div className="prose max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-li:text-gray-700 dark:prose-li:text-white/70">
                <Markdown className="text-gray-700 dark:text-white/70">
                  {project.detailedDescription || project.description}
                </Markdown>
              </div>

              {project.links && project.links.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Links
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((linkItem, idx) => {
                      if (
                        linkItem.type.toLowerCase().includes("demo") ||
                        linkItem.type.toLowerCase().includes("video")
                      ) {
                        return (
                          <Button
                            key={idx}
                            asChild
                            variant="default"
                            size="sm"
                            className="mr-2 text-sm"
                          >
                            <a
                              href={linkItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <AiFillYoutube className="mr-1 w-4 h-4" /> Demo
                            </a>
                          </Button>
                        );
                      } else if (
                        linkItem.type.toLowerCase().includes("github")
                      ) {
                        return (
                          <Button
                            key={idx}
                            asChild
                            variant="outline"
                            size="sm"
                            className="mr-2 text-sm"
                          >
                            <a
                              href={linkItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <AiFillGithub className="mr-1 w-4 h-4 opacity-70" />{" "}
                              <span className="opacity-70">GitHub</span>
                            </a>
                          </Button>
                        );
                      } else {
                        return (
                          <Button
                            key={idx}
                            asChild
                            variant="default"
                            size="sm"
                            className="mr-2 text-sm"
                          >
                            <a
                              href={linkItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <BiLinkExternal className="mr-1 w-4 h-4" />{" "}
                              {linkItem.type}
                            </a>
                          </Button>
                        );
                      }
                    })}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm flex items-center gap-2 px-3 py-1"
                    >
                      {tech.icon && (
                        <Icon icon={tech.icon} className="w-4 h-4" />
                      )}
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2 list-none ml-3">
                    {project.keyFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700 dark:text-white/70"
                      >
                        <span className="text-gray-500 dark:text-gray-400 mr-3 mt-0.5 flex-shrink-0">
                          •
                        </span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
