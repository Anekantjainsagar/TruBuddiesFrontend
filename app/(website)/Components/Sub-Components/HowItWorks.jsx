"use client";
import { noto_sans } from "../Utils/font";
import React, { useEffect } from "react";
import step1 from "../../Assets/Home/works/step 1.png";
import step2 from "../../Assets/Home/works/step 2.png";
import step3 from "../../Assets/Home/works/step 3.png";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="py-[3vw] px-[2vw] flex flex-col items-center">
      <h1
        className={`uppercase w-fit mx-auto text-2xl md:pr-20 text-newBlue font-bold ${noto_sans.className}`}
      >
        How It Works
      </h1>
      <div className="items-start md:flex hidden justify-center mt-[2vw] px-[5vw]">
        {[
          {
            title: "Create Your Profile",
            desc: "Set up your Anonymous Buddies profile – it's your personal mental well-being space.",
            image: step1,
          },
          {
            title: "Choose your TruBuddies",
            desc: " Explore the Our TruBuddies section and choose supportive companions for your journey.",
            image: step2,
          },
          {
            title: "Instant Connect",
            desc: "Connect instantly with your chosen Trubuddies, share thoughts, get support, and feel better together.",
            image: step3,
          },
        ].map((e, i) => {
          return (
            <div className="flex flex-col items-center justify-between" key={i}>
              <h1 className="font-semibold">{e?.title}</h1>
              <p className="w-9/12 text-center">{e?.desc}</p>
              <Image
                src={e?.image}
                alt={e?.image?.src}
                className="w-[14vw] mt-[1vw]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
