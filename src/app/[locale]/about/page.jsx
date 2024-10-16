import React from "react";
import HeroSections from "../components/HeroSections";
import AboutUs from "./components/AboutUs";
import ValuesCard from "./components/ValuesCard";
import ChoosUs from "./components/ChoosUs";


import { useTranslations } from "next-intl";
import BusinessCard from "../components/BusinessCard";
import Link from "next/link";
import GetButton from "../components/GetButton";

const Page = () => {
  const t = useTranslations("About");

  const cardData = [
    {
      id: 1,
      videoUrl: "/videos/exporties.mp4",
      heading: `${t("experties_heading")}`,
      text: `${t("experties_txt")}`,
     },
    {
      id: 2,
      videoUrl: "/videos/whoAbout.mp4",
      heading: `${t("who_are_heading")}`,
      text: `${t("who_are_txt")}`,
       },
  ];

  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
      <HeroSections
        bg_image="bg-image-hero-about"
        headingText="Empowering Businesses Through"
        headingBreakText="Innovation and Expertise"
        descripation="At AI Supervision, we believe in transforming visions into reality by leveraging technology, creativity, and strategic thinking."
       />

      <div className="mt-[50px] pb-[150px]">
        {cardData.map((item, index) => (
          <React.Fragment key={index}>
            <AboutUs
              id={index}
              videoUrl={item.videoUrl}
              heading={item.heading}
              text={item.text}
              subText={item.subText}
            />
          </React.Fragment>
        ))}
        <ValuesCard />
        <ChoosUs
          choose_us={`${t("choose_us")}`}
          choos_us_txt={`${t("choos_us_txt")}`}
        />
      </div>
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
