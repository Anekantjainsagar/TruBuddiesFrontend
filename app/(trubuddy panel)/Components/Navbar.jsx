"use client";
import React from "react";
import Image from "next/image";

import logo from "../../(website)/Assets/Home/Logo Image.png";
import profile from "../../(website)/Assets/Chats/picture.png";

const Navbar = () => {
  return (
    <div
      className={`flex items-center justify-between md:px-[2vw] py-1.5 z-50 w-full fixed top-0 left-0 text-white}`}
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
      <div className="hidden md:flex justify-between w-3/6">
        <input
          type="text"
          className="w-full px-3 py-1 rounded-md outline-none"
          placeholder="Search Here"
        />
      </div>
      <div>
        <Image
          src={profile}
          onClick={(e) => {
            history.push("/user/dashboard");
          }}
          alt="Profile"
          className="w-[75%] cursor-pointer shadow-md shadow-gray-500 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
