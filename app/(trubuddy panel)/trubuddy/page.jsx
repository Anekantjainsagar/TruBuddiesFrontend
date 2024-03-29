"use client";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";

import bg from "../../(website)/Assets/User/purple bg.png";
import dotBg from "../../(website)/Assets/User/dots bg.png";
import { AiOutlineBell, AiOutlineEye } from "react-icons/ai";
import Context from "../../Context/Context";

import EditProfileTrubuddy from "./EditProfileTrubuddy";
import axios from "axios";
import { BASE_URL } from "../../(website)/Components/Utils/url";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const Trubuddy = () => {
  const { trubuddy, getTrubuddyLogin, setShowTrubuddyEdit, showTrubuddyEdit } =
    useContext(Context);
  const history = useRouter();
  const [status, setStatus] = useState(trubuddy?.status);

  useEffect(() => {
    getTrubuddyLogin();
  }, []);

  useEffect(() => {
    setStatus(trubuddy?.status);
  }, [trubuddy]);

  useEffect(() => {
    if (!trubuddy?._id) {
      history.push("/trubuddy/login");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <EditProfileTrubuddy />
      <div className="absolute top-0 left-0 z-0">
        <Image
          src={bg}
          alt="Bg"
          className="h-[20vh] md:h-[35vh] object-cover object-center"
        />
        <Image src={dotBg} alt="Dots bg" className="md:block hidden" />
      </div>
      <div className="absolute z-10 bg-white w-[85vw] md:w-[70vw] h-[85vh] md:h-[75vh] flex flex-col items-center rounded-lg bottom-0 left-1/2 -translate-x-1/2 shadow-xl shadow-gray-500">
        <div className="flex items-start justify-between p-2 md:p-4 w-full">
          <div className="flex items-center">
            <AiOutlineBell
              className="text-newDarkBlue"
              size={
                typeof window != "undefined"
                  ? window.innerWidth < 550
                    ? 25
                    : 30
                  : 0
              }
            />
            <AiOutlineEye
              size={
                typeof window != "undefined"
                  ? window.innerWidth < 550
                    ? 25
                    : 30
                  : 0
              }
              className="ml-2 cursor-pointer"
              onClick={(e) => {
                history.push(`/trubuddies/${trubuddy?._id}`);
              }}
            />
          </div>
          <div className="-mt-10 md:-mt-20 md:ml-[7vw] flex flex-col items-center">
            <Image
              src={trubuddy?.profile}
              width={10000}
              height={10000}
              alt="Profile"
              className="w-[34vw] md:w-[12vw] h-[34vw] md:h-[12vw] object-cover object-center rounded-lg"
            />
            <h1 className="text-lg text-center md:text-2xl mt-0.5 font-medium">
              {trubuddy?.name} ({trubuddy?.anonymous})
            </h1>
            <p className="bg-black text-white text-sm md:text-base px-5 mt-0.5 py-0.5 rounded-lg">
              @uid{trubuddy?._id?.slice(trubuddy?._id?.length - 4)}
            </p>
            <p className="mt-0.5 md:text-base text-sm">{trubuddy?.gender}</p>
            <div className="w-full bg-gray-300 my-2 h-[1px]"></div>
          </div>
          <div className="flex md:flex-row flex-col md:text-base text-sm items-center">
            <select
              name=""
              id=""
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                axios
                  .post(`${BASE_URL}/trubuddy/status`, {
                    status: e.target.value,
                    token: getCookie("trubuddy_token"),
                  })
                  .then((res) => {})
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="outline-none bg-newBlue mb-2 md:mb-0 md:mr-3 text-white px-1 md:px-3 py-0.5 md:py-1 rounded-md"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Engage">Engage</option>
            </select>
            <button
              onClick={(e) => {
                setShowTrubuddyEdit(!showTrubuddyEdit);
              }}
              className="border-2 border-newDarkBlue md:text-base text-xs text-newDarkBlue bg-white px-2 md:px-3 py-0.5 rounded-lg font-semibold"
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {[
            {
              title: "Name",
              value: trubuddy?.name,
            },
            {
              title: "Email",
              value: trubuddy?.email,
            },
            {
              title: "City",
              value: trubuddy?.city,
            },
            {
              title: "State",
              value: trubuddy?.state,
            },
            {
              title: "Expertise",
              value: trubuddy?.expertise,
            },
            {
              title: "Availability",
              value: trubuddy?.availability,
            },
          ].map((e) => {
            return (
              <div
                key={e?.title}
                className="font-medium mb-3 md:mb-5 flex items-center justify-between w-11/12 md:w-9/12 mx-auto"
              >
                {e?.title} :
                <span className="bg-[#CCECFF] px-4 py-0.5 text-start w-[60%] md:w-8/12 break-words rounded-md border">
                  {e?.value}
                </span>
              </div>
            );
          })}
        </div>
        <div className="w-3/12 -ml-14 bg-gray-300 my-2 h-[1.5px]"></div>
        <div className="md:w-[80%] mx-[2vw] md:mx-auto grid grid-cols-3 md:gap-y-0 gap-y-2 md:flex items-center mt-2 justify-center">
          {trubuddy?.buddies?.length !== 0 ? (
            <>
              {trubuddy?.buddies?.slice(0, 5).map((e) => {
                return <BuddyBlock id={e} key={e} />;
              })}
              <p
                className="text-center underline md:hidden"
                onClick={(e) => {
                  history.push("/trubuddy/buddies");
                }}
              >
                View All
              </p>
            </>
          ) : (
            <div className="w-full flex items-center h-[20vh] justify-center">
              <p className="text-xl">Sorry, You don&apos;t have any Buddy</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const BuddyBlock = ({ id }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .post(`${BASE_URL}/login/get-one/${id}`, {
        token: getCookie("trubuddy_token"),
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="md:w-[15%] w-10/12 flex flex-col items-center justify-center md:mx-0 mx-auto cursor-pointer">
      <Image
        src={user?.profile}
        width={10000}
        height={10000}
        alt="Profile"
        className="rounded-full border border-newBlue md:w-[7vw] h-[23vw] w-full md:h-[7vw] object-cover object-center"
      />
      <div className="md:block hidden text-center text-sm border-newBlue px-4 rounded-full mt-2">
        {user?.anonymous ? user?.anonymous : user?.name}
      </div>
    </div>
  );
};

export default Trubuddy;
