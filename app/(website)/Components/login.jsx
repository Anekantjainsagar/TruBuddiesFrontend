"use client";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

import logo from "../Assets/Home/Logo Image.png";
import cartoon from "../Assets/Login/cartoon.png";

import google from "../Assets/Login/Google logo.png";
import Context from "../../Context/Context";
import gsap, { Power2 } from "gsap/all";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "../Components/Utils/url";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { setCookie } from "cookies-next";

const customStyles = {
  overlay: {
    zIndex: 1001, // Adjust the value as needed
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001, // Adjust the value as needed
    borderRadius: "1.5rem",
  },
};

const LoginModal = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showOtp, setshowOtp] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    otp: "",
    originalOtp: "",
  });
  const { modalIsOpen, setIsOpen } = useContext(Context);
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (showLogin) {
      gsap.to("#login", { y: -400, duration: 1, ease: Power2.easeInOut });
      gsap.fromTo(
        "#register",
        { y: 500 },
        { y: 0, duration: 1, ease: Power2.easeInOut }
      );
    } else {
      gsap.fromTo(
        "#login",
        { y: -400 },
        { y: 0, duration: 1, ease: Power2.easeInOut }
      );
      gsap.to("#register", { y: 0, duration: 1, ease: Power2.easeInOut });
    }
  }, [showLogin]);

  const onRegister = () => {
    if (
      !register?.email ||
      !register?.password ||
      !register?.phone ||
      !register?.name ||
      !register?.otp
    ) {
      toast.error("Please fill all the details");
    } else {
      if (register?.otp == register?.originalOtp) {
        axios
          .post(`${BASE_URL}/login/signup`, register)
          .then((res) => {
            if (res.status == 200) {
              setRegister({
                email: "",
                password: "",
                name: "",
                phone: "",
                otp: "",
                originalOtp: "",
              });
              setShowLogin(!showLogin);
              toast.success("Registered successfully");
            } else {
              toast.error(res.data.data);
            }
          })
          .catch((err) => {
            toast.error(err.message);
          });
      } else {
        toast.error("Otp is not correct");
      }
    }
  };

  const onGetOtp = () => {
    if (!register?.email) {
      toast.error("Please enter the email to get otp");
    } else {
      axios
        .post(`${BASE_URL}/login/otp-verification`, {
          email: register?.email,
        })
        .then((res) => {
          if (res.status == 200) {
            setshowOtp(!showOtp);
            setRegister({ ...register, originalOtp: res.data.otp });
            toast.success(res.data.data);
          } else {
            toast.error(res.data.data);
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  const onLogin = () => {
    if (!login?.email || !login?.password) {
      toast.error("Please fill all the details");
    } else {
      axios
        .post(`${BASE_URL}/login/signin`, { ...login })
        .then((res) => {
          if (res.status === 200) {
            setCookie("token", res.data.jwtToken);
            setLogin({ email: "", password: "" });
            setIsOpen(!modalIsOpen);
            toast.success("Login Successful");
          } else {
            toast.error(res.data.data);
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <div className="z-50">
      <Toaster />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="w-[70vw] md:w-[50vw] loginBg flex md:flex-row flex-col items-center justify-between overflow-hidden">
          <div className="md:w-[45%] hidden md:flex items-center justify-center">
            <Image src={cartoon} alt="Cartoon" className="w-[90%] md:w-[65%]" />
          </div>
          <div className="w-full md:block hidden md:w-[3px] bg-newBlue h-[1px] md:h-[40vh] md:my-0 my-5 rounded-full"></div>
          <div
            className={`md:w-[54%] flex flex-col items-center px-[1vw] ${
              showLogin ? "hidden" : "block"
            }`}
            id="login"
          >
            <div className="flex items-center">
              <Image src={logo} alt="Logo" className="w-[20%] mr-1.5" />
              <p className="text-2xl text-newBlue font-semibold">TruBuddies</p>
            </div>
            <div className="w-full mt-[2vw] px-2">
              <h1 className="text-xl text-newBlue font-semibold">Sign In</h1>
              <input
                type="text"
                value={login?.email}
                onChange={(e) => {
                  setLogin({ ...login, email: e.target.value });
                }}
                placeholder="Enter Your Mail or Phone no."
                className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
              />
              <div className="w-full relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={login?.password}
                  onChange={(e) => {
                    setLogin({ ...login, password: e.target.value });
                  }}
                  placeholder="Password"
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
              <div className="flex md:flex-row flex-col items-center justify-between">
                <button
                  onClick={onLogin}
                  className="px-6 rounded-lg mt-3 font-semibold bg-newBlue text-white py-1"
                >
                  Sign In
                </button>
                <p className="mt-2 text-sm">
                  Don’t have an account?
                  <span
                    className="text-newBlue ml-1 cursor-pointer"
                    onClick={(e) => {
                      setShowLogin(!showLogin);
                    }}
                  >
                    Register Now
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end w-full px-2 mt-1">
              <div className="flex w-fit items-center">
                <p className="text-sm">Or Login With</p>
                <Image
                  src={google}
                  alt="GOogle"
                  className="w-4/12 md:w-[1.75vw] ml-1 md:ml-2 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div
            className={`md:w-[54%] flex flex-col items-center px-[1vw] ${
              showLogin ? "block" : "hidden"
            }`}
            id="register"
          >
            <div className="flex items-center">
              <Image src={logo} alt="Logo" className="w-[20%] mr-1.5" />
              <p className="text-2xl text-newBlue font-semibold">TruBuddies</p>
            </div>
            <div className="w-full mt-[2vw] px-2">
              <h1 className="text-xl text-newBlue font-semibold">Sign Up</h1>
              <input
                type="text"
                value={register?.name}
                onChange={(e) => {
                  setRegister({ ...register, name: e.target.value });
                }}
                placeholder="Enter Your Name"
                className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
              />
              <input
                type="text"
                disabled={showOtp}
                value={register?.email}
                onChange={(e) => {
                  setRegister({ ...register, email: e.target.value });
                }}
                placeholder="Enter Your Email Id"
                className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
              />
              <input
                type="number"
                value={register?.phone}
                onChange={(e) => {
                  setRegister({ ...register, phone: e.target.value });
                }}
                placeholder="Enter Your Phone no."
                className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
              />
              <div className="w-full relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  onChange={(e) => {
                    setRegister({ ...register, password: e.target.value });
                  }}
                  value={register?.password}
                  placeholder="Password"
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
              {showOtp ? (
                <input
                  type="number"
                  value={register?.otp}
                  onChange={(e) => {
                    setRegister({ ...register, otp: e.target.value });
                  }}
                  placeholder="Enter Otp"
                  className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
                />
              ) : null}
              <div className="flex md:flex-row flex-col items-center justify-between">
                <button
                  onClick={!showOtp ? onGetOtp : onRegister}
                  className="px-6 rounded-lg mt-3 font-semibold bg-newBlue text-white py-1"
                >
                  {showOtp ? "Sign Up" : "Get Otp"}
                </button>
                <p className="mt-2 text-sm">
                  Already have an account?
                  <span
                    className="text-newBlue ml-1 cursor-pointer"
                    onClick={(e) => {
                      setShowLogin(!showLogin);
                    }}
                  >
                    Login now
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end w-full px-2 mt-1">
              <div className="flex items-center">
                <p className="text-sm">Or Register With</p>
                <Image
                  src={google}
                  alt="GOogle"
                  className="w-4/12 md:w-[1.75vw] ml-2 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
