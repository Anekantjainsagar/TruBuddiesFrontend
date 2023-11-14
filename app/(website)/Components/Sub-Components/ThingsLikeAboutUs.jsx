"use client";
import { noto_sans } from "../Utils/font";
import React from "react";
import Tilt from 'react-parallax-tilt'
import HeadingCurvedLine from "../Elements/HeadingCurvedLine";
import Flower1 from "../Elements/Flower1";
import Flower2 from "../Elements/Flower2";

import img1 from "../../Assets/Home/Images/pana.png";
import img2 from "../../Assets/Home/Images/bro.png";
import img3 from "../../Assets/Home/Images/amico.png";
import img4 from "../../Assets/Home/Images/rafiki.png";
import Image from "next/image";

const ThingsLikeAboutUs = () => {
  return (
    <div className="py-[14vw] md:py-[4vw] px-[3vw] relative overflow-hidden">
      <h1
        className={`text-newDarkGreen ${noto_sans.className} w-fit mx-auto text-xl md:text-2xl text-center font-bold relative`}
      >
        THINGS YOU LIKE ABOUT US
        <HeadingCurvedLine />
        <Flower1 />
        <Flower2 />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-[5vw] md:px-0 px-[10vw]">
        {[
          { image: img3, text: "Anonymouse Conversation" },
          { image: img1, text: "24/7 Instant Availability" },
          { image: img2, text: "Verified Buddies" },
          { image: img4, text: "Safe and Secure" },
        ].map((e, i) => {
          return <Block item={e} key={i} index={i} />;
        })}
      </div>
    </div>
  );
};

const Block = ({ item, index }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="z-10">
      <div
        className={`flex ${
          index % 2 == 0
            ? "md:flex-col mobile:flex-row"
            : "md:flex-col mobile:flex-row-reverse"
        } md:w-fit w-full md:my-0 my-3 md:flex-col justify-between cursor-pointer md:justify-center items-center mx-auto z-10`}
        onMouseEnter={(e) => {
          setHover(true);
        }}
        onMouseLeave={(e) => {
          setHover(false);
        }}
      >
        <div
          className={`rounded-3xl w-[55vw] h-[35vw] md:w-[16vw] md:h-[14vw] ${
            hover ? "border-4 border-white" : ""
          } bg-gradient-to-br from-newBlue via-newOceanGreen to-newOrange p-[3px]`}
        >
          <div
            className={`flex md:p-1 h-full w-full rounded-3xl items-center justify-center ${
              hover ? "" : "bg-white"
            }`}
          >
            <Image
              src={item.image}
              alt="Photo of girl"
              className="w-[30vw] h-[30vw] md:h-fit p-2 md:w-[12vw]"
            />
          </div>
        </div>
        <p className="text-center mt-2 text-lg capitalize font-semibold">
          {item.text}
        </p>
      </div>
    </Tilt>
  );
};

export default ThingsLikeAboutUs;
