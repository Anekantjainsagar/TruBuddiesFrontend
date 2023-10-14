"use client";
import React, { useState } from "react";
import faq from "@/app/Assets/Home/Images/FAQs.png";
import Image from "next/image";
import { noto_sans } from "../Utils/font";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const FAQs = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-evenly py-[8vw] md:py-[4vw] px-[5vw]">
      <div className="flex flex-col items-center">
        <h1
          className={`uppercase text-center w-fit mx-auto text-3xl md:text-4xl mb-[4vw] md:mb-[2vw] text-newBlue font-extrabold ${noto_sans.className}`}
        >
          FAQ&apos;s
        </h1>
        <Image src={faq} className="w-[28vw] md:block hidden" alt="FAQ" />
      </div>
      <div className="w-full md:w-[36vw] flex flex-col items-center justify-start border-black h-[57vh] md:h-[80vh] overflow-y-scroll">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
};

const Block = () => {
  const [view, setView] = useState(false);

  return (
    <div className="border-[3px] rounded-md border-newBlue w-full mb-2 cursor-pointer">
      <div
        className={`w-full px-3 md:px-4 py-2 flex items-center justify-between ${
          view ? "bg-gray-200" : "bg-transparent"
        }`}
        onClick={(e) => {
          setView(!view);
        }}
      >
        <p className="font-medium h-full mb-0 block">What is TruBuddy?</p>
        <div className="flex items-center justify-center">
          {view ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
      <p className={`px-4 py-1 ${view ? "block" : "hidden"}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
        dolore laboriosam aperiam in ipsam nihil commodi animi temporibus, aut.
      </p>
    </div>
  );
};

export default FAQs;
