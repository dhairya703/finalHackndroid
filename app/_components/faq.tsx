"use client";
import { CustomText } from "@/components/custom";
import Image from "next/image";
import { useState } from "react";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState<Number | null>(0);

  const handleQuestionClick = (index: number) => {
    console.log("Question clicked:", index);
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const questions: { question: string; answer: string }[] = [
    {
      question: "WHAT IS A DESIGNATHON?",
      answer:
        "Designathon or design-hackathon, is an event where you're asked to design a solution for a given problem within the given 12 hours. No coding is involved.",
    },
    {
      question: "WHAT IS THE TEAM SIZE?",
      answer:
        "The maximum team size is two. Individual participation is also allowed.",
    },
    {
      question: "WHAT IS expected to be build?",
      answer:
        "The output product of a designathon should be a working prototype of the team's ideas and solutions to the design challenge, and it should be presented in a way that effectively communicates the team's vision and approach.",
    },
    {
      question: "HOW CAN I GET Shortlisted?",
      answer:
        "You’ll be selected based on the design projects you’ve worked and your social profiles. We prefer you having an updated LinkedIn, Behance & Dribbble profiles.",
    },
    {
      question: "IS THERE A REGISTERATION FEE?",
      answer:
        "No, Registeration for DESIGNATHON ‘24 is completely free of cost.",
    },
  ];
  return (
    <div className="z-50">
      <div className="text-normal pb-10 font-secondary text-3xl sm:text-right sm:text-4xl md:text-5xl lg:text-6xl">
        frequently asked&nbsp;
        <span className="text-secondary">questions</span>
      </div>
      <div className="flex w-full flex-col items-center justify-between xl:flex-row">
        <Image
          className="w-[500px]"
          src="/images/faq.png"
          alt="FAQ Image"
          width={4000}
          height={3000}
        />
        <div className="w-full xl:w-1/2">
          {questions.map((item, index) => (
            <div className="ml-auto w-5/6 py-3" key={index}>
              <div
                className={`cursor-pointer text-right font-secondary text-2xl lowercase sm:text-3xl ${expandedIndex === index ? " text-primary" : " text-white hover:text-tertiary"}`}
                onClick={() => handleQuestionClick(index)}
              >
                {item.question}
              </div>
              {expandedIndex === index && (
                <p className="text-normal text-md w-full py-2 text-right font-tertiary leading-tight sm:text-lg">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
