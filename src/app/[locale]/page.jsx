import BusinessCard from "./components/BusinessCard";
import ClientTrust from "./components/ClientTrust";
import GetButton from "./components/GetButton";
import HeroSection from "./components/HeroSection";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";
  console.log(dir);

  return (
    <main>
      <HeroSection />
      <ClientTrust />
      <BusinessCard
        headingText={t("ready_title")}
        text={t("ready_descripation")}
        dir={dir}
        button={<GetButton />}
      />
    </main>
  );
}
