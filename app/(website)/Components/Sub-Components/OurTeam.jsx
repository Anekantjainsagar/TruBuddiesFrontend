import React from "react";
import { noto_sans } from "../Utils/font";

import client1 from "../../Assets/Home/team/client  (1).png";
import client2 from "../../Assets/Home/team/client  (2).png";
import client3 from "../../Assets/Home/team/client  (3).png";
import client4 from "../../Assets/Home/team/client  (4).png";
import client5 from "../../Assets/Home/team/client  (5).png";

import bg from "../../Assets/Home/team/Our team bg.png";

import Image from "next/image";

const OurTeam = () => {
  return (
    <div className="py-[7vw] md:py-[3vw] bg-white relative overflow-hidden">
      <Image
        src={bg}
        alt="Background"
        className="absolute top-0 left-0 h-full"
      />
      <h1
        className={`text-center w-fit mx-auto text-2xl md:text-3xl text-newDarkNavyGrey drop-shadow-4xl font-bold ${noto_sans.className}`}
        style={{ textShadow: "2px 2px 8px #b8baba" }}
      >
        Our Team
      </h1>
      <div className="relative mt-[5vw] md:mt-[3vw]">
        <div className="flex items-center justify-evenly">
          {[
            { image: client1, name: "Shubham", title: "Founder" },
            { image: client2, name: "Shubham", title: "Founder" },
            { image: client3, name: "Shubham", title: "Founder" },
          ].map((e, i) => {
            return <Block key={i} data={e} />;
          })}
        </div>
        <div className="flex items-center justify-evenly px-[10vw] -mt-0 md:-mt-16">
          {[
            { image: client4, name: "Shubham", title: "Founder" },
            { image: client5, name: "Shubham", title: "Founder" },
          ].map((e, i) => {
            return <Block key={i} data={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-full bg-gradient-to-t from-newBlue shadow-lg shadow-black to-newOceanGreen p-0.5 md:p-1">
        <Image src={data?.image} alt="Image" className="w-[20vw] md:w-[12vw]" />
      </div>
      <h1 className="text-lg md:text-xl font-semibold mt-2 mb-0">
        {data?.name}
      </h1>
      <p className="text-sm md:text-base">{data?.title}</p>
    </div>
  );
};

export default OurTeam;
