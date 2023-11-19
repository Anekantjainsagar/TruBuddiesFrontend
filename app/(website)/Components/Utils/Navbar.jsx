"use client";
import React, { useContext, useState } from "react";
import logo from "../../Assets/Home/Logo Image.png";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import gsap, { Power2 } from "gsap";
import { usePathname, useRouter } from "next/navigation";
import LoginModal from "../login";
import Context from "../../../Context/Context";
import { deleteCookie, getCookie, getCookies } from "cookies-next";

const Navbar = () => {
  const { modalIsOpen, setIsOpen, login, setScrollTo } = useContext(Context);
  const pathname = usePathname();
  const history = useRouter();
  const [showLogOut, setShowLogOut] = useState(false);
  let routes = [
    {
      name: "Home",
      route: "/",
    },
    { name: "About us", route: "/" },
    { name: "Services", route: "/" },
    {
      name: "Contact",
      route: "/",
    },
    { name: "Support us", route: "/" },
  ];

  const closeNav = () => {
    gsap.to("#navbar", {
      top: "-100vh",
      duration: 1,
      ease: Power2.easeInOut,
    });
  };

  return (
    <>
      <LoginModal />
      <div
        className={`flex items-center justify-between md:px-[2vw] py-2 z-50 w-full fixed top-0 left-0`}
      >
        <div
          className="flex items-center md:pl-0 pl-3 cursor-pointer"
          onClick={(e) => {
            history.push("/");
          }}
        >
          <Image src={logo} alt="Logo image" className="w-[10vw] md:w-[3vw]" />
          <p
            className={`text-xl md:font-semibold font-bold md:text-black text-[#002689] ml-2 md:ml-4 mt-1 md:mt-1`}
          >
            TruBuddies
          </p>
        </div>
        <div className="hidden md:flex justify-between w-3/6">
          {routes.map((e, i) => {
            return (
              <p
                key={i}
                className="uppercase mb-0 cursor-pointer font-semibold"
                onClick={(el) => {
                  setScrollTo(e?.name?.toLowerCase().replaceAll(" ", ""));
                  history.push(e?.route);
                }}
              >
                {e.name}
              </p>
            );
          })}
        </div>
        {getCookie("token")?.length > 0 ? (
          <div
            className="relative md:block hidden"
            onClick={(e) => {
              setShowLogOut(!showLogOut);
            }}
          >
            <div
              className={`absolute right-0 bg-white top-16 rounded-md ${
                showLogOut ? "block text-black" : "hidden"
              }`}
            >
              <p
                onClick={(e) => {
                  history.push("/user/dashboard");
                }}
                className="cursor-pointer py-0.5 px-4 transition-all rounded-md hover:bg-gray-100"
              >
                Profile
              </p>
              <p
                onClick={(e) => {
                  deleteCookie("token");
                  history.push("/");
                }}
                className="cursor-pointer py-0.5 px-4 transition-all rounded-md hover:bg-gray-100"
              >
                Logout
              </p>
            </div>
            <Image
              src={login?.profile}
              width={100}
              height={100}
              alt="Profile"
              className="w-[3.5vw] h-[3.5vw] object-cover object-center cursor-pointer shadow-md shadow-gray-500 rounded-full"
            />
          </div>
        ) : (
          <div className="hidden md:flex items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!modalIsOpen);
              }}
              className="font-semibold px-4 bg-white mr-3 text-newBlue py-1 rounded-md"
            >
              Login
            </button>
            <button className="font-semibold px-4 bg-newBlue text-white py-1 rounded-md">
              Get Started
            </button>
          </div>
        )}
        <AiOutlineMenu
          size={22}
          className="text-[#002689] md:hidden block mr-4"
          onClick={(e) => {
            gsap.to("#navbar", { top: 0, duration: 1, ease: Power2.easeInOut });
          }}
        />
        <div
          id="navbar"
          className="absolute p-3 flex flex-col items-center justify-center -top-[100vh] left-0 backdrop-blur-md md:hidden w-[100vw] h-[100vh] z-50"
        >
          <div className="absolute top-5 right-5">
            <AiOutlineClose
              size={25}
              className="block"
              onClick={(e) => {
                closeNav();
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            {routes?.map((e, i) => {
              return (
                <p
                  key={i}
                  onClick={(el) => {
                    setScrollTo(e?.name?.toLowerCase().replaceAll(" ", ""));
                    history.push(e?.route);
                    closeNav();
                  }}
                  className="uppercase cursor-pointer mb-4 font-semibold"
                >
                  {e.name}
                </p>
              );
            })}
            {getCookie("token") ? (
              <div
                className="relative"
                onClick={(e) => {
                  setShowLogOut(!showLogOut);
                }}
              >
                <div
                  className={`absolute left-1/2 -translate-x-1/2 bg-white top-14 rounded-md ${
                    showLogOut ? "block text-black" : "hidden"
                  }`}
                >
                  <p
                    onClick={(e) => {
                      history.push("/user/dashboard");
                      closeNav();
                    }}
                    className="cursor-pointer py-0.5 px-4 transition-all rounded-md hover:bg-gray-100"
                  >
                    Profile
                  </p>
                  <p
                    onClick={(e) => {
                      deleteCookie("token");
                      history.push("/");
                      closeNav();
                    }}
                    className="cursor-pointer py-0.5 px-4 transition-all rounded-md hover:bg-gray-100"
                  >
                    Logout
                  </p>
                </div>
                <Image
                  src={login?.profile}
                  width={100}
                  height={100}
                  alt="Profile"
                  className="w-[13vw] h-[13vw] object-cover object-center cursor-pointer shadow-md shadow-gray-500 rounded-full"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!modalIsOpen);
                  }}
                  className="font-semibold px-4 bg-white mb-4 text-newBlue py-1 rounded-md"
                >
                  Login
                </button>
                <button className="font-semibold px-4 bg-newBlue text-white py-1 rounded-md">
                  Get Started
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
