"use client";
import React, { useContext, useState } from "react";
import { maliFont, noto_sans } from "../Utils/font";
import logo from "../../Assets/Home/Logo Image.png";
import Image from "next/image";
import LeftDots from "../Elements/LeftDots";

// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import client1 from "../../Assets/Home/Images/Client 1.png";
import client2 from "../../Assets/Home/Images/Client 2.png";
import client3 from "../../Assets/Home/Images/Client 3.png";
import RightDots from "../Elements/RightDots";

import bg from "../../Assets/Home/trubuddies bg.png";

import male from "../../Assets/Home/icons/male.png";
import female from "../../Assets/Home/icons/female.png";
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
import {
  AiOutlineDoubleRight,
  AiOutlineRight,
  AiOutlineRightSquare,
} from "react-icons/ai";
import Context from "../../../Context/Context";
import axios from "axios";
import { BASE_URL } from "../Utils/url";
import { getCookie } from "cookies-next";

const OurTrubuddies = () => {
  const { admin } = useContext(Context);
  let data = [
    { image: client1 },
    { image: client2 },
    { image: client3 },
    { image: client3 },
  ];
  const history = useRouter();

  return (
    <div className="pt-[3vw]">
      <div
        className={`uppercase text-center w-fit mx-auto text-2xl text-newTomato font-bold ${noto_sans.className} flex items-center`}
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
            {admin?.adminTrubuddies?.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <Block data={e} />
                </SwiperSlide>
              );
            })}
            {admin?.adminTrubuddies?.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <Block data={e} />
                </SwiperSlide>
              );
            })}
            <SwiperSlide>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div
                  onClick={(e) => {
                    history.push("/trubuddies");
                  }}
                  className={`bg-white cursor-pointer rounded-3xl mb-9 border md:mx-0 mx-auto w-[80%] h-[41vh] max-h-[49vw] md:w-[23vw] py-[3vw] md:py-[1vw] px-[4vw] md:px-[1.5vw] flex flex-col items-center relative`}
                >
                  <Image
                    src={bg}
                    alt="Background"
                    className="absolute top-0 left-0 h-[45vh] opacity-50"
                  />
                  <div className="w-full h-full flex items-center justify-center hover:scale-110 transition-all">
                    <div className="flex flex-col items-center justify-center">
                      <AiOutlineRight size={100} className="text-gray-600" />
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

export const Block = ({ data, big }) => {
  const history = useRouter();
  const { getUser, setClickedUser, login } = useContext(Context);

  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <div
        onClick={(e) => {
          history.push(`/trubuddies/${data?._id}`);
        }}
        className={` bg-white cursor-pointer rounded-3xl ${
          big ? "mb-5" : "mb-9"
        } border md:mx-0 mx-auto ${
          big ? "w-[95%] md:w-[21.5vw]" : "w-[80%] md:w-[23vw]"
        } py-[3vw] md:py-[1vw] px-[4vw] md:px-[1.5vw] flex flex-col items-center relative trubuddiesBg`}
      >
        <div className="w-full h-full">
          <div className="flex items-center w-full justify-start">
            <Image
              src={data?.profile}
              width={100}
              height={100}
              alt="Image"
              className="w-[32vw] md:w-[6.5vw] border-4 border-newLightBlue rounded-full"
            />
            <div className="ml-3">
              <h1 className="mt-1 md:mt-2 mb-0 text-xl font-semibold">
                {data?.name}
              </h1>
              <p className="border-2 px-2 flex items-center rounded-3xl text-sm border-newBlue w-fit mt-1">
                {data?.gender?.toLowerCase() == "male" ? (
                  <Image src={male} alt="Male" className="mr-1" />
                ) : (
                  <Image src={female} alt="Male" className="mr-1" />
                )}
                {data?.gender}
              </p>
            </div>
          </div>
          <div className={`${noto_sans.className}`}>
            <h1 className="text-xl mt-2 md:mt-3 mb-0">Expertise</h1>
            <div className="grid grid-cols-2 gap-x-3">
              {data?.otherExpertise?.slice(0, 2).map((e) => {
                return (
                  <div
                    className="px-3 py-0.5 rounded-full mt-2 text-center border-2 border-newBlue"
                    key={e}
                  >
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`${noto_sans.className} px-1`}>
            <h1 className="text-xl mt-2 md:mt-3 mb-0">About</h1>
            <p className="text-gray-400 text-[16px]">
              {data?.bio ? data?.bio?.slice(0, 200) + "..." : ""}
            </p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!login?.trubuddies?.includes(data?._id)) {
              axios
                .post(`${BASE_URL}/login/start-chat/${data?._id}`, {
                  token: getCookie("token"),
                })
                .then((res) => {
                  if (res.status == 200) {
                    setClickedUser(data);
                    setTimeout(() => {
                      getUser();
                      history.push("/chats");
                    }, 500);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              setClickedUser(data);
              history.push("/chats");
            }
          }}
          className="bg-newBlue w-full cursor-pointer text-white py-1 rounded-full mt-0 md:mt-5"
        >
          Start Chat
        </button>
      </div>
    </Tilt>
  );
};

export default OurTrubuddies;
