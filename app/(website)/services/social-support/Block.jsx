import Image from "next/image";
import React from "react";

const Block = ({ data }) => {
  return (
    <div className="py-3 px-3 relative flex flex-col items-center justify-center cursor-pointer rounded-lg">
      <Image
        src={data?.thumbnail}
        width={1000}
        height={1000}
        alt={data?.thumbnail?.src}
        className="w-[15vw] rounded-md"
      />
      <p className="noto_sans mt-2 text-3xl font-semibold text-center">
        {data?.title}
      </p>
      <p className="text-lg text-center text-gray-700">
        {new Date(data?.date)?.toString()?.slice(0, 16)}
      </p>
      <p className="text-lg text-center text-gray-700">Time:- {data?.time}</p>
      {data?.location && (
        <p className="text-lg text-center text-gray-700">{data?.location}</p>
      )}
      <button className="w-8/12 py-1 text-lg mt-2 rounded-full font-semibold hover:text-newBlue hover:bg-transparent border-2 border-transparent hover:border-newBlue bg-newBlue text-white">
        Buy Pass
      </button>
    </div>
  );
};

export default Block;
