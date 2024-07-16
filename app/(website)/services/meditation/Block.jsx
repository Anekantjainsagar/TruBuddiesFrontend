"use client";
import Image from "next/image";
import thumb from "../../../Images/Services/meditation/block.png";
import { useRouter } from "next/navigation";

const Block = ({ data }) => {
  const history = useRouter();

  return (
    <div
      onClick={(e) => {
        history.push(`/services/meditation/${data?._id}`);
      }}
      className="border shadow-md my-5 text-black hover:text-white bg-transparent hover:bg-newDarkGreen cursor-pointer shadow-gray-400 w-[20vw] p-2 border-gray-600 rounded-3xl mx-auto duration-500 hover:scale-105"
    >
      <Image
        src={data?.thumbnail}
        width={1000}
        height={1000}
        alt="Yoga thumbnail"
        className="rounded-3xl"
      />
      <p className="text-center noto_sans font-semibold text-lg">
        {data?.title}
      </p>
    </div>
  );
};

export default Block;
