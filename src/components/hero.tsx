"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { TypewriterText } from "@/components/typewriter-text";
import { personalData } from "@/data/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeroProps {
  delay?: number;
}

export function Hero({ delay = 0 }: HeroProps) {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              <TypewriterText
                startDelayMs={Math.max(0, delay) * 1000}
                charDelayMs={65}
                text={`Hi, I'm ${personalData.name.split(" ")[0]} 👋`}
                keepCursor
                onDone={() => setTypingDone(true)}
              />
            </div>
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={delay}
              text={
                <>
                  {personalData.description}
                  {"showBlogLink" in personalData && personalData.showBlogLink ? (
                    <>
                      {" "}
                      <Link
                        href="/blog"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors underline"
                      >
                        Check out my blog
                        <ArrowRight className="size-4" />
                      </Link>
                    </>
                  ) : null}
                </>
              }
            />
          </div>
          {typingDone ? (
            <BlurFade delay={0} blur="0px">
              <div className="relative size-[9.1rem] shrink-0 overflow-hidden rounded-full border bg-muted">
                <Image
                  src={personalData.avatarUrl}
                  alt={personalData.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center"
                  priority
                  quality={92}
                  sizes="9.1rem"
                />
              </div>
            </BlurFade>
          ) : null}
        </div>
      </div>
    </section>
  );
}
