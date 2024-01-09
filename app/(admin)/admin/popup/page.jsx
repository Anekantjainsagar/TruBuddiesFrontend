"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Context from "../../../Context/Context";
import axios from "axios";
import { BASE_URL } from "../../../(website)/Components/Utils/url";
import toast, { Toaster } from "react-hot-toast";

const Popup = () => {
  const [image, setImage] = useState("");
  const { popups } = useContext(Context);

  return (
    <div className="h-full p-2">
      <h1 className="text-2xl font-semibold">Popup</h1>
      <Toaster />
      {image || popups?.popup?.photo ? (
        <Image
          alt="Image"
          width={100}
          height={100}
          src={image ? image : popups?.popup?.photo}
          className="w-6/12 object-cover rounded-md mx-auto object-center"
        />
      ) : (
        <div className="w-6/12 mt-5 mx-auto bg-gray-200 rounded-md h-[50vh]"></div>
      )}
      <div className="w-11/12 mx-auto mt-3 flex items-center justify-between">
        <input
          type="file"
          onChange={(e) => {
            const formData = new FormData();
            formData.append("file", e.target.files[0]);
            formData.append("upload_preset", "upload_photo");
            formData.append("cloud_name", "dfpnkqrjw");

            fetch("https://api.Cloudinary.com/v1_1/dfpnkqrjw/image/upload", {
              method: "POST",
              body: formData,
            })
              .then((res) => res.json())
              .then((res) => {
                setImage(res.url);
              })
              .catch((err) => {});
          }}
        />

        <button
          onClick={(e) => {
            if (popups?.popup?.photo) {
              toast.error("Delete the Existing Popup first");
            } else {
              axios
                .post(`${BASE_URL}/admin/add-popup`, { photo: image })
                .then((res) => {
                  popups?.getPopup();
                });
            }
          }}
          className="px-5 bg-newBlue text-white py-1 rounded-md"
        >
          Add Popup
        </button>
        <button
          onClick={(e) => {
            if (!popups?.popup?.photo) {
              toast.error("Delete the Existing Popup first");
            } else {
              axios
                .post(`${BASE_URL}/admin/delete-popup/${popups?.popup?._id}`)
                .then((res) => {
                  popups?.getPopup();
                });
            }
          }}
          className="px-5 bg-newBlue text-white py-1 rounded-md"
        >
          Delete Popup
        </button>
      </div>
    </div>
  );
};

export default Popup;
