import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const OurServices = ({ id, imageUrl, heading, text, subText }) => {
  return (
    <div
      className="container mx-auto p-6 md:p-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8  md:mb-[140.79px]"
      key={id}
    >
      {/* Image Section */}
      <div
        className={`${
          id % 2 === 0 ? "order-1" : "order-2"
        } col-span-12 md:col-span-5`}
      >
        <Image
          src={imageUrl}
          alt={`Image for card ${id}`}
          width={500}
          height={300}
          className="w-full h-auto rounded-t-none rounded-b-lg"
        />
      </div>

      {/* Text Section */}
      <div
        className={`flex flex-col justify-center ${
          id % 2 === 0 ? "order-2" : "order-1"
        } col-span-12 md:col-span-7 max-w-full`}
      >
        <h1 className="poppins-medium text-[#DEDEDE] text-[24px] md:text-[40px] leading-[130%]">
          {heading}
        </h1>
        <p className="poppins-regular text-[#B8B9BA] text-[14px] md:text-[16px] leading-[150%] mt-3">
          {text}
        </p>
        <p className="poppins-regular mt-2 text-[#B8B9BA] text-[14px] md:text-[16px] leading-[150%]">
          {subText}
        </p>
        <Button className="mt-[26px] text-[14px] md:text-[16px] text-[#fff] font-semibold tracking-[0.03em] rounded-[90px] bg-[#000] px-[20px] md:px-[26px] py-[10px] md:py-[13px] border-2 border-[#fff] z-[1] max-w-[200px] md:max-w-[250px]">
          Get a Free Consultation
        </Button>
      </div>
    </div>
  );
};

export default OurServices;
