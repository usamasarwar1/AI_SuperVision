import React from "react";
import Image from "next/image";

const HeroSections = () => {
  return (
   <div className="">
     <section className="bg-gradient-with-image-hero-services bg-cover bg-no-repeat bg-center mb-[59px]">
      <div className="public-sans min-h-[810px] relative bg-hero-gradient bg-contain bg-no-repeat bg-center">
        <div
          className="flex w-full h-inherit absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"
          style={{ minHeight: "inherit" }}
        >
          <div className="container mx-auto flex items-center justify-center flex-col">
            <h2 className=" text-[38px] sm:text-[64px] font-bold mb-8  leading-[1.3] text-white">
              Our AI-Powered Services
            </h2>
            <p className="font-normal text-[16px] leading-9 text-[#e4e4e4] mb-[55px]">
              Transform your business with our comprehensive suite of AI
              solutions designed
              <br />
              <span className="flex justify-center">
                {" "}
                to meet your unique needs.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default HeroSections;
