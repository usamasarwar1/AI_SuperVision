import React from "react";

const HeroSections = ({bg_image, headingText, descripation, headingBreakText, descripationBreakText, dir}) => {
  return (
    <div className={`public-sans md:mb-[59.12px] min-h-[500px] md:min-h-[710px] relative bg-server-gradient bg-cover bg-no-repeat bg-center ${bg_image}`}
         
    // style={{ 'image-with-gradient': 'linear-gradient(180deg, rgba(5, 5, 5, 0.30) 0%, #050505 100%), url("/images/hero-serversbg.png")',  }}
    >
     {/* <div style={{ background: 'linear-gradient(180deg, rgba(5, 5, 5, 0.30) 0%, #050505 100%)' }}></div> */}

      <div
        className="flex w-full h-full absolute inset-0  bg-gradient-to-b from-transparent to-black opacity-75"
        style={{ minHeight: "inherit" }}
      >
        <div className="container mx-auto pt-[100px] sm:pt-[170px]  sm:pb-[150px] flex items-center justify-center flex-col text-center px-4 sm:px-0">
          {/* Main Heading */}
          <h2 className="public-sans text-[#DEDEDE] text-[28px] sm:text-[38px] lg:text-[48px] xl:text-[64px] font-bold sm:mb-2 md:mb-6  leading-tight sm:leading-[1.3]" dir={dir}>
           {headingText}
            <br />
            <span className="block">{headingBreakText}</span>
          </h2>

          {/* Description Text */}
          <p className="public-sans font-normal text-[14px] sm:text-[16px] leading-5 sm:leading-9  text-[#DEDEDE] mb-6 sm:mb-[55px] max-w-[700px]" dir={dir}>
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
