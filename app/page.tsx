import { About, Hero, Prizes, Registration } from "@/app/_components";
import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";
import Roadmap from "./_components/roadmap";

export default function Home() {
  return (
    <>
      <SectionLayout full gapless>
        <Hero />
        <About />
      </SectionLayout>

      <section className="relative h-fit bg-secondary">
        <div className="z-20 h-full flex-shrink-0 -rotate-1 transform border border-x-0 border-t-0 border-quarternary bg-tertiary py-2 md:py-4">
          <TextMarquee mode="dark" />
        </div>
        <div className="absolute bottom-0 z-0 h-full w-full flex-shrink-0 -rotate-2 transform border border-x-0 border-t-0 border-quarternary bg-primary py-2 md:py-4">
          <TextMarquee mode="dark" />
        </div>
      </section>

      <SectionLayout>
        <Prizes />
        <Registration />
        <Roadmap />
      </SectionLayout>
    </>
  );
}
