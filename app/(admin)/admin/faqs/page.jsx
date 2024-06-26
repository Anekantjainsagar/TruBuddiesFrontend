"use client";
import React, { useState, useEffect } from "react";
import { maliFont, noto_sans } from "../../../(website)/Components/Utils/font";
import FaqAdd from "./model";
import axios from "axios";
import { BASE_URL } from "../../../(website)/Components/Utils/url";

const FAQs = () => {
  const [search, setSearch] = useState("");
  const [faq, setFaq] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .post(`${BASE_URL}/admin/get-faqs/`, { question: search })
      .then((response) => {
        setFaq(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5`}>
      {/* TOpbar */}
      <FaqAdd modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">FAQs</h1>
        <div className="flex items-center">
          <p className="mr-2">Filter</p>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            className="outline-none rounded-md border px-2 py-0.5"
            placeholder="Search Here"
          />
          <button
            onClick={(e) => {
              setIsOpen(!modalIsOpen);
            }}
            className="text-white bg-newBlue px-3 ml-3 py-1 rounded-md"
          >
            + Add New
          </button>
        </div>
      </div>
      <div>
        <div
          className="grid mt-5 font-semibold text-lg p-1"
          style={{ gridTemplateColumns: "20% 80%" }}
        >
          <p className="text-center">Question</p>
          <p className="text-center">Answer</p>
        </div>
      </div>
      <div className="mt-3 h-[80vh] overflow-scroll">
        {faq
          ?.filter((e) => {
            if (search) {
              return e?.question?.toLowerCase().includes(search.toLowerCase());
            }
            return e;
          })
          ?.map((e, i) => {
            return (
              <div
                key={i}
                className="grid py-1 mb-2 rounded-md items-center border p-1 cursor-pointer"
                style={{ gridTemplateColumns: "20% 80%" }}
              >
                <p className="text-center">{e?.question}</p>
                <p className="text-center px-10">{e?.answer}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FAQs;
