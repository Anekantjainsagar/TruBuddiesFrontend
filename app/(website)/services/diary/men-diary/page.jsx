"use client";
import Image from "next/image";
import React from "react";
import NormalInputBlock from "../Component/NormalInputBlock";

function createArray(N) {
  return [...Array(N).keys()].map((i) => i + 1);
}

const MenDiary = () => {
  return (
    <div className="mt-[4vw] py-5 px-16 relative h-[100vh]">
      <Image
        alt="Weekly planner bg"
        width={1000}
        height={1000}
        src={"/Services/diary/men bg.png"}
        className="w-4/12 absolute top-0 left-1/2 -translate-x-1/2 h-[94vh] object-cover"
      />
      <div className="relative w-4/12 h-[90vh] top-0 left-1/2 -translate-x-1/2">
        <Image
          src={"/Services/diary/skate.png"}
          width={1000}
          height={1000}
          alt="Skate"
          className="absolute w-[7vw] bottom-0 right-0 z-20"
        />
        <div className="w-full absolute top-36">
          {createArray(11).map((e) => {
            return (
              <NormalInputBlock key={e} className={"mb-5 w-9/12 mx-auto"} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenDiary;
