"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { educationData } from "@/data/data";

interface EducationProps {
  delay?: number;
}

export function Education({ delay = 0 }: EducationProps) {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {educationData.map((education, id) => (
          <BlurFade key={education.school} delay={delay + 0.01 + id * 0.05}>
            <ResumeCard
              key={education.school}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
