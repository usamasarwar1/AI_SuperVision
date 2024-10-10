import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import EmailInput from "./EmailInput";
import ButtonAction from "./ButtonAction";

const Footer = () => {
  const t = useTranslations("Home");

  const footerIcons =
    "h-8 w-8 rounded-md  bg-[rgba(15,16,18,0.8)] flex items-center justify-center text-white ";
  const commonClasses =
    " cursor-pointer flex font-medium tracking-[.02em] text-[1rem] text-[#fff] translate-500 mb-[18px] public-sans";
  return (
    <>
      <footer className=" w-full ">
        <div className="container mx-auto w-[90%] lg:w-[80%] grid grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
          <div className="col-span-12 sm:col-span-6 lg:col-span-2">
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
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-2">
            <h2 className=" text-[12px] sm:mt-12 md:mb-12 text-[#FFF] public-sans">
              {/* {t("quick")} */}
            </h2>
            <ul className="flex flex-col gap-4">
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
              <ButtonAction commonClasses={commonClasses} />
              <Link
                href="https://www.instagram.com/_aisupervision_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" flex items-center text-white cursor-pointer">
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

        {/* <div className="w-full public-sans">
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
        </div> */}

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
