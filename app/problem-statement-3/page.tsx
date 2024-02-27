import React from "react";
import { Header } from "../_components";
import SectionLayout from "@/layouts/section-layout";
import { CustomText } from "@/components/custom";

const page = () => {
  return (
    <div>
      <Header />
      <SectionLayout>
        <CustomText highlightedTitle>problem statement 3</CustomText>
      </SectionLayout>
    </div>
  );
};

export default page;
