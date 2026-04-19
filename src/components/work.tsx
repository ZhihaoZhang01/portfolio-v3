"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { experiencesData } from "@/data/data";

interface WorkProps {
  delay?: number;
}

export function Work({ delay = 0 }: WorkProps) {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        {experiencesData.map((work, id) => (
          <BlurFade key={work.company} delay={delay + 0.01 + id * 0.05}>
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              period={`${work.start} - ${work.end ?? "Present"}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
