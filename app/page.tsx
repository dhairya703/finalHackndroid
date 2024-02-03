import { About, Hero, Prizes, Registration, Roadmap } from "@/app/_components";
import CollegeBanner from "@/components/college";
import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";

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
      </SectionLayout>

      <section className="relative">
        <span className="absolute -top-8 right-1/4 z-10 rotate-12 font-secondary text-6xl md:text-7xl lowercase text-secondary">
          🌞
        </span>

        <SectionLayout full>
          <CollegeBanner />
          <Roadmap />
        </SectionLayout>
      </section>
    </>
  );
}
