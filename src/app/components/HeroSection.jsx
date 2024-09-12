"use client";
import React, { useState } from "react";
import { Button, Card } from "@nextui-org/react";
import Image from "next/image";

const ServiceItem = ({ index, title, description, icon, active, onClick }) => {
  return (
    <div
      onClick={() => onClick(index)}
      className={`flex items-start space-x-4 p-4 cursor-pointer transition-all ${
        active ? "border-l-4 border-white" : "border-l-4 border-[#181818]"
      }`}
    >
      <Image className="text-3xl mt-2" src={icon} width={24} height={24} />
      <div>
        <h3 className="text-[24px] font-bold poppins-medium">{title}</h3>
        <p className="text-[#989898] poppins-regular text-[14px]">
          {description}
        </p>
      </div>
    </div>
  );
};
const HeroSection = () => {
  const [activeService, setActiveService] = useState(0);

  const handleClick = (index) => {
    setActiveService(index);
  };

  return (
    <div>
      <div className="public-sans min-h-[810px] relative bg-hero-gradient  bg-cover bg-no-repeat bg-center bg-gradient-with-image-hero-section">
        <div
          className="flex w-full  h-inherit absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"
          style={{ minHeight: "inherit" }}
        >
          <div className="container mx-auto pt-[170px] pb-[150px] flex items-center justify-center flex-col">
            <Image
              src="/images/herosection.svg"
              alt="logo"
              width={50}
              height={50}
            />
            <h2 className=" text-[38px] sm:text-[64px] font-bold mb-8  leading-[1.3] text-white">
              Innovative Solutions for
              <br />
              Your Business Growth
            </h2>
            <p className="font-normal text-[16px] leading-9 text-[#e4e4e4] mb-[55px]">
              Empowering your business with cutting-edge technology and
              strategic expertise.
            </p>
            <div className="sm:flex sm:gap-9">
              <div className=" flex gap-3">
                <Button className=" text-[16px] rounded-[90px] bg-[#fff] px-[26px] py-[13px] text-center  z-[1] ">
                  Discover Our Solutions
                </Button>
                <Button className="  text-[16px] text-[#fff] font-semibold tracking-[0.03em]  rounded-[90px] bg-[#000] px-[26px] py-[13px] border-2 border-[#fff]  z-[1] ">
                  Get a Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-black py-16">
        <div className="container mx-auto grid grid-cols-12 md:flex-row items-center gap-20">
          {/* Left Image Card */}
          <div className="col-span-6 h-full bg-no-repeat  bg-[url('/images/ourServices.png')] bg-black bg-cover rounded-[16px] bg-bottom">
            <div className="bg-transparent relative p-[10px] ">
              <div className=" w-full flex justify-center items-center">
                <Button
                  auto
                  shadow
                  size="lg"
                  className="bg-[#050505] border-1 border-[#fff] text-white font-bold w-full rounded-[12px] p-[36px] text-[40px] poppins-medium  flex justify-between"
                  iconRight={<span className="ml-2">→</span>}
                >
                  Our Core Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="24"
                    viewBox="0 0 36 24"
                    fill="none"
                  >
                    <path
                      d="M32 11.6816L2 11.6816"
                      stroke="#FFFEFE"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M24 1.68164L32.5858 10.2674C33.2525 10.9341 33.5858 11.2674 33.5858 11.6816C33.5858 12.0959 33.2525 12.4292 32.5858 13.0959L24 21.6816"
                      stroke="#FFFEFE"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Services List */}
          <div className=" col-span-6 text-white space-y-8">
            <ServiceItem
              index={0}
              title="Digital Transformation Consulting"
              description="Transform your business operations with our comprehensive digital solutions, tailored to meet your unique needs."
              icon="/images/icons/dtc.svg"
              active={activeService === 0}
              onClick={handleClick}
            />
            <ServiceItem
              index={1}
              title="Custom Software Development"
              description="We build scalable and robust software solutions that drive efficiency and growth, from idea to implementation."
              icon="/images/icons/csd.svg"
              active={activeService === 1}
              onClick={handleClick}
            />
            <ServiceItem
              index={2}
              title="Cloud Solutions"
              description="Leverage the power of cloud technology to enhance flexibility, reduce costs, and improve business continuity."
              icon="/images/icons/cs.svg"
              active={activeService === 2}
              onClick={handleClick}
            />
            <ServiceItem
              index={3}
              title="Data Analytics & AI"
              description="Unlock the potential of your data with advanced analytics and AI-driven insights to make informed business decisions."
              icon="/images/icons/bot.svg"
              active={activeService === 3}
              onClick={handleClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
