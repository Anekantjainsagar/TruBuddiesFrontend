"use client";
import React, { useState } from "react";
import image from "../../Assets/Home/Images/services.png";
import Image from "next/image";
import { noto_sans } from "../Utils/font";
import meditation from "../../Assets/Home/services/meditation.png";
import animation1 from "../../Assets/Home/services/animation1.png";
import animation2 from "../../Assets/Home/services/animation2.png";
import animation3 from "../../Assets/Home/services/animation3.png";
import animation4 from "../../Assets/Home/services/animation4.png";
import gsap from "gsap";

const OurServices = () => {
  const [rotation, setRotation] = useState(-45);

  return (
    <div className="h-[100vh] flex items-center relative overflow-hidden justify-center serviceBg">
      <div className="flex items-center">
        <div>
          <Image src={image} alt="Services" className="w-[25vw]" />
          <h1
            className={`uppercase text-center w-fit mx-auto text-3xl mt-2 text-newBlue font-bold ${noto_sans.className}`}
          >
            Our Services
          </h1>
        </div>
        <div
          id="circle"
          className="w-[45vw] h-[40vw] rounded-full relative flex items-center justify-center right-[-44%]"
        >
          <p
            className={`text-3xl font-semibold mr-[6vw] rotate-[${
              (rotation % 90) * -1 - 45
            }deg]`}
          >
            Yoga & Exercises
          </p>
          <Image
            src={animation2}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className={`w-[8vw] h-[8vw] bg-white object-scale-down object-center border-2 border-newBlue p-3 rounded-full cursor-pointer absolute top-0 left-[50%] -translate-x-[50%] rotate-[90deg]`}
          />
          <Image
            src={animation4}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute bottom-0 left-[50%] -translate-x-[50%] rotate-[270deg]"
          />
          <Image
            src={meditation}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute top-[50%] left-0 -translate-y-[50%]"
          />
          <Image
            src={animation3}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute top-[50%] right-0 -translate-y-[50%] rotate-[180deg]"
          />
          <Image
            src={animation1}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute top-[10%] left-[10%] rotate-[45deg]"
          />
          <Image
            src={animation4}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute top-[10%] right-[10%] rotate-[135deg]"
          />
          <Image
            src={animation3}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute bottom-[10%] left-[10%] rotate-[315deg]"
          />
          <Image
            src={meditation}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute bottom-[10%] right-[10%] rotate-[-135deg]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
