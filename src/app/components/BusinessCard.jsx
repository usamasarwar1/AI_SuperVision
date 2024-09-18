import React from "react";
import { Button } from "@nextui-org/react";

const BusinessCard = ({ headingText, text, buttonText, onClick }) => {
  return (
    <div className="p-6 lg:p-0">
      <div className="bg-[#131619] md:mb-[123.8px] rounded-[16px]  h-auto sm:max-h-[212px] p-4 md:p-[50px] container mx-auto  grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-0  items-center md:flex-row">
        <div className="col-span-12 sm:col-span-8 lg:col-span-9 lg:gap-4 md:gap-6">
          <h1 className="text-white poppins-medium leading-[130%] text-[24px] lg:text-[40px]">
            {headingText}
          </h1>
          <p className=" public-sans text-[14px] lg:text-[16px] font-normal leading-[24px] text-white opacity-70 max-w-full  lg:max-w-[82%] mt-2 md:mt-3">
            {text}
          </p>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-3 mt-4 md:mt-0 flex justify-center md:justify-end">
        <button className="public-sans   text-sm md:text-[12px] lg:text-base text-white font-semibold bg-black rounded-full px-[26px] py-[13px] border-2 border-white cursor-default">
            Get a Free Consultation
       </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
