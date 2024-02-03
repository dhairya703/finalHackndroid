import Image from "next/image";

const Roadmap = () => {
  const events = [
    {
      date: "05th February",
      description: "Registration for DESIGNATHON ‘24 starts through Devfolio.",
    },
    {
      date: "20th February",
      description: "Registration of DESIGNATHON ‘24 comes to an end.",
    },
    {
      date: "22nd February",
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
    <div className="mb-[600px] h-96 w-full bg-dark px-4">
      <div className="p-28">
        <div>
          <div className="py-4 font-secondary text-[58px] font-normal">
            <span className="text-white">hackathon </span>
            <span className="text-fuchsia-500">roadmap</span>
          </div>
        </div>
        <div className="flex items-start justify-center gap-10">
          <div className="grid grid-cols-3 grid-rows-2 gap-14 py-4">
            {events.map((event, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="font-secondary text-3xl text-primary">
                  <span className="font-tertiary font-extrabold">
                    {event.date.split(" ")[0] + " "}
                  </span>
                  {event.date.split(" ")[1]} {event.date.split(" ")[2]}
                </h3>
                <p className="font-tertiary text-lg text-white">
                  <span className="font-bold">{event.description}</span>
                </p>
              </div>
            ))}
          </div>

          <Image
            className="mt-20"
            width={250}
            height={128}
            src="/images/roadmap.webp"
            alt="roadmap"
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
