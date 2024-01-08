"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import Image from "next/image";
import image from "../(website)/Assets/Home/Images/Rectangle 20.png";
import { AiOutlineClose } from "react-icons/ai";
import Context from "../Context/Context";

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
    zIndex: 1001, // Adjust the value as
    padding: 0,
  },
};

const Advertisement = ({ showAd, setShowAd }) => {
  const { popups } = useContext(Context);

  return (
    <div className="z-50 ">
      <Modal
        isOpen={showAd && popups?.popup?.photo}
        onRequestClose={(e) => {
          setShowAd(!showAd);
        }}
        style={customStyles}
      >
        <div className="w-[60vw] h-[50vh] relative overflow-hidden">
          <Image
            src={popups?.popup?.photo}
            width={100}
            height={100}
            alt={"Image"}
            className="object-cover w-full h-full object-center rounded-lg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Advertisement;
