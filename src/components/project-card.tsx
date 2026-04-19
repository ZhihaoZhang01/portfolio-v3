"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  onClick?: () => void;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  link,
  image,
  video,
  links,
  className,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0">
      <section
        className="bg-gray-50 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden hover:bg-gray-100 hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-300 hover:-translate-y-1 transition-all duration-150 ease-out dark:text-white dark:bg-white/5 dark:hover:bg-white/10 dark:hover:shadow-gray-900/50 dark:hover:border-gray-600 cursor-pointer active:scale-[0.98] group-hover:scale-[1.01]"
        onClick={handleClick}
      >
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="flex flex-col p-6 lg:w-1/2 lg:min-h-0">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>

            <Markdown className="leading-relaxed text-gray-700 dark:text-white/70 mb-3 prose max-w-full text-pretty font-sans text-sm dark:prose-invert">
              {description}
            </Markdown>

            <div className="flex flex-wrap gap-2">
              {link && (
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="mr-2 text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <BiLinkExternal className="mr-1 w-4 h-4" /> Live
                  </a>
                </Button>
              )}

              {links &&
                links.length > 0 &&
                links.map((linkItem, idx) => {
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
                        onClick={(e) => e.stopPropagation()}
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
                  } else if (linkItem.type.toLowerCase().includes("github")) {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="outline"
                        size="sm"
                        className="mr-2 text-sm"
                        onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
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

          <div className="hidden min-w-0 shrink-0 p-6 pl-4 lg:flex lg:w-1/2 lg:items-start lg:justify-end">
            {image ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element -- local /public; avoids next/image + flex sizing issues */}
                <img
                  src={image}
                  alt={title}
                  className="max-h-[min(26.4rem,62.4vh)] w-full max-w-[33.6rem] object-contain object-right shadow-lg"
                />
              </>
            ) : null}

            {video ? (
              <div className="relative ml-auto min-h-[12rem] w-full max-w-md">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full rounded-lg object-contain object-right shadow-lg"
                />
              </div>
            ) : null}
          </div>
        </div>

        {image ? (
          <div className="border-t border-black/5 px-6 py-4 dark:border-white/10 lg:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={title}
              className="mx-auto max-h-[19.2rem] w-full max-w-[33.6rem] object-contain shadow-lg"
            />
          </div>
        ) : null}
      </section>
    </motion.div>
  );
}
