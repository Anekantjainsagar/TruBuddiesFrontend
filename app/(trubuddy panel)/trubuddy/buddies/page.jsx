"use client";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Image from "next/image";

import bg from "../../../(website)/Assets/User/purple bg.png";
import dotBg from "../../../(website)/Assets/User/dots bg.png";
import { AiOutlineBell } from "react-icons/ai";
import Context from "../../../Context/Context";
import profile from "../../../Images/trubuddy/image.png";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../../../(website)/Components/Utils/url";
import axios from "axios";

const Trubuddy = () => {
  const { trubuddy, getTrubuddyLogin, setShowTrubuddyEdit, showTrubuddyEdit } =
    useContext(Context);
  const history = useRouter();

  useEffect(() => {
    getTrubuddyLogin();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="absolute top-0 left-0 z-0">
        <Image
          src={bg}
          alt="Bg"
          className="h-[20vh] md:h-[35vh] object-cover object-center"
        />
        <Image src={dotBg} alt="Dots bg" className="md:block hidden" />
      </div>
      <div className="absolute z-10 bg-white w-[85vw] md:w-[70vw] h-[85vh] md:h-[75vh] flex flex-col items-center rounded-lg bottom-0 left-1/2 -translate-x-1/2 shadow-xl shadow-gray-500">
        <div className="p-2 w-full flex items-center">
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
          <p
            className="bg-black text-white text-sm md:text-base px-5 mt-0.5 py-0.5 ml-3 cursor-pointer w-fit rounded-lg"
            onClick={(e) => {
              history.push("/trubuddy");
            }}
          >
            @uid{trubuddy?._id?.slice(trubuddy?._id?.length - 4)}
          </p>
          <p className="text-black font-semibold ml-3">Chats</p>
        </div>
        {trubuddy?.buddies?.length == 0 ? (
          <div className="w-full flex items-center justify-center">
            <p className="text-xl">Sorry, You don't have any Buddy</p>
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 gap-3 md:gap-5 px-3 md:px-5 pt-2 md:pt-3">
            {trubuddy?.buddies?.map((e) => {
              return <BuddyBlock id={e} key={e} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const BuddyBlock = ({ id }) => {
  const history = useRouter();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/login/get-one/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div
      className="bg-gray-200 flex p-1 md:p-2 rounded-md shadow-md shadow-gray-400 cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        history.push(`/trubuddy/buddies/${id}`);
      }}
    >
      <Image
        src={user?.profile}
        width={100}
        height={100}
        alt="Profile"
        className="w-[12vw] h-[12vw] object-cover object-center md:w-[5vw] md:h-[5vw] rounded-full border-2 border-newBlue"
      />
      <div className="ml-1 md:ml-3">
        <h1 className="md:text-xl font-semibold">{user?.name}</h1>
      </div>
    </div>
  );
};

export default Trubuddy;
