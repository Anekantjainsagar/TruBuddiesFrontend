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
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div
      id="contact"
      className={`py-[3vw] bg-gradient-to-br from-newBlue from-60% to-newOcean md:py-[2vw] text-white px-[2vw] flex md:flex-row flex-col justify-between ${noto_sans.className}`}
    >
      <div className="w-full md:w-8/12">
        <div className="flex md:flex-row flex-col items-center md:items-start justify-between">
          <div className="flex flex-col md:items-start md:mb-0 mb-5 items-center">
            <h1 className="font-semibold mb-1 text-lg">Quick Links:</h1>
            {[
              { name: "Home", route: "/" },
              { name: "About us", route: "/about" },
              { name: "FAQs", route: "/" },
              { name: "Terms of Service", route: "/" },
              { name: "Privacy Policy", route: "/" },
              { name: "Community Guidelines", route: "/" },
            ].map((e) => {
              return (
                <p key={e?.name} className="md:mb-0 mb-0.5">
                  {e?.name}
                </p>
              );
            })}
          </div>
          <div className="mb-5 md:mb-0 flex flex-col items-center md:items-start">
            <h1 className="font-semibold mb-1 text-lg">Connect With Us</h1>
            <p className="flex items-center mb-3">
              <FaFacebook size={25} className="mr-2" />
              @TruBuddies
            </p>
            <p className="flex items-center mb-3">
              <FaInstagram size={25} className="mr-2" />
              @TruBuddies
            </p>
            <p className="flex items-center mb-3">
              <FaTelegram size={25} className="mr-2" />
              @TruBuddies
            </p>
            <p className="flex items-center mb-3">
              <IoIosMail size={25} className="mr-2" />
              trubuddiesofficial@gmail.com
            </p>
          </div>
          <div className="mb-5 md:mb-0 flex flex-col items-center md:items-start">
            <h1 className="font-semibold mb-1 text-lg">
              Support and Resources
            </h1>
            {[
              { name: "Help or Support", route: "/" },
              { name: "Feedback", route: "/about" },
              { name: "Terms of Conditions", route: "/" },
              { name: "Trademark", route: "/" },
              { name: "Customer Care", route: "/" },
            ].map((e) => {
              return (
                <p key={e?.name} className="md:mb-0 mb-0.5">
                  {e?.name}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center md:w-11/12 md:items-end mt-[3vw]">
          <div className="flex items-center">
            <Image src={logo} alt="Logo" />
            <div className="ml-3">
              <h1 className="font-bold text-2xl">TruBuddies</h1>
              <p className="capitalize">The Buddy you need the most</p>
            </div>
          </div>
          <p className="mb-2 md:mt-0 mt-3">
            @2023 TruBuddy. All Rights Reserved
          </p>
        </div>
      </div>
      <div className="md:w-[23%] w-[80%] mx-auto md:mt-0 mt-5 bg-newLightBlue py-[4vw] md:py-[1.5vw] px-[1.5vw] rounded-3xl">
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
