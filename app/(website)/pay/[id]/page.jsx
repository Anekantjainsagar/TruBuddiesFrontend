"use client";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../../Components/Utils/url";
import Context from "../../../Context/Context";

const PayCheck = ({ params }) => {
  const history = useRouter();
  const { login, getUser } = useContext(Context);
  const { id } = params;
  const [orderDetails, setOrderDetails] = useState();
  const [paymentRequested, setPaymentRequested] = useState(false);

  useEffect(() => {
    if (login && !paymentRequested) {
      window.scrollTo(0, 0);
      setPaymentRequested(true);
      axios
        .post(`${BASE_URL}/token/get/${id}`)
        .then((res) => {
          if (res?.data?._id) {
            setOrderDetails(res.data);
            axios
              .post(`${BASE_URL}/token/payment`, {
                amount: res?.data?.amount,
                order_id: id,
              })
              .then((res) => {
                if (res.status === 200) {
                  getUser();
                  history.push("/");
                } else if (res.status === 203) {
                  history.push("/");
                }
              })
              .catch((err) => {
                console.log(err);
              })
              .finally(() => {});
          } else {
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id, login, paymentRequested]);

  return (
    <div className="overflow-x-hidden py-14">
      <div className="w-full flex flex-col items-center justify-center mt-[3.5vw] text-grey">
        <div className="mobile:w-[50%] md:w-[20%] mx-auto">
          <Player
            src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
            className="player"
            loop
            autoplay
            speed={10}
          />
        </div>
        <h1 className="text-2xl text-brown md:text-4xl py-3 mt-1 font-bold">
          Your Order is Processing!
        </h1>
        <div className="flex items-center justify-between mobile:w-[80%] md:w-[25%]">
          <p>Amount Paid </p>
          <p className="flex items-center text-lg font-semibold">
            <BsCurrencyRupee />
            {orderDetails?.amount} /-
          </p>
        </div>
        <button
          onClick={(e) => {
            history.push("/");
          }}
          className="bg-brown text-white px-6 py-1.5 rounded-lg mt-4 md:mt-4 cursor-pointer"
        >
          Home Page
        </button>
      </div>
    </div>
  );
};

export default PayCheck;
