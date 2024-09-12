// pages/index.js or any other component
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { MdArrowOutward } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { PiInstagramLogoBold } from "react-icons/pi";
import { Button, ButtonGroup } from "@nextui-org/button";
const Footer = () => {
  const footerIcons =
    "h-8 w-8 rounded-md  bg-[rgba(15,16,18,0.8)] flex items-center justify-center text-white ";
  const commonClasses =
    " cursor-pointer flex font-medium tracking-[.02em] text-[1rem] text-[#fff] translate-500 mb-[18px] public-sans";
  return (
    <footer className=" w-full ">
     

      <div className="container mx-auto w-[90%] lg:w-[80%] grid grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
       
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <h2 className=" text-[12px] mb-8 text-[#FFFFFF70] public-sans">
          Quick Links
          </h2>
          <ul >
            <li className={commonClasses}><Link href={"/"}>Home</Link></li>
            <li className={commonClasses}><Link href={"/"}>About Us</Link></li>
            <li className={commonClasses}><Link href={"/"}>Services</Link></li>
            <li className={commonClasses}><Link href={"/"}>Benefits</Link></li>
            <li className={commonClasses}><Link href={"/"}>Blogs</Link></li>
            <li className={commonClasses}><Link href={"/"}>Contact us</Link></li>
            
          </ul>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
        <h2 className=" text-[12px] mb-8 text-[#FFFFFF70] public-sans">
        Contact Information
          </h2>          
          <ul>
          <li className={commonClasses}>
            <span className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
              <path d="M1 3.68164L7.91302 7.59861C10.4616 9.04265 11.5384 9.04265 14.087 7.59861L21 3.68164" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M1.01577 11.1573C1.08114 14.2228 1.11383 15.7556 2.24496 16.891C3.37608 18.0264 4.95033 18.066 8.09883 18.1451C10.0393 18.1938 11.9607 18.1938 13.9012 18.1451C17.0497 18.066 18.6239 18.0264 19.7551 16.891C20.8862 15.7556 20.9189 14.2228 20.9842 11.1573C21.0053 10.1716 21.0053 9.19172 20.9842 8.20604C20.9189 5.1405 20.8862 3.60773 19.7551 2.4723C18.6239 1.33687 17.0497 1.29732 13.9012 1.21821C11.9607 1.16945 10.0393 1.16945 8.09882 1.2182C4.95033 1.2973 3.37608 1.33686 2.24495 2.47229C1.11382 3.60772 1.08114 5.14049 1.01576 8.20602C0.994745 9.19171 0.994745 10.1716 1.01577 11.1573Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
              </span> 
              info@yourbusinessname.com
            </li>
          <li className={commonClasses}>
          <span className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
              <path d="M2.77762 11.624C1.8296 9.97095 1.37185 8.62112 1.09584 7.25285C0.687622 5.22922 1.62181 3.25245 3.16938 1.99111C3.82345 1.45802 4.57323 1.64016 4.96 2.33404L5.83318 3.90055C6.52529 5.14221 6.87134 5.76303 6.8027 6.42123C6.73407 7.07943 6.26737 7.6155 5.33397 8.68765L2.77762 11.624ZM2.77762 11.624C4.69651 14.9699 7.70784 17.9829 11.0576 19.904M11.0576 19.904C12.7107 20.852 14.0605 21.3098 15.4288 21.5858C17.4524 21.994 19.4292 21.0598 20.6905 19.5123C21.2236 18.8582 21.0415 18.1084 20.3476 17.7216L18.7811 16.8485C17.5394 16.1564 16.9186 15.8103 16.2604 15.8789C15.6022 15.9476 15.0661 16.4143 13.994 17.3477L11.0576 19.904Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M13 6.51349C14.4232 7.11788 15.5638 8.25841 16.1682 9.68164M13.654 1.68164C17.1912 2.7024 19.9791 5.49016 21 9.02727" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
              </span> 
              +1 (555) 123-4567
            </li>
          <li className={commonClasses}>
          <span className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
              <path d="M11.6177 21.0486C11.1841 21.4547 10.6044 21.6816 10.0011 21.6816C9.39785 21.6816 8.81818 21.4547 8.38449 21.0486C4.41302 17.3076 -0.909237 13.1286 1.68627 7.06131C3.08963 3.7808 6.45834 1.68164 10.0011 1.68164C13.5439 1.68164 16.9126 3.7808 18.316 7.06131C20.9082 13.1209 15.599 17.3205 11.6177 21.0486Z" stroke="white" stroke-width="1.5"/>
              <path d="M13.5 10.6816C13.5 12.6146 11.933 14.1816 10 14.1816C8.067 14.1816 6.5 12.6146 6.5 10.6816C6.5 8.74864 8.067 7.18164 10 7.18164C11.933 7.18164 13.5 8.74864 13.5 10.6816Z" stroke="white" stroke-width="1.5"/>
            </svg>
              </span> 
              123 Innovation Drive, Suite 500, Tech City, TX 75001
            </li>

          </ul>
        </div>

      
        <div className="col-span-12 sm:col-span-6 lg:col-span-5 poppins-regular">
          <div className="font-medium tracking-[.03em] text-2xl flex gap-2 mb-4 items-center">
         
            <h2 className="text-[#DEDEDE] font-[24px]">Stay Updated with Our Latest News</h2>
          </div>
          <p className="text-[#989898] text-[14px] mb-6">
          Subscribe to our newsletter and never miss an update on industry trends, tips, and special offers.
          </p>
         
         
          <div className="w-full flex flex-col">
            <Input
              type="email"
              placeholder="Email here..."
              classNames={{
                inputWrapper:
                  "bg-[#1b1f23cc] rounded-tr-none rounded-br-none  rounded-[75px] px-[24px] py-[19px] text-[13px] flex-grow h-[50px] border-[1px] mb-[26px] border-[#ffffff1a] text-[#989898] font-normal hover:bg-[#1b1f23cc] focus:bg-red-900",
              }}
            />
             <Button
                as={Link}
                href="#"
                className="relative rounded-full border-2 border-[#6185F2] bg-[#6185F2] py-[13px] px-[26px] w-fit text-[#000] transition duration-500 text-[1rem]  hover:text-[#fff] hover:bg-[#000] hover:border-[#000]"
              >
                Subscribe Now
              </Button>
          
          </div>
        </div>
        
      </div>
      <div className="w-full public-sans">
      <div className=" container mx-auto grid grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-20">
        <div className="col-span-3 border-t-1 border-[#131619] flex items-center text-white py-[24px]">
          <span className="mr-3"><Image src="/images/YouTube.png" alt="logo" width={30} height={30} /></span>
          Youtube


        </div>
        <div className="col-span-3 border-t-1 border-[#131619] flex items-center text-white py-[24px]">
          <span className="mr-3"><Image src="/images/LinkedIn.png" alt="logo" width={30} height={30} /></span>
          LinkedIn

        </div>
        <div className="col-span-3 border-t-1 border-[#131619] flex items-center text-white py-[24px]">
          <span className="mr-3"><Image src="/images/Instagram.png" alt="logo" width={30} height={30} /></span>
          Instagram

        </div>
        <div className="col-span-3 border-t-1 border-[#131619] flex items-center text-white py-[24px]">
          <span className="mr-3"><Image src="/images/Facebook.png" alt="logo" width={30} height={30} /></span>
          Facebook

        </div>
      </div>
      </div>
      

      <div className="w-full bg-[#131619] public-sans">
        <div className="container mx-auto py-[15px] ">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <p className="text-[#989898] text-[14px]">
              © 2024 AI Supervision
            </p>
            <div className="flex justify-center md:justify-end gap-6 lg:mt-0 md:mt-0 sm:mt-4 mt-4">
              <Link href="/" className={'text-[#989898]'}>
              Terms
              </Link>
              <Link href="/" className={'text-[#989898]'}>
              Privacy
              </Link>
              <Link href="/" className={'text-[#989898]'}>
              Cookies
              </Link>
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
