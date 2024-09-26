"use client"
import React from "react";
import HeroSections from "../components/HeroSections"
import { useLanguage } from '../context/LanguageContext';
import en from "../../../api/benefits/en.json"
import ar from "../../../api/benefits/ar.json"
import { useTranslations } from "next-intl";

const Page = () => {
  const { language } = useLanguage();
  const t = useTranslations("Benefits");
  const translations = {
    en,
    ar,
  };
 
  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
      <HeroSections
        bg_image="bg-image-hero-benefits"
        headingText={translations[language].hero_heading}
        headingBreakText=""
        descripation={translations[language].hero_txt}
        descripationBreakText={translations[language].hero_break_txt}
      />
      <div className="container mx-auto px-4 md:px-8 mt-[83.86px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5">
          <div className="col-span-12 md:col-span-7">
           <video
        src="/videos/competitive.mp4"
        width={700}
        height={250}
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-h-[250px] rounded-[14px] object-cover"
      />
            <div className="bg-[#131619] mt-3 rounded-[16px] p-4 md:p-[30px] h-auto lg:max-h-[198.67px] 2xl:h-[200.8px]">
              <div className="flex flex-col justify-center text-left">
                <h1 className="text-[#DEDEDE] poppins-medium text-[24px] lg:text-[30px] xl:text-[40px]  leading-[130%]">
                {/* {translations[language].competitive_heading} */}
                {t("maximizing_heading")}
                </h1>
                <h2 className="text-[#DEDEDE] poppins-medium text-[14px] lg:text-[16px] leading-[130%]">
                {translations[language].competitive_sub_txt}
                </h2>
                <p className="poppins-light text-[12px] md:text-[14px] font-normal leading-[20px] text-[#DEDEDE] opacity-70 mt-1">
                {/* {translations[language].competitive_txt} */}
                {t("maximizing_txt")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
                          <video
        src="/videos/efficiency.mp4"
        width={700}
        height={226}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[250px] md:max-h-[226px] lg:max-h-[250px] rounded-[14px] object-cover"
      />
            <div className="bg-[#131619] mt-3 rounded-[16px] p-4 md:p-[30px] h-auto lg:max-h-[198.67px] 2xl:max-h-[200.8px] mb-0 md:mb-3 lg:mb-0 ">
              <div className="flex flex-col justify-center text-left">
                <h1 className="text-[#DEDEDE] poppins-medium text-[24px] lg:text-[30px] xl:text-[40px] leading-[130%]">
                {translations[language].efficiency_heading}
                </h1>
                <h2 className="text-[#DEDEDE] poppins-medium text-[14px] lg:text-[16px] leading-[130%]">
                {translations[language].efficiency_sub_txt}
                </h2>
                <p className="poppins-light text-[12px] md:text-[12px] lg:text-[14px] font-normal leading-[20px] text-[#DEDEDE] opacity-70 mt-1">
                {translations[language].efficiency_txt}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:mt-[66.33px] gap-[10px] mt-3 md:mt-0">
         
      <video
        src="/videos/dataDriven.mp4"
        width={700}
        height={501}
        autoPlay
        loop
        muted
        playsInline
      className="w-full max-h-[501px] rounded-[14px] object-cover"
      />
          <div className="bg-[#131619] rounded-[16px] p-4 md:p-[20.35px_78px_30.57px_30px] ">
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[#DEDEDE] poppins-medium text-[24px] md:text-[40px] leading-[130%]">
              {translations[language].data_driven_heading}
              </h1>
              <h2 className="text-[#B8B9BA] poppins-medium text-[14px] md:text-[16px] leading-[130%] ">
              {translations[language].data_driven_sub_heading}
              </h2>
              <p className="poppins-light text-[12px] md:text-[14px] font-normal leading-[24px] text-[#B8B9BA] opacity-70 mt-1 max-w-[72%]">
              {translations[language].data_driven_txt}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-[10.24px] mt-3  md:mt-[89.94px]">
          <div className="col-span-12 md:col-span-8">
                          
      <video
        src="/videos/scalableSolutions.mp4"
        width={500}
        height={300}
        autoPlay
        loop
        muted
        playsInline
    className="object-cover w-full h-[228.53px] rounded-[14px]"
      />
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="bg-[#131619] h-full rounded-[16px] p-4 md:p-[30.28px] flex flex-col justify-center text-left">
              <h1 className="text-[#DEDEDE] poppins-medium text-[24px] md:text-[40px] leading-[130%]">
                 {translations[language].scalable_heading}
              </h1>
              <h2 className="text-[#B8B9BA] poppins-medium text-[14px] md:text-[16px] leading-[130%]">
              {translations[language].scalable_sub_heading}
              </h2>
              <p className="poppins-light  text-[12px] md:text-[14px] font-normal leading-[24px] text-[#B8B9BA] opacity-70 mt-1">
              {translations[language].scalable_txt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
