import React from "react";
import { Button } from "@nextui-org/react";

const BusinessCard = ({ headingText, text, buttonText, onClick }) => {
  return (
    <div className="p-6 lg:p-0">
      <div className="bg-[#131619] mb:mb-[123.8px] rounded-[16px]  h-auto sm:max-h-[212px] p-4 md:p-[50px] container mx-auto  grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-0  items-center md:flex-row">
        <div className="col-span-12 sm:col-span-8 lg:col-span-10 lg:gap-4 md:gap-6">
          <h1 className="text-white poppins-medium leading-[130%] text-[24px] lg:text-[40px]">
            {headingText}
          </h1>
          <p className="text-[14px] lg:text-[16px] font-normal leading-[24px] text-white opacity-70 max-w-full  lg:max-w-[70%] mt-2 md:mt-3">
            {text}
          </p>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2 mt-4 md:mt-0 flex justify-center md:justify-end">
          <Button className="text-[14px] lg:text-[16px] text-[#fff] font-semibold tracking-[0.03em] rounded-[90px] bg-[#000] px-[20px] md:px-[26px] py-[10px] md:py-[13px] border-2 border-[#fff] z-[1]">
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
