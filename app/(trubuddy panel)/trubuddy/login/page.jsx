"use client";
import React from "react";
import Image from "next/image";

import image from "../../../Images/trubuddy/rafiki.png";
import { maliFont, noto_sans } from "../../../(website)/Components/Utils/font";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const TrubuddyLOgin = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="flex items-center h-[100vh]">
      <div
        className={`${maliFont.className} w-1/2 flex flex-col items-center justify-center`}
      >
        <Image src={image} alt={"image"} className="w-8/12 mb-4" />
        <h1
          className={`${maliFont.className} text-4xl text-newDarkBlue font-semibold`}
        >
          WELCOME !!
        </h1>
        <p className="text-newDarkBlue font-medium text-xl w-4/12 text-center mt-1">
          TruBuddy you are doing a great job
        </p>
      </div>
      <div className="w-1/2 h-full bg-newDarkBlue flex flex-col items-start justify-center pl-[4vw]">
        <div className="text-white w-full">
          <h1 className="text-3xl font-semibold mb-3">TruBuddy Log in </h1>
          <div className="py-4">
            <input
              type="text"
              className="bg-transparent border-b outline-none block w-6/12 px-3 py-1 tracking-wider"
              placeholder="Email"
            />
            <div className="flex items-end relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="bg-transparent border-b outline-none block mt-5 w-6/12 px-3 py-1 tracking-wider"
                placeholder="Password"
              />
              <div
                className="absolute left-[45%] bottom-0 opacity-70"
                onClick={(e) => {
                  setPasswordVisible(!passwordVisible);
                }}
              >
                {passwordVisible ? (
                  <AiOutlineEye size={30} className="mb-1 cursor-pointer" />
                ) : (
                  <AiOutlineEyeInvisible
                    size={30}
                    className="mb-1 cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
          <button className="px-8 bg-white text-newDarkBlue font-medium py-1 rounded-lg">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrubuddyLOgin;
