import React from "react";
import { noto_sans } from "../Utils/font";
import logo from "@/app/Assets/Home/Logo Image.png";
import Image from "next/image";
import LeftDots from "../Elements/LeftDots";

import client1 from "@/app/Assets/Home/Images/Client 1.png";
import client2 from "@/app/Assets/Home/Images/Client 2.png";
import client3 from "@/app/Assets/Home/Images/Client 3.png";
import RightDots from "../Elements/RightDots";

const OurTrubuddies = () => {
  return (
    <div className="pt-[3vw]">
      <h1
        className={`uppercase text-center w-fit mx-auto text-2xl text-newTomato font-extrabold ${noto_sans.className} flex items-center`}
      >
        Our <Image src={logo} alt="Logo image" className="w-[2.5vw] mx-2" />{" "}
        Trubuddies
      </h1>
      <div className="w-full flex justify-between items-center relative bg-gradient-radial from-newLightBlue to-newDarkBlue px-[12vw] py-[3vw] mt-[2vw]">
        <LeftDots />
        {[{ image: client1 }, { image: client2 }, { image: client3 }].map(
          (e, i) => {
            return <Block data={e} key={i} />;
          }
        )}
        <RightDots />
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl border w-[20vw] py-[1.5vw] px-[2vw] flex flex-col items-center">
      <Image src={data?.image} alt="Image" className="w-[10vw]" />
      <h1 className="mt-2 text-xl font-semibold">Ayush Srivastava</h1>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, illum?
      </p>
      <button className="bg-newTomato w-full text-white py-1 rounded-md mt-5">
        Know More
      </button>
    </div>
  );
};

export default OurTrubuddies;
