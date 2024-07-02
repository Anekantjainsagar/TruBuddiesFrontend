"use client";
import Image from "next/image";
import thumb from "../../../Images/Services/meditation/block.png";
import { useRouter } from "next/navigation";

const Block = () => {
  const history = useRouter();

  return (
    <div
      onClick={(e) => {
        history.push("/services/meditation/om-chanting");
      }}
      className="border shadow-md my-5 text-black hover:text-white bg-transparent hover:bg-newDarkGreen cursor-pointer shadow-gray-400 w-fit p-2 border-gray-600 rounded-3xl mx-auto duration-500 hover:scale-105"
    >
      <Image src={thumb} alt="Yoga thumbnail" className="rounded-3xl" />
      <p className="text-center noto_sans font-semibold text-lg">Om Chanting</p>
    </div>
  );
};

export default Block;
