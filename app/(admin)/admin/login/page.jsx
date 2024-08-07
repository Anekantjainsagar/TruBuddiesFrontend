"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import image from "../../../Images/trubuddy/rafiki.png";
import { maliFont, noto_sans } from "../../../(website)/Components/Utils/font";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { BASE_URL } from "../../../(website)/Components/Utils/url";
import toast, { Toaster } from "react-hot-toast";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const [login, setLogin] = React.useState({ email: "", password: "" });
  const history = useRouter();
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  useEffect(() => {
    if (getCookie("admin_token")) {
      history.push("/admin/user");
    }
  }, []);

  const onSubmit = () => {
    if (!login?.email || !login?.password) {
      toast.error("Please fill all the details");
    } else {
      axios
        .post(`${BASE_URL}/admin/login`, { ...login })
        .then((response) => {
          if (response.status !== 200) {
            toast.error(response.data.data);
          } else {
            setCookie("admin_token", response.data.jwtToken);
            history.push("/admin/user");
            toast.success("Login Successfully");
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <div className="flex md:flex-row flex-col items-center w-[100vw] h-[100vh]">
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
      </div>
      <div className="w-full md:w-1/2 h-4/6 md:h-full bg-newDarkBlue flex flex-col items-center md:items-start justify-center pl-[4vw]">
        <div className="text-white w-full flex flex-col md:items-start items-center">
          <h1 className="text-3xl font-semibold mb-3">Admin Log in </h1>
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

export default AdminLogin;
