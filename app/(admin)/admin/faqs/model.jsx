"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import axios from "axios";
import { BASE_URL } from "../../../(website)/Components/Utils/url";

const customStyles = {
  overlay: {
    zIndex: 1001, // Adjust the value as needed
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #407BFF",
  },
};

const FaqAdd = ({ modalIsOpen, setIsOpen }) => {
  const [user, setUser] = useState({
    question: "",
    answer: "",
  });

  return (
    <div className="">
      <Toaster />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={customStyles}
      >
        <div>
          <h1 className="font-semibold text-newBlue text-center mb-4 text-xl">
            Add New Question
          </h1>
          <div className="flex flex-col justify-center">
            <input
              type="text"
              className="border outline-none px-4 py-1 mb-3 rounded-md w-[20vw]"
              placeholder="Question"
              value={user?.question}
              onChange={(e) => {
                setUser({ ...user, question: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Answer"
              value={user?.answer}
              onChange={(e) => {
                setUser({ ...user, answer: e.target.value });
              }}
              className="border outline-none px-4 py-1 mb-3 rounded-md w-[20vw]"
            />
            <button
              onClick={(e) => {
                if (!user?.question || !user?.answer) {
                  toast.error("Please fill all the details");
                } else {
                  axios
                    .post(`${BASE_URL}/admin/add-faq`, { ...user })
                    .then((res) => {
                      if (res.status == 200) {
                        toast.success("Question added successfully");
                        setIsOpen(false);
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }}
              className="bg-newBlue py-1 text-white rounded-md font-semibold"
            >
              Add
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FaqAdd;
