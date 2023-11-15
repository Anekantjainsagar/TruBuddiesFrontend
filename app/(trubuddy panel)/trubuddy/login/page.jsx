"use client";
import React from "react";
import Image from "next/image";

import image from "../../../Images/trubuddy/rafiki.png";
import { maliFont, noto_sans } from "../../../(website)/Components/Utils/font";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { BASE_URL } from "../../../(website)/Components/Utils/url";
import toast, { Toaster } from "react-hot-toast";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const TrubuddyLOgin = () => {
  const [login, setLogin] = React.useState({ email: "", password: "" });
  const history = useRouter();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onSubmit = () => {
    axios
      .post(`${BASE_URL}/trubuddy/login`, { ...login })
      .then((response) => {
        if (response.status !== 200) {
          toast.error(response.data.data);
        } else {
          setCookie("trubuddy_token", response.data.jwtToken);
          history.push("/trubuddy");
          toast.success("Login Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex md:flex-row flex-col items-center h-[100vh]">
      <Toaster />
      <div
        className={`${maliFont.className} w-full md:w-1/2 h-2/6 md:h-full flex flex-col items-center justify-center`}
      >
        <Image
          src={image}
          alt={"image"}
          className="w-8/12 mb-4 md:block hidden"
        />
        <h1
          className={`${maliFont.className} text-4xl text-newDarkBlue font-semibold`}
        >
          WELCOME !!
        </h1>
        <p className="text-newDarkBlue font-medium text-xl w-8/12 md:w-4/12 text-center mt-1">
          TruBuddy you are doing a great job
        </p>
      </div>
      <div className="w-full md:w-1/2 h-4/6 md:h-full bg-newDarkBlue flex flex-col items-center md:items-start justify-center pl-[4vw]">
        <div className="text-white w-full flex flex-col md:items-start items-center">
          <h1 className="text-3xl font-semibold mb-3">TruBuddy Log in </h1>
          <div className="py-4 w-full flex flex-col md:items-start items-center">
            <input
              type="text"
              className="bg-transparent border-b outline-none block md:w-fit w-[57vw] px-3 py-1 tracking-wider"
              placeholder="Email or Phone"
              value={login?.email}
              onChange={(e) => {
                setLogin({ ...login, email: e.target.value });
              }}
            />
            <div className="flex justify-center relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="bg-transparent border-b outline-none block mt-5 w-full px-3 py-1 tracking-wider"
                placeholder="Password"
                value={login?.password}
                onChange={(e) => {
                  setLogin({ ...login, password: e.target.value });
                }}
              />
              <div
                className="absolute right-0 bottom-0 opacity-70"
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
          <button
            onClick={onSubmit}
            className="px-8 bg-white text-newDarkBlue font-medium py-1 rounded-lg"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrubuddyLOgin;
