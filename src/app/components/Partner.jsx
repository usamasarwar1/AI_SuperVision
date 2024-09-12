import Marquee from "react-fast-marquee";
import Image from "next/image";

const Partner = () => {
  return (
    <>
      <div className="bg-[#161519]  py-25">
        <div className="flex justify-center ">
          <div className="relative w-[90%] lg:w-[80%] container mx-auto">
            <span className="hidden lg:inline-block sm:font-bold uppercase text-[80px] tracking-[0.01em] text-[rgba(6,216,137,.03)] w-full leading-none text-center">
              OUR PARTNE
            </span>
            <span className="text-white sm:font-bold uppercase sm:text-[60px] text-[40px] text-center block lg:hidden">
              OUR PARTNE
            </span>
            <h2 className="static text-center lg:absolute mb-0 bottom-4 left-[19.5rem] font-medium text-2xl tracking-[0.03em] capitalize text-white">
              We Worked With Global Largest Brands
            </h2>
          </div>
        </div>
        <Marquee className="mt-20">
          <div className="float-left flex gap-10 items-center ml-0">
            <div className="opacity-30 transition duration-500 flex justify-center max-w-[150px] border border-[#414141] p-4">
              <Image
                src={
                  "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-partner-01.svg"
                }
                alt="image"
                width={200}
                height={200}
              />
            </div>
            <div className="opacity-30 transition duration-500 flex justify-center max-w-[150px] border border-[#414141] p-4">
              <Image
                src={
                  "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-partner-02.svg"
                }
                alt="image"
                width={200}
                height={200}
              />
            </div>
            <div className="opacity-30 transition duration-500 flex justify-center max-w-[150px] border border-[#414141] p-4">
              <Image
                src={
                  "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-partner-03.svg"
                }
                alt="image"
                width={200}
                height={200}
              />
            </div>
            <div className="opacity-30 transition duration-500 flex justify-center max-w-[150px] border border-[#414141] p-4">
              <Image
                src={
                  "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-partner-04.svg"
                }
                alt="image"
                width={200}
                height={200}
              />
            </div>
            <div className="opacity-30 transition duration-500 flex justify-center max-w-[150px] border border-[#414141] p-4">
              <Image
                src={
                  "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-partner-05.svg"
                }
                alt="image"
                width={200}
                height={200}
              />
            </div>
            <div className="opacity-30 transition duration-500 flex justify-center max-w-[150px] border border-[#414141] p-4">
              <Image
                src={
                  "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-partner-06.svg"
                }
                alt="image"
                width={200}
                height={200}
              />
            </div>
            <div className="opacity-30 transition duration-500 flex justify-center max-w-[150px] border border-[#414141] p-4">
              <Image
                src={
                  "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-partner-07.svg"
                }
                alt="image"
                width={200}
                height={200}
              />
            </div>
            <div className="mr-10 opacity-30 transition duration-500 flex justify-center max-w-[150px] border border-[#414141] p-4">
              <Image
                src={
                  "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-partner-07.svg"
                }
                alt="image"
                width={200}
                height={200}
              />
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};
export default Partner;
