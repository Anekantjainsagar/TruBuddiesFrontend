"use client";
import React from "react";
import client from "@/app/Assets/Home/team/client  (1).png";
import Image from "next/image";
import { maliFont, noto_sans } from "@/app/Components/Utils/font";
import { AiFillClockCircle } from "react-icons/ai";

import male from "@/app/Assets/Home/icons/male.png";
import female from "@/app/Assets/Home/icons/female.png";

import backtick from "@/app/Assets/Home/backtick.png";

import { BiSolidUserVoice } from "react-icons/bi";

const SeprateTrubuddy = () => {
  return (
    <div
      className="mt-[4vw] py-[1vw] grid gap-x-10 mx-[3vw]"
      style={{ gridTemplateColumns: "25% 44.5% 25%" }}
    >
      <div className="bg-gradient-to-br from-newLightBlue from-70% to-[#1BF9EC] w-full rounded-3xl py-3 px-[2vw] flex flex-col items-center">
        <div className="rounded-full bg-gradient-to-t w-6/12 from-newLightBlue shadow-sm shadow-gray-200 to-newOceanGreen p-0.5 md:p-1">
          <Image src={client} alt={"client"} className="w-full" />
        </div>
        <h1 className={`text-2xl mt-2 font-semibold ${noto_sans.className}`}>
          Ayush Srivastava
        </h1>
        <p className="border-2 px-4 py-0.5 flex items-center rounded-lg text-sm bg-white border-newBlue w-fit mt-1">
          <Image src={male} alt="Male" className="mr-2 w-[1vw]" />
          Male
        </p>
        <div className="mt-2 flex items-center">
          <BiSolidUserVoice size={25} />
          {["Hindi", "English"].map((e) => {
            return (
              <p
                key={e}
                className="bg-white border-2 px-4 ml-1 rounded-lg border-newBlue"
              >
                {e}
              </p>
            );
          })}
        </div>
        <p className="text-center w-8/12 mx-auto pt-4 pb-1 text-xl relative">
          <Image alt="Backtick" src={backtick} className="absolute" />
          The Buddy You Need The Most.
        </p>
        <button
          className={`bg-newBlue text-white ${noto_sans.className} mt-4 px-5 text-lg py-1 rounded-full font-medium`}
        >
          Start Chat
        </button>
        <div>
          <h1 className="font-medium text-xl mb-1.5 mt-4 text-center">
            More Trubuddies
          </h1>
          <div
            onClick={(e) => {
              history.push(`/trubuddies/${"anekant"}`);
            }}
            className="bg-white cursor-pointer rounded-3xl shadow-md shadow-gray-500 border mx-auto w-[94%] py-[1vw] md:py-2 mb-1 px-[3.5vw] md:px-[1.5vw] flex flex-col items-center"
          >
            <div className="w-full h-full">
              <div className="flex items-center w-full justify-start z-30">
                <Image
                  src={client}
                  alt="Image"
                  className="w-[32vw] md:w-[5vw] border-4 border-newLightBlue rounded-full"
                />
                <div className="ml-3">
                  <h1 className="mb-0 text-lg font-semibold">
                    Ayush Srivastava
                  </h1>
                  <p className="border-2 px-2 flex items-center rounded-3xl text-sm border-newBlue w-fit mt-1">
                    <Image src={male} alt="Male" className="mr-1" />
                    Male
                  </p>
                </div>
              </div>
              <div className={`${noto_sans.className}`}>
                <h1 className="text-lg mt-2 md:mt-1.5 mb-0">Expertise</h1>
                <div className="grid grid-cols-2 gap-x-3">
                  {["Psycology", "Color Artist"].map((e) => {
                    return (
                      <div
                        className="px-3 text-sm rounded-full mt-1 text-center border-2 border-newBlue"
                        key={e}
                      >
                        {e}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <button className="bg-newBlue w-full z-40 cursor-pointer font-semibold text-white py-1 rounded-full mt-0 md:mt-5">
              Start Chat
            </button>
          </div>
        </div>
      </div>
      <div
        className={`bg-gradient-to-br from-newLightBlue to-newOceanGreen p-4 rounded-3xl w-full ${noto_sans.className}`}
      >
        <div className="bg-gradient-to-r w-full from-newLightBlue rounded-3xl shadow-md shadow-gray-400 to-newOceanGreen p-0.5">
          <div className="bg-white py-5 px-4 rounded-3xl">
            <h1 className="text-2xl font-semibold">Bio</h1>
            <p className="font-light mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate odio doloremque adipisci, dolores architecto qui dicta
              magni a similique consequuntur ad rem! Porro in, nulla eum ipsam
              ipsa molestias quidem amet nobis officiis voluptatum reprehenderit
              iure et asperiores eius excepturi ea quisquam quas autem eveniet
              consectetur ex cumque tenetur neque.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r w-full from-newLightBlue rounded-3xl mt-5 shadow-md shadow-gray-400 to-newOceanGreen p-0.5">
          <div className="bg-white py-5 px-4 rounded-3xl">
            <h1 className="text-2xl font-semibold">Personality</h1>
            <p className="font-light mt-1 h-[45vh]">
              Language (3-20 Max skills)
            </p>
          </div>
        </div>
      </div>
      <div
        className={`bg-gradient-to-br bg-opacity-10 from-newLightBlue rounded-3xl to-newOceanGreen w-full p-4 ${noto_sans.className}`}
      >
        <div className="bg-white py-3 px-3 mr-2 shadow-md shadow-gray-500 rounded-3xl mb-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Status</h1>
          <div className="border-2 border-green-700 w-fit flex px-2 items-center rounded-full justify-center">
            <div className="w-[10px] h-[10px] bg-green-700 rounded-full mr-1"></div>
            <p>online</p>
          </div>
        </div>
        <div className="bg-white py-3 px-3 mr-2 shadow-md shadow-gray-500 rounded-3xl mb-3">
          <h1 className="text-lg font-semibold">Expertise</h1>
          <div className="grid grid-cols-2 gap-x-4 mt-2">
            <p className="border-2 border-newBlue text-center rounded-xl">
              Psycology
            </p>
            <p className="border-2 border-newBlue text-center rounded-xl">
              Engineering
            </p>
          </div>
        </div>
        <div className="bg-white py-3 px-3 mr-2 shadow-md shadow-gray-500 rounded-3xl mb-3">
          <h1 className="text-lg font-semibold">Availability</h1>
          <p className="flex items-center justify-center mt-2 text-lg">
            <AiFillClockCircle size={25} className="mr-2" />6 : 00 PM To 8 : 00
            PM
          </p>
        </div>
        <div className={`${noto_sans.className}`}>
          <h1 className="text-[22px] font-medium mb-1.5">Reviews</h1>
          <div className="h-[45vh] overflow-y-scroll">
            {["A", "B", "C", "D"].map((e) => {
              return (
                <div
                  className="bg-white py-2 px-3 mr-2 shadow-md shadow-gray-500 rounded-3xl mb-3"
                  key={e}
                >
                  <h1 className="text-lg font-medium">Personality</h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat reprehenderit facere, porro{" "}
                  </p>
                  <p className="text-end text-gray-500 text-sm">1 day ago</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeprateTrubuddy;
