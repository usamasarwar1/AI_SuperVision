import React from "react";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import BusinessCard from "../components/BusinessCard";
import Link from "next/link";
import GetButton from "../components/GetButton";
import { useLocale, useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Services");
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr"

  const cardData = [
    {
      id: 1,
      imageUrl: "/images/digital-transformation.jpg",
      heading: `${t("ai_powered_chat_h")}`,
      text: `${t("ai_powered_chat_txt")}`,
      btnText:`${t("ready_button")}`
  
    },
    {
      id: 2,
      imageUrl: "/images/custom-software.jpg",
      heading: `${t("custom_automation_h")}`,
      text: `${t("custom_automation_txt")}`,
      btnText:`${t("ready_button")}`

     },
    {
      id: 3,
      imageUrl: "/images/cloud-soluation.jpg",
      heading: `${t("internal_flow_h")}`,
      text:`${t("internal_flow_txt")}` ,
      btnText:`${t("ready_button")}`

     },
    {
      id: 4,
      imageUrl: "/images/data-analytics.jpg",
      heading: `${t("ai_consulting_h")}`,      
      text: `${t("ai_consulting_txt")}`,
      btnText:`${t("ready_button")}`
     },
  ];

  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
      <HeroSection  />

      {cardData.map((item, index) => (
        <React.Fragment key={index}>
          <OurServices
            id={index}
            imageUrl={item.imageUrl}
            heading={item.heading}
            text={item.text}
            subText={item.subText}
            name={item.btnText}
          />
        </React.Fragment>
      ))}
       <BusinessCard
          headingText={t("ready_title")}
          text={t("ready_descripation")}
          button={
            <Link href={"/consultation"}>            
              <GetButton />
            </Link>
          }
        />
    </div>
  );
};

export default Page;
