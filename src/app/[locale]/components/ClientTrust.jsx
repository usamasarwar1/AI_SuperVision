import React from "react";
import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";

const ClientTrust = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const data = [
    {
      name: `${t("expertise")}`,
      description: `${t("expertise_txt")}`,
    },
    {
      name: `${t("reliability")}`,
      description: `${t("reliability_txt")}`,
    },
    {
      name: `${t("innovation")}`,
      description: `${t("innovation_txt")}`,
    },
    {
      name: `${t("customer")}`,
      description: `${t("customer_txt")}`,
    },
  ];

  return (
    <>
      <div className="container mx-auto mt-[120px] p-4 md:p-0">
        <div className="grid grid-cols-4 gap-[20px]">
          <div className="col-span-12 mb-[50px]">
            <h2 className="text-xl md:text-[40px] text-center text-white poppins-medium ">
              {t("businesses_choose")}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-content-center">
          {data.map((item, index) => (
            <div
              className="col-span-1 rounded-lg overflow-hidden relative w-full border-1 border-[#0A0B0E] h-[410px] flex flex-col group"
              key={index}
            >
              <h2
                className=" text-[#DEDEDE] text-center text-[24px] poppins-medium my-auto"
                dir={dir}
              >
                {item.name}
              </h2>

              <div className="flex flex-col items-center justify-center py-10 text-white z-20 relative bg-[#0A0B0E] h-[250px]  mt-auto p-[20px] ">
                <div className="absolute -top-[20px] left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center"></div>
                </div>

                {/* Previous content */}
                <div className="absolute top-[-28px] z-10">
                  <Image
                    src="/images/icons/down-arrow.svg"
                    alt="logo"
                    width={70}
                    height={70}
                    className="group-hover:scale-125"
                  />
                </div>

                <p
                  className="text-[#989898] text-[14px]  poppins-regular text-center group-hover:font-bold lg:group-hover:text-[26px] xl:group-hover:text-xl "
                  dir={dir}
                >
                  <span
                    className={`${
                      dir === "rtl"
                        ? "leading-6 md:leading-normal hover:leading-3 lg:hover:leading-normal"
                        : ""
                    }`}
                  >
                    {item.description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="public-sans relative">
          <div className="flex w-full h-full" style={{ minHeight: "inherit" }}>
            <div className="container mx-auto pt-[100px] md:pt-[170px] pb-[100px] md:pb-[150px] flex items-center justify-center flex-col">
              <div className="relative w-full">
                <video
                  src="/videos/client-trust.mp4"
                  width={500}
                  height={500}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full rounded-lg object-cover bg-hero-gradient"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-[74px] relative mt-8">
                <div className="text-center lg:text-left">
                  <h2 className="poppins-medium text-white font-medium mb-4 md:mb-6 !leading-[1.2] text-2xl md:text-3xl lg:text-4xl">
                    {t("h_benifit_h")}
                    <br className="hidden md:block" /> {t("h_benfit_break_h")}
                  </h2>
                  {/* <button className="public-sans text-sm md:text-base text-white font-semibold bg-black rounded-full px-[20px] py-[12px] border-2 border-white">
                    {translation[language].free_consultation_btn}
                    {t("free_consultation_btn")}
                  </button> */}
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-2 relative z-[2] mt-6 lg:mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] relative">
                    <div className="absolute left-[50%] transform translate-x-[-50%] md:top-[40px] lg:top-[55px] z-[0] min-w-[300px] md:min-w-[580px] 2xl:min-w-[700px] hidden md:inline-block">
                      <img
                        src="/images/icons/line.svg"
                        alt="line"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="col-span-1 flex items-center content-center flex-col z-[2]">
                      <img
                        src="/images/icons/efficiency.svg"
                        alt="efficiency"
                        className="w-[80px] md:w-[100px] lg:w-[120px]"
                      />
                      <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold poppins-medium text-[#DEDEDE]">
                        {t("h_efficiency")}
                      </h3>
                      <p className="text-[#989898] poppins-regular text-[12px] md:text-[14px] text-center">
                        <span className={`${dir === "rtl" ? "leading-7" : ""}`}>
                          {" "}
                          {t("h_efficiecny_txt")}{" "}
                        </span>
                      </p>
                    </div>
                    <div className="col-span-1 flex items-center content-center flex-col z-[2]">
                      <img
                        src="/images/icons/scaleability.png"
                        alt="scalability"
                        className="w-[80px] md:w-[100px] lg:w-[120px]"
                      />
                      <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold poppins-medium text-[#DEDEDE]">
                        {t("h_scalability")}
                      </h3>
                      <p className="text-[#989898] poppins-regular text-[12px] md:text-[14px] text-center">
                        <span className={`${dir === "rtl" ? "leading-7" : ""}`}>
                          {" "}
                          {t("h_scalability_txt")}{" "}
                        </span>
                      </p>
                    </div>
                    <div className="col-span-1 flex items-center content-center flex-col z-[2]">
                      <img
                        src="/images/icons/support.svg"
                        alt="support"
                        className="w-[80px] md:w-[100px] lg:w-[120px]"
                      />
                      <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold poppins-medium text-[#DEDEDE]">
                        <span className={`${dir === "rtl" ? "leading-7" : ""}`}>
                          {" "}
                          {t("h_expert")}{" "}
                        </span>
                      </h3>
                      <p className="text-[#989898] poppins-regular text-[12px] md:text-[14px] text-center">
                        {/* {translation[language].expert_txt} */}
                        <span className={`${dir === "rtl" ? "leading-7" : ""}`}>
                          {" "}
                          {t("expert_txt")}
                        </span>
                      </p>
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
