import { CustomText } from "@/components/custom";

const About = () => {
  return (
    <div className="flex flex-col gap-4 px-6 pb-12 pt-8 sm:pt-12 text-right font-secondary text-secondary sm:px-12 md:pb-16 lg:px-16 lg:pb-24 xl:px-32 2xl:px-48">
      <CustomText title className="self-end">
        what is&nbsp;
        <CustomText highlightedTitle>Hack-n-Droid</CustomText>?
      </CustomText>

      <CustomText description>
      Hack-n-Droid is a dynamic hackathon that brings together developers, ethical hackers, and tech enthusiasts to solve real-world challenges across multiple domains, including EdTech, Law, Healthcare, Public Safety, Sustainability, Modern E-Commerce Solutions, and Open Innovation. It fosters creativity, collaboration, and problem-solving, providing a platform for participants to develop cutting-edge solutions that drive meaningful impact in technology and society.
      </CustomText>
    </div>
  );
};

export default About;
