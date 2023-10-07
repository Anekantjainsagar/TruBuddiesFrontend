import { noto_sans } from "@/app/Components/Utils/font";
import React from "react";
import HeadingCurvedLine from "../Elements/HeadingCurvedLine";
import Flower1 from "../Elements/Flower1";
import Flower2 from "../Elements/Flower2";

import img1 from "@/app/Assets/Home/Images/Clock.png";
import img2 from "@/app/Assets/Home/Images/Friends.png";
import img3 from "@/app/Assets/Home/Images/Red Gold.png";
import img4 from "@/app/Assets/Home/Images/Yellow Gold.png";
import Image from "next/image";

const ThingsLikeAboutUs = () => {
  return (
    <div className="py-[4vw] px-[3vw]">
      <h1
        className={`text-newTomato ${noto_sans.className} w-fit mx-auto text-2xl text-center font-extrabold relative`}
      >
        THINGS YOU LIKE ABOUT US
        <HeadingCurvedLine />
        <Flower1 />
        <Flower2 />
      </h1>
      <div className="grid grid-cols-4 mt-[5vw]">
        {[
          { image: img4, text: "starts at $99 only" },
          { image: img1, text: "instant availability" },
          { image: img2, text: "verified buddies" },
          { image: img3, text: "24/7 active" },
        ].map((e, i) => {
          return <Block item={e} key={i} />;
        })}
      </div>
    </div>
  );
};

const Block = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded-lg w-[16vw] h-[14vw] bg-gradient-to-r from-newBlue to-newOrange p-[2px]">
        <div className="flex md:p-1 h-full w-full rounded-lg items-center justify-center bg-white">
          <Image
            src={item.image}
            alt="Photo of girl"
            className={`${
              !item?.image?.src.includes("Gold") ? "w-[12vw]" : "w-[9vw]"
            }`}
          />
        </div>
      </div>
      <p className="text-center mt-2 text-lg capitalize font-semibold">
        {item.text}
      </p>
    </div>
  );
};

export default ThingsLikeAboutUs;
