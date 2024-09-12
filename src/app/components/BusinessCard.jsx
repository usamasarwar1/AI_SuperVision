import React from "react";
import { Button } from "@nextui-org/react";

const BusinessCard = ({ headingText, text, buttonText, onClick }) => {
  return (
    <div className="bg-[#131619] mb-[123.8px] rounded-[16px] max-h-[212px] p-[50px] container mx-auto grid grid-cols-12 md:flex-row items-center ">
      <div className="col-span-10 gap-6">
        <h1 className="text-white poppins-medium leading-[130%] text-[40px]">
          {headingText}
        </h1>
        <p className=" text-[16px] font-normal leading-[24px] text-white opacity-70 max-w-[750px] mt-3">
          {text}
        </p>
      </div>
      <div className="col-span-2">
        <Button className="text-[16px] text-[#fff] font-semibold tracking-[0.03em]  rounded-[90px] bg-[#000] px-[26px] py-[13px] border-2 border-[#fff]  z-[1] ">
          Get a Free Consultation
        </Button>
      </div>
    </div>
  );
};

export default BusinessCard;
