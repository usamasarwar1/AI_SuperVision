import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const BusinessCard = ({ headingText, text }) => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  console.log(dir)

  return (
    <div className="p-6 lg:p-0">
      <div className="bg-[#131619] md:mb-[123.8px] rounded-[16px] h-auto sm:max-h-[300px] md:max-h-[212px] p-4 md:p-[50px] container mx-auto flex flex-col md:flex-row items-center gap-6 lg:gap-0">
        <div className="w-[80%]">
          <h1 className="text-white  poppins-medium leading-[130%] text-xl sm:text-[24px] lg:text-[40px] lg:max-w-[82%]"  dir={dir}>
          <span className={`${dir === "rtl" ? "leading-7" : ""}`}> {headingText}</span>
           
          </h1>
          <p
            className="public-sans text-[12px] sm:text-[14px] lg:text-[16px] font-normal leading-[24px] text-white max-w-full lg:max-w-[82%] mt-2 md:mt-3"
            dir={dir}
          >
            <span className={`${dir === "rtl" ? "leading-7" : ""}`}>{text}</span>
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <div>
            <Image src="/images/logo.svg" width={200} height={200} alt="Logo" />
          </div>

          <Link href={"/consultation"}>
            <button className="public-sans text-xs sm:text-sm lg:text-base  text-[#fff] font-semibold rounded-full bg-[#000] py-2 sm:py-3 px-4 sm:px-4 md:px-[5px] lg:px-[18px]  border-2 border-[#fff] hover:bg-gray-800 transition-all mb-3 lg:mb-0 cursor-pointer">
              {t("ready_button")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
