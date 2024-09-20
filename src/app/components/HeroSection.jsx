"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import en from "../../api/en.json";
import ar from "../../api/ar.json";

const ServiceItem = ({ index, title, description, icon, active, onClick }) => {
 
 
  return (
    <div
      onClick={() => onClick(index)}
      className={`flex items-start space-x-4 p-4 cursor-pointer transition-all ${
        active ? "border-l-4 border-white" : "border-l-4 border-[#181818]"
      }`}
    >
      <Image
        className="text-3xl mt-2"
        alt="hero-icon"
        src={icon}
        width={24}
        height={24}
      />
      <div>
        <h3 className="text-xl sm:text-2xl font-bold poppins-medium">
          {title}
        </h3>
        <p className="text-[#989898] poppins-regular text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [activeService, setActiveService] = useState(0);
  const { language} = useLanguage();

  const translations = {
    en,
    ar
  }
  const handleClick = (index) => {
    setActiveService(index);
  };

  return (
    <div>
      <div className=" min-h-[600px] md:min-h-[810px] relative bg-hero-gradient bg-cover bg-no-repeat bg-center">
      <video
        src="/videos/herobg.mp4"
        width={500}
        height={500}
        autoPlay
        loop
        muted
        playsInline
        className="min-h-[600px] md:min-h-[810px] w-full rounded-lg object-cover bg-hero-gradient blur-[3px]"
      />
        <div
          className="flex w-full h-full absolute inset-0 bg-gradient-to-b from-transparent to-black "
          style={{ minHeight: "inherit" }}
        >
          <div className="container mx-auto  flex flex-col items-center justify-center text-center gap-4 md:gap-6">
            <Image
              src="/images/herosection.svg"
              alt="logo"
              width={300}
              height={300}
              className="h-20 w-20 md:h-30 md:w-30 lg:h-64 lg:w-64"
            />
          
            <h2 className="public-sans text-[#DEDEDE] text-3xl sm:text-[50px] md:text-[64px] lg:mt-2  font-bold leading-10 md:leading-[83.2px] text-center">
            {/* {language === "en" ? " Innovative Solutions for" : "حلول مبتكرة لنمو عملك"} */}
             {translations[language].home_heading}
              <br className="hidden md:inline-block" />
              {/* {language === "en" ? "Your Business Growth" : "نمو عملك"} */}
              {translations[language].home_heading2}
              
            </h2>
            <p className="public-sans font-normal text-sm sm:text-[18px] leading-relaxed text-[#fff] text-[18px]">
            {/* {language === "en" ? " Empowering your business with cutting-edge technology and strategic expertise." :
             "تمكين عملك مع التكنولوجيا المتطورة الخبرة الاستراتيجية."} */}
             {translations[language].home_txt}
             
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:mt-6">
              <button className="public-sans text-sm sm:text-base rounded-full font-semibold  bg-[#fff] px-[26px] py-[13px] text-center z-[1] cursor-default">
              {/* {language === "en" ? "Discover Our Solutions" : "اكتشف حلولنا"} */}
                {translations[language].Discover_btn}
              </button>
             <Link href={"/consultation"}>
             <button className="public-sans text-sm sm:text-base text-[#fff] font-semibold  rounded-full bg-[#000] px-[26px] py-[13px] border-2 border-[#fff] z-[1] cursor-default">
                {/* Get a Free Consultation */}
                {translations[language].free_consultation_btn}
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#050505] p-6 md:p-0 py-8 sm:py-16 mt-2">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[50px] items-center">
          {/* Left Image Card */}
          <div className="relative h-[50vh] md:h-full bg-no-repeat bg-cover rounded-xl bg-[url('/images/ourServices.png')] bg-[#050505]">
            <div className="bg-transparent relative p-0 sm:p-4 flex justify-center items-center">
              <Button
                auto
                shadow
                size="lg"
                // 242425
                className="bg-[#050505] border  border-[#fff] text-white font-bold w-full rounded-lg p-4 md:p-9 text-[16px] md:text-xl poppins-medium flex items-center justify-between"
                iconRight={<span className="ml-2">→</span>}
              >
                
                Our Core Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="24"
                  viewBox="0 0 36 24"
                  fill="none"
                >
                  <path
                    d="M32 11.6816L2 11.6816"
                    stroke="#FFFEFE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 1.68164L32.5858 10.2674C33.2525 10.9341 33.5858 11.2674 33.5858 11.6816C33.5858 12.0959 33.2525 12.4292 32.5858 13.0959L24 21.6816"
                    stroke="#FFFEFE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Services List */}
         <Link href={"/services"} className="cursor-default">
         <div className="text-white space-y-8">
            <ServiceItem
              index={0}
              title="Digital Transformation Consulting"
              description = {language === "en" ? "Transform your business operations with our comprehensive digital solutions, tailored to meet your unique needs."  : "قم بتحويل عمليات ولنا الرقمية الشاملة، المصممة خصيصًا لتلبية احتياجاتك الفريدة.  عمليات عملك من خلال حلولنا الرقمية الشاملة، المصممة خصيصًا لتلبية احتياجاتك الفري"}
              // description=""
              icon="/images/icons/dtc.svg"
              active={activeService === 0}
              onClick={handleClick}
            />
            <ServiceItem
              index={1}
              title="Custom Software Development"
              description="We build scalable and robust software solutions that drive efficiency and growth, from idea to implementation."
              icon="/images/icons/csd.svg"
              active={activeService === 1}
              onClick={handleClick}
            />
            <ServiceItem
              index={2}
              title="Cloud Solutions"
              description="Leverage the power of cloud technology to enhance flexibility, reduce costs, and improve business continuity."
              icon="/images/icons/cs.svg"
              active={activeService === 2}
              onClick={handleClick}
            />
            <ServiceItem
              index={3}
              title="Data Analytics & AI"
              description="Unlock the potential of your data with advanced analytics and AI-driven insights to make informed business decisions."
              icon="/images/icons/bot.svg"
              active={activeService === 3}
              onClick={handleClick}
            />
          </div>
         </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
