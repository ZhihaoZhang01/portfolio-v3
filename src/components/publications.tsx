"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { publicationsData } from "@/data/data";
import Image from "next/image";
import Markdown from "react-markdown";

interface PublicationsProps {
  delay?: number;
}

export function Publications({ delay = 0 }: PublicationsProps) {
  if (!publicationsData.length) return null;

  return (
    <section id="publications">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={delay}>
          <h2 className="text-xl font-bold">Selected publications</h2>
        </BlurFade>
        <ol className="list-none m-0 p-0 space-y-8">
          {publicationsData.map((pub, id) => (
            <BlurFade key={id} delay={delay + 0.01 + id * 0.05}>
              <li className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                {pub.image ? (
                  <div className="shrink-0 w-full sm:w-[220px] md:w-[260px]">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-muted/30">
                      <Image
                        src={pub.image}
                        alt={pub.title}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 640px) 100vw, 260px"
                      />
                    </div>
                  </div>
                ) : null}
                <div className="min-w-0 flex-1 space-y-2">
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    {pub.title}
                  </p>
                  <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert prose-p:my-1">
                    {pub.markdown}
                  </Markdown>
                </div>
              </li>
            </BlurFade>
          ))}
        </ol>
      </div>
    </section>
  );
}
