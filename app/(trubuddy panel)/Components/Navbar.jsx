"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";

import logo from "../../(website)/Assets/Home/Logo Image.png";
import { useRouter } from "next/navigation";
import Context from "../../Context/Context";
import { deleteCookie } from "cookies-next";

const Navbar = () => {
  const history = useRouter();
  const [showProfileButton, setShowProfileButton] = useState(false);
  const { trubuddy } = useContext(Context);

  return (
    <div
      className={`flex items-center justify-between px-2 md:px-[2vw] py-1.5 z-50 w-full fixed top-0 left-0 text-white}`}
    >
      <div
        className="flex items-center md:pl-0 pl-3 cursor-pointer"
        onClick={(e) => {
          history.push("/");
        }}
      >
        <Image src={logo} alt="Logo image" className="w-[10vw] md:w-[3vw]" />
        <p
          className={`text-xl md:font-semibold font-bold md:text-white text-[#002689] ml-2 md:ml-4 mt-1 md:mt-1`}
        >
          TruBuddies
        </p>
      </div>
      <div>
        <Image
          src={trubuddy?.profile}
          height={100}
          onClick={(e) => {
            setShowProfileButton(!showProfileButton);
          }}
          width={100}
          alt="Profile"
          className="w-[12vw] md:w-[4vw] h-[12vw] md:h-[4vw] object-cover object-center cursor-pointer shadow-md shadow-gray-500 rounded-full"
        />
        <div
          className={`${
            showProfileButton ? "block" : "hidden"
          } absolute top-14 rounded-md right-20 bg-white`}
        >
          <p
            onClick={(e) => {
              history.push("/trubuddy");
            }}
            className="px-4 rounded-md hover:bg-gray-200 transition-all cursor-pointer"
          >
            Profile
          </p>
          <p
            onClick={(e) => {
              deleteCookie("trubuddy_token");
              history.push("/trubuddy/login");
            }}
            className="px-4 rounded-md hover:bg-gray-200 transition-all cursor-pointer"
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
