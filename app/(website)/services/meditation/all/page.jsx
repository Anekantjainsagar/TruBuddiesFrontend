"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import Block from "../Block";
import ServiceContext from "../../../../Context/ServiceContext";

const AllYoga = () => {
  const context = useContext(ServiceContext);

  return (
    <div className="flex items-center bg-gradient-to-r from-[#AAEEEA] via-[#CDFFFC] to-white justify-center pt-16">
      <div className="w-full pb-8">
        <h2 className="text-center text-2xl font-medium">
          Meditations for a peaceful and happy mind
        </h2>
        <div className="mx-16 grid grid-cols-3">
          {context?.meditations?.map((e, i) => {
            return <Block key={i} data={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllYoga;
