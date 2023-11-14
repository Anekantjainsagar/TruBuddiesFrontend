"use client";
import React, { useContext, useState, useEffect } from "react";
import { maliFont, noto_sans } from "../../../(website)/Components/Utils/font";
import Context from "../../../Context/Context";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { BASE_URL } from "../../../(website)/Components/Utils/url";
import { getCookie } from "cookies-next";
import toast, { Toaster } from "react-hot-toast";
import Create from "./Create";

const TruBuddyProfile = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { admin } = useContext(Context);

  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5`}>
      {/* TOpbar */}
      <Create modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">TruBuddies Profile</h1>
        <div className="flex items-center">
          <p className="mr-2">Filter</p>
          <input
            type="search"
            value={admin?.adminTrubuddyConfig}
            onChange={(e) => {
              admin?.setAdminTrubuddyConfig(e.target.value);
            }}
            className="outline-none rounded-md border px-2 py-0.5"
            placeholder="Search Here"
          />
          <button
            onClick={(e) => {
              setIsOpen(true);
            }}
            className="text-white bg-newBlue px-3 ml-3 py-1 rounded-md"
          >
            + Add New
          </button>
        </div>
      </div>
      <div>
        <div
          className="grid mt-5"
          style={{ gridTemplateColumns: "12% 17% 15% 15% 15% 12% 13%" }}
        >
          <p className="text-center">Name</p>
          <p className="text-center">Email Id</p>
          <p className="text-center">Phone no</p>
          <p className="text-center">Password</p>
          <p className="text-center">Location</p>
          <p className="text-center">Gender</p>
          <p className="text-center">Status</p>
        </div>
      </div>
      <div className="mt-3 h-[80vh] pt-2 overflow-scroll">
        {admin?.adminTrubuddies?.map((e, i) => {
          return <Block key={i} e={e} i={i} />;
        })}
      </div>
    </div>
  );
};

const Block = ({ e, i }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [stage, setStage] = useState(e?.stage);

  useEffect(() => {
    setStage(e?.stage); //
  }, [e]);

  return (
    <div
      className={`grid py-2 mb-2 rounded-md break-all ${
        i % 2 !== 0 ? "" : "bg-gray-200 items-center"
      }`}
      style={{ gridTemplateColumns: "12% 17% 15% 15% 15% 12% 13%" }}
    >
      <Toaster />
      <p className="text-center px-2">{e?.name}</p>
      <p className="text-center px-4">{e?.email}</p>
      <p className="text-center">{e?.phone}</p>
      <div className="text-center flex items-center justify-center px-2">
        <input
          type={showPassword ? "text" : "password"}
          className="w-[80%] bg-transparent"
          disabled
          value={e?.password}
        />
        <div
          className="w-[15%] cursor-pointer"
          onClick={(e) => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <AiOutlineEye size={25} />
          ) : (
            <AiOutlineEyeInvisible size={25} />
          )}
        </div>
      </div>
      <p className="text-center">
        {e?.city}, {e?.state}
      </p>
      <p className="text-center">{e?.gender}</p>
      <p className="text-center">
        <select
          name=""
          id=""
          value={stage}
          className="outline-none px-3 rounded-md"
          onChange={(e) => {
            setStage(e.target.value);
            axios
              .post(`${BASE_URL}/trubuddy/stage`, {
                stage: e.target.value,
                token: getCookie("trubuddy_token"),
              })
              .then((res) => {
                if (res.status == 200) {
                  toast.success("Status updated successfully");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <option value="Active" className="Active">
            Active
          </option>
          <option value="Inactive" className="Inactive">
            Inactive
          </option>
        </select>
      </p>
    </div>
  );
};

export default TruBuddyProfile;
