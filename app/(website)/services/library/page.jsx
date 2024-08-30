"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

import why from "../../../Images/Services/library/why.png";
import main1 from "../../../Images/Services/library/1.png";
import main2 from "../../../Images/Services/library/2.png";
import main3 from "../../../Images/Services/library/3.png";
import video from "../../../Images/Services/library/video.png";

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
import { useRouter } from "next/navigation";
import ServiceContext from "../../../Context/ServiceContext";

const Library = () => {
  const context = useContext(ServiceContext);

  return (
    <>
      <div className={`libraryBg`}>
        <div className="flex h-[100vh] items-center maliFont justify-center px-[5vw]">
          <div className="noto_sans w-6/12 flex flex-col items-center">
            <div className="flex flex-col w-[14vw] h-[32vh] items-center justify-center relative z-10 text-xl pb-3 bg-white border border-[#1052FF] rounded-[30px]">
              <Image
                src={main1}
                alt="Main img"
                className="px-4 aspect-square object-contain"
              />
              <h4 className="mt-3 text-center px-4 text-gray-800/90">
                Stories
              </h4>
            </div>
            <div className="flex items-start gap-x-10 relative z-0 -mt-10">
              <div className="flex flex-col w-[14vw] h-[32vh] items-center justify-center text-xl pb-3 bg-white border border-[#1052FF] rounded-[30px]">
                <Image
                  src={main2}
                  alt="Main img"
                  className="px-4 aspect-square object-contain"
                />
                <h4 className="mt-3 text-center px-4 text-gray-800/90">
                  Tips and tricks to better mental health
                </h4>
              </div>
              <div className="flex flex-col w-[14vw] h-[32vh] items-center justify-center text-xl pb-3 bg-white border border-[#1052FF] rounded-[30px]">
                <Image
                  src={main3}
                  alt="Main img"
                  className="px-4 aspect-square object-contain"
                />
                <h4 className="mt-3 text-center px-4 text-gray-800/90">
                  Graphics for better visualisation
                </h4>
              </div>
            </div>
          </div>
          <div className="w-6/12 flex flex-col items-end">
            <h1 className={`text-8xl noto_sans`}>My Library</h1>
            <input
              type="text"
              className="outline-none border noto_sans bg-transparent w-[22vw] border-gray-500/40 rounded-full mt-5 px-4 py-1.5 shadow-inner shadow-gray-400"
              placeholder="Search Books or Author Name"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-16 relative">
          <h1 className="text-2xl shadow-inner shadow-gray-400 font-semibold text-[#407BFF] border px-5 py-1.5 border-[#407BFF] rounded-full">
            Why should you read?
          </h1>
          <div className="absolute w-6/12 h-[50vh] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-between">
            <div className="bg-gradient-to-b from-newOceanGreen p-[4px] to-newBlue w-[8vw] text-lg rounded-full aspect-square">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-center">
                Provides a healthy escape
              </div>
            </div>
            <div className="flex flex-col items-center justify-between h-full">
              <div className="bg-gradient-to-b from-newOceanGreen p-[4px] to-newBlue w-[8vw] text-lg rounded-full aspect-square">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-center">
                  Combats loneliness
                </div>
              </div>
              <div className="bg-gradient-to-b from-newOceanGreen p-[4px] to-newBlue w-[8vw] text-lg rounded-full aspect-square">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-center">
                  Reduces distress
                </div>
              </div>
            </div>
          </div>
          <Image src={why} alt="Why" />
        </div>
      </div>
      <Image src={video} alt="Video" />
      <div className="py-16 noto_sans w-full">
        <h4 className="bg-[#FF725E] text-white font-medium text-3xl w-8/12 py-2 rounded-xl shadow-inner shadow-gray-800 text-center mx-auto">
          Categories Available
        </h4>
        <CategoryCode />
      </div>{" "}
      <div className="py-16 noto_sans">
        <h4 className="bg-[#FFDA56] text-black font-medium text-3xl w-8/12 py-2 rounded-xl shadow-inner shadow-gray-800 text-center mx-auto">
          Explore Our Books
        </h4>
        <div className="py-[5vh]">
          <Swiper
            slidesPerView={
              typeof window != "undefined"
                ? window.innerWidth < 500
                  ? 1
                  : 4
                : 1
            }
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            loop={false}
            autoplay={{
              interval: 3000,
              disableOnInteraction: true,
            }}
          >
            {context?.books?.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <Block data={data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex items-center justify-center">
          <button className="px-5 py-2 bg-newBlue text-white rounded-lg text-xl font-medium shadow-lg shadow-gray-400">
            Visit Library
          </button>
        </div>
      </div>
    </>
  );
};

const CategoryCode = () => {
  const [selected, setSelected] = useState();
  let data = ["Novel", "Mystery", "Stories", "Self Awareness", "Biography"];

  useEffect(() => {
    setSelected(data[0]);
  }, []);

  return (
    <div className="border rounded-xl border-newLightBlue w-11/12 mx-auto my-5">
      <div className="bg-newLightBlue p-1 flex items-center rounded-t-xl text-white">
        {data.map((e, i) => {
          return (
            <div
              key={i}
              className={`px-4 py-1 text-lg font-medium cursor-pointer flex items-center justify-center ${
                selected == e
                  ? "bg-white text-black shadow-inner shadow-gray-500"
                  : ""
              } ${selected == data[0] ? "rounded-ss-xl" : ""}`}
              onClick={() => setSelected(e)}
            >
              {e}
            </div>
          );
        })}
      </div>
    
    </div>
  );
};

const Block = ({ data }) => {
  const history = useRouter();

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={(e) => {
        history.push(`/services/library/${data?._id}`);
      }}
    >
      <Image
        src={data?.thumbnail}
        alt={data?.thumbnail.src}
        width={1000}
        height={1000}
        className="w-9/12"
      />
    </div>
  );
};

export default Library;
