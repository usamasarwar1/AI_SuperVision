"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
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
        <h3 className="text-xl sm:text-2xl font-bold poppins-medium">{title}</h3>
        <p className="text-[#989898] poppins-regular text-sm sm:text-base">
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
      <div className="public-sans min-h-[810px] relative bg-hero-gradient bg-cover bg-no-repeat bg-center bg-gradient-with-image-hero-section">
        <div
          className="flex w-full h-full absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"
          style={{ minHeight: "inherit" }}
        >
          <div className="container mx-auto pt-32 pb-24 flex flex-col items-center justify-center text-center">
            <Image src="/images/herosection.svg" alt="logo" width={50} height={50} />
            <h2 className="text-3xl sm:text-5xl font-bold mb-8 leading-tight text-white">
              Innovative Solutions for
              <br />
              Your Business Growth
            </h2>
            <p className="font-normal text-sm sm:text-base leading-relaxed text-[#e4e4e4] mb-14">
              Empowering your business with cutting-edge technology and strategic expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button className="text-sm sm:text-base rounded-full bg-[#fff] px-6 py-2 sm:px-8 sm:py-3 text-center z-[1]">
                Discover Our Solutions
              </Button>
              <Button className="text-sm sm:text-base text-[#fff] font-semibold tracking-wide rounded-full bg-[#000] px-6 py-2 sm:px-8 sm:py-3 border-2 border-[#fff] z-[1]">
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-black p-6 md:p-0 py-8 sm:py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Image Card */}
          <div className="relative h-[50vh] md:h-full bg-no-repeat bg-cover rounded-xl bg-[url('/images/ourServices.png')] bg-black">
            <div className="bg-transparent relative p-4 flex justify-center items-center">
              <Button
                auto
                shadow
                size="lg"
                className="bg-[#050505] border border-[#fff] text-white font-bold w-full rounded-lg p-4 text-xl poppins-medium flex items-center justify-between"
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
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 1.68164L32.5858 10.2674C33.2525 10.9341 33.5858 11.2674 33.5858 11.6816C33.5858 12.0959 33.2525 12.4292 32.5858 13.0959L24 21.6816"
                    stroke="#FFFEFE"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Services List */}
          <div className="text-white space-y-8">
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
