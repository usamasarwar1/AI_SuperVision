"use client";
import React from "react";
import { Button } from "@nextui-org/react";

import Image from "next/image";
// 110.8px
const OurServices = ({ id, imageUrl, heading, text, subText }) => {
    return (
        <div
            className="container mx-auto grid grid-cols-12 mb-[140.79px]"
            key={id}
        >
            <div
                className={`${id % 2 === 0 ? "order-1" : "order-2"
                    } col-span-5`}
            >
                <Image
                    src={imageUrl}
                    alt={`Image for card ${id}`}
                    width={500}
                    height={300}
                    className="w-[full] h-[full] rounded-t-none rounded-b-lg"
                />
            </div>

            <div
                className={`flex flex-col justify-center ${id % 2 === 0 ? "order-2" : "order-1"
                    } col-span-7 max-w-[632.323px]`}
            >
                <h1 className="poppins-medium text-[#DEDEDE] text-[40px] leading-[130%]">
                    {heading}
                </h1>
                <p className="poppins-regular text-[#B8B9BA] text-[14px] leading-[150%]">
                    {text}
                </p>
                <p className="poppins-regular mt- text-[#B8B9BA] text-[14px] leading-[150%]">
                    {subText}
                </p>
                <Button className="mt-[26px] text-[16px] text-[#fff] font-semibold tracking-[0.03em]  rounded-[90px] bg-[#000] px-[26px] py-[13px] border-2 border-[#fff] z-[1] max-w-[250px]">
                    Get a Free Consultation
                </Button>
            </div>
        </div>
    );
};

export default OurServices;
