"use client";
import Image from "next/image";
import React, { useState } from "react";
import { noto_sans } from "../Utils/font";
import Bulb from "../Elements/Bulb";
import chatBox from "../../Assets/Home/image 7.png";
import text from "../../Assets/Home/image 5.png";
import Network from "../Elements/Network";

// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import blog1 from "../../Assets/Home/Images/Rectangle 20.png";
import blog2 from "../../Assets/Home/Images/Rectangle 21.png";
import blog3 from "../../Assets/Home/Images/Rectangle 22.png";

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

const LearnInspire = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  let data = [
    {
      image: blog1,
      title: "Heading",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt eligendi impedit nemo sequi! Rem nam nihil incidunt praesentium iure.",
    },
    {
      image: blog2,
      title: "Heading",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt eligendi impedit nemo sequi! Rem nam nihil incidunt praesentium iure.",
    },
    {
      image: blog3,
      title: "Heading",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt eligendi impedit nemo sequi! Rem nam nihil incidunt praesentium iure.",
    },
  ];

  return (
    <div
      className={`bg-gradient-to-br from-newLightBlue from-30% to-newOcean py-[2vw] ${noto_sans.className}`}
    >
      <div
        className={`uppercase text-center w-fit mx-auto text-2xl md:text-3xl mt-2 text-white font-bold relative`}
      >
        Learn & Inspire
        <Bulb />
        <Image
          src={chatBox}
          alt="Chat box"
          className="w-[9vw] md:w-[4vw] absolute -top-1 md:-top-3 -right-12 md:-right-20"
        />
      </div>
      <div className="relative md:mt-0 mt-[6vw] px-0 md:px-[10vw] pt-[2vw]">
        <Network />
        <Image
          src={text}
          alt="Text"
          className="w-[10vw] absolute right-8 bottom-3 -md:block hidden"
        />
        {/* Blocks */}
        <div className="md:grid hidden grid-cols-3 gap-x-6">
          {data?.map((e, i) => {
            return <Block data={e} key={i} />;
          })}
        </div>
        <div className="block md:hidden mt-5">
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              interval: 3000,
              disableOnInteraction: false,
            }}
          >
            {data?.map((item, i) => (
              <SwiperSlide key={i}>
                <Block data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  return (
    <div className="bg-white flex flex-col mb-10 md:mx-0 mx-[12vw] md:p-4 p-3 rounded-2xl shadow-lg shadow-gray-400 hover:scale-105 transition-all cursor-pointer">
      <Image src={data?.image} alt="Image" />
      <h1 className="text-xl font-semibold pt-2 pl-2">{data?.title}</h1>
      <p className="px-2 mb-0 text-sm font-light">{data?.text}</p>
    </div>
  );
};

export default LearnInspire;
