import React from "react";
import Image from "next/image";
import MainComponent from "./MainComponent";

import left_img from "../../../Images/Services/meditation/main.png";
import left_flower from "../../../Images/Services/yoga/flower 1 1.png";
import ract from "../../../Images/Services/yoga/ractangle (2).png";
import element from "../../../Images/Services/yoga/Group 198.png";
import butterfly from "../../../Images/Services/yoga/flower 2 1.png";
import thumbnail from "../../../Images/Services/yoga/thumbnail.png";

const Meditation = () => {
  return (
    <div className="bg-gradient-to-r from-[#A9B2FF] to-white">
      <div className="bg_hero_img">
        <div
          className={`h-[100vh] w-full flex flex-col items-center justify-center noto_sans relative`}
        >
          <h1 className="text-8xl -mb-6 text-[#0F163A] text-center">
            Meditation
          </h1>
          <Image
            src={left_img}
            alt={"Yoga hero images"}
            className="w-[40vw] self-end"
          />
          <Image
            src={left_flower}
            alt={"Flower in the left side"}
            className="absolute left-0 bottom-0 w-[20vw]"
          />
        </div>
        <div className="pt-28 pb-8">
          <h2 className="text-2xl font-medium text-center">Why Meditation?</h2>
          <div className="flex items-start justify-evenly px-10 mt-8 relative">
            {[
              {
                title: "Eases Anxiety",
                value:
                  "The breath training in yoga is effective in helping with anxiety.",
              },
              {
                title: "Improves sleep",
                value: "Yoga can improve sleep, and sleep efficiency too.",
              },
              {
                title: "Reduces stress",
                value:
                  "The tightening and relaxing of muscles helps in reducing stress. ",
              },
            ].map((e, i) => {
              return (
                <div
                  className=" flex flex-col items-center justify-center w-[24vw]"
                  key={i}
                >
                  <Image src={ract} alt="Ract" className="mb-2" />
                  <h1 className="font-semibold">{e?.title}</h1>
                  <p className="text-center">{e?.value}</p>
                </div>
              );
            })}
            <div className="absolute right-0 bottom-[-18vw]">
              <Image src={butterfly} alt="Butterfly" className="w-[16vw]" />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={element}
        alt="Flowers"
        className="h-[40vh] pr-[10vw] object-cover object-center"
      />
      <Image src={thumbnail} alt="Thumbnail" />
      <MainComponent />
    </div>
  );
};

export default Meditation;
