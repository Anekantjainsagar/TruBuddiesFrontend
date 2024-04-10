"use client";
import React, { useContext, useState } from "react";
import { maliFont, noto_sans } from "../../Components/Utils/font";
import Context from "../../../Context/Context";
import Image from "next/image";
import male from "../../Assets/Home/icons/male.png";
import female from "../../Assets/Home/icons/female.png";
import token from "../../Assets/token.png";
import { FaHistory } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { cashfreeProd, cashfreeSandbox } from "cashfree-pg-sdk-javascript";
import { BASE_URL } from "../../Components/Utils/url";
import axios from "axios";

const Tokens = () => {
  const { login } = useContext(Context);
  const history = useRouter();

  return (
    <div className={`pt-16 md:pt-20 px-6 md:px-12 ${noto_sans.className}`}>
      <div className="flex mb-3 items-center justify-between">
        <p className="text-lg">Welcome Back 👋</p>
        <button
          onClick={(e) => {
            history.push("/user/tokens/history");
          }}
          className="shadow-md shadow-gray-400 text-sm md:text-base bg-newBlue text-white flex items-center px-4 py-1 rounded-full"
        >
          <FaHistory className="mr-1" /> Order History
        </button>
      </div>
      <div className="my-2 flex md:flex-row flex-col items-stretch px-2">
        <div className="bg-gradient-to-br flex flex-col items-center justify-center from-nb1 rounded-2xl shadow-lg p-4 to-nb2 w-full md:w-3/12 md:mr-5">
          <Image
            src={login?.profile}
            width={10000}
            height={10000}
            alt={"client"}
            className="w-5/12 aspect-squre object-cover border-4 border-newDarkBlue object-center rounded-full"
          />
          <h1 className="text-xl font-semibold mt-2">{login?.anonymous}</h1>
          <div className="border-2 px-2 md:px-4 py-0.5 flex items-center rounded-lg text-sm bg-white border-newDarkBlue w-fit mt-1">
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
            <h1 className="text-xl font-semibold">{login?.tokens} Coins</h1>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-semibold my-2 pt-5 pb-2 text-center">
        Buy Coins
      </h1>
      <div className="bg-gradient-to-br from-newDarkBlue rounded-2xl shadow-lg w-full to-newOceanGreen p-1 mb-10">
        <div className="from-[#ddebfd] flex flex-col items-center justify-center bg-gradient-to-br to-[#d4dffe] rounded-2xl w-full h-full py-8">
          <Block coin={1} type={true} />
          <div className="bg-gradient-to-r from-newDarkBlue to-newOceanGreen w-11/12 h-[2px] opacity-50 my-4"></div>
          <Block coin={1} />
          <div className="bg-gradient-to-r from-newDarkBlue to-newOceanGreen w-11/12 h-[2px] opacity-50 my-4"></div>
          <Block coin={5} />
        </div>
      </div>
      <div className="bg-gradient-to-br from-newDarkBlue rounded-2xl shadow-lg w-full to-newOceanGreen p-1 mb-10">
        <div className="from-[#ddebfd] flex flex-col items-center justify-center bg-gradient-to-br to-[#d4dffe] rounded-2xl w-full h-full py-8 md:px-[10vw]">
          <h1 className="font-bold text-newDarkBlue text-2xl text-center">
            TB Deals
          </h1>
          <DealBlock />
          <div className="bg-gradient-to-r from-newDarkBlue to-newOceanGreen w-11/12 md:w-full h-[2px] opacity-50 my-4"></div>
          <DealBlock />
          <div className="bg-gradient-to-r from-newDarkBlue to-newOceanGreen w-11/12 md:w-full h-[2px] opacity-50 my-4"></div>
          <DealBlock />
        </div>
      </div>
    </div>
  );
};

const DealBlock = () => {
  return (
    <div className="w-10/12 md:w-11/12 my-3">
      <p className="text-gray-600 md:text-base text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        distinctio. Minima adipisci magni, sequi provident, sint, nostrum
        incidunt dolores corrupti deleniti illum suscipit quaerat quia!
      </p>
      <div className="mt-2 md:mt-3 flex items-center">
        <button className="bg-newDarkBlue shadow-md shadow-gray-400 text-white mr-4 px-8 py-1 rounded-full">
          View
        </button>
        <div className="border-2 px-3 md:px-5 shadow-md shadow-gray-400 py-1 w-[25vw] md:text-base text-xs md:w-[8vw] items-center flex rounded-full border-newDarkBlue">
          <Image src={token} alt="Token" className="w-3/12 mr-3" />2 TB
        </div>
      </div>
    </div>
  );
};

const Block = ({ coin, type }) => {
  const [coins, setCoins] = useState(1);
  const { login } = useContext(Context);

  const checkout = () => {
    if (typeof document != undefined) {
      axios
        .post(`${BASE_URL}/token/place`, {
          amount: type ? coins : coin,
          user_id: login?._id,
        })
        .then((res) => {
          if (res.data?.payment_session_id) {
            let cashfree = new cashfreeSandbox.Cashfree(
              // let cashfree = new cashfreeProd.Cashfree(
              res?.data?.payment_session_id
            );
            cashfree.redirect();
            const cfCheckout = cashfree.elements();
            cfCheckout.elements({
              type: "upi-collect",
            });
            cfCheckout.pay("upi-collect");
          }
        })
        .catch((err) => {});
    } else {
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }
  };

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
                className="bg-green-500 rounded-full text-center shadow-md shadow-gray-400 outline-none border-none text-white px-1 md:px-4 mr-2 md:mr-4 w-[12vw] md:w-[5vw]"
              />
            )}
            <button
              onClick={checkout}
              className="text-white bg-newDarkBlue px-3 shadow-md shadow-gray-400 md:px-4 rounded-full"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <h1 className="font-medium text-lg md:text-2xl">
        ₹{type ? coins : coin}
      </h1>
    </div>
  );
};

export default Tokens;
