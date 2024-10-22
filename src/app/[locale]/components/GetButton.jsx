"use client"
import React from 'react'

const GetButton = ({name}) => {
  return (
    <button className={`public-sans text-sm sm:text-base text-[#fff] font-semibold  rounded-full bg-[#000] px-[26px] py-[13px] border-2 border-[#fff] z-[1] cursor-pointer`}>
      {name}
  </button>
  )
}

export default GetButton