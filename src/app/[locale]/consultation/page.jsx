import React from "react";
import HeroSections from "../components/HeroSections";
import Calendar from "./components/Calendar";
import BusinessCard from "../components/BusinessCard";
import Link from "next/link";
import GetButton from "../components/GetButton";
import { useLocale, useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Consultation");
  const locale = useLocale();
const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
      <HeroSections
        bg_image="bg-image-hero-consultation"
        headingText="Schedule Your FREE Consultation."
        headingBreakText=""
        descripation="Fill out the following information and set up a time to talk. Once you are done setting up a time,"
        descripationBreakText="please check your email for your confirmation."
      />
      <Calendar />
      <BusinessCard
        headingText={`${t("unlock_your_business_h")}`}
        text={`${t("unlock_your_business_txt")}`}
        dir = {dir}
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
