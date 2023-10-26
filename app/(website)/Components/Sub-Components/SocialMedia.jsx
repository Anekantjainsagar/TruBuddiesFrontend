"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import pink from "../../Assets/Home/icons/Frame 8.png";
import gsap, { Power2 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SocialMedia = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // const timeline = gsap.timeline();
    // timeline.fromTo(
    //   "#pinkBg",
    //   { y: -500 },
    //   {
    //     y: 0,
    //     duration: 1,
    //     ease: Power2.easeInOut,
    //     scrollTrigger: {
    //       trigger: "#block",
    //       markers: true,
    //       start: "top 50%",
    //     },
    //   }
    // );
  }, []);

  return (
    <div className="relative h-[50vh] dotsBg overflow-hidden" id="block">
      <Image src={pink} alt="Pink bg" className="absolute" id="pinkBg" />
    </div>
  );
};

export default SocialMedia;
