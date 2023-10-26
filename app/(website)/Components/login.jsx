import React from "react";
import Modal from "react-modal";
import Image from "next/image";

import logo from "../Assets/Home/Logo Image.png";
import cartoon from "../Assets/Login/cartoon.png";

import google from "../Assets/Login/Google logo.png";

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
    zIndex: 1001, // Adjust the value as needed
    borderRadius: "1.5rem",
  },
};

const LoginModal = ({ modalIsOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="z-50">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="w-[50vw] loginBg flex items-center justify-between">
          <div className="w-[45%] flex items-center justify-center">
            <Image src={cartoon} alt="Cartoon" className="w-[65%]" />
          </div>
          <div className="w-[3px] bg-newBlue h-[40vh] rounded-full"></div>
          <div className="w-[54%] flex flex-col items-center px-[1vw]">
            <div className="flex items-center">
              <Image src={logo} alt="Logo" className="w-[20%] mr-1.5" />
              <p className="text-2xl text-newBlue font-semibold">TruBuddies</p>
            </div>
            <div className="w-full mt-[2vw] px-2">
              <h1 className="text-xl text-newBlue font-semibold">Sign In</h1>
              <input
                type="text"
                placeholder="Enter Your Mail or Phone no."
                className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
              />
              <input
                type="text"
                placeholder="Password"
                className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
              />
              <div className="flex items-center justify-between">
                <button className="px-6 rounded-lg mt-3 font-semibold bg-newBlue text-white py-1">
                  Sign In
                </button>
                <p className="mt-2 text-sm">
                  Don’t have an account?
                  <span className="text-newBlue ml-1 cursor-pointer">
                    Register Now
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end w-full px-2 mt-1">
              <div className="flex items-center">
                <p className="text-sm">Or Login With</p>
                <Image
                  src={google}
                  alt="GOogle"
                  className="w-[1.75vw] ml-2 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;
