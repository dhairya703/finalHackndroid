import React from "react";
import { Header } from "../_components";
import SectionLayout from "@/layouts/section-layout";
import { CustomText } from "@/components/custom";

const page = () => {
  return (
    <div>
      <Header />
      <SectionLayout>
        <CustomText highlightedTitle className="text-wrap">
          Design Challenge:
          <br /> Create a Web Application for AI Prompt Marketplace
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Background
        </div>
        <CustomText highlightedDescription>
          With the rapid advancement of AI technologies, customized prompts have
          become a valuable asset for individuals and businesses looking to
          leverage AI for creative content generation, data analysis, and
          problem-solving. There is a growing demand for a platform where users
          can easily purchase and sell high-quality, effective prompts tailored
          for various AI applications.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Objective
        </div>
        <CustomText highlightedDescription>
          Design a web application that serves as a marketplace for buying and
          selling AI prompts. This platform should not only facilitate
          transactions but also inspire a community of creators to share their
          expertise and innovations.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Key features
        </div>
        <CustomText highlightedDescription>
          <span className="text-primary">✺&nbsp;&nbsp;</span>
          User-friendly interface for browsing, purchasing, and selling prompts.
          <br />
          <span className="text-primary">✺&nbsp;&nbsp;</span>Categorization and
          tagging system for prompts to serve diverse AI technologies and
          applications.
          <br /> <span className="text-primary">✺&nbsp;&nbsp;</span>Secure
          payment and licensing system for transactions.
          <br /> <span className="text-primary">✺&nbsp;&nbsp;</span>Review and
          rating system for sellers and prompts to ensure quality and
          reliability.
          <br /> <span className="text-primary">✺&nbsp;&nbsp;</span>Community
          features such as forums or chat systems for users to discuss and share
          insights about AI prompt development and usage.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Your Task
        </div>
        <CustomText highlightedDescription>
          Develop a comprehensive design proposal for this web application. Your
          proposal should include conceptual designs, user flow diagrams, and a
          detailed description of how the platform meets the needs of prompt
          creators and buyers. Consider the scalability, security, and user
          experience of the platform in your design.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Deliverables
        </div>
        <CustomText highlightedDescription>
          Conceptual design sketches or wireframes. User journey maps to
          illustrate the process of buying and selling prompts. A written
          overview explaining the design decisions, features, and
          functionalities of the proposed platform.
        </CustomText>
      </SectionLayout>
    </div>
  );
};

export default page;
