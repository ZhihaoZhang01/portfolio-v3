import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Work } from "@/components/work";
import { News } from "@/components/news";
import { Publications } from "@/components/publications";
import { Projects } from "@/components/projects";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero delay={BLUR_FADE_DELAY} />

      <About delay={BLUR_FADE_DELAY * 3} />

      <News delay={BLUR_FADE_DELAY * 5} />

      <Publications delay={BLUR_FADE_DELAY * 7} />

      <Projects delay={BLUR_FADE_DELAY * 9} />

      <Education delay={BLUR_FADE_DELAY * 11} />

      <Work delay={BLUR_FADE_DELAY * 13} />

      <Contact delay={BLUR_FADE_DELAY * 15} />
    </main>
  );
}
