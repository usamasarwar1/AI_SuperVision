import React from "react";

const HeroSections = ({bg_image, headingText, descripation, headingBreakText, descripationBreakText}) => {
  return (
    <div className={`public-sans min-h-[600px] sm:min-h-[810px] relative bg-hero-gradient bg-cover bg-no-repeat bg-center ${bg_image}`}>
      <div
        className="flex w-full h-full absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"
        style={{ minHeight: "inherit" }}
      >
        <div className="container mx-auto pt-[100px] sm:pt-[170px] pb-[100px] sm:pb-[150px] flex items-center justify-center flex-col text-center px-4 sm:px-0">
          {/* Main Heading */}
          <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] xl:text-[64px] font-bold mb-6 sm:mb-8 leading-tight sm:leading-[1.3] text-white">
           {headingText}
            <br />
            <span className="block">{headingBreakText}</span>
          </h2>

          {/* Description Text */}
          <p className="font-normal text-[14px] sm:text-[16px] leading-7 sm:leading-9 text-[#e4e4e4] mb-6 sm:mb-[55px] max-w-[700px]">
           {descripation}
           <br />
              <span className="flex justify-center">
               {descripationBreakText}
              </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
