"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { newsData } from "@/data/data";
import Markdown from "react-markdown";

interface NewsProps {
  delay?: number;
}

export function News({ delay = 0 }: NewsProps) {
  if (!newsData.length) return null;

  return (
    <section id="news">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay}>
          <h2 className="text-xl font-bold">News</h2>
        </BlurFade>
        <ul className="space-y-4 list-none m-0 p-0">
          {newsData.map((item, id) => (
            <BlurFade key={id} delay={delay + 0.01 + id * 0.05}>
              <li className="text-sm text-muted-foreground flex flex-col gap-1 sm:flex-row sm:gap-3">
                {item.date ? (
                  <span className="shrink-0 font-medium text-foreground tabular-nums">
                    [{item.date}]
                  </span>
                ) : null}
                <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert prose-p:my-0">
                  {item.body}
                </Markdown>
              </li>
            </BlurFade>
          ))}
        </ul>
      </div>
    </section>
  );
}
