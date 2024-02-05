import { CustomText } from "@/components/custom";

const About = () => {
  return (
    <div className="flex flex-col gap-4 px-6 pb-12 text-right font-secondary text-secondary sm:px-12 md:pb-16 lg:px-16 lg:pb-24 xl:px-32 2xl:px-48">
      <CustomText title className="self-end">
        what is&nbsp;
        <CustomText highlightedTitle>designathon</CustomText>?
      </CustomText>

      <CustomText description>
        Join us for the&nbsp;
        <CustomText highlightedDescription>third edition</CustomText>
        &nbsp;of Techletics, the&nbsp;
        <CustomText highlightedDescription>
          techno-cultural festival of Christ College of Engineering.
        </CustomText>
        Explore, learn, and enjoy the latest innovations and trends in
        technology and culture. Participate in workshops, competitions,
        exhibitions, performances, and more. Win prizes and awards.&nbsp;
        <CustomText highlightedDescription>
          Illuminate your mind, ignite your passion, and inspire your future.
        </CustomText>
        Techletics &apos;24 is the ultimate rendezvous of innovation and zest.
        Don&apos;t miss it.
      </CustomText>
    </div>
  );
};

export default About;
