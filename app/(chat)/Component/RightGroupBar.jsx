"use client";
import React, { useContext, useState } from "react";
import Context from "../../Context/Context";
import { maliFont, noto_sans } from "../../(website)/Components/Utils/font";
import Image from "next/image";
import picture from "../../(website)/Assets/Chats/picture.png";

import male from "../../(website)/Assets/Home/icons/male white.png";
import female from "../../(website)/Assets/Home/icons/female.png";
import { useRouter } from "next/navigation";
import { IoIosFemale, IoIosMale } from "react-icons/io";
import { CgCommunity } from "react-icons/cg";
import ComingSoon from "../../(website)/Components/Sub-Components/ComingSoon";

const RightGroupBar = () => {
  const history = useRouter();
  const { login, admin } = useContext(Context);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <div className="w-full md:flex hidden md:px-0 px-5 md:mt-0 foolPatti mt-4 md:w-[23vw] h-[95vh] flex-col items-center justify-between overflow-hidden">
        <ComingSoon
          showComingSoon={showComingSoon}
          setShowComingSoon={setShowComingSoon}
        />
        <div className="border w-full p-[2px] h-full md:h-[48%] bg-gradient-to-tr mt-[10vw] md:mt-0 from-newBlue to-newOcean shadow-md shadow-gray-600 rounded-3xl">
          <div className="w-full h-full rounded-3xl bg-white py-1 md:py-5">
            <h1
              className={`text-xl md:block hidden md:ext-2xl font-semibold text-center ${maliFont.className}`}
            >
              My Community
            </h1>
            <div className="md:grid grid-cols-3 px-2 md:px-5 py-2 md:py-5 gap-y-2.5 md:gap-y-5 md:h-[95%] h-full overflow-y-scroll gap-x-8">
              <div
                onClick={(e) => {
                  setShowComingSoon(!showComingSoon);
                }}
                className="flex cursor-pointer items-center h-[14vw] md:h-[5vw] justify-center border border-newBlue rounded-md shadow-lg shadow-gray-400 text-newBlue"
              >
                <IoIosMale size={30} className="font-bold" />
              </div>
              <div
                onClick={(e) => {
                  setShowComingSoon(!showComingSoon);
                }}
                className="flex cursor-pointer items-center h-[14vw] md:h-[5vw] justify-center border border-newBlue rounded-md shadow-lg shadow-gray-400 text-newBlue"
              >
                <IoIosFemale size={30} className="font-bold" />
              </div>
              <div className="flex cursor-pointer items-center h-[14vw] md:h-[5vw] justify-center border border-newBlue rounded-md shadow-lg shadow-gray-400 text-newBlue">
                <CgCommunity size={30} className="font-bold" />
              </div>
              <div
                className="items-center shadow-lg shadow-gray-400 rounded-lg md:flex hidden justify-center cursor-pointer h-[14vw] md:h-[5vw]"
                onClick={(e) => {
                  history.push("/trubuddies");
                }}
              >
                <div className="w-full md:w-[5vw] text-black flex items-center justify-center pb-2 md:pb-3 h-full border border-newBlue rounded-lg text-5xl font-semibold">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:border w-full md:mt-0 mt-[1vw] p-[2px] h-fit md:h-[48%] md:bg-gradient-to-tr from-newBlue to-newOcean md:shadow-md md:shadow-gray-600 rounded-3xl">
          <div className="w-full h-full rounded-3xl flex flex-col items-center bg-transparent md:bg-white relative py-0 md:py-5 md:foolPatti">
            <h1 className="text-2xl drop-shadow-2xl text-center">Trubuddies</h1>
            <div
              onClick={(e) => {
                history.push(
                  `/trubuddies/${
                    admin?.adminTrubuddies[0]?._id == login?._id
                      ? admin?.adminTrubuddies[1]?._id
                      : admin?.adminTrubuddies[0]?._id
                  }`
                );
              }}
              className={`bg-white cursor-pointer rounded-3xl mt-[1vw] border md:mx-0 mx-auto w-[80%] md:w-[21vw] py-[3vw] md:py-[1vw] px-[4vw] md:px-[1.5vw] flex flex-col items-center`}
            >
              <div className="w-full h-full">
                <div className="flex items-center w-full justify-start">
                  <Image
                    src={
                      admin?.adminTrubuddies[0]?._id == login?._id
                        ? admin?.adminTrubuddies[1]?.profile
                        : admin?.adminTrubuddies[0]?.profile
                    }
                    width={100}
                    height={100}
                    alt="Image"
                    className="w-[32vw] md:w-[5vw] border-4 border-newLightBlue rounded-full"
                  />
                  <div className="ml-3">
                    <h1 className="mt-1 md:mt-2 mb-0 text-xl font-semibold">
                      {admin?.adminTrubuddies[0]?._id == login?._id
                        ? admin?.adminTrubuddies[1]?.name
                        : admin?.adminTrubuddies[0]?.name}
                    </h1>
                    <div className="border-2 px-2 flex items-center rounded-3xl text-sm border-newBlue w-fit mt-1">
                      {admin?.adminTrubuddies[0]?._id == login?._id ? (
                        admin?.adminTrubuddies[1]?.gender == "Male" ? (
                          <Image src={male} alt="Male" className="mr-1" />
                        ) : (
                          <Image src={female} alt="Male" className="mr-1" />
                        )
                      ) : admin?.adminTrubuddies[0]?.gender == "Male" ? (
                        <Image src={male} alt="Male" className="mr-1" />
                      ) : (
                        <Image src={female} alt="Male" className="mr-1" />
                      )}

                      {admin?.adminTrubuddies[0]?._id == login?._id
                        ? admin?.adminTrubuddies[1]?.gender
                        : admin?.adminTrubuddies[0]?.gender}
                    </div>
                  </div>
                </div>
                <div className={`${noto_sans.className}`}>
                  <h1 className="text-lg mt-2 md:mt-1 mb-0">Expertise</h1>
                  <div className="grid grid-cols-2 gap-x-3">
                    {admin?.adminTrubuddies[0]?._id == login?._id
                      ? admin?.adminTrubuddies[1]?.otherExpertise
                          ?.slice(0, 2)
                          .map((e) => {
                            return (
                              <div
                                className="rounded-full mt-2 text-center border-2 border-newBlue"
                                key={e}
                              >
                                {e}
                              </div>
                            );
                          })
                      : admin?.adminTrubuddies[0]?.otherExpertise
                          ?.slice(0, 2)
                          .map((e) => {
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
              <button className="bg-newBlue w-full cursor-pointer text-white py-1 rounded-full mt-3 md:mt-4">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:hidden block md:px-0 px-5 md:mt-0 foolPatti mt-4 md:w-[23vw] h-[95vh] flex flex-col items-center justify-between overflow-hidden">
        <div className="flex w-full mt-[9vw] mb-2">
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
          <div className="w-full h-full rounded-3xl bg-white px-2.5 py-2">
            <div className="grid grid-cols-3 px-2 md:px-5 py-2 md:py-5 gap-y-2.5 md:gap-y-5 md:h-[95%] h-full overflow-y-scroll gap-x-3">
              <div
                onClick={(e) => {
                  setShowComingSoon(!showComingSoon);
                }}
                className="flex cursor-pointer items-center h-[20vw] md:h-[5vw] justify-center border border-newBlue rounded-md shadow-lg shadow-gray-400 text-newBlue"
              >
                <IoIosMale size={45} className="font-bold" />
              </div>
              <div
                onClick={(e) => {
                  setShowComingSoon(!showComingSoon);
                }}
                className="flex cursor-pointer items-center h-[20vw] md:h-[5vw] justify-center border border-newBlue rounded-md shadow-lg shadow-gray-400 text-newBlue"
              >
                <IoIosFemale size={45} className="font-bold" />
              </div>
              <div
                onClick={(e) => {
                  history.push("group-chats/65429c9f26aaf64195859089");
                }}
                className="flex cursor-pointer items-center h-[20vw] md:h-[5vw] justify-center border border-newBlue rounded-md shadow-lg shadow-gray-400 text-newBlue"
              >
                <CgCommunity size={45} className="font-bold" />
              </div>
              <div
                className="items-center shadow-lg shadow-gray-400 rounded-lg md:flex hidden justify-center cursor-pointer h-[14vw] md:h-[5vw]"
                onClick={(e) => {
                  history.push("/trubuddies");
                }}
              >
                <div className="w-full md:w-[5vw] text-black flex items-center justify-center pb-2 md:pb-3 h-full border border-newBlue rounded-lg text-5xl font-semibold">
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
    </>
  );
};

export default RightGroupBar;
