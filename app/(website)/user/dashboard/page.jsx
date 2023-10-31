"use client";
import React from "react";
import client from "../../Assets/Home/team/client  (1).png";
import Image from "next/image";
import { maliFont, noto_sans } from "../../Components/Utils/font";
import { AiFillClockCircle } from "react-icons/ai";

import male from "../../Assets/Home/icons/male.png";
import female from "../../Assets/Home/icons/female.png";

import backtick from "../../Assets/Home/backtick.png";

import { BiSolidUserVoice } from "react-icons/bi";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const history = useRouter();

  return (
    <div
      className="mt-[15vw] md:mt-[4vw] py-[1vw] grid gap-x-5 mx-[3vw]"
      style={
        typeof window != "undefined"
          ? window.innerWidth < 500
            ? { gridTemplateColumns: "100%" }
            : { gridTemplateColumns: "25% 40% 31%" }
          : {}
      }
    >
      <div className="bg-gradient-to-br from-[#38B6FF] shadow-lg to-50% to-white w-full rounded-3xl md:mb-0 mb-5 py-3 px-[2vw] flex flex-col items-center">
        <div className="rounded-full bg-gradient-to-t w-4/12 md:w-6/12 from-newLightBlue shadow-sm shadow-gray-200 to-newOceanGreen p-1">
          <Image src={client} alt={"client"} className="w-full" />
        </div>
        <h1
          className={`text-xl md:text-2xl mt-1 md:mt-2 font-semibold ${noto_sans.className}`}
        >
          Ayush Srivastava
        </h1>
        <p className="border-2 px-2 md:px-4 py-0.5 flex items-center rounded-lg text-sm bg-white border-newBlue w-fit mt-1">
          <Image src={male} alt="Male" className="mr-1.5 md:mr-2 md:w-[1vw]" />
          Male
        </p>
        <div className="mt-2 flex items-center">
          <BiSolidUserVoice size={25} />
          {["Hindi", "English"].map((e) => {
            return (
              <p
                key={e}
                className="bg-white md:text-base text-sm border-2 px-4 ml-1.5 rounded-lg border-newBlue"
              >
                {e}
              </p>
            );
          })}
        </div>
        <div className="text-center w-10/12 md:w-8/12 mx-auto pt-4 pb-1 md:text-xl relative">
          <Image
            alt="Backtick"
            src={backtick}
            className="absolute left-[-2vw]"
          />
          The Buddy You Need The Most.
        </div>
        <div className="md:block hidden">
          <h1 className="font-medium text-xl mb-1.5 mt-6 text-center">
            Updates
          </h1>
          <div className="z-50 py-2 px-6">
            <div className="bg-gradient-to-br rounded-xl shadow-lg z-50 shadow-gray-400 cursor-pointer from-newBlue to-newOcean w-full px-4 py-3">
              <div className="flex items-center">
                <Image src={client} className="w-[2.5vw]" alt="Profile" />
                <div className="ml-1">
                  <h1 className="text-white font-semibold text-[15px]">
                    Zuzutsu Kaisen
                  </h1>
                  <div className="flex items-center text-white text-xs">
                    <Image
                      src={male}
                      alt="Male"
                      className="text-white w-[10px]"
                    />
                    <p className="ml-1">Male</p>
                  </div>
                </div>
              </div>
              <p className="text-white text-lg mt-1 leading-[23px] font-semibold">
                “ Why mental health is Important?{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-gradient-to-br from-[#38B6FF] via-white to-[#38B6FF] md:mb-0 mb-5 p-4 rounded-3xl w-full ${noto_sans.className}`}
      >
        <h1 className="text-xl pl-2">What I need to Discuss?</h1>
        <div className="flex items-center flex-wrap mt-3 px-2">
          {[
            "Anxiety",
            "Relationship issues",
            "Parental Trauma",
            "Study Pressure",
          ].map((e) => {
            return (
              <p
                key={e}
                className="text-lg bg-white px-8 py-0.5 rounded-full mr-4 mb-2 shadow-md shadow-gray-500"
              >
                {e}
              </p>
            );
          })}
        </div>
        <div className="w-1/2 bg-black h-[1px] mx-auto my-4 shadow-2xl"></div>
        <div>
          <h1 className="text-xl pl-2">Personal Info</h1>
          <div className="grid grid-cols-2 px-3">
            <div className="text-lg mt-4">
              <h1 className="font-bold">Name :</h1>
              <p>Ayush Srivastava</p>
            </div>
            <div className="text-lg mt-4">
              <h1 className="font-bold">Email :</h1>
              <p>ayush2002@gmail.com</p>
            </div>
            <div className="text-lg mt-4">
              <h1 className="font-bold">Profession :</h1>
              <p>Designer</p>
            </div>
            <div className="text-lg mt-4">
              <h1 className="font-bold">Name:</h1>
              <p>Ayush Srivastava</p>
            </div>
            <div className="text-lg mt-4">
              <h1 className="font-bold">Name:</h1>
              <p>Ayush Srivastava</p>
            </div>
            <div className="text-lg mt-4">
              <h1 className="font-bold">Name:</h1>
              <p>Ayush Srivastava</p>
            </div>
            <div className="text-lg mt-4">
              <h1 className="font-bold">Name:</h1>
              <p>Ayush Srivastava</p>
            </div>
            <div className="text-lg mt-4">
              <h1 className="font-bold">Name:</h1>
              <p>Ayush Srivastava</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col items-center justify-between w-full md:mb-0 mb-4 ${noto_sans.className}`}
      >
        <div className="bg-gradient-to-tl from-[#38B6FF] to-white rounded-3xl shadow-lg shadow-gray-400 w-full">
          <div className="grid grid-cols-4 py-5 gap-y-5 gap-x-5 px-[2vw]">
            <Image src={client} alt="Logo image" className="cursor-pointer" />
            <Image src={client} alt="Logo image" className="cursor-pointer" />
            <Image src={client} alt="Logo image" className="cursor-pointer" />
            <Image src={client} alt="Logo image" className="cursor-pointer" />
            <Image src={client} alt="Logo image" className="cursor-pointer" />
            <Image src={client} alt="Logo image" className="cursor-pointer" />
            <Image src={client} alt="Logo image" className="cursor-pointer" />
            <div
              className="flex items-center justify-center w-[100%] h-full cursor-pointer"
              onClick={(e) => {
                history.push("/trubuddies");
              }}
            >
              <div className="text-black flex items-center justify-center bg-gray-200 h-full w-full border-[3px] border-newBlue rounded-full text-5xl font-bold">
                +
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tl p-4 flex flex-col items-center from-[#38B6FF] to-white rounded-3xl shadow-lg shadow-gray-400 h-fit w-full">
          <h1 className="text-2xl drop-shadow-2xl text-center">
            More Trubuddies
          </h1>
          <div
            onClick={(e) => {
              history.push(`/trubuddies/${"anekant"}`);
            }}
            className={`bg-white cursor-pointer rounded-3xl mt-[1vw] border md:mx-0 mx-auto w-[80%] md:w-[21vw] py-[3vw] md:py-[1vw] px-[4vw] md:px-[1.5vw] flex flex-col items-center`}
          >
            <div className="w-full h-full">
              <div className="flex items-center w-full justify-start">
                <Image
                  src={client}
                  alt="Image"
                  className="w-[32vw] md:w-[5vw] border-4 border-newLightBlue rounded-full"
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
                <h1 className="text-lg mt-2 md:mt-1 mb-0">Expertise</h1>
                <div className="grid grid-cols-2 gap-x-3">
                  {["Psycology", "Color Artist"].map((e) => {
                    return (
                      <div
                        className="rounded-full mt-2 text-center border-2 border-newBlue"
                        key={e}
                      >
                        {e}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <button className="bg-newBlue w-full cursor-pointer text-white py-1 rounded-full mt-0 md:mt-4">
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
