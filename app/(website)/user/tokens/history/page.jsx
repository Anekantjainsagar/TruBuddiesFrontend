"use client";
import React, { useContext } from "react";
import { maliFont, noto_sans } from "../../../Components/Utils/font";
import token from "../../../Assets/token.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Context from "../../../../Context/Context";

const TokensHistory = () => {
  const history = useRouter();
  const { login } = useContext(Context);

  return (
    <div className={`px-5 md:px-12 ${noto_sans.className} py-4 mt-16`}>
      <h1 className="text-2xl text-newDarkBlue font-bold text-center">
        All Orders
      </h1>
      {login?.orders?.map((e) => {
        return e && <Block data={e["id"]} />;
      })}
      {login?.orders?.length == 0 && (
        <div className="my-5 flex items-center justify-center text-xl">
          <p>There is no orders till now..</p>
        </div>
      )}
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

const Block = ({ data }) => {
  return (
    <div className="bg-gradient-to-br w-full mx-auto my-5 md:w-11/12 flex justify-between items-center from-newDarkBlue rounded-2xl shadow-lg to-newOceanGreen p-1">
      <div className="from-[#ddebfd] flex items-center justify-between bg-gradient-to-br to-[#d4dffe] rounded-2xl px-5 md:px-[10vw] w-full h-full py-4 md:py-8">
        <div className="flex items-center">
          <Image src={token} alt="Token" className="w-[15vw] md:w-[6vw]" />
          <div className="ml-2 md:ml-[3vw]">
            <h1 className="font-semibold text-lg md:text-xl">
              {data?.tokens} Coin
            </h1>
            <p className="mt-0 md:text-base text-sm md:mt-1.5">
              Ordered on - {new Date(data?.date).toString().slice(4, 16)}
            </p>
          </div>
        </div>
        <h1 className="font-medium text-lg md:text-2xl">₹ {data?.tokens}</h1>
      </div>
    </div>
  );
};

export default TokensHistory;
