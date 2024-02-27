import { CustomText } from "@/components/custom";
import Link from "next/link";

const ProblemStatements = () => {
  const problemStatements = [
    { href: "/problem-statement-1", title: "1" },
    { href: "/problem-statement-2", title: "2" },
    { href: "/problem-statement-3", title: "3" },
  ];
  return (
    <div className="z-20">
      <CustomText highlightedTitle className="text-wrap">
        problem statements
      </CustomText>

      <div className="flex flex-wrap items-center justify-around gap-10 p-10">
        {problemStatements.map((problem, index) => (
          <Link
            key={index}
            href={problem.href}
            className="flex size-32 cursor-pointer items-center justify-center rounded-2xl border-4 border-primary font-secondary text-5xl font-bold transition-all duration-100 ease-in hover:border-secondary md:size-40 md:text-6xl"
          >
            {problem.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProblemStatements;
