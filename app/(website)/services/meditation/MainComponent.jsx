"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";

import elements from "../../../Images/Services/yoga/element 2.png";
import thumb from "../../../Images/Services/yoga/yoga thumbnail.png";
import { useRouter } from "next/navigation";
import Block from "./Block";

const MainComponent = () => {
  const history = useRouter();

  return (
    <div className="flex items-center justify-center relative h-[30vw]">
      <div className="absolute top-0 left-0">
        <Image
          src={elements}
          alt="Element"
          className="object-cover object-center h-[30vw]"
        />
      </div>
      <div className="w-full">
        <h2 className="text-center text-2xl font-medium mx-auto w-3/12">
          Meditations for a peaceful and happy mind
        </h2>
        <div className="mx-16">
          <Swiper
            slidesPerView={
              typeof window != "undefined"
                ? window.innerWidth < 500
                  ? 1
                  : 3
                : 1
            }
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            loop={false}
            autoplay={{
              interval: 3000,
              disableOnInteraction: true,
            }}
          >
            {["a", "b", "c", "d"]?.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <Block />
                </SwiperSlide>
              );
            })}
            <SwiperSlide>
              <div
                onClick={(e) => {
                  history.push("/services/meditation/all");
                }}
                className="my-5 text-black cursor-pointer w-fit p-2 border-gray-600 rounded-md mx-auto duration-500 hover:scale-105"
              >
                <p className="absolute top-1/2 -translate-x-1/2 underline font-semibold -translate-y-1/2 left-1/2 flex items-center text-xl">
                  View All <FaArrowRight className="ml-2" />{" "}
                </p>
                <Image
                  src={thumb}
                  alt="Yoga thumbnail"
                  className="rounded-md opacity-0"
                />
                <p className="opacity-0">Om Chanting</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
