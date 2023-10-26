"use client";
import React, { useState } from "react";
import image from "../../Assets/Home/Images/services.png";
import Image from "next/image";
import { noto_sans } from "../Utils/font";

import bg from "../../Assets/Home/Services bg.png";

import meditation from "../../Assets/Home/services/meditation.png";
import animation1 from "../../Assets/Home/services/animation1.png";
import animation2 from "../../Assets/Home/services/animation2.png";
import animation3 from "../../Assets/Home/services/animation3.png";
import animation4 from "../../Assets/Home/services/animation4.png";

import gsap from "gsap";
import { useEffect } from "react";

const OurServices = () => {
  const [rotation, setRotation] = useState(-45);

  // useEffect(() => {
  //   setInterval(() => {
  //     setRotation(rotation - 45);
  //     gsap.to("#circle", { rotate: rotation });
  //   }, 5000);
  // });

  return (
    <div className="h-[100vh] flex items-center relative overflow-hidden justify-center serviceBg">
      <div className="flex items-center">
        <div>
          <Image src={image} alt="Services" className="w-[35vw]" />
          <h1
            className={`uppercase text-center w-fit mx-auto text-3xl mt-2 text-newBlue font-bold ${noto_sans.className}`}
          >
            Our Services
          </h1>
        </div>
        {/* <div
          id="circle"
          className="w-[40vw] h-[40vw] rounded-full relative right-[-0]"
        >
          <Image
            src={animation2}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className={`w-[8vw] h-[8vw] bg-newBlue object-scale-down object-center border-2 border-newBlue p-3 rounded-full cursor-pointer absolute top-0 left-[50%] -translate-x-[50%] rotate-[${rotation}deg]`}
          />
          <Image
            src={animation2}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute bottom-0 left-[50%] -translate-x-[50%]"
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
            src={meditation}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute top-[50%] right-0 -translate-y-[50%]"
          />
          <Image
            src={animation1}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute top-[10%] left-[10%]"
          />
          <Image
            src={animation4}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute top-[10%] right-[10%]"
          />
          <Image
            src={animation3}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute bottom-[10%] left-[10%]"
          />
          <Image
            src={animation3}
            alt="Meditation"
            onClick={(e) => {
              setRotation(rotation - 45);
              gsap.to("#circle", { rotate: rotation });
            }}
            className="w-[8vw] h-[8vw] object-scale-down object-center border-2 border-newBlue bg-white p-3 rounded-full cursor-pointer absolute bottom-[10%] right-[10%]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default OurServices;
