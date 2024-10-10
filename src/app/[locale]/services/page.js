import React from "react";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import BusinessCard from "../components/BusinessCard";
import Link from "next/link";
import GetButton from "../components/GetButton";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Services");
  const cardData = [
    {
      id: 1,
      imageUrl: "/images/digital-transformation.jpg",
      heading: `${t("ai_powered_chat_h")}`,
      text: `${t("ai_powered_chat_txt")}`  
    },
    {
      id: 2,
      imageUrl: "/images/custom-software.jpg",
      heading: `${t("custom_automation_h")}`,
      text: `${t("custom_automation_txt")}`
     },
    {
      id: 3,
      imageUrl: "/images/cloud-soluation.jpg",
      heading: `${t("internal_flow_h")}`,
      text:`${t("internal_flow_txt")}` 
     },
    {
      id: 4,
      imageUrl: "/images/data-analytics.png",
      heading: `${t("ai_consulting_h")}`,      
      text: `${t("ai_consulting_txt")}` 
     },
  ];

  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
      <HeroSection />

      {cardData.map((item, index) => (
        <React.Fragment key={index}>
          <OurServices
            id={index}
            imageUrl={item.imageUrl}
            heading={item.heading}
            text={item.text}
            subText={item.subText}
          />
        </React.Fragment>
      ))}
       <BusinessCard
          headingText={"Ready to Automate Your Operations?"}
          text={"Make a one-time investment that replaces the ongoing costs of recurring monthly salaries. Our AI solutions deliver high returns by streamlining operations and boosting efficiency."}
          button={
            <Link href={"/consultation"}>            
              <GetButton />
            </Link>
          }
        />
    </div>
  );
};

export default page;
