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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PersonalDiaryScroller = () => {
  return (
    <div className="w-[20vw]">
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
        {[1, 2, 3]?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full mb-10 h-[46vh] bg-gray-300 rounded-md"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PersonalDiaryScroller;
