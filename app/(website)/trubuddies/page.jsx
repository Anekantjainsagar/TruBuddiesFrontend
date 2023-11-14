"use client";
import React, { useContext } from "react";
import { BsFilter } from "react-icons/bs";
import { Block } from "../Components/Sub-Components/OurTrubuddies";
import Context from "../../Context/Context";

const Trubuddies = () => {
  const { admin } = useContext(Context);

  return (
    <div className="px-[4vw] bg-[#e9f3ff]">
      <div className="pt-[16vw] md:pt-[6vw] w-full md:mt-0 mt-3 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-semibold">Our TruBuddies</h1>
        <input
          type="search"
          value={admin?.adminTrubuddyConfig}
          onChange={(e) => {
            admin?.setAdminTrubuddyConfig(e.target.value);
          }}
          placeholder="Search Here"
          className="bg-white outline-none md:px-3 px-2 rounded-lg w-[30vw] md:w-[20vw] font-medium py-1"
        />
        <BsFilter size={30} />
      </div>
      <div className="px-1 grid grid-cols-1 md:grid-cols-4 mt-4">
        {admin?.adminTrubuddies?.map((e) => {
          return <Block key={e?._id} data={e} big={true} />;
        })}
      </div>
    </div>
  );
};

export default Trubuddies;
