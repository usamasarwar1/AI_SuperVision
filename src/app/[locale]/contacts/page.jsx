import React from "react";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";

const page = () => {
  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
        <HeroSection />
      <div className="container mx-auto mt-[36px]">
        <Contact />
      </div>
    </div>
  );
};

export default page;
