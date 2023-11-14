import React from "react";
import { noto_sans } from "./font";

import logo from "../../Assets/Home/Logo Image.png";
import Image from "next/image";

import youtube from "../../Assets/Home/icons/YouTube.png";
import whatsapp from "../../Assets/Home/icons/whatsapp.png";
import twitter from "../../Assets/Home/icons/Twitter.png";
import linkedin from "../../Assets/Home/icons/LinkedIn.png";
import instagram from "../../Assets/Home/icons/Instagram.png";
import facebook from "../../Assets/Home/icons/Facebook.png";
import call from "../../Assets/Home/icons/Call.png";

const Footer = () => {
  return (
    <div
      className={`py-[5vw] bg-gradient-to-br from-newBlue from-40% to-newOcean md:py-[2.5vw] text-white px-[2vw] flex justify-between items-center ${noto_sans.className}`}
    >
      <div className="w-full md:w-7/12 md:block flex flex-col">
        <div className="md:hidden flex items-center mx-auto md:mx-0 pt-[2vw] pb-3">
          <Image src={logo} alt="Logo" className="mr-2" />
          <p className="text-2xl font-bold">TruBuddy</p>
        </div>
        <div className="flex items-center justify-between w-11/12 mx-auto md:w-full">
          {[
            { name: "About", route: "" },
            { name: "Products", route: "" },
            { name: "Shop All", route: "" },
            { name: "Contact", route: "" },
            { name: "Terms of Use", route: "" },
          ].map((e, i) => {
            return (
              <p
                key={i}
                className="font-medium md:text-base text-xs cursor-pointer"
              >
                {e?.name}
              </p>
            );
          })}
        </div>
        <div className="md:flex hidden items-center mx-auto md:mx-0 pt-[2vw] pb-3">
          <Image src={logo} alt="Logo" className="mr-2" />
          <p className="text-2xl font-bold">TruBuddy</p>
        </div>
        <div className="flex items-end md:justify-start justify-center">
          <p className="mb-2 md:block hidden">Follow us</p>
          <div className="flex items-center ml-3 md:w-fit w-full">
            <Image
              src={facebook}
              alt="Icons"
              className="w-[10vw] md:w-[3vw] cursor-pointer"
            />
            <Image
              src={twitter}
              alt="Icons"
              className="w-[10vw] md:w-[3vw] cursor-pointer"
            />
            <Image
              src={instagram}
              alt="Icons"
              className="w-[10vw] md:w-[3vw] cursor-pointer"
            />
            <Image
              src={linkedin}
              alt="Icons"
              className="w-[10vw] md:w-[3vw] cursor-pointer"
            />
            <Image
              src={youtube}
              alt="Icons"
              className="w-[10vw] md:w-[3vw] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex items-end mt-2">
          <p className="mb-1 font-light md:block hidden">
            Contact us directly:
          </p>
          <div className="flex items-center ml-1">
            <Image
              src={call}
              alt="Icons"
              className="w-[10vw] md:w-[2.2vw] mx-1 md:mx-2"
            />
            <Image
              src={whatsapp}
              alt="Icons"
              className="w-[10vw] md:w-[2.2vw]"
            />
          </div>
        </div>
        <p className="my-2 md:ml-0 ml-3 md:mr-0 mr-16">
          Lorem ipsum dolor sit amet consectetur. Mattis turpis cras vivamus
          nulla consectetur a libero. Porta sit.
        </p>
        <p className="text-sm md:ml-0 ml-3 opacity-75 mt-2">
          © 2023 TruBuddy . All Rights Reserved.
        </p>
      </div>
      <div className="md:block hidden w-[26%] bg-newLightBlue py-[1.5vw] px-[1.5vw] rounded-3xl">
        <h1 className="text-center text-xl font-semibold">
          Send us Your Enquiry
        </h1>
        <input
          type="text"
          placeholder="First Name"
          className="border-b bg-transparent outline-none text-white px-3 pb-1 w-full mt-3 placeholder-slate-200"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="border-b bg-transparent outline-none text-white px-3 pb-1 w-full mt-4 placeholder-slate-200"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="border-b bg-transparent outline-none text-white px-3 pb-1 w-full mt-4 placeholder-slate-200"
        />
        <input
          type="text"
          placeholder="Message"
          className="border-b bg-transparent outline-none text-white px-3 pb-1 w-full mt-4 placeholder-slate-200"
        />
        <button className="bg-newBlue px-6 py-1 rounded-xl mt-4 block mx-auto">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Footer;
