import React from "react";
import { BsFilter } from "react-icons/bs";
import { Block } from "../Components/Sub-Components/OurTrubuddies";

const Trubuddies = () => {
  return (
    <div className="px-[4vw] bg-[#e9f3ff]">
      <div className="pt-[6vw] w-full flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Our TruBuddies</h1>
        <input
          type="search"
          placeholder="Search Here"
          className="bg-white outline-none px-3 rounded-lg w-[20vw] font-medium py-1"
        />
        <BsFilter size={30} />
      </div>
      <div className="px-1 grid grid-cols-4 gap-x-8 mt-4">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
};

export default Trubuddies;
