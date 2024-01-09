"use client";
import React, { useContext } from "react";
import { noto_sans } from "../Utils/font";
import logo from "../../Assets/Home/Logo Image.png";
import Image from "next/image";
import LeftDots from "../Elements/LeftDots";
import RightDots from "../Elements/RightDots";
import bg from "../../Assets/Home/trubuddies bg.png";
import { useRouter } from "next/navigation";
import Tilt from "react-parallax-tilt";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { AiOutlineRight } from "react-icons/ai";
import Context from "../../../Context/Context";

import TrubuddyBlock from "../Elements/TrubuddyBlock";
import { Toaster } from "react-hot-toast";

const OurTrubuddies = () => {
  const { admin } = useContext(Context);
  const history = useRouter();

  return (
    <div>
      <div className="mt-[2vw] md:hidden">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            interval: 3000,
            disableOnInteraction: true,
          }}
        >
          {[
            {
              title: "Create Your Profile",
              desc: "Set up your Anonymous Buddies profile – it's your personal mental well-being space.",
              image:
                "https://res.cloudinary.com/dpbsogbtr/image/upload/v1701932683/m3wty9plmmd7oj7fed6q.png",
            },
            {
              title: "Choose your TruBuddies",
              desc: " Explore the Our TruBuddies section and choose supportive companions for your journey.",
              image:
                "https://res.cloudinary.com/dpbsogbtr/image/upload/v1701932689/jyvpos0zmttqtgri6dia.png",
            },
            {
              title: "Instant Connect",
              desc: "Connect instantly with your chosen Trubuddies, share thoughts, get support, and feel better together.",
              image:
                "https://res.cloudinary.com/dpbsogbtr/image/upload/v1701932697/ztcrsjiih7peoxvxghi4.png",
            },
          ]?.map((e, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center justify-between pb-10">
                  <h1 className="font-semibold text-xl">{e?.title}</h1>
                  <p className="w-[80vw] text-center">{e?.desc}</p>
                  <Image
                    src={e?.image}
                    alt={e?.image?.src}
                    width={10000}
                    height={10000}
                    className="w-[70vw] mt-[3vw]"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Toaster />
      <div
        className={`uppercase text-center w-fit mx-auto pt-[5vw] text-2xl text-newTomato font-bold ${noto_sans.className} flex items-center`}
      >
        Our{" "}
        <Image
          src={logo}
          alt="Logo image"
          className="w-[9vw] md:w-[2.5vw] mx-2"
        />{" "}
        Trubuddies
      </div>
      <div className="w-full flex justify-between items-center relative bg-gradient-to-r from-newBlue to-newOcean md:px-[12vw] md:pt-[2vw] pt-[10vw] mt-[3vw] md:mt-[1vw]">
        <LeftDots />
        <div className="flex justify-between items-center w-full">
          <Swiper
            slidesPerView={
              typeof window != "undefined"
                ? window.innerWidth < 500
                  ? 1
                  : 3
                : 1
            }
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              interval: 3000,
              disableOnInteraction: true,
            }}
          >
            {admin?.adminTrubuddies?.slice(0, 3)?.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <TrubuddyBlock data={e} />
                </SwiperSlide>
              );
            })}
            <SwiperSlide>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div
                  onClick={(e) => {
                    history.push("/trubuddies");
                  }}
                  className={`bg-white shadow-md shadow-gray-600 cursor-pointer rounded-3xl mb-9 border md:mx-0 mx-auto w-[80%] h-[41vh] max-h-[49vw] md:w-[23vw] py-[3vw] md:py-[1vw] px-[4vw] md:px-[1.5vw] flex flex-col items-center relative`}
                >
                  <Image
                    src={bg}
                    alt="Background"
                    className="absolute top-0 left-0 h-[45vh] opacity-50"
                  />
                  <div className="w-full h-full flex items-center justify-center hover:scale-110 transition-all">
                    <div className="flex flex-col items-center justify-center">
                      <AiOutlineRight size={10000} className="text-gray-600" />
                      <h1 className="text-2xl text-gray-600">
                        More TruBuddies...
                      </h1>
                    </div>
                  </div>
                </div>
              </Tilt>
            </SwiperSlide>
          </Swiper>
        </div>
        <RightDots />
      </div>
    </div>
  );
};

export default OurTrubuddies;
