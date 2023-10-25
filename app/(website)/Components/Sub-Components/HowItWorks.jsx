import { noto_sans } from "../Utils/font";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="py-[3vw] px-[2vw]">
      <h1
        className={`uppercase text-center w-fit mx-auto text-2xl text-newBlue font-bold ${noto_sans.className}`}
      >
        How It Works
      </h1>
    </div>
  );
};

export default HowItWorks;
