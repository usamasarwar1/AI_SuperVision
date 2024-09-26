"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import MouseHover from "./MouseHover"
const ChooseUs = () => {

  const [count, setCount] = useState(0);
  const targetNumber = 100; 
  const duration = 2000;

  useEffect(() => {
    let start = 0;
    const end = targetNumber;
    if (start === end) return;

    const incrementTime = (duration / (end - start));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);
  return (
    <>
      <div className="bg-[#161519]  py-25">
        <div className=" container mx-auto w-[90%] lg:w-[80%]">
          <div className="grid grid-cols-12 gap-7">
            <div className="pt-5 sm:pt-20 ml:6 lg:ml-12 lg:col-span-6 col-span-12">
              <span className="font-normal text-[#06d889] text-[15px] capitalize inline-block relative pl-[30px] mb-[15px] line">
                Why Choose Us
              </span>
              <h2 className="text-white font-bold text-[30px] sm:text-4xl xl:text-5xl leading-[1.3em] capitalize">
                Unlock the potential of your business.
              </h2>
            </div>
            <div className="lg:p-5 lg:col-span-6 col-span-12 z-10">
               <MouseHover image = "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/choose-img-1.png"  className="opacity-75 w-full h-full" />
            </div>
            <div className="relative lg:col-span-7 col-span-12 w-[100%] h-full lg:bottom-24">
              <div className="bg-cover bg-no-repeat px-[30px] py-[65px]  bg-gradient-with-image-choose-us ">
                <Image
                  src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/choose-vec-top-r.svg"
                  alt="image"
                  width={100}
                  height={100}
                  className="absolute bottom-0 left-0"
                />
                <Image
                  src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/choose-vec-btm-l.svg"
                  alt="image"
                  width={100}
                  height={100}
                  className="absolute top-0 right-0 opacity-50"
                />

                <div className="mt-10">
                  <div className="mb-6">
                    <Image
                      src={
                        "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/logo.svg"
                      }
                      alt="image"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h4 className="text-[#e4e4e4] mb-6 tracking-[.03rem] leading-5 text-[20px] lg:text-2xl text-wrap ">
                    Best Creative IT Agency And Solutions
                    <br />
                    <br />
                    <span className="text-[#06d889] text-[26px] font-semibold ">
                      Since 2005.
                    </span>
                  </h4>
                </div>
                <p className="pl-[10px] sm:pl-7 lg:pl-[60px] text-[#b5b5b5] tracking-[.03rem] leading-8 font-light">
                  Morbi interdum pellentesque nunc, luctus pretium nullagoneq
                  luctus at. Aliquam cursus nunc arcu, condimentum efficiturunt
                  tellus iaculis faucibus Quisque gravida.
                </p>
                <div className="pl-[60px] pt-16">
                  <h2 className="text-[#e4e4e44d]  tracking-[.05rem] leading-3 text-5xl font-bold pb-10">
                    #1
                  </h2>
                </div>
                <div className="absolute right-8 bottom-5 group">
                  <Link
                    href={"#"}
                    className="w-[123px] h-[123px] border border-white/20 rounded-full flex items-center justify-center  font-normal text-[12px] tracking-[.03em] uppercase text-white gap-[5px] transition duration-[700ms] hover:text-[#06d889] hover:shadow-inset-10em "
                  >
                    <GoArrowUpRight className="w-[14px] h-[14px] text-[#06d889] group-hover:text-[#fff] group-hover:rotate-[45deg] transition-transform duration-500 ml-1 " />

                    <span className="group-hover:text-[#fff]"> About More</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 col-span-12  sm:w-[70%] lg:w-full lg:mt-8">
              <div className="">
                <ul>
                  <li>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full flex items-center  justify-center bg-transparent border border-white/20">
                        <h3 className="text-white text-[30px] font-bold mb-0 capitalize">
                          <span>{count}</span>%
                        </h3>
                      </div>
                      <div>
                        <h2 className="mb-2 text-white text-2xl font-semibold capitalize">
                          Strategy
                        </h2>
                        <p className="text-[#b5b5b5] font-light text-sm leading-[25px] tracking-[.03rem]">
                          Morbi interdum pellentesque nunc, luctuso pretium
                          nullagoneq luctus at. Aliquam one cursus nunc arcu
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full flex items-center  justify-center bg-transparent border border-white/20">
                        <h3 className="text-white text-[30px] font-bold mb-0 capitalize">
                          <span>{count}</span>%
                        </h3>
                      </div>
                      <div>
                        <h2 className="mb-2 text-white text-2xl font-semibold capitalize">
                          Audience
                        </h2>
                        <p className="text-[#b5b5b5] font-light text-sm leading-[25px] tracking-[.03rem]">
                          Morbi interdum pellentesque nunc, luctuso pretium
                          nullagoneq luctus at. Aliquam one cursus nunc arcu
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="h-[100px] min-w-[100px] max-w-[100px] rounded-full flex items-center  justify-center bg-transparent border border-white/20">
                        <h3 className="text-white text-[30px] font-bold mb-0 capitalize">
                          <span>{count}</span>%
                        </h3>
                      </div>
                      <div>
                        <h2 className="mb-2 text-white text-2xl font-semibold capitalize">
                          Keyword
                        </h2>
                        <p className="text-[#b5b5b5] font-light text-sm leading-[25px] tracking-[.03rem]">
                          Morbi interdum pellentesque nunc, luctuso pretium
                          nullagoneq luctus at. Aliquam one cursus nunc arcu
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
