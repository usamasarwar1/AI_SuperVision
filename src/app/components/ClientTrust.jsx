"use client";
import React from "react";
import Image from "next/image";
import {Button,Text,H2} from "@nextui-org/react"

const ClientTrust = () => {

  const data = [
    {
      name:"expertise",
      description:'Over 20 years of industry experience.'
    },
    {
      name:"Reliability",
      description:'Proven track record of delivering on time and within budget.'
    },
    {
      name:"Innovation",
      description:'We stay ahead of the curve with the latest technologies.'
    },
    {
      name:"Customer-Centric",
      description:'Tailored solutions with a focus on client satisfaction.'
    },
    
  ]

  return (
   <>
   <div className="container mx-auto mt-[120px]">
    <div className="grid grid-cols-4 gap-[20px]">
      <div className="col-span-12 mb-[50px]">
        <h2 className="text-[40px] text-center text-white poppins-medium ">Why Our Clients Trust Us</h2>
      </div>
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
      {
        data.map((item, index) => (
        
          <div className="col-span-1 rounded-lg overflow-hidden relative w-full border-1 border-[#0A0B0E] h-[300px] flex flex-col" key={index}>
         
         <h2 className=" text-[#DEDEDE] text-center text-[24px] poppins-medium my-auto">{item.name}</h2>
          {/* Gradient overlay */}
    
          <div className="flex flex-col items-center justify-center py-10 text-white z-20 relative bg-[#0A0B0E]  h-[150px] mt-auto p-[20px]">
          
          <div className="absolute top-[-28px] z-10">
            <Image src="/images/icons/down-arrow.svg" alt="logo" width={56} height={56} />
          </div>
            <p className=" text-[#989898] text-[14px] poppins-regular text-center">{item.description}</p>
          </div>
        </div>
        ))
      }
      </div>
     
     

      <div className="public-sans relative ">
          <div className="flex w-full  h-inherit  " style={{minHeight:'inherit'}}>
            <div className="container mx-auto pt-[170px] flex items-center justify-center flex-col">
              <div className="relative w-full">
                <img src="/images/client-trust.png" alt="logo" className="w-full" />
                <div className="absolute h-inherit  inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
              </div>

              <div className="grid grid-cols-12 gap-[20px] relative mb-[150px]">
                <div className="col-span-3">
                <h2 className="text-[40px]  text-white poppins-medium  mb-[50px]">Benefits of <br/>
                  Working with Us</h2>
                  <Button className="  text-[16px] text-[#fff] font-semibold tracking-[0.03em]  rounded-[90px] bg-[#000] px-[26px] py-[13px] border-2 border-[#fff]  z-[1] ">
                  Get a Free Consultation
                  </Button>
                </div>
                <div className="col-span-9 relative z-[2]">
                <div className="grid grid-cols-3 gap-[20px] relative">
                  <div className="absolute left-[50%] transform translate-x-[-50%] top-[55px] z-[0] xl:min-w-[580px] 2xl:min-w-[700px]">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="z-[1]" width="577" height="11" viewBox="0 0 577 11" fill="none">
                      <path d="M0.304199 5.68164L576.696 5.68164" stroke="url(#paint0_linear_421_4601)" stroke-width="10"/>
                      <defs>
                        <linearGradient id="paint0_linear_421_4601" x1="578.018" y1="5.68164" x2="1.6262" y2="5.68164" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#87B5F4" stop-opacity="0"/>
                          <stop offset="0.485" stop-color="#1D50ED"/>
                          <stop offset="1" stop-color="#87B5F4" stop-opacity="0.18"/>
                        </linearGradient>
                      </defs>
                    </svg> */}
                    <img src="/images/icons/line.svg" alt="logo" width={120} height={120} className="w-full"  />
                  </div>
                  <div className="col-span-1 flex items-center content-center flex-col z-[2]">
                    <Image src="/images/icons/efficiency.svg" alt="logo" width={120} height={120}  />
                    <h3 className="text-[24px] font-bold poppins-medium text-[#DEDEDE] ">Increased Efficiency</h3>
                    <p className="text-[#989898] poppins-regular text-[14px] text-center">Streamline your operations and reduce costs with our innovative solutions.</p>

                  </div>
                  <div className="col-span-1 flex items-center content-center flex-col relative z-[2]">
                  <Image src="/images/icons/scaleability.png" alt="logo" width={120} height={120} />
                    <h3 className="text-[24px] font-bold poppins-medium text-[#DEDEDE]">Scalability</h3>
                    <p className="text-[#989898] poppins-regular text-[14px] text-center">Our services grow with your business, ensuring long-term success.</p>
                  </div>
                  <div className="col-span-1 flex items-center content-center flex-col z-[2]">
                  <Image src="/images/icons/support.svg" alt="logo" width={120} height={120} />
                    <h3 className="text-[24px] font-bold poppins-medium text-[#DEDEDE]">Expert Support</h3>
                    <p className="text-[#989898] poppins-regular text-[14px] text-center">We provide ongoing support to ensure your business continues to thrive.</p>
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
