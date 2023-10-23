"use client";
import React, { useState } from "react";
import { maliFont, noto_sans } from "../Utils/font";
import logo from "@/app/Assets/Home/Logo Image.png";
import Image from "next/image";
import LeftDots from "../Elements/LeftDots";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import client1 from "@/app/Assets/Home/Images/Client 1.png";
import client2 from "@/app/Assets/Home/Images/Client 2.png";
import client3 from "@/app/Assets/Home/Images/Client 3.png";
import RightDots from "../Elements/RightDots";

import bg from "@/app/Assets/Home/trubuddies bg.png";

import male from "@/app/Assets/Home/icons/male.png";
import female from "@/app/Assets/Home/icons/female.png";

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
      <div className="w-full flex justify-between items-center relative bg-gradient-to-r from-newBlue to-newOcean md:px-[12vw] md:py-[3vw] py-[10vw] mt-[3vw] md:mt-[2vw]">
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

export const Block = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl mb-10 border md:mx-0 mx-auto w-[80%] md:w-[22vw] py-[3vw] md:py-[1vw] px-[4vw] md:px-[1.5vw] flex flex-col items-center relative">
      <Image src={bg} alt="Background" className="absolute top-0 left-0 z-10" />
      <div className="w-full h-full">
        <div className="flex items-center w-full justify-start z-30">
          <Image
            src={data?.image}
            alt="Image"
            className="w-[32vw] md:w-[6.5vw] border-4 border-newLightBlue rounded-full"
          />
          <div className="ml-3">
            <h1 className="mt-1 md:mt-2 mb-0 text-xl font-semibold">
              Ayush Srivastava
            </h1>
            <p className="border-2 px-2 flex items-center rounded-3xl text-sm border-newBlue w-fit mt-1">
              <Image src={male} alt="Male" className="mr-1" />
              Male
            </p>
          </div>
        </div>
        <div className={`${noto_sans.className}`}>
          <h1 className="text-xl mt-2 md:mt-3 mb-0">Expertise</h1>
          <div className="grid grid-cols-2 gap-x-3">
            {["Psycology", "Color Artist"].map((e) => {
              return (
                <div
                  className="px-3 py-0.5 rounded-full mt-2 text-center border-2 border-newBlue"
                  key={e}
                >
                  {e}
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${noto_sans.className} px-1`}>
          <h1 className="text-xl mt-2 md:mt-3 mb-0">About</h1>
          <p className="text-gray-400 text-[16px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            volup
          </p>
        </div>
      </div>
      <button className="bg-newBlue w-full z-40 cursor-pointer text-white py-1 rounded-full mt-0 md:mt-5">
        Start Chat
      </button>
    </div>
  );
};

export default OurTrubuddies;
