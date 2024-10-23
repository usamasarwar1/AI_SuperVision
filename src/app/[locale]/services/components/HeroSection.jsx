import React from "react";
import { useLocale, useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("Services");
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr"


  return (
    <div
      className={`public-sans lg:mb-[59.12px] min-h-[500px] md:min-h-[710px] relative bg-server-gradient bg-cover bg-no-repeat bg-center`}
    >
      <div
        className="flex w-full h-full absolute inset-0  bg-gradient-to-b from-transparent to-black opacity-75"
        style={{ minHeight: "inherit" }}
      >
        <div className="container mx-auto pt-[100px] sm:pt-[170px] sm:pb-[150px] flex items-center justify-center flex-col text-center px-4 sm:px-0">
          {/* Main Heading */}
          <h2 className="public-sans text-[#DEDEDE] text-[28px] sm:text-[38px] lg:text-[48px] xl:text-[64px] font-bold mb-6 sm:mb-8 leading-tight sm:leading-[1.3]" dir = {dir}>
          
            {t('hero_heading')}
          </h2>

          {/* Description Text */}
          <p className="font-normal public-sans text-[14px] sm:text-[16px] leading-5 sm:leading-9 text-[#DEDEDE] mb-6 sm:mb-[55px] max-w-[700px]" dir = {dir}>
            
            {t('hero_txt')}
            <br />
            <span className="flex justify-center" dir = {dir}>
           
              {t('hero_break_txt')}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
