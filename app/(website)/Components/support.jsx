"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import Image from "next/image";

import logo from "../Assets/Home/Logo Image.png";

import Context from "../../Context/Context";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "../Components/Utils/url";
import { useRouter } from "next/navigation";
import qr from "../Assets/qr.png";

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

const SupportUs = () => {
  const [login, setLogin] = useState({
    email: "",
    name: "",
    phone: "",
    amount: "",
    message: "",
  });
  const { showSupportUs, setShowSupportUs } = useContext(Context);

  const onLogin = () => {
    if (!login?.email || !login?.phone || !login?.name || !login?.amount) {
      toast.error("Please fill all the details");
    } else {
      axios
        .post(`${BASE_URL}/support/`, { ...login })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Submitted Successful");
          } else {
            toast.error(res.data.data);
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  // const qr = useRef(null);

  // const qrCode = new QRCodeStyling({
  //   width: 150,
  //   height: 150,
  //   data: `https://trubuddies.com`,
  //   margin: 0,
  //   image: logo,
  //   qrOptions: { typeNumber: "0", mode: "Byte", errorCorrectionLevel: "Q" },
  //   imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
  //   dotsOptions: { type: "dots", color: "#074f97", gradient: null },
  //   backgroundOptions: { color: "#ffffff", gradient: null },
  //   dotsOptionsHelper: {
  //     colorType: { single: true, gradient: false },
  //     gradient: {
  //       linear: true,
  //       radial: false,
  //       color1: "#6a1a4c",
  //       color2: "#6a1a4c",
  //       rotation: "0",
  //     },
  //   },
  //   cornersSquareOptions: { type: "extra-rounded", color: "#032f5e" },
  //   cornersSquareOptionsHelper: {
  //     colorType: { single: true, gradient: false },
  //     gradient: {
  //       linear: true,
  //       radial: false,
  //       color1: "#000000",
  //       color2: "#000000",
  //       rotation: "0",
  //     },
  //   },
  //   cornersDotOptions: { type: "", color: "#042f5e" },
  //   cornersDotOptionsHelper: {
  //     colorType: { single: true, gradient: false },
  //     gradient: {
  //       linear: true,
  //       radial: false,
  //       color1: "#000000",
  //       color2: "#000000",
  //       rotation: "0",
  //     },
  //   },
  //   backgroundOptionsHelper: {
  //     colorType: { single: true, gradient: false },
  //     gradient: {
  //       linear: true,
  //       radial: false,
  //       color1: "#ffffff",
  //       color2: "#ffffff",
  //       rotation: "0",
  //     },
  //   },
  // });

  // useEffect(() => {
  //   qrCode.update({
  //     data: `https://trubuddies.com`,
  //   });
  //   if (!qr?.current?.innerHTML.includes("canvas")) {
  //     qrCode.append(qr.current);
  //   }
  // }, []);

  return (
    <div className="z-50">
      <Toaster />
      <Modal
        isOpen={showSupportUs}
        onRequestClose={(e) => {
          setShowSupportUs(!showSupportUs);
        }}
        style={customStyles}
      >
        <div className="w-[70vw] md:w-[50vw] loginBg flex md:flex-row flex-col-reverse items-center justify-between overflow-hidden">
          <div className="md:w-[45%] w-[80%] md:mt-0 mt-5 flex items-center justify-center">
            <Image src={qr} alt="Cartoon" className="w-[90%] md:w-[65%]" />
            {/* <div ref={qr} className="bg-white p-1.5 rounded-lg"></div> */}
          </div>
          <div className="w-full md:block hidden md:w-[3px] bg-newBlue h-[1px] md:h-[40vh] md:my-0 my-5 rounded-full"></div>
          <div
            className={`md:w-[54%] flex flex-col items-center px-[1vw]`}
            id="login"
          >
            <div className="flex items-center">
              <Image src={logo} alt="Logo" className="w-[20%] mr-1.5" />
              <p className="text-2xl text-newBlue font-semibold">TruBuddies</p>
            </div>
            <div className="w-full mt-[2vw] px-2">
              <h1 className="text-xl text-newBlue font-semibold">Support Us</h1>
              <input
                type="text"
                value={login?.name}
                onChange={(e) => {
                  setLogin({ ...login, name: e.target.value });
                }}
                placeholder="Enter your Name"
                className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
              />
              <input
                type="text"
                value={login?.email}
                onChange={(e) => {
                  setLogin({ ...login, email: e.target.value });
                }}
                placeholder="Enter Your Mail"
                className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
              />
              <input
                type="text"
                value={login?.phone}
                onChange={(e) => {
                  setLogin({ ...login, phone: e.target.value });
                }}
                placeholder="Enter Your Phone no."
                className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
              />
              <input
                type="number"
                value={login?.amount}
                onChange={(e) => {
                  setLogin({ ...login, amount: e.target.value });
                }}
                placeholder="Enter Amount in (Rs.)"
                className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
              />
              <input
                type="text"
                value={login?.message}
                onChange={(e) => {
                  setLogin({ ...login, message: e.target.value });
                }}
                placeholder="Enter Message"
                className="w-full outline-none bg-[#e5f1ff] px-4 py-1.5 mt-3 rounded-lg"
              />
              <div className="flex md:flex-row flex-col items-center justify-between">
                <button
                  onClick={onLogin}
                  className="px-6 rounded-lg mt-3 font-semibold bg-newBlue text-white py-1"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SupportUs;
