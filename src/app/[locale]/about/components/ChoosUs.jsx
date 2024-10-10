import React from "react";

const ChoosUs = ({ choose_us, choos_us_txt }) => {
  return (
    <div className="container mx-auto p-6  md:p-0 md:mt-[150px]">
      <div className="flex flex-col md:flex-row  items-center  md:gap-[6em]  lg:gap-[12.75em] xl:gap-[23.75em] bg-[#050505] p-4 md:p-6">
        {/* Text Section */}
        <div className="lg:w-1/3 text-center md:text-left">
          <h1 className="poppins-medium text-[#DEDEDE] text-2xl md:text-4xl font-semibold leading-tight">
            {choose_us}
          </h1>
          <p className="poppins-regular text-[#989898] text-sm md:text-base leading-relaxed mt-2">
            {choos_us_txt}
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-4 md:mt-0">
          <video
            src="/videos/choosUs.mp4"
            width={538.8}
            height={300}
            autoPlay
            loop
            muted
            playsInline
            className=" lg:w-[538.8px] lg:h-[303.07px]  h-full w-full rounded-lg object-cover flex justify-end"
          />
        </div>
      </div>
    </div>
  );
};

export default ChoosUs;
