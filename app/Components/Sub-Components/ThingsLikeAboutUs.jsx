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
    <div className="py-[14vw] md:py-[4vw] px-[3vw] relative overflow-hidden">
      <h1
        className={`text-newTomato ${noto_sans.className} w-fit mx-auto text-xl md:text-2xl text-center font-extrabold relative`}
      >
        THINGS YOU LIKE ABOUT US
        <HeadingCurvedLine />
        <Flower1 />
        <Flower2 />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-[5vw] md:px-0 px-[10vw]">
        {[
          { image: img4, text: "starts at $99 only" },
          { image: img1, text: "instant availability" },
          { image: img2, text: "verified buddies" },
          { image: img3, text: "24/7 active" },
        ].map((e, i) => {
          return <Block item={e} key={i} index={i} />;
        })}
      </div>
    </div>
  );
};

const Block = ({ item, index }) => {
  return (
    <div
      className={`flex ${
        index % 2 == 0
          ? "md:flex-col mobile:flex-row"
          : "md:flex-col mobile:flex-row-reverse"
      } md:w-fit w-full md:my-0 my-2 md:flex-col justify-between md:justify-center items-center`}
    >
      <div className="rounded-3xl md:rounded-lg w-[35vw] h-[35vw] md:w-[16vw] md:h-[14vw] bg-gradient-to-r from-newBlue to-newOrange p-[2px]">
        <div className="flex md:p-1 h-full w-full rounded-3xl md:rounded-lg items-center justify-center bg-white">
          <Image
            src={item.image}
            alt="Photo of girl"
            className={`${
              !item?.image?.src.includes("Gold")
                ? "w-full md:w-[12vw]"
                : "w-[22vw] md:w-[9vw]"
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
