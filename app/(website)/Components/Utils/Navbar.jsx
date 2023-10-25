"use client";
import React from "react";
import logo from "../../Assets/Home/Logo Image.png";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import gsap, { Power2 } from "gsap";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const history = useRouter();
  let routes = [
    {
      name: "Home",
      route: "",
    },
    { name: "About us", route: "" },
    { name: "Services", route: "" },
    {
      name: "Contact",
      route: "",
    },
    { name: "Support us", route: "" },
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
      <div
        className={`flex items-center justify-between md:px-[2vw] py-1.5 z-50 w-full fixed top-0 left-0 ${
          pathname.includes("trubuddies")
            ? "bg-gradient-to-b from-newBlue to-newOcean text-white"
            : "bg-transparent"
        }`}
      >
        <div
          className="flex items-center md:pl-0 pl-3 cursor-pointer"
          onClick={(e) => {
            history.push("/");
          }}
        >
          <Image src={logo} alt="Logo image" className="w-[10vw] md:w-[3vw]" />
          <p
            className={`text-xl md:font-semibold font-bold ${
              pathname.includes("trubuddies")
                ? "md:text-white"
                : "md:text-black"
            } text-[#002689] ml-2 md:ml-4 mt-1 md:mt-1`}
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
              >
                {e.name}
              </p>
            );
          })}
        </div>
        <div className="hidden md:flex items-center">
          <button className="font-semibold px-4 bg-white mr-3 text-newBlue py-1 rounded-md">
            Login
          </button>
          <button className="font-semibold px-4 bg-newBlue text-white py-1 rounded-md">
            Get Started
          </button>
        </div>
        <AiOutlineMenu
          size={22}
          className="text-[#002689] md:hidden block mr-4"
          onClick={(e) => {
            gsap.to("#navbar", { top: 0, duration: 1, ease: Power2.easeInOut });
          }}
        />
        <div
          id="navbar"
          className="absolute p-3 flex flex-col items-center justify-center -top-[100vh] left-0 backdrop-blur-md md:hidden w-[100vw] h-[100vh] z-40"
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
                  className="uppercase cursor-pointer mb-4 font-semibold"
                >
                  {e.name}
                </p>
              );
            })}
            <div className="flex flex-col items-center">
              <button className="font-semibold px-4 bg-white mb-4 text-newBlue py-1 rounded-md">
                Login
              </button>
              <button className="font-semibold px-4 bg-newBlue text-white py-1 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
