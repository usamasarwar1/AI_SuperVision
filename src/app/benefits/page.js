import React from "react";
import HeroSections from "../components/HeroSections";

import Image from "next/image";

const page = () => {
  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
      <HeroSections
        bg_image="bg-image-hero-benefits"
        headingText="Why AI Supervision"
        headingBreakText=""
        descripation=" Discover the advantages of partnering with AI Supervision for your AI-powered"
        descripationBreakText="business solutions."
      />
      <div className="container mx-auto px-4 md:px-8 mt-[83.86px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5">
          <div className="col-span-12 md:col-span-7">
           <video
        src="/videos/competitive.mp4"
        width={700}
        height={250}
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-h-[250px] rounded-[14px] object-cover"
      />
            <div className="bg-[#131619] mt-3 rounded-[16px] p-4 md:p-[30px] h-auto lg:max-h-[198.67px]">
              <div className="flex flex-col justify-center text-left">
                <h1 className="text-[#DEDEDE] poppins-medium text-[24px] lg:text-[40px] leading-[130%]">
                  Competitive Advantage
                </h1>
                <h2 className="text-[#DEDEDE] poppins-medium text-[14px] lg:text-[16px] leading-[130%]">
                  Optimize Your Operations
                </h2>
                <p className="poppins-light text-[12px] md:text-[14px] font-normal leading-[20px] text-[#DEDEDE] opacity-70 mt-1">
                  With AI Supervision, your business gains a competitive edge by
                  leveraging cutting-edge AI technology. Our solutions are
                  designed to enhance productivity, improve decision-making, and
                  drive innovation, keeping you ahead in a rapidly changing
                  market.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5">
                          <video
        src="/videos/efficiency.mp4"
        width={700}
        height={255}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[250px] rounded-[14px] object-cover"
      />
            <div className="bg-[#131619] mt-3 rounded-[16px] p-4 md:p-[30px] h-auto lg:max-h-[198.67px]">
              <div className="flex flex-col justify-center text-left">
                <h1 className="text-[#DEDEDE] poppins-medium text-[24px] lg:text-[40px] leading-[130%]">
                  Increased Efficiency
                </h1>
                <h2 className="text-[#DEDEDE] poppins-medium text-[14px] lg:text-[16px] leading-[130%]">
                  Optimize Your Operations
                </h2>
                <p className="poppins-light text-[12px] md:text-[14px] font-normal leading-[20px] text-[#DEDEDE] opacity-70 mt-1">
                  Our AI solutions streamline processes, reduce operational
                  costs, and eliminate inefficiencies. By automating routine
                  tasks and providing actionable insights, we help you achieve
                  more with less.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:mt-[66.33px] gap-[10px] mt-3 md:mt-0">
         
      <video
        src="/videos/dataDriven.mp4"
        width={700}
        height={501}
        autoPlay
        loop
        muted
        playsInline
      className="w-full max-h-[501px] rounded-[14px] object-cover"
      />
          <div className="bg-[#131619] rounded-[16px] p-4 md:p-[20.35px_30px_30.57px_78px]">
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[#DEDEDE] poppins-medium text-[24px] md:text-[40px] leading-[130%]">
                Data-Driven Insights
              </h1>
              <h2 className="text-[#B8B9BA] poppins-medium text-[14px] md:text-[16px] leading-[130%]">
                Make Informed Decisions
              </h2>
              <p className="poppins-light text-[12px] md:text-[14px] font-normal leading-[24px] text-[#B8B9BA] opacity-70 mt-1 max-w-[90%]">
                Harness the power of data with AI Supervision. Our solutions
                provide deep insights into your business operations, enabling
                you to make data-driven decisions that lead to better outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-[10.24px] mt-3  md:mt-[89.94px]">
          <div className="col-span-12 md:col-span-8">
                          
      <video
        src="/videos/scalableSolutions.mp4"
        width={500}
        height={300}
        autoPlay
        loop
        muted
        playsInline
    className="object-cover w-full h-[228.53px] rounded-[14px]"
      />
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="bg-[#131619] h-full rounded-[16px] p-4 md:p-[30.28px] flex flex-col justify-center text-left">
              <h1 className="text-[#DEDEDE] poppins-medium text-[24px] md:text-[40px] leading-[130%]">
                Scalable Solutions
              </h1>
              <h2 className="text-[#B8B9BA] poppins-medium text-[14px] md:text-[16px] leading-[130%]">
                Grow with Confidence
              </h2>
              <p className="poppins-light  text-[12px] md:text-[14px] font-normal leading-[24px] text-[#B8B9BA] opacity-70 mt-1">
                As your business grows, so do your AI needs. Our scalable
                solutions are designed to grow with you, ensuring that you can
                continue to benefit from AI as your operations expand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
