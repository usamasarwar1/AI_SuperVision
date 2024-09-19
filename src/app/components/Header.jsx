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
  DropdownTrigger,
} from "@nextui-org/react";
import ReactFlagsSelect from "react-flags-select";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState("GB"); // Default to 'GB' for the UK flag
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

  const handleSelectFlag = (code) => {
    setSelected(code);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth={"full"}
      className="fixed top-0 left-0 h-20 px-0 pt-0 pb-0 box-border bg-header-gradient backdrop-blur-[20px] z-[99] text-white public-sans"
    >
      {/* Navbar Left */}
      <NavbarContent>
        <NavbarBrand>
          <Image src="images/logo.svg" width={200} height={200} alt="Logo" />
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar Center */}
      <NavbarContent className="hidden lg:flex lg:gap-8" justify="center">
        <NavbarItem>
          <Link
            className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
            href="/about"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
            href="/services"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
            href="/benefits"
          >
            Benefits
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
            href="/consultation"
          >
            Book a consultation
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Navbar Right */}
      <NavbarContent justify="end" className="flex gap-2 md:gap-6">
        {/* Language Selector */}
        <div className="relative z-50 mt-2 !border-none border-[0px]">
          <div className="border-none public-sans text-[16px] text-white">
            <ReactFlagsSelect
              selected={selected}
              onSelect={handleSelectFlag}
              showSelectedLabel={true}
              showSecondarySelectedLabel={false}
              selectedSize={14}
              showOptionLabel={true}
              optionsSize={14}
              placeholder="Select Language"
              searchable={true}
              searchPlaceholder="Search"
              alignOptionsToRight={false}
              fullWidth={true}
              disabled={false}
              className="custom-flag-select"
            />
          </div>
        </div>
        <div className="bg-header-gap-gradient w-[2px] h-16 hidden md:inline-block"></div>
        {/* Contact Button */}
        <Link href="/contacts">
          <Button className="relative rounded-full border-2 border-[#fff] bg-white text-[#000] text-[10px] sm:text-[1rem] font-semibold px-1 h-6  sm:h-10 cursor-default hover:bg-[#fff]">
            Contact Us
          </Button>
        </Link>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavbarMenu
          ref={menuRef}
          className="top-0 left-0 z-[9999] h-auto translate-x-0 overflow-auto bg-[#0a1019] w-[280px] flex gap-[2px]"
        >
          <NavbarItem>
            <Link
              className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
              href="/"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
              href="/about"
            >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
              href="/services"
            >
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
              href="/benefits"
            >
              Benefits
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="py-4 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]"
              href="/consultation"
            >
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
