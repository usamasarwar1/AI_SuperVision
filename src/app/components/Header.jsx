"use client";
import { MdArrowDropDown } from "react-icons/md";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
} from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropOpen, setIsDropOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      e.preventDefault();
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  const headerClass =
    "py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]";

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth={"full"}
      className="fixed top-0 left-0 h-20 px-0 pt-0 pb-0 box-border bg-header-gradient backdrop-blur-[20px] z-[99]  text-white public-sans"
    >
      {/* Navbar Left */}
      <NavbarContent className="">
        <NavbarBrand>
          <Image
            src="images/logo.svg"
            width={200}
            height={200}
            alt="Logo"
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar Center */}
      <NavbarContent className="hidden lg:flex lg:gap-8" justify="center">
        <NavbarItem>
          <Link className={headerClass} href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={headerClass} href="/about">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={headerClass} href="/serveices">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={headerClass} href="/benefits">
            Benefits
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={headerClass} href="/consultation">
            Book a consultation
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Navbar Right */}
      <NavbarContent justify="end" className="flex gap-0 md:gap-6">
        {/* Language Selector */}
        <Dropdown>
          <DropdownTrigger>
            <Button
              light
              auto
              className="text-[#fff] leading-6 text-[10px] px-0 py-0 sm:text-[1rem] sm:py-2.5  h-5 md:h-10 bg-transparent flex gap-1 md:gap-[13.89px]"
            >
              <Image
                src="/images/flag.png"
                alt="UK Flag"
                width={20}
                height={20}
                className="hidden md:block md:w-full rounded-full"
              />
              <span className="public-sans text-[9px] sm:text-[16px]">English</span>
              {/* Adjust the size of the dropdown icon */}
              <MdArrowDropDown className="w-6 h-6 sm:w-20 sm:h-20 text-white" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Language Selector">
            <DropdownItem key="english">English</DropdownItem>
            <DropdownItem key="spanish">Spanish</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className="hidden md:inline-block h-full w-[2px] bg-gap-gradient"></div>
               {/* Contact Button */}
        <Link href="/contacts">
         
          <Button className="relative rounded-full border-2 border-[#fff] bg-white text-[#000]  text-[10px] sm:text-[1rem] font-semibold  px-1  h-8 md:h-10">
            Contact Us
          </Button>
        </Link>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavbarMenu
          ref={menuRef}
          className="top-0 left-0 z-[9999] h-auto translate-x-0 overflow-auto bg-[#0a1019] w-[280px] flex gap-[2px] "
        >
          <NavbarItem>
            <Link className={headerClass} href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={headerClass} href="/about">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={headerClass} href="/serveices">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={headerClass} href="/benefits">
              Benefits
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={headerClass} href="/consultation">
              Book a consultation
            </Link>
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
