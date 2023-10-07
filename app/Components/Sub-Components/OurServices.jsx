import React from "react";
import image from "@/app/Assets/Home/Images/services.png";
import Image from "next/image";
import { noto_sans } from "../Utils/font";

const OurServices = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div>
        <Image src={image} alt="Services" className="w-[20vw]" />
        <h1
          className={`uppercase text-center w-fit mx-auto text-3xl mt-2 text-newBlue font-extrabold ${noto_sans.className}`}
        >
          Our Services
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default OurServices;
