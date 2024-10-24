import React from "react";
import Image from "next/image";
import GetButton from "../../components/GetButton";
import { useLocale } from "next-intl";
import Link from "next/link";

const OurServices = ({ id, imageUrl, heading, text, subText,name }) => {
  const locale = useLocale();
const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 xl:gap-[110px] pb-8 lg:pb-24"
      key={id}
    >
      {/* Image Section */}
      <div
        className={`${
          id % 2 === 0 ? "lg:order-1" : "lg:order-2"
        } col-span-1 lg:col-span-5`}
      >
        <Image
          src={imageUrl}
          alt={`Image for card ${id}`}
          width={500}
          height={500}
          className="w-[549.17px] h-[438.67px] rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div
        className={`flex flex-col justify-center ${
          id % 2 === 0 ? "lg:order-2" : "lg:order-1"
        } col-span-1 lg:col-span-7 xl:col-span-7`}
      >
        <h1 className="poppins-medium text-[#DEDEDE] text-2xl  sm:text-4xl xl:text-5xl leading-5 md:leading-[150%]" dir = {dir}>
         
          <span className={`${dir === "rtl" ? "leading-7" : ""}`}> {heading}</span>
        </h1>
        <p className="poppins-regular text-[#B8B9BA] text-base lg:text-lg leading-5 md:leading-[150%] mt-4" dir={dir}>
          {/* {text} */}
          <span className={`${dir === "rtl" ? "leading-7" : ""}`}>{text}</span>
        </p>
        <p className="poppins-regular text-[#B8B9BA] text-base lg:text-lg leading-5 md:leading-[150%] mt-2" dir={dir}>
          {subText}
        </p>
        <div className="mt-6">
          {/* <button className="public-sans text-sm sm:text-base text-white font-semibold bg-black rounded-full px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300">
            Get a Free Consultation
          </button> */}
          <Link href={"/consultation"}>
          <GetButton name={name} />
          </Link>

          {/* <Button className="public-sans text-sm sm:text-base text-white font-semibold bg-black rounded-full px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300"> 
           Get a Free Consultation
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
