"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InputBlock from "../Component/InputBlock";

function createArray(N) {
  return [...Array(N).keys()].map((i) => i + 1);
}

function createArrayZero(N) {
  return [...Array(N).keys()].map((i) => 0);
}

const MonthlyPlanner = () => {
  const [lastDayOfMonth, setLastDayOfMonth] = useState(0);
  const [firstDay, setFirstDay] = useState(0);
  let now = new Date();

  useEffect(() => {
    const day = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    setFirstDay(firstDayOfMonth.getDay());
    setLastDayOfMonth(day.getDate());
  }, []);

  return (
    <div className="mt-[4vw] py-5 px-16 relative h-[150vh]">
      <Image
        alt="Monthly planner bg"
        width={1000}
        height={1000}
        src={"/Services/diary/monthly planner bg.png"}
        className="w-full absolute top-0 left-0"
      />
      <div className="relative top-0 left-0 z-20">
        <Image
          src={"/Services/diary/tasks text.png"}
          alt="Task text"
          width={1000}
          height={1000}
          className="w-[20vw] right-8 absolute top-[12vw]"
        />
        <div className="absolute top-[18vw] w-full noto_sans flex items-start">
          <div className="w-8/12 grid grid-cols-7">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((e, i) => {
              return (
                <p key={i} className="text-center text-5xl py-10">
                  {e}
                </p>
              );
            })}
            {[...createArrayZero(firstDay), ...createArray(lastDayOfMonth)].map(
              (e, i) => {
                return (
                  <p
                    key={i}
                    className={`text-center text-5xl py-10 cursor-pointer ${
                      now.getDate() == e
                        ? "border-2 border-black text-black"
                        : "text-gray-600"
                    }`}
                  >
                    {e != 0 ? e : ""}
                  </p>
                );
              }
            )}
          </div>
          <div className="w-4/12">
            {createArray(7).map((e) => {
              return <InputBlock key={e} className="mt-[2vw] pl-[5vw] pr-5" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyPlanner;
