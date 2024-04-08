"use client";
import React from "react";
import { maliFont, noto_sans } from "../../../Components/Utils/font";
import token from "../../../Assets/token.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TokensHistory = () => {
  const history = useRouter();

  return (
    <div className={`px-12 ${noto_sans.className} py-4 mt-16`}>
      <h1 className="text-2xl text-newDarkBlue font-bold text-center">
        All Orders
      </h1>
      <Block coin={1} />
      <Block coin={5} />
      <button
        onClick={(e) => {
          history.push("/user/tokens");
        }}
        className="block mx-auto px-5 py-1 rounded-full bg-newDarkBlue text-white mb-5"
      >
        Check Balance
      </button>
    </div>
  );
};

const Block = ({ coin }) => {
  return (
    <div className="bg-gradient-to-br w-9/12 mx-auto my-5 md:w-11/12 flex justify-between items-center from-newDarkBlue rounded-2xl shadow-lg to-newOceanGreen p-1">
      <div className="from-[#ddebfd] flex items-center justify-between bg-gradient-to-br to-[#d4dffe] rounded-2xl px-[10vw] w-full h-full py-8">
        <div className="flex items-center">
          <Image src={token} alt="Token" className="w-[12vw] md:w-[6vw]" />
          <div className="ml-5 md:ml-[4vw]">
            <h1 className="font-semibold md:text-xl">{coin} Coin</h1>
            <p className="mt-2">Ordered on - 16/03/2024</p>
          </div>
        </div>
        <h1 className="font-medium text-lg md:text-2xl">₹{coin * 50}</h1>
      </div>
    </div>
  );
};

export default TokensHistory;
