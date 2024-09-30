import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import BusinessCard from "./BusinessCard";
import EmailInput from "./EmailInput";
import ButtonAction from "./ButtonAction";
import GetButton from "./GetButton";


const Footer = () => {
  const t = useTranslations("Home");

  // // Phone Number Action Button
  // const simulateCall = (phoneNumber) =>
  //   window.open(`tel:${phoneNumber}`, "_self");
  // const callHandler = () => {
  //   simulateCall("+1 (555) 123-4567");
  // };
  // // Email Action Button
  // const simulateEmail = (emailAddress) =>
  //   window.open(`mailto:${emailAddress}`, "_self");
  // const emailHandler = () => {
  //   simulateEmail("info@yourbusinessname.com");
  // };
  const footerIcons =
    "h-8 w-8 rounded-md  bg-[rgba(15,16,18,0.8)] flex items-center justify-center text-white ";
  const commonClasses =
    " cursor-pointer flex font-medium tracking-[.02em] text-[1rem] text-[#fff] translate-500 mb-[18px] public-sans";
  return (
    <>
      <div className="">
      </div>

      <footer className=" w-full ">
        <div className="container mx-auto w-[90%] lg:w-[80%] grid grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h2 className=" text-[12px] mb-8 text-[#FFF] public-sans">
              {t("quick")}
            </h2>
            <ul className="flex flex-col gap-4">
              <li className={commonClasses}>
                <Link href={"/"} className="public-sans-regular">
                  {t("home")}
                </Link>
              </li>
              <li className={commonClasses}>
                <Link href={"/about"} className="public-sans-regular">
                  {t("about")}
                </Link>
              </li>
              <li className={commonClasses}>
                <Link href={"/services"} className="public-sans-regular">
                  {t("services")}
                </Link>
              </li>
              <li className={commonClasses}>
                <Link href={"/benefits"} className="public-sans-regular">
                  {t("benefits")}
                </Link>
              </li>
              <li className={commonClasses}>
                <Link href={"/consultation"} className="public-sans-regular">
                  {t("blogs")}
                </Link>
              </li>
              <li className={commonClasses}>
                <Link href={"/contacts"} className="public-sans-regular">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <h2 className=" text-[12px] mb-8 text-[#FFF] public-sans">
              {t("contact_info")}
            </h2>
            <ul className="flex flex-col gap-4">
              {/* <li className={commonClasses} onClick={() => emailHandler(email)}>
                <span className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                  >
                    <path
                      d="M1 3.68164L7.91302 7.59861C10.4616 9.04265 11.5384 9.04265 14.087 7.59861L21 3.68164"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.01577 11.1573C1.08114 14.2228 1.11383 15.7556 2.24496 16.891C3.37608 18.0264 4.95033 18.066 8.09883 18.1451C10.0393 18.1938 11.9607 18.1938 13.9012 18.1451C17.0497 18.066 18.6239 18.0264 19.7551 16.891C20.8862 15.7556 20.9189 14.2228 20.9842 11.1573C21.0053 10.1716 21.0053 9.19172 20.9842 8.20604C20.9189 5.1405 20.8862 3.60773 19.7551 2.4723C18.6239 1.33687 17.0497 1.29732 13.9012 1.21821C11.9607 1.16945 10.0393 1.16945 8.09882 1.2182C4.95033 1.2973 3.37608 1.33686 2.24495 2.47229C1.11382 3.60772 1.08114 5.14049 1.01576 8.20602C0.994745 9.19171 0.994745 10.1716 1.01577 11.1573Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                info@yourbusinessname.com
              </li>
              <li onClick={callHandler} className={commonClasses}>
                <span className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                  >
                    <path
                      d="M2.77762 11.624C1.8296 9.97095 1.37185 8.62112 1.09584 7.25285C0.687622 5.22922 1.62181 3.25245 3.16938 1.99111C3.82345 1.45802 4.57323 1.64016 4.96 2.33404L5.83318 3.90055C6.52529 5.14221 6.87134 5.76303 6.8027 6.42123C6.73407 7.07943 6.26737 7.6155 5.33397 8.68765L2.77762 11.624ZM2.77762 11.624C4.69651 14.9699 7.70784 17.9829 11.0576 19.904M11.0576 19.904C12.7107 20.852 14.0605 21.3098 15.4288 21.5858C17.4524 21.994 19.4292 21.0598 20.6905 19.5123C21.2236 18.8582 21.0415 18.1084 20.3476 17.7216L18.7811 16.8485C17.5394 16.1564 16.9186 15.8103 16.2604 15.8789C15.6022 15.9476 15.0661 16.4143 13.994 17.3477L11.0576 19.904Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 6.51349C14.4232 7.11788 15.5638 8.25841 16.1682 9.68164M13.654 1.68164C17.1912 2.7024 19.9791 5.49016 21 9.02727"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                +1 (555) 123-4567
              </li> */}
              <ButtonAction commonClasses = {commonClasses}/>
              <li className={commonClasses}>
                <span className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="23"
                    viewBox="0 0 20 23"
                    fill="none"
                  >
                    <path
                      d="M11.6177 21.0486C11.1841 21.4547 10.6044 21.6816 10.0011 21.6816C9.39785 21.6816 8.81818 21.4547 8.38449 21.0486C4.41302 17.3076 -0.909237 13.1286 1.68627 7.06131C3.08963 3.7808 6.45834 1.68164 10.0011 1.68164C13.5439 1.68164 16.9126 3.7808 18.316 7.06131C20.9082 13.1209 15.599 17.3205 11.6177 21.0486Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M13.5 10.6816C13.5 12.6146 11.933 14.1816 10 14.1816C8.067 14.1816 6.5 12.6146 6.5 10.6816C6.5 8.74864 8.067 7.18164 10 7.18164C11.933 7.18164 13.5 8.74864 13.5 10.6816Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>

                {t("address")}
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-4 poppins-regular">
            <div className="font-medium tracking-[.03em] text-2xl flex gap-2 mb-4 items-center">
              <h2 className="poppins-regular text-[#DEDEDE] text-lg lg:text-2xl">
                {t("updated_heading")}
              </h2>
            </div>
            <p className="poppins-regular text-[#989898] text-[14px] mb-6">
              {t("updated_txt")}
            </p>
            <EmailInput />
          </div>
        </div>

        <div className="w-full public-sans">
          <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-8 md:gap-10 lg:gap-12">
              <Link
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border-t-1 border-[#131619] flex items-center text-white py-4 px-2 cursor-pointer">
                  <span className="mr-3">
                    <Image
                      src="/images/YouTube.png"
                      alt="YouTube logo"
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                    />
                  </span>
                  <span className="public-sans-regular">{t("youtub")}</span>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border-t-1 border-[#131619] flex items-center text-white py-4 px-2 cursor-pointer">
                  <span className="mr-3">
                    <Image
                      src="/images/LinkedIn.png"
                      alt="LinkedIn logo"
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                    />
                  </span>
                  <span className="public-sans-regular">{t("linkedIn")}</span>
                </div>
              </Link>

              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border-t-1 border-[#131619] flex items-center text-white py-4 px-2 cursor-pointer">
                  <span className="mr-3">
                    <Image
                      src="/images/Instagram.png"
                      alt="Instagram logo"
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                    />
                  </span>
                  <span className="public-sans-regular">{t("instagram")}</span>
                </div>
              </Link>

              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border-t-1 border-[#131619] flex items-center text-white py-4 px-2 cursor-pointer">
                  <span className="mr-3">
                    <Image
                      src="/images/Facebook.png"
                      alt="Facebook logo"
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px]"
                    />
                  </span>
                  <span className="public-sans-regular">{t("facebook")}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#131619] public-sans">
          <div className="container mx-auto py-[15px] ">
            <div className="flex flex-col md:flex-row justify-between items-center ">
              <p className="poppins-regular text-[#989898] text-[14px]">
                © 2024 AI Supervision
              </p>
              <div className="flex justify-center md:justify-end gap-6 lg:mt-0 md:mt-0 sm:mt-4 mt-4">
                <Link
                  href="/"
                  className={"poppins-regular leading-5 text-[#989898]"}
                >
                  {t("terms")}
                  </Link>
                <Link
                  href="/"
                  className={"poppins-regular leading-5 text-[#989898]"}
                >
                  {t("privacy")}
                </Link>
                <Link
                  href="/"
                  className={"poppins-regular leading-5 text-[#989898]"}
                >
                  {t("cookies")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
