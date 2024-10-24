"use client";
import { MdArrowDropDown } from "react-icons/md";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
// import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/navigation";
import Cookies from 'js-cookie';
import { useParams } from "next/navigation";

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



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(null);
  const pathname = usePathname();

  const { locale } = useParams();

  const router = useRouter();

  const t = useTranslations("Home");

  const menuRef = useRef(null);

  // const handleRefresh = () => {
  //    router.refresh();
  //   window.location.reload();
  //   console.log("reload page");
  // };

  // const handleClickOutside = (e) => {

  //     if (!menuRef.current.contains(e.target)) {
  //       console.log("Clicked outside");

  //     }

  // };
  useEffect(() => {
    // document.addEventListener("click", handleClickOutside, true);
    // return () => {
    //   document.removeEventListener("click", handleClickOutside, true);
    // };
    // const handleClickOutside = () => {
    //   setIsMenuOpen(false);
    // };
    // document.addEventListener("click", handleClickOutside, true)
  }, []);

  // useEffect(() => {
  //   // Get language from localStorage or set it to default 'en'
  //   const savedLanguage = localStorage.getItem('language') || 'en';
  //   setLanguage(savedLanguage);

  //   // Load the Voiceflow chat script dynamically based on the selected language
  //   const loadVoiceflowChat = () => {
  //     const script = document.createElement('script');
  //     script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  //     script.type = "text/javascript";
  //     script.onload = () => {
  //       window.voiceflow.chat.load({
  //         verify: { projectID: '66df01a26e8198f513e44dd0' },
  //         url: 'https://general-runtime.voiceflow.com/',
  //         versionID: 'production',
  //         language: savedLanguage // Pass the current language here
  //       });
  //     };
  //     document.body.appendChild(script);
  //   };

  //   loadVoiceflowChat();

  //   // Reload chat when language changes
  //   if (language) {
  //     localStorage.setItem('language', language);
  //     loadVoiceflowChat(); // Load new chat configuration on language change
  //   }

  //   // Cleanup previous script to avoid duplicate loading
  //   return () => {
  //     const oldScript = document.querySelector("script[src='https://cdn.voiceflow.com/widget/bundle.mjs']");
  //     if (oldScript) oldScript.remove();
  //   };

  // }, [language]);

  // Handle language selection

  // const handleLanguageChange = (locale) => {
  //   router.replace(pathname, { locale });
  //   setLanguage(locale);
  //   localStorage.setItem('language', locale);

  // };
  



  // useEffect(() => {
  //   // Get language from cookies or default to 'en'
  //   const savedLanguage = Cookies.get('language') || 'en';
  //   setLanguage(savedLanguage);

  //   // Load the Voiceflow chat script dynamically based on the selected language
  //   const loadVoiceflowChat = () => {
  //     const script = document.createElement('script');
  //     script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  //     script.type = "text/javascript";
  //     script.onload = () => {
  //       window.voiceflow.chat.load({
  //         verify: { projectID: '66df01a26e8198f513e44dd0' },
  //         url: 'https://general-runtime.voiceflow.com/',
  //         versionID: 'production',
  //         language: savedLanguage // Pass the current language here
  //       });
  //     };
  //     document.body.appendChild(script);
  //   };

  //   loadVoiceflowChat();

  //   // Reload chat when language changes
  //   if (language) {
  //     Cookies.set('language', language, { expires: 7 }); // Set cookie with 7 days expiration
  //     loadVoiceflowChat(); // Load new chat configuration on language change
  //   }

  //   // Cleanup previous script to avoid duplicate loading
  //   return () => {
  //     const oldScript = document.querySelector("script[src='https://cdn.voiceflow.com/widget/bundle.mjs']");
  //     if (oldScript) oldScript.remove();
  //   };
  // }, [language]);

  // Handle language selection

  // useEffect(() => {
  //   const savedLanguage = Cookies.get('voiceflow-locale') || locale;
  //   setLanguage(savedLanguage);
  // }, [locale]);

  const handleLanguageChange = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
    // setLanguage(newLocale);
  };
  // const handleLanguageChange = (locale) => {
  //   router.replace(pathname, { locale });
  //   // setLanguage(locale);
  //   // Cookies.set('language', locale, { expires: 30 }); 
  // };
 
  


 
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth={"full"}
      className="w-full max-w-full p-0 box-border bg-header-gradient backdrop-blur-[20px] z-[99] text-white public-sans"
      position="static"
      // className="fixed top-0 left-0 h-20 px-0 pt-0 pb-0 box-border bg-header-gradient backdrop-blur-[20px] z-[99] text-white public-sans rounded-t-lg"
    >
      {/* Navbar Left */}
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={200}
              height={200}
              alt="Logo"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar Center */}
      <NavbarContent className="hidden lg:flex lg:gap-8" justify="center">
        <NavbarItem>
          <Link
            className={`py-4 px-2  text-sm font-medium hover:text-[#6185F2] ${
              pathname === "/" ? "text-[#6185F2]" : "text-white"
            }`}
            href="/"
          >
            {t("home")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`py-4 px-2 text-sm font-medium transition-all duration-1000 ease-out hover:text-[#6185F2] ${
              pathname === "/about" ? "text-[#6185F2] " : "text-white "
            }`}
            href="/about"
          >
            {t("about")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`py-4 px-2  text-sm font-medium  hover:text-[#6185F2] ${
              pathname === "/services" ? "text-[#6185F2] " : "text-white"
            }`}
            href="/services"
          >
            {t("services")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`py-4 px-2  text-sm font-medium  hover:text-[#6185F2] ${
              pathname === "/benefits" ? "text-[#6185F2] " : "text-white"
            }`}
            href="/benefits"
          >
            {t("benefits")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`py-4 px-2  text-sm font-medium  hover:text-[#6185F2] ${
              pathname === "/consultation" ? "text-[#6185F2] " : "text-white"
            }`}
            href="/consultation"
          >
            {" "}
            {t("consultation")}
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
                  locale === "en"
                    ? "/images/flag.png"
                    : "/images/Flag_of_Saudi_Arabia.png"
                }
                alt={locale === "en" ? "UK Flag" : "Saudi Arabia Flag"}
                width={24}
                height={16}
                className="mr-[3px] md:mr-2 w-5 h-5 md:w-8 md:h-8 object-fit rounded-full"
              />
              <span className="public-sans text-[12px] md:text-[16px] md:leading-6 text-[#FFFFFF]">
                {locale === "en" ? "English" : "العربية"}
              </span>
              <MdArrowDropDown className="text-[#FFFFFF] w-6 h-6  lg:w-8 lg:h-8" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Language selection"
            // onAction={(key) => handleLanguageChange(key)}
            variant="faded"
            classNames="w-8 bg-red-500"
          >
            <DropdownItem
              onClick={() => {
                handleLanguageChange("en");
               
              }}
              key="en"
              className=" border-none"
            >
              <div className="flex justify-between public-sans text-[16px] md:leading-6 ">
                <Image
                  src="/images/flag.png"
                  alt="UK Flag"
                  width={24}
                  height={16}
                  className="w-5 h-5 md:w-8 md:h-8 object-fit rounded-full "
                />
                <span className="public-sans text-[12px] md:text-[16px] md:leading-6">
                  {" "}
                  English
                </span>
              </div>
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                handleLanguageChange("ar");
                             }}
              key="ar"
              className="flex items-center gap-0 sm:gap-2"
            >
              <div className="flex justify-between  public-sans text-[16px] md:leading-6">
                <Image
                  src="/images/Flag_of_Saudi_Arabia.png"
                  alt="Saudi Arabia Flag"
                  width={24}
                  height={16}
                  className="w-5 h-5 md:w-8 md:h-8 object-fit rounded-full "
                />
                <span className="public-sans text-[12px] md:text-[16px] md:leading-6">
                  العربية
                </span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <div className="bg-header-gap-gradient w-[1.3px] md:w-[2px] h-10 md:h-16"></div>

        {/* Contact Button */}
        <div className="hidden lg:inline-block">
          <Button
            onClick={() => router.push("/contacts")}
            className="public-sans leading-6 relative rounded-full border-2 border-[#fff] bg-white text-[#000] text-[10px] sm:text-[1rem] font-semibold px-1 h-6 md:p-[13px_26px]  sm:h-10 transition-all duration-1000 ease-out  hover:bg-[#fff]"
          >
            {t("contact")}
          </Button>
        </div>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavbarMenu className="left-0 z-[9999] h-auto translate-x-0 overflow-auto bg-[#0a1019]  flex gap-4">
          <NavbarItem>
            <Link
              className={`py-4 px-2  text-sm font-medium transition-all duration-1000 ease-out hover:text-blue-700 ${
                pathname === "/" ? "text-blue-700 " : "text-white"
              }`}
              href="/"
            >
              {t("home")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`py-4 px-2  text-sm font-medium transition-all duration-1000 ease-out hover:text-blue-700 ${
                pathname === "/about" ? "text-blue-700 " : "text-white"
              }`}
              href="/about"
            >
              {t("about")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`py-4 px-2  text-sm font-medium transition-all duration-1000 ease-out hover:text-blue-700 ${
                pathname === "/services" ? "text-blue-700 " : "text-white"
              }`}
              href="/services"
            >
              {t("services")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`py-4 px-2  text-sm font-medium transition-all duration-1000 ease-out hover:text-blue-700 ${
                pathname === "/benefits" ? "text-blue-700 " : "text-white"
              }`}
              href="/benefits"
            >
              {t("benefits")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={`py-4 px-2  text-sm font-medium transition-all duration-1000 ease-out hover:text-blue-700 ${
                pathname === "/consultation"
                  ? "text-blue-700 bg-red-500 "
                  : "text-white"
              }`}
              href="/consultation"
            >
              {t("consultation")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              onClick={() => router.push("/contacts")}
              className="public-sans leading-6 relative rounded-full border-2 border-[#fff] bg-white text-[#000] text-[10px] sm:text-[1rem] font-semibold px-1 h-6 md:p-[13px_26px]  sm:h-10 transition-all duration-1000 ease-out  hover:bg-[#fff]"
            >
              {t("contact")}
            </Button>
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
