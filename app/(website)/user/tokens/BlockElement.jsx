"use client";
import React, { useState } from "react";
import { cashfreeProd, cashfreeSandbox } from "cashfree-pg-sdk-javascript";
import axios from "axios";
import { BASE_URL } from "../../Components/Utils/url";
import Image from "next/image";

const BlockElement = ({ coin, type }) => {
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

export default BlockElement;
