import React from "react";
import HeroSections from "../components/HeroSections";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";

const page = () => {
  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
      {/* <HeroSections
        bg_image="bg-image-hero-contacts"
        headingText="Get in Touch with AI Supervision"
        headingBreakText=""
        descripation="We're here to help you harness the power of AI. Contact us today to learn how "
        descripationBreakText="we can support your business."
      /> */}
      <HeroSection />
      <div className="container mx-auto mt-[36px]">
        <Contact />
      </div>
    </div>
  );
};

export default page;
