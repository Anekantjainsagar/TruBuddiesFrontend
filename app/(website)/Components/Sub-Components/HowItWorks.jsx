"use client";
import { noto_sans } from "../Utils/font";
import React, { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    const video = document.createElement("video");
    video.autoplay = true;
    video.muted = true;

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
      <div className="flex justify-center items-center mt-4">
        <div className="mr-[5vw] w-[20vw] md:block hidden">
          {[
            {
              title: "Create Your Profile",
              desc: "Set up your Anonymous Buddies profile – it's your personal mental well-being space.",
            },
            {
              title: "Choose your TruBuddies",
              desc: " Explore the Our TruBuddies section and choose supportive companions for your journey.",
            },
            {
              title: "Instant Connect",
              desc: "Connect instantly with your chosen Trubuddies, share thoughts, get support, and feel better together.",
            },
          ].map((e, i) => {
            return (
              <div className="mb-3" key={i}>
                <h1 className="font-semibold">{e?.title}</h1>
                <p>{e?.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-gradient-to-br mx-5 from-newBlue md:w-[25vw] bg-white to-newOceanGreen rounded-xl p-2">
          <div
            id="video-container"
            className="rounded-md"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
