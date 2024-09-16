"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const ClientTrust = () => {
  const data = [
    {
      name: "Expertise",
      description: 'Over 20 years of industry experience.'
    },
    {
      name: "Reliability",
      description: 'Proven track record of delivering on time and within budget.'
    },
    {
      name: "Innovation",
      description: 'We stay ahead of the curve with the latest technologies.'
    },
    {
      name: "Customer-Centric",
      description: 'Tailored solutions with a focus on client satisfaction.'
    },
  ];

  return (
    <>
      <div className="container mx-auto mt-12 md:mt-24 p-6 md:p-0">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-medium">Why Our Clients Trust Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {data.map((item, index) => (
            <div className="rounded-lg overflow-hidden border border-[#0A0B0E] flex flex-col bg-[#0A0B0E]" key={index}>
              <h2 className="text-[#DEDEDE] text-lg md:text-xl lg:text-2xl text-center py-4">{item.name}</h2>
              <div className="flex flex-col items-center justify-center py-6 px-4 text-white">
                <div className="relative">
                  <Image src="/images/icons/down-arrow.svg" alt="arrow" width={56} height={56} />
                </div>
                <p className="text-[#989898] text-sm md:text-base text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-12 md:mt-24">
          <div className="relative w-full">
            <img src="/images/client-trust.png" alt="client trust" className="w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
          </div>

          <div className="container mx-auto relative z-10 mt-12 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-medium mb-6">Benefits of Working with Us</h2>
                <Button className="text-sm md:text-base text-white font-semibold bg-black rounded-full px-4 py-2 border-2 border-white">
                  Get a Free Consultation
                </Button>
              </div>
              <div className="col-span-2 lg:col-span-2 relative">
                <div className="relative flex items-center justify-center">
                  <img src="/images/icons/line.svg" alt="line decoration" width={120} height={120} className="absolute inset-x-0 mx-auto top-8" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    <div className="flex flex-col items-center text-center">
                      <Image src="/images/icons/efficiency.svg" alt="efficiency" width={120} height={120} />
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#DEDEDE]">Increased Efficiency</h3>
                      <p className="text-sm md:text-base text-[#989898]">Streamline your operations and reduce costs with our innovative solutions.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Image src="/images/icons/scaleability.png" alt="scalability" width={120} height={120} />
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#DEDEDE]">Scalability</h3>
                      <p className="text-sm md:text-base text-[#989898]">Our services grow with your business, ensuring long-term success.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Image src="/images/icons/support.svg" alt="support" width={120} height={120} />
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#DEDEDE]">Expert Support</h3>
                      <p className="text-sm md:text-base text-[#989898]">We provide ongoing support to ensure your business continues to thrive.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTrust;
