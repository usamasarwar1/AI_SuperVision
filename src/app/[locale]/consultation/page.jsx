"use client"
import React from 'react'
import HeroSections from '../components/HeroSections'
import Calendar from './components/Calendar'
import { useLanguage } from '../context/LanguageContext'
import en from "../../../api/consultation/en.json"
import ar from "../../../api/consultation/ar.json"


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
    </div>
  )
}

export default Page