import { About, Hero, Prizes, Registration } from "@/app/_components";
import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";

export default function Home() {
  return (
    <>
      <SectionLayout>
        <Hero />
        <About />
      </SectionLayout>

      <section className="relative h-fit bg-secondary">
        <div className="bg-tertiary py-2 md:py-4 h-full border-quarternary border border-x-0 border-t-0 transform -rotate-1 flex-shrink-0 z-20">
          <TextMarquee mode="dark" />
        </div>
        <div className="absolute bottom-0 bg-primary py-2 md:py-4 w-full h-full border-quarternary border border-x-0 border-t-0 transform -rotate-2 flex-shrink-0 z-0">
          <TextMarquee mode="dark" />
        </div>
      </section>

      <SectionLayout>
        <Prizes />
        <Registration />
      </SectionLayout>
    </>
  );
}
