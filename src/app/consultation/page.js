import React from 'react'
import HeroSections from '../components/HeroSections'
import Calendar from './components/Calendar'


const page = () => {
 
  return (
    <div className="bg-[#050505] mb-[50px] lg:mb-[140.79px]">
     <HeroSections
        bg_image="bg-image-hero-consultation"
        headingText="Schedule Your FREE Consultation."
        headingBreakText=""
        descripation="Fill out the following information and set up a time to talk. Once you are done setting up a time, "
        descripationBreakText="please check your email for your confirmation."
      />
       <Calendar />
    </div>
  )
}

export default page