"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Block from "../Block";

const AllYoga = () => {
  return (
    <div className="flex items-center bg-gradient-to-r from-[#AAEEEA] via-[#CDFFFC] to-white justify-center pt-16">
      <div className="w-full pb-8">
        <h2 className="text-center text-2xl font-medium">
          Yoga&apos;s to try out
        </h2>
        <div className="mx-16 grid grid-cols-3">
          {["a", "b", "c", "d", "a", "b", "c", "d"]?.map((e, i) => {
            return <Block key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllYoga;
