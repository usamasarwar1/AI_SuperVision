import React from "react";
import HeroSections from "../components/HeroSections";
import Calendar from "./components/Calendar";
import BusinessCard from "../components/BusinessCard";
import Link from "next/link";
import GetButton from "../components/GetButton";
import { useLocale,  useTranslations } from "next-intl";

const Page = () => {
  const locale = useLocale();
  const t = useTranslations("Consultation");
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
      <HeroSections
        bg_image="bg-image-hero-consultation"
        headingText={`${t('hero_heading')}`}
        headingBreakText=""
        descripation={`${t('hero_txt')}`}
        descripationBreakText={`${t('hero_break_txt')}`}
        dir = {dir}
      />
      <Calendar minute =  {`${t('minute')}`}/>
      <BusinessCard
        headingText={`${t("unlock_your_business_h")}`}
        text={`${t("unlock_your_business_txt")}`}
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
