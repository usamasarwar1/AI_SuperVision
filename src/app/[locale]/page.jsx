import BusinessCard from "./components/BusinessCard";
import ClientTrust from "./components/ClientTrust";
import GetButton from "./components/GetButton";
import HeroSection from "./components/HeroSection";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("Home");
  return (
    <main>
      <HeroSection />
      <ClientTrust />
      <BusinessCard
          headingText={t("ready_title")}
          text={t("ready_descripation")}
          button={
                      
              <GetButton />
           
          }
        />
    </main>
  );
}
