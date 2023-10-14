"use client";
import React, { useState } from "react";
import { noto_sans } from "../Utils/font";
import logo from "@/app/Assets/Home/Logo Image.png";
import Image from "next/image";
import LeftDots from "../Elements/LeftDots";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import client1 from "@/app/Assets/Home/Images/Client 1.png";
import client2 from "@/app/Assets/Home/Images/Client 2.png";
import client3 from "@/app/Assets/Home/Images/Client 3.png";
import RightDots from "../Elements/RightDots";

const OurTrubuddies = () => {
  let data = [{ image: client1 }, { image: client2 }, { image: client3 }];
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="pt-[3vw]">
      <h1
        className={`uppercase text-center w-fit mx-auto text-2xl text-newTomato font-extrabold ${noto_sans.className} flex items-center`}
      >
        Our{" "}
        <Image
          src={logo}
          alt="Logo image"
          className="w-[9vw] md:w-[2.5vw] mx-2"
        />{" "}
        Trubuddies
      </h1>
      <div className="w-full flex justify-between items-center relative bg-gradient-radial from-newLightBlue to-newDarkBlue md:px-[12vw] md:py-[3vw] py-[10vw] mt-[3vw] md:mt-[2vw]">
        <LeftDots />
        <div className="md:flex hidden justify-between items-center w-full">
          {data.map((e, i) => {
            return <Block data={e} key={i} />;
          })}
        </div>
        <div className="block md:hidden">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {data?.map((item, i) => (
              <Carousel.Item key={i} interval={5000}>
                <Block data={item} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <RightDots />
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl mb-10 border md:mx-0 mx-auto w-[75%] md:w-[20vw] py-[3vw] md:py-[1.5vw] px-[4vw] md:px-[2vw] flex flex-col items-center">
      <Image src={data?.image} alt="Image" className="w-[32vw] md:w-[10vw]" />
      <h1 className="mt-1 md:mt-2 text-xl font-semibold">Ayush Srivastava</h1>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, illum?
      </p>
      <button className="bg-newTomato w-full text-white py-1 rounded-md mt-0 md:mt-5">
        Know More
      </button>
    </div>
  );
};

export default OurTrubuddies;
