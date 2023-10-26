"use client";
import Image from "next/image";
import React from "react";
import profile from "../../(website)/Assets/Chats/profile.png";
import { AiFillMessage, AiOutlinePlus } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BiExit } from "react-icons/bi";
import { maliFont, noto_sans } from "../../(website)/Components/Utils/font";

import picture from "../../(website)/Assets/Chats/picture.png";
import { useRouter } from "next/navigation";

import communityBg from "../../(website)/Assets/Chats/community bg.png";

const page = () => {
  const history = useRouter();

  return (
    <div
      className={`w-full h-[100vh] bg-[#eff3ff] px-5 py-[1vw] flex items-center ${maliFont.className}`}
    >
      <div className="bg-newBlue h-full py-3 px-2 rounded-3xl flex flex-col items-center justify-between">
        <div>
          <Image src={profile} alt="Profile" />
          <AiFillMessage
            className="w-full my-5 cursor-pointer text-[#a4c0ff]"
            size={35}
          />
          <IoIosPeople
            className="w-full my-4 text-[#a4c0ff] cursor-pointer"
            size={38}
          />
        </div>
        <BiExit className="w-full text-[#a4c0ff] cursor-pointer" size={35} />
      </div>
      <div className="border w-[73vw] p-[2px] h-full bg-gradient-to-tr from-newBlue to-newOcean shadow-md shadow-gray-600 mx-7 rounded-3xl">
        <div className="w-full h-full rounded-3xl bg-white">
          <div className="mx-6">
            <div className="py-2 flex items-center">
              <Image src={picture} alt="Profile image" className="w-[3.5vw]" />
              <div className="ml-3">
                <h1 className="font-bold">TruBuddy 01</h1>
                <p className="text-sm">Hey!! What Are You Up To.</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-newBlue via-newOcean to-newBlue h-[2px]"></div>
          </div>
        </div>
      </div>
      <div className="w-[20vw] h-full flex flex-col items-center justify-between">
        <div className="border w-full p-[2px] h-[48%] bg-gradient-to-tr from-newBlue to-newOcean shadow-md shadow-gray-600 rounded-3xl">
          <div className="w-full h-full rounded-3xl bg-white py-5">
            <h1
              className={`text-2xl font-semibold text-center ${maliFont.className}`}
            >
              My TruBuddies
            </h1>
            <div className="grid grid-cols-3 px-5 py-5 gap-y-5 gap-x-8">
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
              />
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={(e) => {
                  history.push("/trubuddies");
                }}
              >
                <div className="w-[4vw] text-black flex items-center justify-center pb-3 bg-gray-200 h-[4vw] border-[3px] border-newBlue rounded-full text-4xl font-bold">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border w-full p-[2px] h-[48%] bg-gradient-to-tr from-newBlue to-newOcean shadow-md shadow-gray-600 rounded-3xl">
          <div className="w-full h-full rounded-3xl bg-white relative py-5">
            <h1
              className={`text-2xl z-50 font-semibold text-center ${maliFont.className}`}
            >
              Community
            </h1>
            <div className="z-50 py-5 px-8">
              <div className="bg-gradient-to-br rounded-xl shadow-md z-50 shadow-gray-500 cursor-pointer from-newBlue to-newOcean w-full h-[10vh]"></div>
            </div>
            <Image
              src={communityBg}
              alt="Community bg"
              className="z-0 absolute top-0 left-0 opacity-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
