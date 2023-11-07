"use client";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

import logo from "../Assets/Home/Logo Image.png";
import cartoon from "../Assets/Login/cartoon.png";

import google from "../Assets/Login/Google logo.png";
import Context from "../../Context/Context";
import gsap, { Power2 } from "gsap/all";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "../Components/Utils/url";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { getCookie, setCookie } from "cookies-next";
import { maliFont, noto_sans } from "../Components/Utils/font";

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
    borderRadius: "1.5rem",
  },
};

const EditProfile = () => {
  const { showEditProfile, setShowEditProfile, login, getUser } =
    useContext(Context);
  const [user, setUser] = useState({
    name: "",
    email: "",
    profession: "",
    city: "",
    state: "",
    nationality: "",
  });

  useEffect(() => {
    setUser({
      name: login?.name,
      email: login?.email,
      profession: login?.profession,
      city: login?.city,
      state: login?.state,
      nationality: login?.nationality,
    });
  }, [login]);

  const onSubmit = () => {
    axios
      .post(`${BASE_URL}/login/update-user`, {
        ...user,
        token: getCookie("token"),
      })
      .then((res) => {
        if (res.status == 200) {
          getUser();
          setShowEditProfile(false);
          toast.success("Updated successfully");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className={`${noto_sans.className}`}>
      <Toaster />
      <Modal
        isOpen={showEditProfile}
        onRequestClose={() => {
          setShowEditProfile(false);
        }}
        style={customStyles}
      >
        <div
          className={`completeBg ${noto_sans.className} w-[35vw] flex flex-col items-center`}
        >
          <h1 className="text-2xl text-newBlue font-bold">
            Complete your Profile
          </h1>
          <div className="w-full mt-3">
            <h1 className="text-xl font-semibold">Personal Info </h1>
            <p>You are completely anonymous , nobody can see your details</p>
            <div className="grid grid-cols-2 mt-5">
              {[
                {
                  title: "Name",
                  value: user?.name,
                  onchange: (e) => {
                    setUser({ ...user, name: e.target.value });
                  },
                },
                {
                  title: "Email",
                  value: user?.email,
                  onchange: (e) => {
                    setUser({ ...user, email: e.target.value });
                  },
                },
                {
                  title: "Profession",
                  value: user?.profession,
                  onchange: (e) => {
                    setUser({ ...user, profession: e.target.value });
                  },
                },
                {
                  title: "City",
                  value: user?.city,
                  onchange: (e) => {
                    setUser({ ...user, city: e.target.value });
                  },
                },
                {
                  title: "State",
                  value: user?.state,
                  onchange: (e) => {
                    setUser({ ...user, state: e.target.value });
                  },
                },
                {
                  title: "Nationality",
                  value: user?.nationality,
                  onchange: (e) => {
                    setUser({ ...user, nationality: e.target.value });
                  },
                },
              ]?.map((e) => {
                return (
                  <div key={e?.title} className="mb-3 mx-auto">
                    <p className={`font-semibold`}>{e?.title} :</p>
                    <input
                      type="text"
                      placeholder={e?.title}
                      disabled={e?.title === "Name" || e?.title == "Email"}
                      value={e?.value}
                      onChange={e?.onchange}
                      className={`${
                        e?.title === "Name" || e?.title == "Email"
                          ? "text-gray-500"
                          : ""
                      }  border-2 px-3 py-1 rounded-lg outline-none mt-1 border-newBlue`}
                    />
                  </div>
                );
              })}
            </div>
            <button
              onClick={onSubmit}
              className="bg-newBlue px-7 py-1.5 shadow-md shadow-gray-400 text-white mx-auto block mt-2 rounded-lg font-semibold"
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditProfile;
