"use client";
import React from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";

import bg from "../../(website)/Assets/User/purple bg.png";
import dotBg from "../../(website)/Assets/User/dots bg.png";
import profile from "../../Images/trubuddy/image.png";
import { AiOutlineBell } from "react-icons/ai";

const Trubuddy = () => {
  const [user, setUser] = React.useState({
    name: "Anekant Jain",
    email: "anekantjainsagar@gmail.com",
    state: "Madhya Pradesh",
    city: "Indore",
    expertise: "Development",
    availibility: "00:00",
  });
  return (
    <div>
      <Navbar />
      <div className="absolute top-0 left-0 z-0">
        <Image
          src={bg}
          alt="Bg"
          className="h-[35vh] object-cover object-center"
        />
        <Image src={dotBg} alt="Dots bg" />
      </div>
      <div className="absolute z-10 bg-white w-[70vw] h-[75vh] flex flex-col items-center rounded-lg bottom-0 left-1/2 -translate-x-1/2 shadow-xl shadow-gray-500">
        <div className="flex items-start justify-between p-4 w-full">
          <AiOutlineBell className="text-newDarkBlue" size={25} />
          <div className="-mt-20 flex flex-col items-center">
            <Image src={profile} alt="Profile" className="w-11/12" />
            <h1 className="text-2xl mt-0.5 font-medium">Anekant Jain</h1>
            <p className="bg-black text-white px-5 mt-0.5 py-0.5 rounded-lg">
              @uid1811
            </p>
            <p className="mt-0.5">Male</p>
            <div className="w-full bg-gray-300 my-2 h-[1px]"></div>
          </div>
          <button className="border-2 border-newDarkBlue text-newDarkBlue bg-white px-3 py-0.5 rounded-lg font-semibold">
            Edit Profile
          </button>
        </div>
        <div className="grid grid-cols-2 w-full">
          {[
            {
              title: "Name",
              value: user?.name,
            },
            {
              title: "Email",
              value: user?.email,
            },
            {
              title: "City",
              value: user?.city,
            },
            {
              title: "State",
              value: user?.state,
            },
            {
              title: "Expertise",
              value: user?.expertise,
            },
            {
              title: "Availability",
              value: user?.availibility,
            },
          ].map((e) => {
            return (
              <div
                key={e?.title}
                className="font-medium mb-5 flex items-center justify-between w-9/12 mx-auto"
              >
                {e?.title} :
                <span className="bg-[#CCECFF] px-4 py-0.5 text-start w-8/12 rounded-md border">
                  {e?.value}
                </span>
              </div>
            );
          })}
        </div>
        <div className="w-3/12 -ml-14 bg-gray-300 my-2 h-[1.5px]"></div>
      </div>
    </div>
  );
};

export default Trubuddy;
