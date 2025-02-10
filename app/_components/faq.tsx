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
        question: "WHAT IS HACK-N-DROID?",
        answer:
          "Hack-N-Droid is not just a hackathon—it’s 24 hours of pure adrenaline-fueled innovation! Whether you're a coder, designer, or problem-solver, this is your playground to tackle real-world challenges and bring your boldest ideas to life.",
      },
      {
        question: "WHAT IS THE TEAM SIZE?",
        answer:
          "You can go solo or team up with up to 3 other innovators—because the best ideas sometimes spark alone, but the greatest solutions come from collaboration!",
      },
      {
        question: "WHAT'S EXPECTED TO BE BUILT?",
        answer:
          "Your mission: Prototype. Pitch. Impress. Whether it's a sleek UI/UX design, a functional app, or a cutting-edge AI-powered tool—your solution should effectively communicate your vision and problem-solving skills to the judges.",
      },
      {
        question: "IS THERE A REGISTRATION FEE?",
        answer:
          "Yes! But it’s worth every penny!\n💰 Duo: ₹360\n💰 Trio: ₹500\n💰 Quad: ₹650\n\nYour fee includes certificates, premium mentorship, top-tier food 🍔, brand coupons 🏷, and an electrifying experience like no other!",
      },
      {
        question: "HOW DO I REGISTER?",
        answer:
          "🔗 Ready to Hack? Register Now!\n💵 Payment Link: https://vitchennaievents.com\n📝 Form Link: https://forms.gle/i29zeFCjrSw5mSJ5A",
      },
      {
        question: "WHAT SHOULD I BRING?",
        answer:
          "🚀 Bring your laptop, your brain, and an extra charger—because one of them will give up! 😇",
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
