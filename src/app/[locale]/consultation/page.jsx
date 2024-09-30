"use client"
import React from 'react'
import HeroSections from '../components/HeroSections'
import Calendar from './components/Calendar'
import { useLanguage } from '../context/LanguageContext'
import en from "../../../api/consultation/en.json"
import ar from "../../../api/consultation/ar.json"
import BusinessCard from '../components/BusinessCard'
import Link from 'next/link'
import GetButton from '../components/GetButton'


const Page = () => {
  const { language } = useLanguage();
  const translations = {
    en,
    ar,
  };
 
  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
     <HeroSections
        bg_image="bg-image-hero-consultation"
        headingText=  {translations[language].hero_heading}
        headingBreakText=""
        descripation={translations[language].hero_txt}
        descripationBreakText={translations[language].hero_break_txt}
      />
       <Calendar />
        <BusinessCard
          headingText={'Unlock Your Business’s Full Potential with AI Supervision'}
          text={"Our AI-driven solutions are designed to reduce costs, improve efficiency, and help your business sca"}
          button={
            <Link href={"/consultation"}>            
              <GetButton />
            </Link>
          }
        />
    </div>
  )
}

export default Page