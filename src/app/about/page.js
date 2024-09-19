import React from "react";
import HeroSections from "../components/HeroSections";
import AboutUs from "./components/AboutUs";
import ValuesCard from "./components/ValuesCard"
import ChoosUs from "./components/ChoosUs";

const page = () => {
  const cardData = [
    {
      id: 1,
      videoUrl: "/videos/exporties.mp4",
      heading: "Our Expertise",
      text: "With a team of AI experts, data scientists, and industry specialists, AI Supervision delivers tailored solutions that address the unique challenges faced by businesses today. We specialize in integrating AI into various aspects of business operations, ensuring our clients stay ahead in a competitive market.",
    },
    {
      id: 2,
      videoUrl: "/videos/whoAbout.mp4",
      heading: "Who We Are",
      text: "AI Supervision is dedicated to transforming how businesses operate by providing advanced AI-driven solutions. Our vision is to empower organizations with cutting-edge technology that enhances decision-making, optimizes operations, and unlocks new opportunities for growth",
    },
   
      ];

  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
      <HeroSections
        bg_image="bg-image-hero-about"
        headingText="Empowering Businesses Through"
        headingBreakText="Innovation and Expertise"
        descripation={
          "At AI Supervision, we believe in transforming visions into reality by leveraging technology, creativity, and strategic thinking."
        }
      />

   <div className="mt-[67px]">
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
       <ChoosUs />
   </div>
    </div>
  );
};

export default page;
