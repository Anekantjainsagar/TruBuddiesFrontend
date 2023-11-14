"use client";
import React, { useContext, useState, useEffect } from "react";
import client from "../../Assets/Home/team/client  (1).png";
import Image from "next/image";
import { noto_sans } from "../../Components/Utils/font";
import { AiOutlineEdit } from "react-icons/ai";

import EditProfile from "../EditProfile";

import male from "../../Assets/Home/icons/male.png";
import female from "../../Assets/Home/icons/female.png";

import backtick from "../../Assets/Home/backtick.png";

import { BiSolidUserVoice } from "react-icons/bi";
import { useRouter } from "next/navigation";

import Context from "../../../Context/Context";
import axios from "axios";
import { BASE_URL } from "../../Components/Utils/url";
import UpperTrubuddyBlock from "./UpperTrubuddyBlock";

const UserDashboard = () => {
  const history = useRouter();
  const { login, setShowEditProfile } = useContext(Context);

  return (
    <div className="border overflow-hidden">
      {" "}
      <EditProfile />
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
          <div className="rounded-full bg-gradient-to-t relative w-4/12 md:w-6/12 from-newLightBlue shadow-sm shadow-gray-200 to-newOceanGreen p-1">
            <Image
              src={login?.profile}
              width={100}
              height={100}
              alt={"client"}
              className="w-[10vw] object-cover object-center h-[9vw] rounded-full"
            />
            <AiOutlineEdit
              size={25}
              onClick={(e) => {
                setShowEditProfile(true);
              }}
              className="absolute -right-2 md:-right-1 -bottom-2.5 md:-bottom-1 cursor-pointer border rounded-full border-black p-1"
            />
          </div>
          <h1
            className={`text-xl md:text-2xl mt-1.5 md:mt-2 font-semibold ${noto_sans.className}`}
          >
            {login?.name}
          </h1>
          <div className="border-2 px-2 md:px-4 py-0.5 flex items-center rounded-lg text-sm bg-white border-newBlue w-fit mt-1">
            {login?.gender?.toLowerCase() == "male" ? (
              <Image
                src={male}
                alt="Male"
                className="mr-1.5 md:mr-2 md:w-[1vw]"
              />
            ) : (
              <Image
                src={female}
                alt="Male"
                className="mr-1.5 md:mr-2 md:w-[1vw]"
              />
            )}
            {login?.gender}
          </div>
          <div className="mt-2 flex items-center">
            <BiSolidUserVoice size={25} />
            {login?.languages.map((e) => {
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
          className={`bg-gradient-to-br from-[#38B6FF] via-white to-[#38B6FF] md:mb-0 mb-5 p-2 md:p-5 shadow-lg shadow-gray-300 rounded-3xl w-full ${noto_sans.className}`}
        >
          <h1 className="text-xl pl-2">What I need to Discuss?</h1>
          <div className="flex items-center flex-wrap mt-3 px-2">
            {login?.discussions.map((e) => {
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
              <div className="text-lg mt-4 break-words md:pr-0 pr-3 md:mt-7">
                <h1 className="font-bold">Name :</h1>
                <p>{login?.name}</p>
              </div>
              <div className="text-lg mt-4 break-words md:pr-0 pr-3 md:mt-7">
                <h1 className="font-bold">Email :</h1>
                <p>{login?.email}</p>
              </div>
              <div className="text-lg mt-4 break-words md:pr-0 pr-3 md:mt-7">
                <h1 className="font-bold">Profession :</h1>
                <p>{login?.profession}</p>
              </div>
              <div className="text-lg mt-4 break-words md:pr-0 pr-3 md:mt-7">
                <h1 className="font-bold">City:</h1>
                <p>{login?.city}</p>
              </div>
              <div className="text-lg mt-4 break-words md:pr-0 pr-3 md:mt-7">
                <h1 className="font-bold">State:</h1>
                <p>{login?.state}</p>
              </div>
              <div className="text-lg mt-4 break-words md:pr-0 pr-3 md:mt-7">
                <h1 className="font-bold">Nationality:</h1>
                <p>{login?.nationality}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-between w-full md:mb-0 mb-4 ${noto_sans.className}`}
        >
          <div className="bg-gradient-to-tl from-[#38B6FF] to-white rounded-3xl shadow-lg shadow-gray-400 w-full">
            <div className="grid grid-cols-4 py-5 gap-y-5 gap-x-5 px-4 md:px-[2vw]">
              {login?.trubuddies?.map((e) => {
                return <UpperTrubuddyBlock id={e} key={e} />;
              })}
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
          <div className="bg-gradient-to-tl md:mt-0 mt-5 p-4 flex flex-col items-center from-[#38B6FF] to-white rounded-3xl shadow-lg shadow-gray-400 h-fit w-full">
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
                    <div className="border-2 px-2 flex items-center rounded-3xl text-sm border-newBlue w-fit mt-1">
                      <Image src={male} alt="Male" className="mr-1" />
                      Male
                    </div>
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
    </div>
  );
};

export default UserDashboard;
