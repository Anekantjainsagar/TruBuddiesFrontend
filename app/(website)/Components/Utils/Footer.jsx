"use client";
import React, { useContext, useState } from "react";
import { noto_sans } from "./font";

import logo from "../../Assets/Home/Logo Image.png";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import Context from "../../../Context/Context";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "./url";

const Footer = () => {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { setScrollTo, socialMedia } = useContext(Context);
  const pathname = usePathname();
  const history = useRouter();

  return (
    <div
      id="contact"
      className={`py-[3vw] bg-gradient-to-br from-newBlue from-60% to-newOcean md:py-[2vw] text-white px-[2vw] flex md:flex-row flex-col justify-between ${
        noto_sans.className
      } ${pathname?.includes("chats") ? "hidden" : "block"}`}
    >
      <Toaster />
      <div className="w-full md:w-8/12">
        <div className="flex md:flex-row flex-col items-center md:items-start justify-between">
          <div className="flex flex-col md:items-start md:mb-0 mb-5 items-center">
            <h1 className="font-semibold mb-1 text-lg">Quick Links:</h1>
            {[
              { name: "Home", route: "/" },
              { name: "About us", route: "/about" },
              { name: "FAQs", route: "/" },
              { name: "Terms & Conditions", route: "/policies/terms" },
              { name: "Privacy Policy", route: "/policies/privacy" },
              { name: "Community Guidelines", route: "/" },
              {
                name: "Cancellation & Refund Policy",
                route: "/policies/cancellation",
              },
            ].map((e, i) => {
              return (
                <p
                  onClick={(el) => {
                    if (pathname !== e?.route) {
                      setScrollTo(e?.name?.toLowerCase().replaceAll(" ", ""));
                      history.push(e?.route);
                    } else {
                      let id = e?.name?.toLowerCase().replaceAll(" ", "");
                      let element = document.getElementById(id);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  key={i}
                  className="md:mb-0 mb-0.5 cursor-pointer"
                >
                  {e?.name}
                </p>
              );
            })}
          </div>
          <div className="mb-5 md:mb-0 flex flex-col items-center md:items-start">
            <h1 className="font-semibold mb-1 text-lg">Connect With Us</h1>
            <Link
              target="__blank"
              href={"mailto:trubuddiesofficial@gmail.com"}
              className="flex items-center mb-3"
            >
              <IoIosMail size={25} className="mr-2" />
              trubuddiesofficial@gmail.com
            </Link>
            {socialMedia && (
              <div className="flex items-center">
                <Link
                  href={socialMedia?.whatsapp}
                  target="__blank"
                  className="flex items-center mb-3"
                >
                  <BsWhatsapp size={25} className="mr-3" />
                </Link>
                <Link
                  href={socialMedia?.facebook}
                  target="__blank"
                  className="flex items-center mb-3"
                >
                  <FaFacebook size={25} className="mr-3" />
                </Link>
                <Link
                  href={socialMedia?.instagram}
                  target="__blank"
                  className="flex items-center mb-3"
                >
                  <FaInstagram size={25} className="mr-3" />
                </Link>
                <Link
                  href={socialMedia?.linkedin}
                  target="__blank"
                  className="flex items-center mb-3"
                >
                  <BsLinkedin size={25} className="mr-3" />
                </Link>
                <Link
                  href={socialMedia?.telegram}
                  target="__blank"
                  className="flex items-center mb-3"
                >
                  <FaTelegram size={25} className="mr-3" />
                </Link>
              </div>
            )}
          </div>
          <div className="mb-5 md:mb-0 flex flex-col items-center md:items-start">
            <h1 className="font-semibold mb-1 text-lg">
              Support and Resources
            </h1>
            <Link
              target="__blank"
              href={"mailto:trubuddiesofficial@gmail.com"}
              className="flex items-center"
            >
              <p className="md:mb-0 cursor-pointer mb-0.5">
                {"Help & Support"}
              </p>
            </Link>
            {[
              { name: "Terms & Conditions", route: "/policies/terms" },
              { name: "Privacy Policy", route: "/policies/privacy" },
              {
                name: "Cancellation & Refund Policy",
                route: "/policies/cancellation",
              },
            ].map((e, i) => {
              return (
                <p
                  key={i}
                  onClick={() => {
                    history.push(e?.route);
                  }}
                  className="md:mb-0 cursor-pointer mb-0.5"
                >
                  {e?.name}
                </p>
              );
            })}
            <Link
              target="__blank"
              href={"https://api.whatsapp.com/send?phone=918088621858"}
              className="flex items-center"
            >
              <p className="md:mb-0 cursor-pointer mb-0.5">{"Customer Care"}</p>
            </Link>
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
          Add an Enquiry / Feedback
        </h1>
        <input
          type="text"
          value={query?.name}
          onChange={(e) => {
            setQuery({ ...query, name: e.target.value });
          }}
          placeholder="First Name"
          className="border-b bg-transparent outline-none text-white px-3 pb-1 w-full mt-3 placeholder-slate-200"
        />
        <input
          type="text"
          value={query?.email}
          onChange={(e) => {
            setQuery({ ...query, email: e.target.value });
          }}
          placeholder="Email Address"
          className="border-b bg-transparent outline-none text-white px-3 pb-1 w-full mt-4 placeholder-slate-200"
        />
        <input
          type="text"
          value={query?.phone}
          onChange={(e) => {
            setQuery({ ...query, phone: e.target.value });
          }}
          placeholder="Contact Number"
          className="border-b bg-transparent outline-none text-white px-3 pb-1 w-full mt-4 placeholder-slate-200"
        />
        <input
          type="text"
          value={query?.message}
          onChange={(e) => {
            setQuery({ ...query, message: e.target.value });
          }}
          placeholder="Message"
          className="border-b bg-transparent outline-none text-white px-3 pb-1 w-full mt-4 placeholder-slate-200"
        />
        <button
          onClick={(e) => {
            if (
              !query?.email ||
              !query?.phone ||
              !query?.message ||
              !query?.name
            ) {
              toast.error("Please fill all the details");
            } else {
              axios
                .post(`${BASE_URL}/support/query`, { ...query })
                .then((res) => {
                  if (res.status === 200) {
                    toast.success("Submitted Successful");
                    setQuery({ name: "", email: "", phone: "", message: "" });
                  } else {
                    toast.error(res.data.data);
                  }
                })
                .catch((err) => {
                  toast.error(err.message);
                });
            }
          }}
          className="bg-newBlue px-6 py-1 rounded-xl mt-4 block mx-auto"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Footer;
