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
          <br /> Create a application for Direct-from-Farmer Marketplace.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Background
        </div>
        <CustomText highlightedDescription>
          More people want fresh food directly from farmers. They like knowing
          where their food comes from and supporting local farmers. They also
          like going to real places to buy food.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Objective
        </div>
        <CustomText highlightedDescription>
          Make a marketplace where people can buy food directly from local
          farmers. Show where the food comes from so people trust it. Help
          farmers sell more and get fair prices for their food. Let people visit
          real places to buy food and connect with farmers.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Key features
        </div>
        <CustomText highlightedDescription>
          <span className="text-primary">✺&nbsp;&nbsp;</span>People can use the
          app to buy food straight from farmers. They can learn about the farms
          and how they grow food. <br />
          <span className="text-primary">✺&nbsp;&nbsp;</span>The app helps
          people find nearby farms and places to buy food. <br />
          <span className="text-primary">✺&nbsp;&nbsp;</span>People can order
          food in advance and pick it up at the farm or designated places.
          <br />
          <span className="text-primary">✺&nbsp;&nbsp;</span>Farmers have
          profiles showing their farms and what they sell. People can see
          reviews from other customers. <br />
          <span className="text-primary">✺&nbsp;&nbsp;</span>The app shows if
          the food is available and where to find it. <br />
          <span className="text-primary">✺&nbsp;&nbsp;</span>The app has events
          like farm visits and cooking classes to teach about food and farming.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Your Task
        </div>
        <CustomText highlightedDescription>
          Make an application that makes it easy for people to buy fresh food
          from local farmers. It should be easy to use and help people trust
          where their food comes from.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Deliverables
        </div>
        <CustomText highlightedDescription>
          Show how people use the app to buy food. Drawings of how the app will
          look, including the main screen and pages for buying food and seeing
          farms. A model of the app that shows how it works. Detailed
          instructions on how the app should look and work. A plan to test the
          app with people to make sure it works well. The application should
          make it easy for people to buy fresh food and support local farmers.
        </CustomText>
      </SectionLayout>
    </div>
  );
};

export default page;
