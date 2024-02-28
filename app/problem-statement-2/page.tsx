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
          <br />
          Create a application for Food Community.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Background
        </div>
        <CustomText highlightedDescription>
          The culinary world is evolving, especially with a surge in home
          baking. There&apos;s a need for a digital platform where home bakers and
          cooking passionates can share recipes, connect, and grow together.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Objective
        </div>
        <CustomText highlightedDescription>
          Provide a platform for home bakers and cooking passionates to share
          and discover recipes. Facilitate connections based on geographical
          proximity. Enhance cooking experience through community support and
          resource sharing. Encourage exchange of cooking knowledge and
          experiences.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Key features
        </div>
        <CustomText highlightedDescription>
          <span className="text-primary">✺&nbsp;&nbsp;</span>Recipe Sharing:
          Users can post, browse, and save recipes with photos and step-by-step
          instructions. Geolocation Services Find and connect with nearby
          cooking passionates for local communities and ingredient sharing.{" "}
          <br />
          <span className="text-primary">✺&nbsp;&nbsp;</span>Community
          Engagement: Forums and chat for discussions, troubleshooting, and
          sharing experiences. <br />
          <span className="text-primary">✺&nbsp;&nbsp;</span>User Profiles:
          Customizable profiles showcasing baking specialties and favorites.
          <br />
          <span className="text-primary">✺&nbsp;&nbsp;</span>Rating and Reviews:
          Build trust and credibility within the community. <br />
          <span className="text-primary">✺&nbsp;&nbsp;</span>Events and
          Workshops:Organize and participate in local cooking activities.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Your Task
        </div>
        <CustomText highlightedDescription>
          Design a mobile/web application prioritizing ease of use, community
          engagement, and seamless sharing of cooking knowledge.
        </CustomText>
      </SectionLayout>
      <SectionLayout>
        <div className="text-normal font-secondary text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          Deliverables
        </div>
        <CustomText highlightedDescription>
          Include user flow diagrams, wireframes, a high-fidelity prototype,
          design specifications, and a usability test plan.
        </CustomText>
      </SectionLayout>
    </div>
  );
};

export default page;
