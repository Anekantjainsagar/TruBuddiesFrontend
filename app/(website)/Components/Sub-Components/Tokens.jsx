"use client";
import Image from "next/image";
import React, { useContext } from "react";
import token from "../../Assets/coin exchange truebuddies-01 1.png";
import { noto_sans } from "../Utils/font";
import { useRouter } from "next/navigation";
import Context from "../../../Context/Context";
import { getCookie } from "cookies-next";

const Tokens = () => {
  const history = useRouter();
  const { setIsOpen } = useContext(Context);

  return (
    <div
      className={`md:h-[80vh] flex md:py-0 py-[10vw] md:flex-row flex-col justify-center items-center ${noto_sans.className}`}
    >
      <Image src={token} alt="Token image" className="md:w-4/12 md:mr-10" />
      <div className="md:w-6/12 md:ml-5 md:px-0 px-10">
        <h1 className="text-newBlue uppercase text-2xl font-bold">Tokens</h1>
        <p className="text-newDarkNavyGrey mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum minima
          eos nam eius commodi consequuntur cupiditate dicta, vel ducimus nisi!
          Quae excepturi iure temporibus, odit sit incidunt. Eum consequuntur
          officiis cumque aliquid possimus illum et excepturi quam, voluptatibus
          labore! Eum nostrum assumenda aut suscipit expedita modi dolore
          dolores, odio fugit veniam quasi incidunt. Laboriosam ullam
          exercitationem minus corrupti earum vero recusandae excepturi alias
          nulla numquam, ipsa cumque officiis sed? Nostrum est non harum eveniet
          quibusdam consectetur laborum vel perferendis hic!
        </p>
        <button
          onClick={(e) => {
            if (getCookie("token")) {
              history.push("/user/tokens");
            } else {
              setIsOpen(true);
            }
          }}
          className="bg-newBlue px-5 py-1 rounded-full text-white mt-4"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Tokens;
