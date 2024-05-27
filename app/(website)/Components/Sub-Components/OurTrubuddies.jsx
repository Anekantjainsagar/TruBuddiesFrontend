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
            {admin?.adminTrubuddies?.slice(0, 4)?.map((e, i) => {
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
                    history.push(`/trubuddies`);
                  }}
                  className={`bg-white cursor-pointer shadow-md shadow-gray-600 rounded-3xl border md:mx-0 mx-auto w-[90%] h-[40vh] md:h-[23.4vw] py-[3vw] md:py-[1vw] px-[4vw] md:px-[1.5vw] flex flex-col items-center justify-center relative trubuddiesBg`}
                >
                  <AiOutlineRight className="text-8xl text-gray-700" />
                  <h1 className="text-lg">View All..</h1>
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
