"use client";
import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import logo from "../../../../Assets/Home/Logo Image.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Context from "../../../../../Context/Context";
import axios from "axios";
import { BASE_URL } from "../../../../Components/Utils/url";
import toast, { Toaster } from "react-hot-toast";

const PasswordReset = ({ params }) => {
  const { id, token } = params;
  const history = useRouter();
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { modalIsOpen, setIsOpen } = useContext(Context);

  const onPasswordReset = () => {
    if (!password) {
      toast.error("Please fill the password");
    } else {
      axios
        .post(`${BASE_URL}/login/password-reset/reset/${id}/${token}`, {
          password,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Password reset successful");
            history.push("/");
            setIsOpen(!modalIsOpen);
          }
        })
        .catch((err) => {
          toast.error("Internal server error");
        });
    }
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/login/password-reset/${id}/${token}`)
      .then((res) => {
        if (res.status !== 200) {
          history.push("/");
          setIsOpen(!modalIsOpen);
        }
      })
      .catch((err) => {});
  }, [id, token]);

  return (
    <div
      className={`md:w-[24vw] w-[80vw] mx-auto border-2 border-newBlue flex flex-col items-center mt-[19vw] md:mt-[5vw] mb-[10vw] md:mb-[4vw] justify-center p-[2vw] md:p-[1vw] rounded-xl`}
      id="login"
    >
      <Toaster />
      <div className="flex items-center">
        <Image src={logo} alt="Logo" className="w-[20%] mr-1.5" />
        <p className="text-2xl text-newBlue font-semibold">TruBuddies</p>
      </div>
      <div className="w-full mt-[4vw] md:mt-[2vw] px-2">
        <h1 className="text-xl text-newBlue font-semibold">Forget Password</h1>
        <div className="w-full relative">
          <input
            type={passwordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="New Password"
            className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
          />
          {passwordVisible ? (
            <AiOutlineEye
              size={25}
              onClick={(e) => {
                e.preventDefault();
                setPasswordVisible(!passwordVisible);
              }}
              className="absolute right-2 top-1/2 text-gray-500 -translate-y-1/2 mt-1.5 cursor-pointer"
            />
          ) : (
            <AiOutlineEyeInvisible
              size={25}
              onClick={(e) => {
                e.preventDefault();
                setPasswordVisible(!passwordVisible);
              }}
              className="absolute right-2 top-1/2 text-gray-500 -translate-y-1/2 mt-1.5 cursor-pointer"
            />
          )}
        </div>
      </div>
      <button
        onClick={onPasswordReset}
        className="px-6 rounded-lg mt-3 font-semibold bg-newBlue text-white py-1"
      >
        Submit
      </button>
    </div>
  );
};

export default PasswordReset;
