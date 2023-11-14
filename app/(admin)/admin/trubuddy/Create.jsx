"use client";
import React, { useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import Context from "../../../Context/Context";
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

const Create = ({ modalIsOpen, setIsOpen }) => {
  const { admin } = useContext(Context);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
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
            Add New Trubuddy
          </h1>
          <div className="flex flex-col justify-center">
            <input
              type="text"
              className="border outline-none px-4 py-1 mb-3 rounded-md w-[20vw]"
              placeholder="Name"
              value={user?.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Email"
              value={user?.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              className="border outline-none px-4 py-1 mb-3 rounded-md w-[20vw]"
            />
            <input
              type="text"
              placeholder="Password"
              value={user?.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              className="border outline-none px-4 py-1 mb-3 rounded-md w-[20vw]"
            />
            <button
              onClick={(e) => {
                if (!user?.name || !user?.email || !user?.password) {
                  toast.error("Please fill all the details");
                } else {
                  axios
                    .post(`${BASE_URL}/trubuddy/create`, { ...user })
                    .then((res) => {
                      if (res.status == 200) {
                        toast.success("Trubbuddy added successfully");
                        setIsOpen(false);
                        admin?.getAllTrubuddies();
                      } else {
                        toast.error(res.data.data);
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

export default Create;
