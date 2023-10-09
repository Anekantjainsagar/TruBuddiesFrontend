import React from "react";
import { noto_sans } from "../Utils/font";

import client1 from "@/app/Assets/Home/team/client  (1).png";
import client2 from "@/app/Assets/Home/team/client  (2).png";
import client3 from "@/app/Assets/Home/team/client  (3).png";
import client4 from "@/app/Assets/Home/team/client  (4).png";
import client5 from "@/app/Assets/Home/team/client  (5).png";
import Image from "next/image";

const OurTeam = () => {
  return (
    <div className="py-[3vw] bg-white">
      <h1
        className={`text-center w-fit mx-auto text-3xl text-newTomato font-extrabold ${noto_sans.className}`}
      >
        Our Team
      </h1>
      <div className="relative mt-[3vw]">
        <div className="flex items-center justify-evenly">
          {[
            { image: client1, name: "Shubham", title: "Founder" },
            { image: client2, name: "Shubham", title: "Founder" },
            { image: client3, name: "Shubham", title: "Founder" },
          ].map((e, i) => {
            return <Block key={i} data={e} />;
          })}
        </div>
        <div className="flex items-center justify-evenly px-[10vw] -mt-16">
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
      <Image src={data?.image} alt="Image" className="w-[13vw]" />
      <h1 className="text-xl font-semibold mt-2">{data?.name}</h1>
      <p>{data?.title}</p>
    </div>
  );
};

export default OurTeam;
