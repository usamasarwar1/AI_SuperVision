import React from "react";
import Image from "next/image";

const AboutUs = ({ id, videoUrl, heading, text }) => {
  return (
    <div className="container mx-auto p-6  md:p-0 mt-4">
      <div
        className={`${
          id === 0 || id === 1
            ? "border border-[#323232] bg-[#050505] rounded-lg  mb-3 p-[10px]"
            : ""
        }`}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-4  md:gap-6"
          key={id}
        >
          <div
            className={`${
              id % 2 === 0 ? "order-1" : "order-2"
            } col-span-12 md:col-span-5 gap-12 lg:flex ${
              id === 1 ? "lg: justify-end" : ""
            }`}
          >
            <div className="lg:w-[496.37px] lg:h-[294.15px] h-full w-full rounded-lg overflow-hidden">
              <video
                src={videoUrl}
                width={496.37}
                height={300}
                autoPlay
                loop
                muted
                playsInline
                className="lg:w-[496.37px] lg:h-[294.15px]  h-full w-full rounded-lg object-cover flex justify-end"
              />
              <div className="text-white p-4">
                <h2 className="text-lg font-bold">{heading}</h2>
                <p className="text-sm">{text}</p>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center ${
              id % 2 === 0 ? "order-2" : "order-1"
            } col-span-12 md:col-span-7 max-w-full md:max-w-[632px] pl-4 md:pl-16`}
          >
            <h1 className="poppins-medium text-[#DEDEDE] text-2xl md:text-4xl font-semibold leading-tight">
              {heading}
            </h1>
            <p className="poppins-regular text-[#989898] text-sm md:text-base leading-relaxed mt-2">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
