import { CustomText } from "@/components/custom";

const About = () => {
  return (
    <div className="flex flex-col gap-4 px-6 pb-12 pt-8 sm:pt-12 text-right font-secondary text-secondary sm:px-12 md:pb-16 lg:px-16 lg:pb-24 xl:px-32 2xl:px-48">
      <CustomText title className="self-end">
        what is&nbsp;
        <CustomText highlightedTitle>designathon</CustomText>?
      </CustomText>

      <CustomText description>
        An in-person action packed&nbsp;
        <CustomText highlightedDescription>design hackathon&nbsp;</CustomText>
        where students and aspiring designers are given a platform to experience
        <CustomText highlightedDescription>
          &nbsp;real-life design problems
        </CustomText>
        &nbsp;and master the art of creating&nbsp;
        <CustomText highlightedDescription>
          usable, viable, and empathetic design solutions
        </CustomText>
        &nbsp;while having a great deal of fun for 12 hours straight.
      </CustomText>
    </div>
  );
};

export default About;
