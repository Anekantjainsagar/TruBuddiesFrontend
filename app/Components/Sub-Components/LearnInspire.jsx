"use client";
import Image from "next/image";
import React, { useState } from "react";
import { noto_sans } from "../Utils/font";
import Bulb from "../Elements/Bulb";
import chatBox from "@/app/Assets/Home/image 7.png";
import text from "@/app/Assets/Home/image 5.png";
import Network from "../Elements/Network";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import blog1 from "@/app/Assets/Home/Images/Rectangle 20.png";
import blog2 from "@/app/Assets/Home/Images/Rectangle 21.png";
import blog3 from "@/app/Assets/Home/Images/Rectangle 22.png";

const LearnInspire = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  let data = [
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
  ];

  return (
    <div
      className={`h-[80vh] bg-gradient-to-tr from-newLightBlue to-newDarkBlue py-[4vw] ${noto_sans.className}`}
    >
      <h1
        className={`uppercase text-center w-fit mx-auto text-2xl md:text-3xl mt-2 text-white font-extrabold relative`}
      >
        Learn & Inspire
        <Bulb />
        <Image
          src={chatBox}
          alt="Chat box"
          className="w-[9vw] md:w-[4vw] absolute -top-1 md:-top-3 -right-12 md:-right-20"
        />
      </h1>
      <div className="relative h-fit md:h-[65vh] md:mt-0 mt-[6vw] px-0 md:px-[10vw] py-[3vw]">
        <Network />
        <Image
          src={text}
          alt="Text"
          className="w-[10vw] absolute right-8 bottom-3 -z-0"
        />
        {/* Blocks */}
        <div className="md:grid hidden grid-cols-3 gap-x-6 px-[10vw]">
          {data?.map((e, i) => {
            return <Block data={e} key={i} />;
          })}
        </div>
        <div className="block md:hidden mt-5">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {data?.map((item, i) => (
              <Carousel.Item key={i} interval={5000}>
                <Block data={item} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  return (
    <div className="bg-white flex flex-col mb-10 md:mx-0 mx-[12vw] md:p-4 p-3 rounded-2xl z-0 shadow-lg shadow-gray-400">
      <Image src={data?.image} alt="Image" />
      <h1 className="text-xl font-semibold pt-2 pl-2">{data?.title}</h1>
      <p className="px-2 mb-0 text-sm font-light">{data?.text}</p>
    </div>
  );
};

export default LearnInspire;
