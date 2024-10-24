"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import {useLocale, useTranslations } from "next-intl";

const ValuesCard = () => {
  const t = useTranslations("About");
  const locale = useLocale();
const dir = locale === "ar" ? "rtl" : "ltr";
  const [activeService, setActiveService] = useState(0);
  const handleClick = (index) => {
    setActiveService(index);
  };

  const ServiceItem = ({ index, title, description, active, onClick }) => {
    return (
      <div
        onClick={() => onClick(index)}
        className={`flex items-start space-x-4 p-4 cursor-pointer transition-all ${
          active ? "border-l-4 border-white" : "border-l-4 border-[#181818]"
        }`}
      >
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold poppins-medium" dir = {dir}>
            {title}
          </h3>
          <p className={`text-[#989898] poppins-regular text-xs sm:text-sm md:text-base mt-2 lg:max-w-[528.04px] ${dir === "rtl" ? "leading-7" : ""}`} dir = {dir}>
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black py-8 sm:py-12 md:py-16  md:mt-[145px] md:mb-[136px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Video Element */}
          <div className="col-span-1 lg:col-span-6 relative">
            <video
              src="/videos/aboutVlues.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-full w-full object-cover rounded-[16px]"
            />

            {/* Overlay content */}
            <div className="absolute top-2 left-2 right-2 bg-aboutVlues backdrop-blur-[20px] rounded-[12px] p-4 sm:p-6">
              <Button
                auto
                shadow
                size="lg"
                className="bg-transparent text-white font-bold w-full rounded-[12px] py-3 sm:py-4 md:py-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl poppins-medium flex justify-between items-center" dir = {dir}
              >
                {/* Our Values */}

                {t("our_values")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 36 24"
                  fill="none"
                  className="ml-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
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

          {/* Services List */}
          <div className="col-span-1 lg:col-span-6 text-white space-y-4 sm:space-y-6 md:space-y-8">
            {[
              {
                title: `${t("innovation_heading")}`,
                description: `${t("Innovation_txt")}`,
              },
              {
                title: `${t("excellence")}`,
                description: `${t("excellence_txt")}`,
              },
              {
                title: `${t("integrity")}`,
                description: `${t("integrity_txt")}`,
              },
              {
                title: `${t("client")}`,
                description: `${t("client_txt")}`,
              },
            ].map((service, index) => (
              <ServiceItem
                key={index}
                index={index}
                title={service.title}
                description={service.description}
                active={activeService === index}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesCard;
