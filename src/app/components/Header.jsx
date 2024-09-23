"use client";
import { MdArrowDropDown } from "react-icons/md";
import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { useLanguage } from "../context/LanguageContext";
import en from "../../api/en.json";
import ar from "../../api/ar.json";

const translations = {
  en,
  ar,
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const router = useRouter()

  // const [language, setLanguage] = useState("en");
  const menuRef = useRef(null);

  // Close the menu if clicking outside
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle language selection

  const handleLanguageChange = (value) => {
    setLanguage(value);
    localStorage.setItem("language", value);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth={"full"}
      className="fixed top-0 left-0 h-20 px-0 pt-0 pb-0 box-border bg-header-gradient backdrop-blur-[20px] z-[99] text-white public-sans rounded-t-lg"
    >
      {/* Navbar Left */}
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image src="images/logo.svg" width={200} height={200} alt="Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar Center */}
      <NavbarContent className="hidden lg:flex lg:gap-8" justify="center">
        <NavbarItem>
          <Link
            className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
            href="/"
          >
            {translations[language].home}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
            href="/about"
          >
            {translations[language].about}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
            href="/services"
          >
            {translations[language].services}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
            href="/benefits"
          >
            {translations[language].benefits}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
            href="/consultation"
          >
            {translations[language].consultation}
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Navbar Right */}
      <NavbarContent justify="end" className="flex gap-2 md:gap-6">
        {/* Language Selector with NextUI Dropdown */}
        <Dropdown>
          <DropdownTrigger className="">
            <Button className="bg-transparent !px-0 md:px-4">
              <Image
                src={
                  language === "en"
                    ? "/images/flag.png"
                    : "/images/Flag_of_Saudi_Arabia.png"
                }
                alt={language === "en" ? "UK Flag" : "Saudi Arabia Flag"}
                width={24}
                height={16}
                className="mr-[3px] md:mr-2 w-5 h-5 md:w-8 md:h-8 object-fit rounded-full"
              />
              <span className="public-sans text-[12px] md:text-[16px] md:leading-6 text-[#FFFFFF]">
                {language === "en" ? "English" : "العربية"}
              </span>
              <MdArrowDropDown className="text-[#FFFFFF] lg:w-8 lg:h-8" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Language selection"
            onAction={(key) => handleLanguageChange(key)}
            variant="faded"
            classNames="w-8 bg-red-500"
          >
            <DropdownItem key="en" className=" border-none">
              <div className="flex justify-between public-sans text-[16px] md:leading-6 ">
                <Image
                  src="/images/flag.png"
                  alt="UK Flag"
                  width={24}
                  height={16}
                  className="w-5 h-5 md:w-8 md:h-8 object-fit rounded-full "
                />
                <span className="public-sans text-[12px] md:text-[16px] md:leading-6">  English</span>
              
              </div>
            </DropdownItem>
            <DropdownItem key="ar" className="flex items-center gap-0 sm:gap-2">
              <div className="flex justify-between  public-sans text-[16px] md:leading-6">
                <Image
                  src="/images/Flag_of_Saudi_Arabia.png"
                  alt="Saudi Arabia Flag"
                  width={24}
                  height={16}
                  className="w-5 h-5 md:w-8 md:h-8 object-fit rounded-full "
                />
                <span className="public-sans text-[12px] md:text-[16px] md:leading-6">العربية</span>
               
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <div className="bg-header-gap-gradient w-[2px] h-16 hidden md:inline-block"></div>

        {/* Contact Button */}
        <div  className="hidden lg:inline-block">         
            <Button onClick={() => router.push('/contacts')} className="public-sans leading-6 relative rounded-full border-2 border-[#fff] bg-white text-[#000] text-[10px] sm:text-[1rem] font-semibold px-1 h-6 md:p-[13px_26px]  sm:h-10 transition-all duration-1000 ease-out hover:text-[#06D889] hover:bg-[#fff]">
              {translations[language].contact}
            </Button>
              </div>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavbarMenu
          ref={menuRef}
          className="top-0 left-0 z-[9999] h-auto translate-x-0 overflow-auto bg-[#0a1019] w-[280px] flex gap-4"
        >
          <NavbarItem>
            <Link
              className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
              href="/"
            >
              {translations[language].home}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
              href="/about"
            >
              {translations[language].about}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
              href="/services"
            >
              {translations[language].services}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
              href="/benefits"
            >
              {translations[language].benefits}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
              href="/consultation"
            >
              {translations[language].consultation}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <div  className="hidden lg:inline-block">         
            <Button onClick={() => router.push('/contacts')} className="public-sans leading-6 relative rounded-full border-2 border-[#fff] bg-white text-[#000] text-[10px] sm:text-[1rem] font-semibold px-1 h-6 md:p-[13px_26px]  sm:h-10 transition-all duration-1000 ease-out hover:text-[#06D889] hover:bg-[#fff]">
              {translations[language].contact}
            </Button>
              </div>
          </NavbarItem>
        </NavbarMenu>
      )}

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="lg:hidden flex"
      />
    </Navbar>
  );
}
