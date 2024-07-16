"use client";
import React, { useContext } from "react";
import Image from "next/image";

import hero_img from "../../../Images/Services/library/hero.png";
import about from "../../../Images/Services/library/about.png";
import croc from "../../../Images/Services/library/croc.png";
import books from "../../../Images/Services/library/books.png";
import why1 from "../../../Images/Services/library/why/why (1).png";
import why2 from "../../../Images/Services/library/why/why (2).png";
import why3 from "../../../Images/Services/library/why/why (3).png";

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
    <div className={`bg-gradient-to-t from-[#b2e1f8] to-[#AAEEEA]/0`}>
      <div className="libraryBg flex flex-col h-[100vh] items-center maliFont justify-center">
        <h1 className={`text-8xl noto_sans font-semibold`}>Library</h1>
        <h4 className={`text-3xl text-gray-400`}>
          That&apos;s always open for you
        </h4>
        <Image src={hero_img} alt="Hero img" />
        <div>
          <button className="cursor-pointer bg-newBlue text-white px-9 py-1.5 noto_sans rounded-full mx-5 text-lg">
            Get Started
          </button>
          <button className="cursor-pointer bg-newBlue text-white px-9 py-1.5 noto_sans rounded-full mx-5 text-lg">
            Categories
          </button>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center py-16">
        <h1 className="text-3xl font-semibold">Why should you read?</h1>
        <div className="grid mt-5 grid-cols-3 gap-x-[4vw] w-[65vw] mx-auto">
          {[
            { img: why3, title: "Provides a healthy escape" },
            { img: why1, title: "Combats loneliness" },
            { img: why2, title: "Reduces distress" },
          ].map((e, i) => {
            return (
              <div
                key={i}
                className="bg-gradient-to-b rounded-2xl from-newOcean to-newBlue p-1"
              >
                <div className="bg-white rounded-2xl py-5 w-full h-full flex flex-col items-center justify-center">
                  <Image
                    src={e?.img}
                    alt={e?.img?.src}
                    className="h-[20vh] aspect-square object-contain"
                  />
                  <p className="noto_sans font-semibold mt-3 text-2xl">
                    {e?.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="libraryBg2">
        <div className="py-[10vh] flex flex-col items-center">
          <h1 className="text-3xl font-semibold">About Our Library</h1>
          <div className="w-[70vw] bg-white mt-5 rounded-xl px-5">
            <Image src={about} alt={about.src} />
          </div>
        </div>
        <div className="py-[10vh] flex flex-col items-center">
          <h1 className="text-3xl font-semibold w-2/12 text-center mx-auto">
            What&apos;s inside our books
          </h1>
          <div className="w-[60vw] rounded-xl flex items-center justify-evenly">
            <Image src={croc} alt={croc.src} className="w-8/12" />
            <div>
              {[
                "Graphics for better visualisation",
                "Stories",
                "Tips and tricks to better mental health",
                "Exercises guide",
              ].map((e, i) => {
                return (
                  <div key={i} className="flex items-center mb-2">
                    <Image src={books} alt="Books" className="w-[2vw]" />
                    <p className="text-xl ml-5 font-medium">{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <>
          {context?.bookCategory?.map((category, i) => {
            return (
              <div key={i} className="py-[10vh] flex flex-col items-center">
                <h1 className="text-3xl font-semibold">{category?.title}</h1>
                <div className="w-[95vw] mt-10 px-5">
                  <Swiper
                    slidesPerView={
                      typeof window != "undefined"
                        ? window.innerWidth < 500
                          ? 1
                          : 4
                        : 1
                    }
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                      Autoplay,
                    ]}
                    loop={false}
                    autoplay={{
                      interval: 3000,
                      disableOnInteraction: true,
                    }}
                  >
                    {context?.books
                      ?.filter((book) => {
                        return book?.category?._id === category?._id;
                      })
                      ?.map((e, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <Block data={e} />
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
              </div>
            );
          })}
        </>
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
