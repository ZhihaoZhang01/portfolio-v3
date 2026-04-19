"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { personalData } from "@/data/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  delay?: number;
}

export function Hero({ delay = 0 }: HeroProps) {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={delay}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${personalData.name.split(" ")[0]} 👋`}
            />
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
          <BlurFade delay={delay}>
            <Avatar className="size-[9.1rem] border">
              <AvatarImage
                alt={personalData.name}
                src={personalData.avatarUrl}
              />
              <AvatarFallback>{personalData.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
