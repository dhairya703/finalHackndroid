import { CustomText } from "@/components/custom";
import Image from "next/image";

const Roadmap = () => {
  const events = [
    {
      date: "05th February",
      description: "Registration for Hack-n-Droid '25 begins through the VIT Portal. This is your first step to join an exciting coding adventure.",
    },
    {
      date: "13th February",
      description: "The registration window closes. Ensure your entries are submitted before the deadline to secure your spot in the hackathon.",
    },
    {
      date: "14th February",
      description: "The hackathon kicks off! Start brainstorming, coding, and collaborating with your team to bring innovative ideas to life.",
    },
    {
      date: "15th February",
      description: "The hackathon concludes with project submission, judging, results announcement, and distribution of certificates and goodies.",
    },
  
  ];

  return (
    <div className="relative flex flex-col justify-start gap-4 font-secondary text-secondary">
      <CustomText title>
        hackathon&nbsp;<CustomText highlightedTitle>roadmap</CustomText>
      </CustomText>

      <div className="flex items-start justify-center gap-6">
        <div
          className="z-10 grid-cols-1 grid-rows-4 gap-12 py-6 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2"
          style={{ display: "grid" }}
        >
          {events.map((event, index) => (
            <div key={index} className="flex flex-col gap-3">
              <span className="font-secondary text-2xl text-primary sm:text-3xl">
                <span className="font-tertiary font-extrabold">
                  {event.date.split(" ")[0] + " "}
                </span>
                {event.date.split(" ")[1]}
              </span>

              <span className="font-tertiary text-lg font-medium text-white">
                {event.description}
              </span>
            </div>
          ))}
        </div>

        <Image
          width={250}
          height={128}
          src="/images/apostrophe.webp"
          alt="roadmap"
          className="absolute left-[60%] top-1/2 -z-0 my-auto w-44 opacity-30 sm:left-1/4 sm:top-1/3 lg:static lg:w-52 lg:opacity-100"
        />
      </div>
    </div>
  );
};

export default Roadmap;
