import React from "react";
import Image from "next/image";
import MainComponent from "./MainComponent";

import left_img from "../../../Images/Services/yoga/final yoga 1 1.png";
import left_flower from "../../../Images/Services/yoga/flower 1 1.png";
import element from "../../../Images/Services/yoga/Group 198.png";
import butterfly from "../../../Images/Services/yoga/flower 2 1.png";
import thumbnail from "../../../Images/Services/yoga/thumbnail.png";

import why1 from "../../../Images/Services/yoga/why/why (1).png";
import why2 from "../../../Images/Services/yoga/why/why (2).png";
import why3 from "../../../Images/Services/yoga/why/why (3).png";
import why4 from "../../../Images/Services/yoga/why/why (4).png";

const Yoga = () => {
  return (
    <div className="bg-gradient-to-r from-[#AAEEEA] via-[#CDFFFC] to-white">
      <div className="bg_hero_img">
        <div
          className={`h-[100vh] w-full flex flex-col items-center justify-center noto_sans relative`}
        >
          <h1 className="text-8xl -mb-6 text-newDarkGreen text-center">Yoga</h1>
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
          <h2 className="text-2xl font-medium text-center">Why Yoga?</h2>
          <div className="flex items-center justify-evenly px-10 mt-6 relative">
            {[
              {
                img: why1,
                title: "Eases Anxiety",
              },
              {
                img: why2,
                title: "Improves sleep",
              },
              {
                img: why3,
                title: "Reduces stress",
              },
              {
                img: why4,
                title: "Lifts mood",
              },
            ].map((e, i) => {
              return (
                <div
                  className=" flex flex-col items-center justify-center w-[16vw] bg-gradient-to-b from-newOcean to-newBlue p-1 rounded-xl"
                  key={i}
                >
                  <div className="bg-white w-full h-full rounded-xl flex flex-col items-center pb-2">
                    <Image
                      src={e?.img}
                      alt="Ract"
                      className="mb-2 w-11/12 h-[20vh] object-contain"
                    />
                    <h1 className="font-semibold text-xl">{e?.title}</h1>
                  </div>
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

export default Yoga;
