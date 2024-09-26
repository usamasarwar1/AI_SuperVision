"use client";
import Image from "next/image";
import Slider from "react-slick";

const Approciations = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <>
      <div className="py-4 inset-0 bg-[#161519] bg-gradient-with-image-approciations">
        <div className="w-[90%] lg:w-[80%] container mx-auto py-25">
          <div className="relative">
            <ul>
              <li className="hidden md:block  md:top-[90px] md:-right-[20px] lg:rounded-full absolute xl:right-[130px] xl:top-[22px] opacity-50 ">
                <Image
                  src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-testimonial-img-01.png"
                  alt="img1"
                  width={90}
                  height={90}
                  className="rounded-full bg-transparent"
                />
              </li>
              <li className="hidden md:block md:rounded-full absolute xl:left-[-10px] xl:top-[120px] md:top-[90px] opacity-25">
                <Image
                  src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-testimonial-img-02.png"
                  alt="img1"
                  width={90}
                  height={90}
                  className="rounded-full"
                />
              </li>
              <li className="rounded-full absolute left-[15%] top-[180px] opacity-25">
                <Image
                  src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-testimonial-img-03.png"
                  alt="img1"
                  width={40}
                  height={40}
                  className="rounded-full "
                />
              </li>
              <li className="rounded-full absolute right-[15%] top-[150px] opacity-25">
                <Image
                  src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-testimonial-img-04.png"
                  alt="img1"
                  width={40}
                  height={40}
                  className="rounded-full "
                />
              </li>
              <li className="rounded-full absolute left-[5%] top-[420px] opacity-25">
                <Image
                  src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-testimonial-img-05.png"
                  alt="img1"
                  width={60}
                  height={60}
                  className="rounded-full "
                />
              </li>
              <li className="rounded-full absolute right-[10%] top-[420px] opacity-25">
                <Image
                  src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-testimonial-img-06.png"
                  alt="img1"
                  width={60}
                  height={60}
                  className="rounded-full "
                />
              </li>
            </ul>
          </div>

          <div className="text-center relative mb-14">
            <span className="hidden lg:block lg:text-[rgba(6,216,137,.03)] font-bold text-[110px] tracking-[0.01em] uppercase w-full leading-none ">
              Approciations
            </span>
            <h2 className="static text-white font-bold sm:text-6xl text-4xl tracking-[0.01em] lg:absolute bottom-2 left-[21rem]">
              Approciations
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="w-[300px] sm:[516px] md:w-[616px] lg:w-[736px] h-full relative transform shrink-0">
              <Slider {...settings}>
                <div>
                  <div className="text-center flex justify-center">
                    <Image
                      src={
                        "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-testimonoal-review.png"
                      }
                      alt="approcation-image"
                      width={100}
                      height={100}
                      className="text-center"
                    />
                  </div>
                  <p className="text-[#e4e4e4] capitalize leading-[1.9] text-[22px] font-normal pt-9 mb-10 text-center">
                    “I cannot express enough how satisfied I am with the web
                    developmet services provided by Egens Lab. They are very
                    good and User friendly and they work very nice and creative”
                  </p>
                  <div className="text-center flex justify-center flex-col">
                    <h4 className="text-[#e4e4e4] font-semibold text-2xl mb-0">
                      {" "}
                      Lucent Frilink
                    </h4>
                    <span className="font-normal text-sm leading-7 tracking-[.02em] text-[#06d889]">
                      CEO At xtecl.com
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-center flex justify-center">
                    <Image
                      src={
                        "https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-6/home6-testimonoal-review.png"
                      }
                      alt="approcation-image"
                      width={100}
                      height={100}
                      className="text-center"
                    />
                  </div>
                  <p className="text-[#e4e4e4] capitalize leading-[1.9] text-[22px] font-normal pt-9 mb-10 text-center">
                    “I cannot express enough how satisfied I am with the web
                    developmet services provided by Egens Lab. They are very
                    good and User friendly and they work very nice and creative”
                  </p>
                  <div className="text-center flex justify-center flex-col">
                    <h4 className="text-[#e4e4e4] font-semibold text-2xl mb-0">
                      {" "}
                      Watson Bekaryn
                    </h4>
                    <span className="font-normal text-sm leading-7 tracking-[.02em] text-[#06d889]">
                      CEO At xtecl.com
                    </span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Approciations;
