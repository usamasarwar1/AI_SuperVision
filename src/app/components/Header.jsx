"use client";
import { RiArrowDropDownLine } from "react-icons/ri";
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

  const headerClass = "py-8 px-2 text-white text-sm font-medium transition-all duration-1000 ease-out hover:text-[#06D889]";
  
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth={"full"}
      className="fixed top-0 left-0 h-20 px-0 pt-0 pb-0 box-border bg-header-gradient z-[99] bg-[#131619] text-white public-sans"
    >
      {/* Navbar Left */}
      <NavbarContent>
        <NavbarBrand>
          <Image
            src="images/logo.svg"
            width={200}
            height={200}
            className="text-[#06D889] "
            alt="Logo"
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar Center */}
      <NavbarContent className="hidden lg:flex gap-8" justify="center">
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
          <Link className={headerClass} href="#">
            Benefits
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={headerClass} href="#">
            Book a consultation
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Navbar Right */}
      <NavbarContent justify="end">
        {/* Language Selector */}
        <Dropdown>
          <DropdownTrigger>
            <Button light auto>
              <Image
                src="/images/flag.png"
                alt="UK Flag"
                width={20}
                height={20}
              />
              English <RiArrowDropDownLine />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Language Selector">
            <DropdownItem key="english">English</DropdownItem>
            <DropdownItem key="spanish">Spanish</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
        {/* Contact Button */}
        <Button
          as={Link}
          href="#"
          className="relative rounded-full border-2 border-[#fff] bg-white text-[#000] transition duration-500 text-[1rem] font-semibold py-2.5 px-6 hover:text-[#fff] hover:bg-[#000] hover:border-[#000]"
        >
          Contact Us
        </Button>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <NavbarMenu ref={menuRef} className="top-0 left-0 z-[9999] h-auto translate-x-0 overflow-auto bg-[#0a1019] w-[280px]">
          <NavbarItem>
            <Link className={headerClass} href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={headerClass} href="#">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={headerClass} href="#">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className={headerClass} href="#">
              Benefits
            </Link>
          </NavbarItem>
        </NavbarMenu>
      )}

      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="lg:hidden flex" />
    </Navbar>
  );
}
