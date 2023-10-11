import React from "react";
import ThingsLikeAboutUs from "./Components/Sub-Components/ThingsLikeAboutUs";
import HowItWorks from "./Components/Sub-Components/HowItWorks";
import OurTrubuddies from "./Components/Sub-Components/OurTrubuddies";
import OurServices from "./Components/Sub-Components/OurServices";
import LearnInspire from "./Components/Sub-Components/LearnInspire";
import FAQs from "./Components/Sub-Components/FAQs";
import OurTeam from "./Components/Sub-Components/OurTeam";
import BlueEffect from "./Components/Elements/BlueEffect";
import { noto_sans } from "./Components/Utils/font";

import redCircle from "@/app/Assets/Home/red circle.png";
import Image from "next/image";
import girl from "@/app/Assets/Home/Images/Rectangle.png";
import logo from "@/app/Assets/Home/Logo Image.png";

const App = () => {
  return (
    <div className="bg-newVeryLightBlue relative overflow-x-hidden">
      <div className={`homeBg flex justify-between items-center`}>
        <div className="flex items-end h-full justify-center">
          <Image src={girl} alt="Girl" className="w-9/12" />
        </div>
        <div
          className={`flex flex-col items-end w-6/12 pr-[4vw] ${noto_sans.className}`}
        >
          <h1
            className="text-7xl font-bold text-end text-newDarkNavyGrey relative"
            style={{ textShadow: "0px 5px 3px rgba(56, 56, 56,0.5)" }}
          >
            <Image
              src={redCircle}
              alt="Red circle"
              className="top-0 right-0 absolute w-[15vw]"
            />
            KEEP YOUR <span className="text-white">MIND</span> HEALTHY
          </h1>
          <p
            className="text-end mt-8 text-white pl-[7vw]"
            style={{ textShadow: "0px 3px 2px rgba(56, 56, 56,0.5)" }}
          >
            Lorem ipsum dolor sit amet consectetur. Semper id arcu scelerisque
            sed nulla curabitur gravida commodo mattis. Sem mauris quam nulla
            neque ac tortor iaculis in at. Orci sapien pretium sem diam. Quam
            faucibus amet nec viverra tellus sit orci pellentesque urna.
          </p>
          <div className="cursor-pointer flex items-center mt-[4vw] text-newDarkNavyGrey">
            <div className="bg-newYellow h-[4.5vw] w-[4.5vw] rounded-full z-20 flex justify-center items-center">
              <Image src={logo} alt="Logo" className="w-7/12" />
            </div>
            <div
              className="bg-newYellow h-[3.25vw] w-[15vw] rounded-xl -ml-7 pl-3 flex justify-center items-center text-xl font-bold"
              style={{ textShadow: "0px 3px 3px rgba(56, 56, 56,0.5)" }}
            >
              Chat With Buddy
            </div>
          </div>
        </div>
      </div>
      <BlueEffect />
      <ThingsLikeAboutUs />
      <HowItWorks />
      <OurTrubuddies />
      <OurServices />
      <LearnInspire />
      <FAQs />
      <OurTeam />
    </div>
  );
};

export default App;
