"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { noto_sans } from "../Utils/font";

import FAQComponent from "./FAQComponent";
import faq_img from "../../Assets/Home/Images/FAQs.png";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import axios from "axios";
import { BASE_URL } from "../Utils/url";

const FAQs = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    axios
      .post(`${BASE_URL}/admin/get-faqs`)
      .then((response) => {
        setFaq(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      id="faqs"
      className="flex md:flex-row faqBg flex-col items-center overflow-hidden relative justify-evenly py-[8vw] md:py-[3vw] px-[5vw]"
    >
      <div className="flex flex-col items-center">
        <h1
          className={`uppercase text-center w-fit mx-auto text-2xl md:text-4xl mb-[4vw] md:mb-[2vw] text-newBlue font-bold ${noto_sans.className}`}
        >
          FAQ&apos;s
        </h1>
        <Image src={faq_img} className="w-[25vw] md:block hidden" alt="FAQ" />
      </div>
      <div className="w-full md:w-[36vw] flex flex-col py-2 items-center justify-start border-black h-[57vh] md:h-fit overflow-y-scroll">
        {faq?.map((e, i) => {
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
        <p className="font-medium h-full mb-0 block">{data?.question}</p>
        <div className="flex items-center justify-center">
          {view ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
