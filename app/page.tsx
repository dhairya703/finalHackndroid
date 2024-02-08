import {
  About,
  Header,
  Hero,
  Prizes,
  Registration,
  Roadmap,
} from "@/app/_components";
import CollegeBanner from "@/components/college-banner";
import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";
import Sponsors from "./_components/sponsor";
import Gallery from "./_components/gallery";
import Faq from "./_components/faq";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Header />

        <SectionLayout full gapless>
          <Hero />
          <About />
        </SectionLayout>
      </div>

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
        <span className="absolute -top-8 right-1/4 z-10 rotate-12 font-secondary text-6xl lowercase text-secondary md:text-7xl">
          🌞
        </span>

        <SectionLayout full>
          <CollegeBanner />
        </SectionLayout>
      </section>

      <SectionLayout>
        <Roadmap />
      </SectionLayout>

      <SectionLayout full>
        <Gallery />
      </SectionLayout>

      <SectionLayout>
        <Faq />
      </SectionLayout>

      <SectionLayout>
        <Sponsors />
      </SectionLayout>
    </>
  );
}
