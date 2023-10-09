import React from "react";
import { noto_sans } from "./font";

import logo from "@/app/Assets/Home/Logo Image.png";
import Image from "next/image";

import youtube from "@/app/Assets/Home/icons/YouTube.png";
import whatsapp from "@/app/Assets/Home/icons/whatsapp.png";
import twitter from "@/app/Assets/Home/icons/Twitter.png";
import message from "@/app/Assets/Home/icons/Message.png";
import linkedin from "@/app/Assets/Home/icons/LinkedIn.png";
import instagram from "@/app/Assets/Home/icons/Instagram.png";
import facebook from "@/app/Assets/Home/icons/Facebook.png";
import call from "@/app/Assets/Home/icons/Call.png";

const Footer = () => {
  return (
    <div
      className={`bg-newBlue py-[3vw] text-white px-[2vw] ${noto_sans.className}`}
    >
      <div className="w-8/12">
        <div className="flex items-center justify-between w-full">
          {[
            { name: "About", route: "" },
            { name: "Products", route: "" },
            { name: "Shop All", route: "" },
            { name: "Contact", route: "" },
            { name: "Terms of Use", route: "" },
          ].map((e, i) => {
            return (
              <p key={i} className="font-medium">
                {e?.name}
              </p>
            );
          })}
        </div>
        <div className="flex items-center py-[2vw]">
          <Image src={logo} alt="Logo" className="mr-2" />
          <p className="text-2xl font-bold">TruBuddy</p>
        </div>
        <div className="flex items-end">
          <p className="mb-2">Follow us</p>
          <div className="flex items-center ml-3">
            <Image src={facebook} alt="Icons" className="w-[3.5vw]" />
            <Image src={twitter} alt="Icons" className="w-[3.5vw]" />
            <Image src={instagram} alt="Icons" className="w-[3.5vw]" />
            <Image src={linkedin} alt="Icons" className="w-[3.5vw]" />
            <Image src={youtube} alt="Icons" className="w-[3.5vw]" />
            <Image src={message} alt="Icons" className="w-[3.5vw]" />
          </div>
        </div>
        <div className="flex items-end">
          <p className="mb-1 font-light">Contact us directly:</p>
          <div className="flex items-center ml-1">
            <Image src={call} alt="Icons" className="w-[2.2vw]" />
            <Image src={whatsapp} alt="Icons" className="w-[2.2vw]" />
          </div>
        </div>
      </div>
      <div className="w-4/12"></div>
    </div>
  );
};

export default Footer;
