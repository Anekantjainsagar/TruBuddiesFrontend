"use client";
import React, { useState } from "react";
import faq from "../../Assets/Home/Images/FAQs.png";
import Image from "next/image";
import { noto_sans } from "../Utils/font";

import FAQComponent from "./FAQComponent";

import bg from "../../Assets/Home/Faq bg.png";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const FAQs = () => {
  const faqs = [
    {
      title: "Is it free to use?",
      value:
        "For now it is free to use.",
    },
    {
      title: "Can children under 16 years of age use TruBuddies?",
      value:
        "Children of Age group below 16 are suggested to join under parental guidance and agree to Terms and Conditions of Kids Rules.",
    },
    {
      title: "Is my data and Information safe with TruBuddies?",
      value:
        "Yes your data is completely safe with us none of the information is used by us. All information provided to us are kept private.",
    },
    {
      title: "Is calling safe here with TruBuddies?",
      value:
        "All your chats and calling are done anonymously are no personal information reaches to any TruBuddy.",
    },
    {
      title: "I having done payment still I am facing payment issues?",
      value:
        "We will try to resolve your problem under 3-7 days for refund or completion of your payment if the problem still is not resolved you can take help of customer support.",
    },
    {
      title: "Can i become a TruBuddies?",
      value:
        "Yes you can join us as a TruBuddy and can enjoy benefits of being of a Trubuddy. In order to become a TruBuddy contact us directly.",
    },
    {
      title:
        "What happens if I get a message that makes me uncomfortable or seems is taking my privacy?",
      value:
        "All TruBuddies are trusted and ensured people we ensure that nothing like such happens if any Trubuddy is found to do anything like such they will be permanently banned.",
    },
  ];

  return (
    <div className="flex md:flex-row faqBg flex-col items-center overflow-hidden relative justify-evenly py-[8vw] md:py-[3vw] px-[5vw]">
      <div className="flex flex-col items-center">
        <h1
          className={`uppercase text-center w-fit mx-auto text-2xl md:text-4xl mb-[4vw] md:mb-[2vw] text-newBlue font-bold ${noto_sans.className}`}
        >
          FAQ&apos;s
        </h1>
        <Image src={faq} className="w-[25vw] md:block hidden" alt="FAQ" />
      </div>
      <div className="w-full md:w-[36vw] flex flex-col py-2 items-center justify-start border-black h-[57vh] md:h-fit overflow-y-scroll">
        {faqs?.map((e, i) => {
          return <Block key={i} data={e} />;
        })}
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [view, setView] = useState(false);

  return (
    <div
      className={`border-[3px] rounded-md border-newBlue w-11/12 mb-2 mx-auto cursor-pointer hover:scale-105 transition-all ${
        view ? "bg-white" : ""
      }`}
      onClick={(e) => {
        setShowComingSoon(!showComingSoon);
      }}
    >
      <FAQComponent
        showComingSoon={showComingSoon}
        setShowComingSoon={setShowComingSoon}
        data={data}
      />
      <div
        className={`w-full px-3 md:px-4 py-2 flex items-center justify-between ${
          view ? "bg-white" : "bg-transparent"
        }`}
        onClick={(e) => {
          setView(!view);
        }}
      >
        <p className="font-medium h-full mb-0 block">{data?.title}</p>
        <div className="flex items-center justify-center">
          {view ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
