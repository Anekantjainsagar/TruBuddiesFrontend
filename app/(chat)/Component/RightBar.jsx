"use client";
import React, { useContext } from "react";
import Context from "../../Context/Context";
import { maliFont } from "../../(website)/Components/Utils/font";
import Image from "next/image";
import picture from "../../(website)/Assets/Chats/picture.png";

import male from "../../(website)/Assets/Home/icons/male white.png";
import female from "../../(website)/Assets/Home/icons/female.png";
import { useRouter } from "next/navigation";
import UpperTrubuddyBlock from "../../(website)/user/dashboard/UpperTrubuddyBlock";

const RightBar = () => {
  const history = useRouter();
  const { login } = useContext(Context);

  return (
    <div className="w-full md:px-0 px-5 md:mt-0 foolPatti mt-4 md:w-[23vw] h-[95vh] flex flex-col items-center justify-between overflow-hidden">
      <div className="flex md:hidden w-full mt-[9vw] mb-2">
        <p
          onClick={(e) => {
            history.push("/chats");
          }}
          className="border-2 rounded-full bg-white px-3 border-newBlue"
        >
          Chats
        </p>
        <p
          onClick={(e) => {
            history.push("/group-chats");
          }}
          className="border-2 rounded-full bg-white px-3 border-newBlue ml-3"
        >
          Community
        </p>
      </div>
      <div className="border w-full p-[2px] h-full md:h-[48%] bg-gradient-to-tr md:mt-0 from-newBlue to-newOcean shadow-md shadow-gray-600 rounded-3xl">
        <div className="w-full h-full rounded-3xl bg-white py-1 md:py-5">
          <h1
            className={`text-xl md:block hidden md:ext-2xl font-semibold text-center ${maliFont.className}`}
          >
            My TruBuddies
          </h1>
          <div className="md:grid grid-cols-3 px-2 md:px-5 py-2 md:py-5 gap-y-2.5 md:gap-y-5 md:h-[95%] h-full overflow-y-scroll gap-x-8">
            {login?.trubuddies?.map((e) => {
              return (
                <div key={e} className="h-fit md:mb-0 mb-2">
                  <UpperTrubuddyBlock id={e} />
                </div>
              );
            })}
            <div
              className="items-center md:flex hidden justify-center cursor-pointer h-[14vw] md:h-[5vw]"
              onClick={(e) => {
                history.push("/trubuddies");
              }}
            >
              <div className="w-full md:w-[5vw] text-black flex items-center justify-center pb-2 md:pb-3 h-full bg-gray-200 border-[3px] border-newBlue rounded-full text-5xl font-semibold">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:border w-full md:mt-0 mt-[1vw] p-[2px] h-fit md:h-[48%] md:bg-gradient-to-tr from-newBlue to-newOcean md:shadow-md md:shadow-gray-600 rounded-3xl">
        <div className="w-full h-full rounded-3xl bg-transparent md:bg-white relative py-0 md:py-5 md:communityBg">
          <h1
            className={`text-2xl z-50 md:pt-0 pt-1 font-semibold text-center ${maliFont.className}`}
          >
            Community
          </h1>
          <div className="z-50 py-3 md:py-5 px-6">
            <div
              onClick={(e) => {
                history.push("/group-chats");
              }}
              className="bg-gradient-to-br rounded-xl shadow-lg z-50 shadow-gray-400 cursor-pointer from-newBlue to-newOcean w-full px-4 py-3"
            >
              <div className="flex items-center">
                <Image
                  src={picture}
                  className="w-[12vw] md:w-[2.5vw]"
                  alt="Profile"
                />
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
            <div
              onClick={(e) => {
                history.push("/group-chats");
              }}
              className="bg-gradient-to-br mt-4 rounded-xl shadow-lg z-50 shadow-gray-400 cursor-pointer from-[#FFE27B] to-[#FD7DE1] w-full px-4 py-3"
            >
              <div className="flex items-center">
                <Image
                  src={picture}
                  className="w-[12vw] md:w-[2.5vw]"
                  alt="Profile"
                />
                <div className="ml-1">
                  <h1 className="text-black font-semibold text-[15px]">
                    Zuzutsu Kaisen
                  </h1>
                  <div className="flex items-center text-black text-xs">
                    <Image
                      src={female}
                      alt="Male"
                      className="text-black w-[10px]"
                    />
                    <p className="ml-1">Male</p>
                  </div>
                </div>
              </div>
              <p className="text-black text-lg mt-1 leading-[23px] font-semibold">
                “ Why mental health is Important?{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
