"use client";
import React, { useState, useEffect, useContext } from "react";
import client from "../../Assets/Home/team/client  (1).png";
import Image from "next/image";
import { noto_sans } from "../../Components/Utils/font";
import { AiFillClockCircle } from "react-icons/ai";

import male from "../../Assets/Home/icons/male.png";
import female from "../../Assets/Home/icons/female.png";

import backtick from "../../Assets/Home/backtick.png";

import { BiSolidUserVoice } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "../../Components/Utils/url";
import Context from "../../../Context/Context";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import LoginModal from "../../Components/login";

const SeprateTrubuddy = ({ params }) => {
  const { admin, login, getUser, setClickedUser, setIsOpen, modalIsOpen } =
    useContext(Context);
  const [user, setUser] = useState();
  const history = useRouter();
  const id = params.name;

  useEffect(() => {
    axios
      .post(`${BASE_URL}/trubuddy/get-one/${id}`, { token: getCookie("token") })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div
      className="mt-[15vw] md:mt-[4vw] py-[1vw] grid gap-x-10 mx-[3vw]"
      style={
        typeof window != "undefined"
          ? window.innerWidth < 500
            ? { gridTemplateColumns: "100%" }
            : { gridTemplateColumns: "25% 44.5% 25%" }
          : {}
      }
    >
      <div className="absolute">
        <LoginModal />
      </div>
      <div className="bg-gradient-to-br shadow-lg shadow-gray-500 from-newLightBlue from-70% to-[#1BF9EC] w-full rounded-3xl md:mb-0 mb-5 py-3 px-[2vw] flex flex-col items-center">
        <div className="rounded-full bg-gradient-to-t w-[40vw] md:w-[9vw] h-[40vw] md:h-[9vw] from-newLightBlue shadow-sm shadow-gray-200 to-newOceanGreen p-1">
          <Image
            src={user?.profile}
            width={100}
            height={100}
            alt={"client"}
            className="rounded-full w-full h-full object-cover object-center"
          />
        </div>
        <h1
          className={`text-xl md:text-2xl mt-1 md:mt-2 font-semibold ${noto_sans.className}`}
        >
          {user?.anonymous ? user?.anonymous : user?.name}
        </h1>
        <div className="border-2 px-2 md:px-4 py-0.5 flex items-center rounded-lg text-sm bg-white border-newBlue w-fit mt-1">
          {user?.gender?.toLowerCase() === "male" ? (
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

          {user?.gender}
        </div>
        <div className="mt-2 flex items-center">
          <BiSolidUserVoice size={25} />
          {user?.languages.map((e) => {
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
        <button
          onClick={(e) => {
            setClickedUser(user);
            if (getCookie("token")) {
              if (!login?.trubuddies?.includes(user?._id)) {
                axios
                  .post(`${BASE_URL}/login/start-chat/${user?._id}`, {
                    token: getCookie("token"),
                  })
                  .then((res) => {
                    if (res.status == 200) {
                      getUser();
                      history.push("/chats");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                history.push("/chats");
              }
            } else {
              setIsOpen(!modalIsOpen);
            }
          }}
          className={`bg-newBlue text-white ${noto_sans.className} md:mb-0 -mb-6 mt-0 md:mt-4 px-5 md:text-lg py-0.5 md:py-1 rounded-full font-medium`}
        >
          Start Chat
        </button>
        <div className="md:block hidden">
          <h1 className="font-medium text-xl mb-1.5 mt-4 text-center">
            More Trubuddies
          </h1>
          <div
            onClick={(e) => {
              history.push(
                `/trubuddies/${
                  admin?.adminTrubuddies[0]?._id == id
                    ? admin?.adminTrubuddies[1]?._id
                    : admin?.adminTrubuddies[0]?._id
                }`
              );
            }}
            className="bg-white cursor-pointer rounded-3xl shadow-md shadow-gray-500 border mx-auto w-full py-[1vw] md:py-2 mb-1 px-[3.5vw] md:px-[1.5vw] flex flex-col items-center"
          >
            <div className="w-full h-full">
              <div className="flex items-center w-full justify-start z-30">
                <Image
                  src={
                    admin?.adminTrubuddies[0]?._id == id
                      ? admin?.adminTrubuddies[1]?.profile
                      : admin?.adminTrubuddies[0]?.profile
                  }
                  width={100}
                  height={100}
                  alt="Image"
                  className="w-[32vw] md:w-[5vw] border-4 border-newLightBlue rounded-full"
                />
                <div className="ml-3">
                  <h1 className="mb-0 text-lg font-semibold">
                    {admin?.adminTrubuddies[0]?._id == id
                      ? admin?.adminTrubuddies[1]?.anonymous
                        ? admin?.adminTrubuddies[1]?.anonymous
                        : admin?.adminTrubuddies[1]?.name
                      : admin?.adminTrubuddies[0]?.anonymous
                      ? admin?.adminTrubuddies[0]?.anonymous
                      : admin?.adminTrubuddies[0]?.name}
                  </h1>
                  <div className="border-2 px-2 flex items-center rounded-3xl text-sm border-newBlue w-fit mt-1">
                    {admin?.adminTrubuddies[0]?._id == id ? (
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

                    {admin?.adminTrubuddies[0]?._id == id
                      ? admin?.adminTrubuddies[1]?.gender
                      : admin?.adminTrubuddies[0]?.gender}
                  </div>
                </div>
              </div>
              <div className={`${noto_sans.className}`}>
                <h1 className="text-lg mt-2 md:mt-1.5 mb-0">Expertise</h1>
                <div className="grid grid-cols-2 gap-x-3">
                  {admin?.adminTrubuddies[0]?._id == id
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
            <button
              onClick={(e) => {
                e.stopPropagation();
                setClickedUser(
                  admin?.adminTrubuddies[0]?._id == id
                    ? admin?.adminTrubuddies[1]
                    : admin?.adminTrubuddies[0]
                );
                if (getCookie("token")) {
                  history.push("/chats");
                } else {
                  setIsOpen(!modalIsOpen);
                }
              }}
              className="bg-newBlue w-full z-40 cursor-pointer font-semibold text-white py-1 rounded-full mt-0 md:mt-5"
            >
              Start Chat
            </button>
          </div>
        </div>
      </div>
      <div
        className={`bg-gradient-to-br shadow-lg shadow-gray-500 from-newLightBlue to-newOceanGreen md:mb-0 mb-5 p-4 rounded-3xl w-full ${noto_sans.className}`}
      >
        <div className="bg-gradient-to-r w-full from-newLightBlue rounded-3xl shadow-md shadow-gray-400 to-newOceanGreen p-0.5">
          <div className="bg-white md:py-5 py-2 px-4 rounded-3xl">
            <h1 className="text-xl md:text-2xl font-semibold md:text-start text-center">
              Bio
            </h1>
            <p className="font-light overflow-y-auto h-[16vh] mt-0.5 md:mt-1 md:text-base text-sm md:text-start text-center">
              {user?.bio}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r w-full from-newLightBlue rounded-3xl mt-3 md:mt-5 shadow-md shadow-gray-400 to-newOceanGreen p-0.5">
          <div className="bg-white py-2 md:py-5 px-4 rounded-3xl">
            <h1 className="text-xl md:text-2xl font-semibold text-center md:text-start">
              Personality
            </h1>
            <div className="bg-white h-fit md:h-[44vh]">
              <div className="font-light md:mt-1 md:text-start flex-wrap text-center md:text-base text-sm flex justify-start">
                {user?.otherExpertise?.map((e) => {
                  return (
                    <p
                      className="border-2 border-newBlue text-center w-fit px-3 py-0.5 h-fit mr-3 rounded-xl mt-2 md:mt-3"
                      key={e}
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-gradient-to-br shadow-lg shadow-gray-500 bg-opacity-10 from-newLightBlue rounded-3xl to-newOceanGreen w-full md:mb-0 mb-4 p-4 ${noto_sans.className}`}
      >
        <div className="bg-white py-3 px-4 md:px-3 mr-2 shadow-md shadow-gray-500 rounded-3xl mb-3 flex items-center justify-between">
          <h1 className="md:text-lg font-semibold">Status</h1>
          <div
            className={`border-2 ${
              user?.status == "Online"
                ? "border-green-700"
                : "border-orange-500"
            } w-fit flex px-2 items-center rounded-full justify-center`}
          >
            <div
              className={`w-[10px] h-[10px] ${
                user?.status == "Online" ? "bg-green-700" : "bg-orange-500"
              } rounded-full mr-1`}
            ></div>
            <p className="md:text-base text-sm">{user?.status}</p>
          </div>
        </div>
        <div className="bg-white py-3 px-4 md:px-3 mr-2 shadow-md shadow-gray-500 rounded-3xl mb-3">
          <h1 className="md:text-lg font-semibold">Expertise</h1>
          <div className="grid grid-cols-2 gap-x-4 mt-1 md:mt-2 md:text-base text-sm">
            {user?.otherExpertise.slice(0, 2)?.map((e) => {
              return (
                <div
                  className="border-2 border-newBlue text-center rounded-xl"
                  key={e}
                >
                  {e}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white py-3 px-4 md:px-3 mr-2 shadow-md shadow-gray-500 rounded-3xl mb-3">
          <h1 className="md:text-lg font-semibold">Availability</h1>
          <p className="flex items-center justify-center mt-1 md:mt-2 text-sm md:text-lg">
            <AiFillClockCircle
              size={
                typeof window != "undefined"
                  ? window.innerWidth < 500
                    ? 22
                    : 25
                  : 0
              }
              className="mr-1 md:mr-2"
            />
            {user?.availability}
          </p>
        </div>
        <div className={`${noto_sans.className}`}>
          <h1 className="text-xl md:text-[22px] font-medium mb-1.5">Reviews</h1>
          <div className="h-[45vh] overflow-y-scroll">
            {["A", "B", "C", "D"].map((e) => {
              return (
                <div
                  className="bg-white py-2 px-4 md:px-3 mr-2 shadow-md shadow-gray-500 rounded-3xl mb-3"
                  key={e}
                >
                  <h1 className="md:text-lg font-medium">Personality</h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat reprehenderit facere, porro{" "}
                  </p>
                  <p className="text-end text-gray-500 text-xs md:text-sm">
                    1 day ago
                  </p>
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
