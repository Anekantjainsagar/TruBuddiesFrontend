"use client";
import React, { useContext, useState } from "react";
import { maliFont, noto_sans } from "../../Components/Utils/font";
import Context from "../../../Context/Context";
import Image from "next/image";
import male from "../../Assets/Home/icons/male.png";
import female from "../../Assets/Home/icons/female.png";
import token from "../../Assets/token.png";

const Tokens = () => {
  const { login } = useContext(Context);

  return (
    <div className={`pt-16 md:pt-20 px-6 md:px-12 ${noto_sans.className}`}>
      <p>Welcome Back 👋</p>
      <div className="my-2 flex md:flex-row flex-col items-stretch px-2">
        <div className="bg-gradient-to-br flex flex-col items-center justify-center from-nb1 rounded-2xl shadow-lg p-4 to-nb2 w-full md:w-3/12 md:mr-5">
          <Image
            src={login?.profile}
            width={10000}
            height={10000}
            alt={"client"}
            className="w-5/12 aspect-squre object-cover border-4 border-newBlue object-center rounded-full"
          />
          <h1 className="text-xl font-semibold mt-2">{login?.anonymous}</h1>
          <div className="border-2 px-2 md:px-4 py-0.5 flex items-center rounded-lg text-sm bg-white border-newBlue w-fit mt-1">
            {login?.gender?.toLowerCase() == "male" ? (
              <Image
                src={male}
                alt="Male"
                className="mr-1.5 md:mr-2 md:w-[1vw]"
              />
            ) : (
              <Image
                src={female}
                alt="Male"
                className="mr-1.5 md:mr-2 md:w-[1vw]"
              />
            )}
            {login?.gender}
          </div>
        </div>
        <div className="bg-gradient-to-br from-nb1 rounded-2xl shadow-lg to-nb2 flex items-center justify-center md:w-9/12 md:mt-0 md:py-0 py-5 mt-5 md:ml-5">
          <Image
            src={token}
            alt="Token"
            className="w-[15vw] md:w-[8vw]"
            width={1000}
            height={1000}
          />
          <div className="ml-3">
            <p>Current Balance</p>
            <h1 className="text-xl font-semibold">50 Coins</h1>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-semibold my-2 pt-5 pb-2 text-center">
        Buy Coins
      </h1>
      <div className="bg-gradient-to-br from-newBlue rounded-2xl shadow-lg w-full to-newOceanGreen p-1 mb-10">
        <div className="from-[#ddebfd] flex flex-col items-center justify-center bg-gradient-to-br to-[#d4dffe] rounded-2xl w-full h-full py-8">
          <Block coin={1} type={true} />
          <div className="bg-gradient-to-r from-newBlue to-newOceanGreen w-11/12 h-[2px] opacity-50 my-4"></div>
          <Block coin={1} />
          <div className="bg-gradient-to-r from-newBlue to-newOceanGreen w-11/12 h-[2px] opacity-50 my-4"></div>
          <Block coin={5} />
        </div>
      </div>
      <div className="bg-gradient-to-br from-newBlue rounded-2xl shadow-lg w-full to-newOceanGreen p-1 mb-10">
        <div className="from-[#ddebfd] flex flex-col items-center justify-center bg-gradient-to-br to-[#d4dffe] rounded-2xl w-full h-full py-8 px-[10vw]">
          <h1 className="font-bold text-newBlue text-2xl text-center">
            TB Deals
          </h1>
          <p className="text-newDarkNavyGrey text-center my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            tempore nostrum nemo quidem nisi, harum nobis et ab non qui libero
            repellendus sapiente explicabo eum saepe reprehenderit. Consequuntur
            eaque nesciunt doloremque nulla deserunt blanditiis, omnis iure
            mollitia saepe laborum labore itaque veniam consectetur soluta, modi
            voluptatem unde! Itaque voluptatum cum enim ducimus dolorum, modi
            dicta sint inventore eveniet qui nisi temporibus voluptate sequi
            voluptas omnis exercitationem,
          </p>
          <button className="bg-newBlue text-white px-5 py-1 rounded-full">
            Get Deal
          </button>
          <p className="text-newDarkNavyGrey text-center my-3 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            tempore nostrum nemo quidem nisi, harum nobis et ab non qui libero
            repellendus sapiente explicabo eum saepe reprehenderit. Consequuntur
            eaque nesciunt doloremque nulla deserunt blanditiis, omnis iure
            mollitia saepe laborum labore itaque veniam consectetur soluta, modi
            voluptatem unde! Itaque voluptatum cum enim ducimus dolorum, modi
            dicta sint inventore eveniet qui nisi temporibus voluptate sequi
            voluptas omnis exercitationem,
          </p>
          <button className="bg-newBlue text-white px-5 py-1 rounded-full">
            Get Deal
          </button>
        </div>
      </div>
    </div>
  );
};

const Block = ({ coin, type }) => {
  const [coins, setCoins] = useState(1);

  return (
    <div className="w-11/12 md:w-9/12 flex justify-between items-center">
      <div className="flex items-center">
        <Image src={token} alt="Token" className="w-[12vw] md:w-[6vw]" />
        <div className="ml-5 md:ml-[6vw]">
          {type ? (
            <h1 className="font-semibold md:text-xl">
              Enter the number of Coins
            </h1>
          ) : (
            <h1 className="font-semibold md:text-xl">{coin} Coin</h1>
          )}
          <div className="flex items-center mt-2">
            {type && (
              <input
                type="number"
                value={coins}
                onChange={(e) => {
                  setCoins(e.target.value);
                }}
                className="bg-green-500 rounded-full outline-none border-none text-white px-4 mr-4 w-[10vw] md:w-[5vw]"
              />
            )}
            <button className="text-white bg-newBlue px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <h1 className="font-medium text-lg md:text-2xl">
        ₹{type ? coins * 50 : coin * 50}
      </h1>
    </div>
  );
};

export default Tokens;
