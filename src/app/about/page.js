import React from "react";
import HeroSections from "../components/HeroSections";
import AboutUs from "./components/AboutUs";

const page = () => {
  const cardData = [
    {
      id: 1,
      imageUrl: "/images/exporties.png",
      heading: "Our Expertise",
      text: "With a team of AI experts, data scientists, and industry specialists, AI Supervision delivers tailored solutions that address the unique challenges faced by businesses today. We specialize in integrating AI into various aspects of business operations, ensuring our clients stay ahead in a competitive market.",
    },
    {
      id: 2,
      imageUrl: "/images/whoAbout.png",
      heading: "Who We Are",
      text: "AI Supervision is dedicated to transforming how businesses operate by providing advanced AI-driven solutions. Our vision is to empower organizations with cutting-edge technology that enhances decision-making, optimizes operations, and unlocks new opportunities for growth",
    },
    {
      id: 3,
      imageUrl: "/images/aboutVlues.png",
      heading: "Cloud Solutions",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      imageUrl: "/images/choosUs.png",
      heading: "Why Choose Us?",
      text: "We understand the complexities of modern business and the need for innovative solutions. AI Supervision combines deep technical expertise with a client-focused approach, ensuring that our AI solutions are not just advanced but also practical and effective.",
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

      {cardData.map((item, index) => (
        <React.Fragment key={index}>
          <AboutUs
            id={index}
            imageUrl={item.imageUrl}
            heading={item.heading}
            text={item.text}
            subText={item.subText}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default page;
