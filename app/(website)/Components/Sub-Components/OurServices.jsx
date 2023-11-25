"use client";
import React, { useState, useContext } from "react";
import image from "../../Assets/Home/Images/services.png";
import Image from "next/image";
import { noto_sans } from "../Utils/font";
import meditation from "../../Assets/Home/services/meditation.png";
import animation1 from "../../Assets/Home/services/animation1.png";
import animation2 from "../../Assets/Home/services/animation2.png";
import animation3 from "../../Assets/Home/services/animation3.png";
import animation4 from "../../Assets/Home/services/animation4.png";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import ComingSoon from "./ComingSoon";
import Context from "../../../Context/Context";
import { getCookie } from "cookies-next";
import LoginModal from "../login";

const OurServices = () => {
  const { setIsOpen, modalIsOpen } = useContext(Context);
  const history = useRouter();
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [rotation, setRotation] = useState(-45);

  return (
    <div
      id="services"
      className="h-fit md:py-0 py-5 md:h-[100vh] flex items-center relative overflow-hidden justify-center serviceBg"
    >
      <LoginModal />
      <ComingSoon
        showComingSoon={showComingSoon}
        setShowComingSoon={setShowComingSoon}
      />
      <p className="absolute w-[18vw] right-5 text-2xl text-end top-1/2 -translate-y-1/2 md:block hidden font-semibold">
        {Math.abs(rotation % 360) !== 45
          ? "Social Support"
          : "Chat and Call Based Conversation "}
      </p>
      <div className="flex md:flex-row flex-col items-center">
        <div>
          <Image
            src={image}
            alt="Services"
            className="w-[25vw] md:block hidden"
          />
          <h1
            className={`uppercase text-center w-fit mx-auto text-3xl mt-2 text-newBlue font-bold ${noto_sans.className}`}
          >
            Our Services
          </h1>
        </div>
        <div className="grid grid-cols-2 md:hidden h-[80vh] w-[90vw] md:mt-0 mt-[5vw]">
          <div className="flex flex-col items-center justify-between h-full">
            {[
              {
                image: animation4,
                title: "Chat & Call Based Conversations",
                upcoming: false,
                route: "/chats",
              },
              {
                image: meditation,
                title: "Yoga & Meditation",
                upcoming: true,
                route: "/",
              },
              {
                image: animation3,
                title: "Library",
                upcoming: true,
                route: "/",
              },
            ].map((e) => {
              return <Block key={e?.title} data={e} />;
            })}
          </div>
          <div className="flex flex-col items-center justify-evenly">
            {[
              {
                image: animation1,
                title: "Social Support",
                upcoming: false,
                route: "/group-chats",
              },
              {
                image: animation2,
                title: "Routine Improvement",
                upcoming: true,
                route: "/",
              },
            ].map((e) => {
              return <Block key={e?.title} data={e} />;
            })}
          </div>
        </div>
        <div
          id="circle"
          className="w-[45vw] md:flex hidden h-[40vw] rounded-full relative items-center justify-center right-[-44%]"
        >
          <Image
            src={animation2}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
              setShowComingSoon(true);
            }}
            className={`w-[8vw] h-[8vw] bg-white object-scale-down object-center border-2 border-newBlue p-3 rounded-full cursor-pointer absolute top-0 left-[50%] -translate-x-[50%] rotate-[90deg]`}
          />
          <Image
            src={animation4}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
              if (getCookie("token")) {
                history.push("/chats");
              } else {
                setIsOpen(!modalIsOpen);
              }
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute bottom-0 left-[50%] -translate-x-[50%] rotate-[270deg]"
          />
          <Image
            src={meditation}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
              setShowComingSoon(true);
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute top-[50%] left-0 -translate-y-[50%]"
          />
          <Image
            src={animation3}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
              setShowComingSoon(true);
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute top-[50%] right-0 -translate-y-[50%] rotate-[180deg]"
          />
          <Image
            src={animation1}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
              if (getCookie("token")) {
                history.push("/group-chats");
              } else {
                setIsOpen(!modalIsOpen);
              }
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute top-[10%] left-[10%] rotate-[45deg]"
          />
          <Image
            src={animation4}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
              if (getCookie("token")) {
                history.push("/chats");
              } else {
                setIsOpen(!modalIsOpen);
              }
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute top-[10%] right-[10%] rotate-[135deg]"
          />
          <Image
            src={animation3}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
              setShowComingSoon(true);
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute bottom-[10%] left-[10%] rotate-[315deg]"
          />
          <Image
            src={meditation}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
              setShowComingSoon(true);
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute bottom-[10%] right-[10%] rotate-[-135deg]"
          />
        </div>
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  const { modalIsOpen, setIsOpen } = useContext(Context);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const history = useRouter();

  return (
    <div className="relative">
      <ComingSoon
        showComingSoon={showComingSoon}
        setShowComingSoon={setShowComingSoon}
      />
      <div
        className={`flex flex-col items-center`}
        onClick={(e) => {
          if (data?.upcoming) {
            setShowComingSoon(true);
          } else {
            if (getCookie("token")) {
              history.push(data?.route);
            } else {
              setIsOpen(!modalIsOpen);
            }
          }
        }}
      >
        {" "}
        <div className="bg-gradient-to-br from-newBlue via-newOceanGreen to-newOrange rounded-full p-1">
          <div className="bg-white rounded-full">
            <Image
              src={data?.image}
              alt="Meditation"
              className={`w-[30vw] h-[30vw] object-contain md:p-0 p-5`}
            />
          </div>
        </div>
        <p className="text-lg text-center font-semibold">{data?.title}</p>
      </div>
    </div>
  );
};

export default OurServices;
