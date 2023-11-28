"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap, { Power4 } from "gsap";
import logo from "./Assets/Home/Logo Image.png";
import Image from "next/image";

const Loading = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setShowLoader(false);
    }
    window.addEventListener("load", () => {
      setShowLoader(false);
    });
  }, []);

  let logo_1 = useRef(null);
  const timeline = gsap.timeline();

  useEffect(() => {
    timeline
      .to(logo_1.current, {
        duration: 1,
        transition: Power4.easeInOut,
        delay: 2,
      })
      .to(
        logo_1.current,
        {
          opacity: 0,
          transition: Power4.easeInOut,
          duration: 0.5,
        },
        "-=0.4"
      );
  });

  return showLoader ? (
    <div className="h-[100vh] flex items-center justify-center text-3xl">
      <Image src={logo} alt={"logo"} className="animate w-[30vw]" />
    </div>
  ) : null;
};

export default Loading;
