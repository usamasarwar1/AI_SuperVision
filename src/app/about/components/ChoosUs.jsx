import React from 'react'
import Image from "next/image";

const ChoosUs = () => {
  return (
    <div className='container mx-auto p-6  md:p-0 md:mt-[150px]'>
<div className="flex flex-col md:flex-row justify-between items-center md:gap-[22px] bg-[#050505] p-4 md:p-6">
  {/* Text Section */}
  <div className="md:w-1/3 text-center md:text-left">
    <h1 className="poppins-medium text-[#DEDEDE] text-2xl md:text-4xl font-semibold leading-tight">
      Why Choose Us?
    </h1>
    <p className="poppins-regular text-[#989898] text-sm md:text-base leading-relaxed mt-2">
      We understand the complexities of modern business and the need for innovative solutions. AI Supervision combines deep technical expertise with a client-focused approach, ensuring that our AI solutions are not just advanced but also practical and effective.
    </p>
  </div>

  {/* Image Section */}
  <div className="mt-4 md:mt-0">
    <Image
      src="/images/choosUs.png"
      alt="Choose Us"
      width={496.37}
      height={300}
      className="lg:w-[496.37px] h-auto rounded-lg"
    />
  </div>
</div>

    </div>
  )
}

export default ChoosUs