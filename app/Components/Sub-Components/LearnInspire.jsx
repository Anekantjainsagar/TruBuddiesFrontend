import Image from "next/image";
import React from "react";
import { noto_sans } from "../Utils/font";
import Bulb from "../Elements/Bulb";
import chatBox from "@/app/Assets/Home/image 7.png";
import text from "@/app/Assets/Home/image 5.png";
import Network from "../Elements/Network";

import blog1 from "@/app/Assets/Home/Images/Rectangle 20.png";
import blog2 from "@/app/Assets/Home/Images/Rectangle 21.png";
import blog3 from "@/app/Assets/Home/Images/Rectangle 22.png";

const LearnInspire = () => {
  return (
    <div
      className={`h-[80vh] bg-gradient-to-tr from-newLightBlue to-newDarkBlue py-[4vw] ${noto_sans.className}`}
    >
      <h1
        className={`uppercase text-center w-fit mx-auto text-3xl mt-2 text-white font-extrabold relative`}
      >
        Learn & Inspire
        <Bulb />
        <Image
          src={chatBox}
          alt="Chat box"
          className="w-[4vw] absolute -top-3 -right-20"
        />
      </h1>
      <div className="relative h-[65vh] grid grid-cols-3 gap-x-6 px-[10vw] py-[3vw]">
        <Network />
        <Image
          src={text}
          alt="Text"
          className="w-[10vw] absolute right-8 bottom-3 -z-0"
        />
        {/* Blocks */}
        {[
          {
            image: blog1,
            title: "Heading",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt eligendi impedit nemo sequi! Rem nam nihil incidunt praesentium iure.",
          },
          {
            image: blog2,
            title: "Heading",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt eligendi impedit nemo sequi! Rem nam nihil incidunt praesentium iure.",
          },
          {
            image: blog3,
            title: "Heading",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nesciunt eligendi impedit nemo sequi! Rem nam nihil incidunt praesentium iure.",
          },
        ].map((e, i) => {
          return <Block data={e} key={i} />;
        })}
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  return (
    <div className="bg-white flex flex-col p-4 rounded-2xl z-0 shadow-lg shadow-gray-400">
      <Image src={data?.image} alt="Image" />
      <h1 className="text-xl font-semibold pt-2 pl-2">{data?.title}</h1>
      <p className="px-2 text-sm font-light">{data?.text}</p>
    </div>
  );
};

export default LearnInspire;
