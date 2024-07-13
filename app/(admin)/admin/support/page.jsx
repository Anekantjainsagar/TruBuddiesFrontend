"use client";
import React, { useState, useEffect } from "react";
import { maliFont, noto_sans } from "../../../(website)/Components/Utils/font";
import { BASE_URL } from "../../../(website)/Components/Utils/url";
import axios from "axios";

const FAQs = () => {
  const [faq, setFaq] = useState([]);

  const getQueries = () => {
    axios
      .get(`${BASE_URL}/support/`)
      .then((response) => {
        setFaq(response.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getQueries();
  }, []);

  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5`}>
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">Support</h1>
      </div>
      <div>
        <div
          className="grid mt-5 font-semibold text-lg p-1"
          style={{ gridTemplateColumns: "13% 20% 13% 30% 5% 19%" }}
        >
          <p className="text-center">Name</p>
          <p className="text-center">Email</p>
          <p className="text-center">Contact</p>
          <p className="text-center">Message</p>
          <p className="text-center">Amount</p>
          <p className="text-center">Date</p>
        </div>
      </div>
      <div className="mt-3 h-[80vh] overflow-scroll">
        {faq?.map((e, i) => {
          return (
            <div
              key={i}
              className="grid py-2 mb-4 rounded-md items-center border px-1 cursor-pointer"
              style={{ gridTemplateColumns: "13% 20% 13% 30% 5% 19%" }}
            >
              <p className="text-center">{e?.name}</p>
              <p className="text-center px-10">{e?.email}</p>
              <p className="text-center px-10">{e?.phone}</p>
              <p className="text-center px-10">{e?.message}</p>
              <p className="text-center px-10">{e?.amount}</p>
              <p className="text-center px-10">
                {new Date(e?.createdAt).toString().slice(4, 21)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
