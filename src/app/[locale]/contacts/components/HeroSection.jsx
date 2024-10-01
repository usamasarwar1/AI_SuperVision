"use client"
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import en from "../../../../api/contact/en.json";
import ar from "../../../../api/contact/ar.json";

const HeroSection = () => {
  const { language } = useLanguage();
  const translations = {
    en,
    ar,
  };
  return (
    <div
      className={`public-sans md:mb-[59.12px] min-h-[600px] sm:min-h-[810px] relative bg-contact-gradient bg-cover bg-no-repeat bg-center`}
    >
      <div
        className="flex w-full h-full absolute inset-0  bg-gradient-to-b from-transparent to-black opacity-75"
        style={{ minHeight: "inherit" }}
      >
        <div className="container mx-auto pt-[100px] sm:pt-[170px]  sm:pb-[150px] flex items-center justify-center flex-col text-center px-4 sm:px-0">
          {/* Main Heading */}
          <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] xl:text-[64px] font-bold mb-6 sm:mb-8 leading-tight sm:leading-[1.3] text-white">
          {/* Get in Touch with AI Supervision */}
          {translations[language].hero_heading}
           
          </h2>

          {/* Description Text */}
          <p className="font-normal text-[14px] sm:text-[16px] leading-5 sm:leading-9 text-[#e4e4e4] mb-6 sm:mb-[55px] max-w-[700px]">
          {/* We're here to help you harness the power of AI. Contact us today to learn how */}
          {translations[language].hero_txt}
            <br />
            <span className="flex justify-center">
              {" "}
              {translations[language].hero_break_txt}
              {/* we can support your business. */}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;