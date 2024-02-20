import { CustomText } from "@/components/custom";
import Image from "next/image";

const Roadmap = () => {
  const events = [
    {
      date: "05th February",
      description: "Registration for DESIGNATHON ‘24 starts through Devfolio.",
    },
    {
      date: "22th February",
      description: "Registration of DESIGNATHON ‘24 comes to an end.",
    },
    {
      date: "23nd February",
      description: "Shortlisting based on submissions and user profiles.",
    },
    {
      date: "24th February",
      description: "Shortlisted Participants are informed via emails.",
    },
    {
      date: "28th February",
      description: "DESIGNATHON‘24 begins at 06 PM in the evening.",
    },
    {
      date: "29th February",
      description: "DESIGNATHON ‘24 ends and valedictory ceremony.",
    },
  ];

  return (
    <div className="relative flex flex-col justify-start gap-4 font-secondary text-secondary">
      <CustomText title>
        hackathon&nbsp;<CustomText highlightedTitle>roadmap</CustomText>
      </CustomText>

      <div className="flex items-start justify-center gap-6">
        <div
          className="z-10 grid-cols-1 grid-rows-6 gap-12 py-6 sm:grid-cols-2 sm:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2"
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
