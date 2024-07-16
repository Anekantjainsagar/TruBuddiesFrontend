"use client";
import React, { useContext } from "react";
import Image from "next/image";

import hero_img from "../../../Images/Services/social-support/hero.png";
import about from "../../../Images/Services/social-support/about.png";
import why1 from "../../../Images/Services/social-support/img 1.png";
import why2 from "../../../Images/Services/social-support/img 2.png";
import why3 from "../../../Images/Services/social-support/img 3.png";
import community from "../../../Images/Services/social-support/community.png";

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
import Block from "./Block";

const SocialSupport = () => {
  const history = useRouter();
  const context = useContext(ServiceContext);

  return (
    <div className={`bg-gradient-to-r from-[#b2e1f8] to-[#AAEEEA]/0`}>
      <div className="libraryBg flex flex-col h-[100vh] items-center maliFont justify-center">
        <h1 className={`text-8xl noto_sans font-semibold`}>Social Support</h1>
        <h4 className={`text-3xl text-gray-400`}>
          You&apos;re not alone in this
        </h4>
        <Image src={hero_img} alt="Hero img" className="my-5" />
        <button className="cursor-pointer bg-newBlue text-white px-10 py-2 noto_sans rounded-full mx-5 text-lg">
          Get Started
        </button>
      </div>
      <div className="bg-white flex flex-col items-center justify-center py-16">
        <h1 className="text-3xl font-semibold">Why join a community?</h1>
        <div className="grid mt-5 grid-cols-3 gap-x-[4vw] w-[65vw] mx-auto">
          {[
            { img: why1, title: "Networking" },
            { img: why2, title: "Sharing experiences" },
            { img: why3, title: "Solutions to problems" },
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
          <h1 className="text-3xl font-semibold">About the Community</h1>
          <div className="w-full bg-white mt-5 rounded-xl px-5">
            <Image src={about} alt={about.src} />
          </div>
        </div>
        <>
          {context?.eventCategory?.map((category, i) => {
            return (
              <div key={i} className="py-[10vh] flex flex-col items-center">
                <h1 className="text-3xl font-semibold">{category?.title}</h1>
                <p className="text-xl text-gray-500 w-4/12 text-center">
                  {category?.description}
                </p>
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
                    {context?.events
                      ?.filter((ev) => {
                        return ev?.category?._id === category?._id;
                      })
                      ?.map((e, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <Block data={e} />
                          </SwiperSlide>
                        );
                      })}
                    {context?.events
                      ?.filter((ev) => {
                        return ev?.category?._id === category?._id;
                      })
                      ?.map((e, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <Block data={e} />
                          </SwiperSlide>
                        );
                      })}
                    {context?.events
                      ?.filter((ev) => {
                        return ev?.category?._id === category?._id;
                      })
                      ?.map((e, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <Block data={e} />
                          </SwiperSlide>
                        );
                      })}
                    {context?.events
                      ?.filter((ev) => {
                        return ev?.category?._id === category?._id;
                      })
                      ?.map((e, i) => {
                        return (
                          <SwiperSlide key={i}>
                            <Block data={e} />
                          </SwiperSlide>
                        );
                      })}
                    {context?.events
                      ?.filter((ev) => {
                        return ev?.category?._id === category?._id;
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
                <button
                  onClick={(e) => {
                    history.push(`/services/social-support/${category?._id}`);
                  }}
                  className="w-2/12 py-2 text-xl mt-5 rounded-full font-semibold hover:text-newBlue hover:bg-transparent border-2 border-transparent hover:border-newBlue bg-newBlue text-white"
                >
                  View All
                </button>
              </div>
            );
          })}
        </>
        <div className="py-[10vh] flex flex-col items-center">
          <h1 className="text-3xl font-semibold">TruBuddies’ Community</h1>
          <div className="w-full bg-white mt-5 rounded-xl px-[4vw] flex justify-between">
            <div className="flex flex-col items-start justify-between text-2xl py-12 w-7/12">
              <p>
                In this community, you get to chat publicly and collectively
                with a community, and share your thoughts with them. And, there
                are separate community chats based on genders as well, which
                lets you share your problems amongst your common gender group
                too.
              </p>
              <p>So, visit the community chat, and start sharing!</p>
            </div>
            <Image src={community} alt={community?.src} className="w-4/12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSupport;
