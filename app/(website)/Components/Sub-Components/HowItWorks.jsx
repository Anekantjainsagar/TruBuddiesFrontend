"use client";
import { noto_sans } from "../Utils/font";
import React, { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    const video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;
    // video.controls = true;
    const source = document.createElement("source");
    source.src = "/trubuddies.mp4";
    let videoElement = document.getElementById("video-container");
    if (!videoElement.innerHTML.includes("trubuddies")) {
      video.appendChild(source);
      document.getElementById("video-container").appendChild(video);
    }
  }, []);

  return (
    <div className="py-[3vw] px-[2vw] flex flex-col items-center">
      <h1
        className={`uppercase text-center w-fit mx-auto text-2xl text-newBlue font-bold ${noto_sans.className}`}
      >
        How It Works
      </h1>
      <div
        id="video-container"
        className="px-4 rounded-md mx-auto md:w-2/12 md:px-5 mt-3"
      ></div>
    </div>
  );
};

export default HowItWorks;
