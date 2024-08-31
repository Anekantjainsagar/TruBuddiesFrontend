"use client";
import Image from "next/image";
import React from "react";
import InputBlock from "../Component/InputBlock";
import NormalInputBlock from "../Component/NormalInputBlock";

function createArray(N) {
  return [...Array(N).keys()].map((i) => i + 1);
}

const DailyPlanner = () => {
  let now = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="mt-[4vw] py-5 px-16 relative h-[150vh]">
      <Image
        alt="Weekly planner bg"
        width={1000}
        height={1000}
        src={"/Services/diary/plain bg.png"}
        className="w-full absolute top-0 left-0"
      />
      <div className="relative top-0 left-0 z-20">
        <div className="w-full absolute top-16">
          <div className="w-full flex items-center justify-between">
            <h1 className="uppercase text-6xl text-newDarkPurple font-bold amarnath">
              {now.getDate()} {monthNames[now.getMonth()]}
            </h1>
            <h4 className="uppercase text-6xl text-newDarkPurple font-bold tinos">
              {now.getFullYear()}
            </h4>
          </div>
          <div className="w-full grid grid-cols-3 gap-x-[4vw] gap-y-[4vw] mt-2">
            <div className="mt-[5vw] flex flex-col items-center">
              <Image
                src={"/Services/diary/tasks text.png"}
                alt="Tasks"
                width={1000}
                height={1000}
                className="w-[16vw] mb-10"
              />
              {createArray(8).map((e) => {
                return <InputBlock key={e} className={"mb-5"} />;
              })}
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/Services/diary/do not forget.png"}
                alt="Do not forget"
                className="w-[14vw]"
                width={1000}
                height={1000}
              />{" "}
              <h6 className="poppins text-5xl font-semibold text-center pb-8 mt-10">
                Reminders
              </h6>{" "}
              {createArray(6).map((e) => {
                return (
                  <InputBlock key={e} className={"mb-5 w-10/12 mx-auto"} />
                );
              })}
            </div>
            <div className="mt-[5vw] bg-newLightPurple py-5 px-10">
              <h6 className="poppins text-5xl font-semibold text-center py-10">
                Notes
              </h6>{" "}
              {createArray(9).map((e) => {
                return <NormalInputBlock className="mb-5 w-full" key={e} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyPlanner;
