"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { skillsData } from "@/data/data";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface SkillsProps {
  delay?: number;
}

export function Skills({ delay = 0 }: SkillsProps) {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>(
    skillsData[0]?.category || "",
  );

  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={delay}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">My Skills</h2>
          </div>
        </BlurFade>

        <BlurFade delay={delay + 0.01}>
          <div className="flex flex-wrap justify-center gap-3">
            {skillsData.map((group) => (
              <Button
                key={group.category}
                variant={
                  selectedSkillCategory === group.category
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => setSelectedSkillCategory(group.category)}
                className="px-4 py-2"
              >
                {group.category}
              </Button>
            ))}
          </div>
        </BlurFade>

        <motion.div
          key={selectedSkillCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl">
            {skillsData
              .find((group) => group.category === selectedSkillCategory)
              ?.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: skillIndex * 0.05,
                    duration: 0.2,
                  }}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors w-full h-24 sm:h-28"
                >
                  <span className="text-xs text-center font-medium text-gray-700 dark:text-gray-300 leading-tight mb-2 sm:mb-3 flex-1 flex items-center justify-center">
                    {skill.name}
                  </span>
                  {"icon" in skill && skill.icon && (
                    <Icon
                      icon={skill.icon}
                      className="text-3xl sm:text-4xl mb-1 sm:mb-2 flex-shrink-0"
                    />
                  )}
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
