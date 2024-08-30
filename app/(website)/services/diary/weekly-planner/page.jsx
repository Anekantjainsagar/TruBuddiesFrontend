"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InputBlock from "../Component/InputBlock";

function createArray(N) {
  return [...Array(N).keys()].map((i) => i + 1);
}

function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

const WeeklyPlanner = () => {
  const [weekl, setWeekl] = useState(0);
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

  useEffect(() => {
    setWeekl(getWeekNumber(now));
  }, []);

  return (
    <div className="mt-[4vw] py-5 px-16 relative h-[150vh]">
      <Image
        alt="Weekly planner bg"
        width={1000}
        height={1000}
        src={"/Services/diary/weekly planner bg.png"}
        className="w-full absolute top-0 left-0"
      />
      <div className="relative top-0 left-0 z-20">
        <div className="w-full absolute top-16">
          <div className="w-full amarnath flex items-center justify-between">
            <h1 className="uppercase text-8xl text-newSlate font-bold">
              Weekly Planner
            </h1>
            <p className="text-3xl text-newSlate font-semibold">
              Week {weekl} of {monthNames[now.getMonth()]} {now.getFullYear()}
            </p>
          </div>
          <div className="w-full flex items-start mt-[4vw]">
            <div className="w-9/12 grid grid-cols-3 gap-x-[4vw] gap-y-[4vw]">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((e, i) => {
                return (
                  <div key={i} className="w-full maliFont">
                    <h1 className="text-center text-4xl bg-newBgSlate w-full py-2">
                      {e}
                    </h1>
                    {createArray(5).map((e, i) => {
                      return <InputBlock key={i} className={"mt-6"} />;
                    })}
                  </div>
                );
              })}
            </div>
            <div className="w-3/12 pl-[4vw]">
              <div className="w-full maliFont">
                <h1 className="text-center text-4xl bg-newBgSlate w-full py-2">
                  Sunday
                </h1>
                {createArray(8).map((e, i) => {
                  return <InputBlock key={i} className={"mt-6"} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyPlanner;
