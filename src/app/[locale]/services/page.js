import React from "react";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import BusinessCard from "../components/BusinessCard";
import Link from "next/link";
import GetButton from "../components/GetButton";

const page = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: "/images/digital-transformation.png",
      heading: "AI-Powered Chat Super Agents",
      text: "Our AI-Powered Chat Super Agents don’t just respond to customer inquiries—they also automate workflows that extend beyond the chat interface. From managing customer support to pulling relevant data and automating follow-ups, these agents are designed to enhance both customer experience and operational efficiency."  },
    {
      id: 2,
      imageUrl: "/images/custom-software.png",
      heading: "Custom Software Development",
      text: "We design tailored automation systems to eliminate slow processes and replace or reduce workforce dependency. Free up your team to focus on strategic growth while AI handles repetitive tasks." },
    {
      id: 3,
      imageUrl: "/images/cloud-soluation.png",
      heading: "Internal Workflow Automation",
      text: "Our internal workflow automation solutions help businesses optimize their in-house operations. From automating reporting systems, task delegation, and staff communication, our AI tools allow your team to operate efficiently without getting bogged down by manual processes." },
    {
      id: 4,
      imageUrl: "/images/data-analytics.png",
      heading: "AI Consulting for Business Transformation",
      text: "We help businesses assess where AI can provide the most significant impact. From reducing operational costs to optimizing your workforce, our AI consulting services provide strategic insights and a step-by-step roadmap to implement AI technologies." },
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
