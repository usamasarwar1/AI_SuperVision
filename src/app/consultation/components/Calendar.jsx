"use client";
import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./generateDate";
import cn from "./cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Button } from "@nextui-org/react";

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className="container mx-auto p-4 sm:p-0 lg:p-8 mt-[36.37px]">
      <div className="bg-[#0B0B0B]  rounded-[16px] w-full flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Left Section */}
        <div className="lg:w-[40%] p-4 sm:p-6">
          <h2 className="poppins-medium text-[#DEDEDE] text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
            30 Minute Initial Consultation
          </h2>
          <div className="flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              className="flex-shrink-0"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.3701 18.4316C12.4918 18.4316 14.5267 17.5888 16.027 16.0885C17.5273 14.5882 18.3701 12.5534 18.3701 10.4316C18.3701 8.30991 17.5273 6.27508 16.027 4.77479C14.5267 3.2745 12.4918 2.43164 10.3701 2.43164C8.24839 2.43164 6.21355 3.2745 4.71326 4.77479C3.21297 6.27508 2.37012 8.30991 2.37012 10.4316C2.37012 12.5534 3.21297 14.5882 4.71326 16.0885C6.21355 17.5888 8.24839 18.4316 10.3701 18.4316ZM11.3701 6.43164C11.3701 6.16642 11.2648 5.91207 11.0772 5.72453C10.8897 5.537 10.6353 5.43164 10.3701 5.43164C10.1049 5.43164 9.85055 5.537 9.66301 5.72453C9.47547 5.91207 9.37012 6.16642 9.37012 6.43164V10.4316C9.37017 10.6968 9.47557 10.9511 9.66312 11.1386L12.4911 13.9676C12.584 14.0606 12.6943 14.1343 12.8157 14.1845C12.9371 14.2348 13.0672 14.2607 13.1986 14.2607C13.33 14.2607 13.4601 14.2348 13.5815 14.1845C13.7029 14.1343 13.8132 14.0606 13.9061 13.9676C13.999 13.8747 14.0727 13.7644 14.123 13.643C14.1733 13.5216 14.1992 13.3915 14.1992 13.2601C14.1992 13.1287 14.1733 12.9986 14.123 12.8772C14.0727 12.7559 13.999 12.6456 13.9061 12.5526L11.3701 10.0176V6.43164Z"
                fill="#DEDEDE"
              />
            </svg>
            <span className="poppins-medium text-[#DEDEDE] text-base">30 min</span>
          </div>
          <p className="poppins-regular text-[#B8B9BA] text-sm sm:text-base ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
          </p>
          <button className="public-sans mt-[49px] text-base text-white font-semibold tracking-wider rounded-full bg-black px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors">
            Get a Free Consultation
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3 p-4 sm:p-6">
        <h1 className="poppins-medium text-[#DEDEDE] text-xl lg:text-2xl mb-3 lg:mb-[21.21px]">Select a Date & Time</h1>

          <div className="border border-[#262626] rounded-[10px] p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-[35.16px]">
              {/* Calendar */}
              <div className="w-full lg:w-3/5">
                <div className="flex justify-between items-center mb-4">
                  <button
                    className="bg-[#131619] p-2 sm:p-3 rounded-[6px]  transition-colors"
                    onClick={() => setToday(today.month(today.month() - 1))}
                  >
                    <GrFormPrevious className="text-[#E3E5F540] w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <h2
                    className="text-[#DEDEDE] text-lg sm:text-xl cursor-pointer"
                    onClick={() => setToday(currentDate)}
                  >
                    <span className="lato-normal">{months[today.month()]}, {today.year()}</span>
                  </h2>
                  <button
                    className="bg-[#131619] p-2 sm:p-3 rounded-[6px]  transition-colors"
                    onClick={() => setToday(today.month(today.month() + 1))}
                  >
                    <GrFormNext className="text-[#E3E5F540] w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center mb-4">
                  {days.map((day, index) => (
                    <div
                      key={index}
                      className="text-[#DEDEDE] text-xs sm:text-sm"
                    >
                     <div className="late-day"> {day}</div>
                    </div>
                  ))}
                </div>
                <div className="border-b-1 border-[#e3e5f51f]"></div>
                <div className="grid grid-cols-7 gap-2">
                  {generateDate(today.month(), today.year()).map(
                    ({ date, currentMonth, today }, index) => {
                      return (
                        <div
                          key={index}
                          className={cn(
                            "p-1 sm:p-2 text-center h-10 sm:h-12 grid place-content-center text-xs  md:text-sm",
                            selectDate.toDate().toDateString() ===
                              date.toDate().toDateString()
                              ? "flex flex-col justify-center items-center p-[11px_17px] gap-2.5 flex-1 self-stretch border border-[#6185F2] border-solid rounded-md bg-black"
                              : ""
                          )}
                        >
                          <button
                            className={cn(
                              "h-8 w-8 sm:h-10 sm:w-10 rounded-full grid place-content-center transition-all",
                              currentMonth
                                ? "text-[#e3e5f599]"
                                : "text-[#e3e5f533]",
                              today === date.toDate().toDateString()
                                ? "border-2 border-[#6185F2] bg-[#131619]"
                                : "",
                              ""
                            )}
                            onClick={() => setSelectDate(date)}
                            disabled={!currentMonth}
                          >
                           <span className="late-date"> {date.date()}</span>
                          </button>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Time Selection */}
              <div className="w-full lg:w-2/5">
                <h3 className="text-[#DEDEDE] text-lg mb-4">
                  <span className="text-[#DEDEDE] poppins-regular">{selectDate.format("MMMM D, YYYY")}</span>
                </h3>
                <div className="flex flex-col gap-[16.75px]">
                  {["11:00 am", "12:00 am", "1:00 am", "02:00 am"].map((time, i) => (
                    <button
                      key={i}
                      className={`lato-normal border ${i===0 ? "border-[#6185F2]": "border-[#f4f4ff1f]" } py-3 px-6 rounded-full bg-[#0D0D0D] hover:bg-[#131619] transition-colors`}
                    >
                      <span className="text-[#DEDEDE] text-base sm:text-lg">
                        {time}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
