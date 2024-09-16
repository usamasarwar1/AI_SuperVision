import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import ValuesCard from "./ValuesCard";

const AboutUs = ({ id, imageUrl, heading, text }) => {
  console.log("id", imageUrl);
  return (
    <div className="container mx-auto p-6  md:p-0 mt-4">
      {id === 2 ? (
        <ValuesCard />
      ) : (
        <div
          className={`${
            id === 0 || id === 1
              ? "border border-[#323232] bg-[#050505] rounded-lg p-4 mb-3 md:p-8"
              : ""
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-0 md:mb-4 md:gap-6" key={id}>
            <div
              className={`${
                id % 2 === 0 ? "order-1" : "order-2"
              } col-span-12 md:col-span-5 gap-12`}
            >
              <Image
                src={imageUrl}
                alt={`Image for card ${id}`}
                width={500}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div
              className={`flex flex-col justify-center ${
                id % 2 === 0 ? "order-2" : "order-1"
              } col-span-12 md:col-span-7 max-w-full md:max-w-[632px] pl-4 md:pl-16`}
            >
              <h1 className="text-[#DEDEDE] text-2xl md:text-4xl font-semibold leading-tight">
                {heading}
              </h1>
              <p className="text-[#B8B9BA] text-sm md:text-base leading-relaxed mt-2">
                {text}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
