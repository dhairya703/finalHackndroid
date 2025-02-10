'use client'
import HoverTextAnimation from "@/components/cards/HoverAnimation";
import { CustomText } from "@/components/custom";
import Link from "next/link";

const ProblemStatements = () => {
  const problemStatements = [
    { href: "/problem-statement-1", title: "EdTech", hover: "edTech" },
    { href: "/problem-statement-2", title: "Law", hover: "Law" },
    { href: "/problem-statement-3", title: "Healthcare", hover: "Healthcare" },
    { href: "/problem-statement-3", title: "Public Safety", hover: "Public Safety" },
    { href: "/problem-statement-3", title: "Sustainability", hover: "Sustainability" },
    { href: "/problem-statement-3", title: "Modern Ecommerce Solution", hover: "Modern Ecommerce Solution" },
    { href: "/problem-statement-3", title: "Open Innovation", hover: "Open Innovation" },
  ];
  return (
    <div className="z-20">
      <CustomText highlightedTitle className="text-wrap">
        problem statements
      </CustomText>

      <div className="flex flex-wrap items-center justify-around gap-10 p-10">
        {problemStatements.map((problem, index) => (
          <HoverTextAnimation key={index} default={problem.title} hover={problem.hover}/>
        ))}
      </div>
      
    </div>
  );
};

export default ProblemStatements;
