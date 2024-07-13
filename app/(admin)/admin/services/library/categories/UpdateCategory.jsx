"use client";
import React, { useState, useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import axios from "axios";
import { BASE_URL } from "../../../../../(website)/Components/Utils/url";
import ServiceContext from "../../../../../Context/ServiceContext";

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

const UpdateCategory = ({ modalIsOpen, setIsOpen, data }) => {
  const context = useContext(ServiceContext);
  const [user, setUser] = useState({
    title: "",
  });

  useEffect(() => {
    setUser({ title: data?.title });
  }, [data]);

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
            Update Book Category
          </h1>
          <div className="flex flex-col justify-center">
            <input
              type="text"
              className="border outline-none px-4 py-1 mb-3 rounded-md w-[20vw]"
              placeholder="Title"
              value={user?.title}
              onChange={(e) => {
                setUser({ ...user, title: e.target.value });
              }}
            />
            <button
              onClick={(e) => {
                if (!user?.title) {
                  toast.error("Please fill all the details");
                } else {
                  axios
                    .put(
                      `${BASE_URL}/services/library/update-category/${data?._id}`,
                      {
                        ...user,
                      }
                    )
                    .then((res) => {
                      if (res.status == 200) {
                        toast.success("Book Category updated successfully");
                        setIsOpen(false);
                        context?.setBookCategory(
                          context?.bookCategory.map((category) =>
                            category._id === data?._id ? res.data : category
                          )
                        );
                      } else {
                        toast.error("Error occured");
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }}
              className="bg-newBlue py-1 text-white rounded-md font-semibold"
            >
              Update
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateCategory;
