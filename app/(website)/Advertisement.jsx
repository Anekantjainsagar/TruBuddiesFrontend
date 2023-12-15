"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import Image from "next/image";
import image from "../(website)/Assets/Home/Images/Rectangle 20.png";
import { AiOutlineClose } from "react-icons/ai";

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
  return (
    <div className="z-50 ">
      <Modal
        isOpen={showAd}
        onRequestClose={(e) => {
          setShowAd(!showAd);
        }}
        style={customStyles}
      >
        <div className="w-[60vw] h-[50vh] relative overflow-hidden">
          <Image
            src={image}
            alt={"Image"}
            className="object-cover w-full h-full object-center rounded-lg"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Advertisement;
