import { CustomText } from "@/components/custom";

const About = () => {
  return (
    <div className="flex flex-col gap-12 bg-dark px-24 py-6 text-right font-secondary text-secondary lg:py-12">
      <CustomText title>
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
