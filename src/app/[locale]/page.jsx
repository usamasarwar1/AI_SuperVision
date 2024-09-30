import BusinessCard from "./components/BusinessCard";
import ClientTrust from "./components/ClientTrust";
import GetButton from "./components/GetButton";
import HeroSection from "./components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientTrust />
      <BusinessCard
          headingText={'Ready to Transform Your Business?'}
          text={'Let AI Supervision help you reduce costs and streamline your operations with AI-powered solutions. Our no-cost consultation won’t remain free for long, so take advantage of it while it’s available.'}
          button={
            <Link href={"/consultation"}>            
              <GetButton />
            </Link>
          }
        />
    </main>
  );
}
