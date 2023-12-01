"use client";
import React, { useState, useEffect } from "react";
import { maliFont, noto_sans } from "../../../(website)/Components/Utils/font";
import axios from "axios";
import { BASE_URL } from "../../../(website)/Components/Utils/url";
import toast, { Toaster } from "react-hot-toast";

const TruBuddiesSocial = () => {
  const [social, setSocial] = useState({
    facebook: "",
    instagram: "",
    whatsapp: "",
    linkedin: "",
    telegram: "",
  });

  useEffect(() => {
    axios
      .post(`${BASE_URL}/admin/get-social/6568a501578c5ea6034f21cd`)
      .then((response) => {
        const obj = response.data;
        setSocial({
          facebook: obj.facebook,
          instagram: obj.instagram,
          whatsapp: obj.whatsapp,
          linkedin: obj.linkedin,
          telegram: obj.telegram,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5`}>
      {/* TOpbar */}
      <Toaster />
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">Social Media</h1>
      </div>
      <div>
        <div className="grid mt-5" style={{ gridTemplateColumns: "20% 80%" }}>
          <p className="text-center font-semibold text-lg">Name</p>
          <p className="text-center font-semibold text-lg">Link</p>
        </div>
      </div>
      <div className="mt-3 h-[80vh] overflow-scroll">
        {[
          {
            title: "Facebook",
            value: social?.facebook,
            onchange: (e) => {
              setSocial({ ...social, facebook: e.target.value });
            },
          },
          {
            title: "Instagram",
            value: social?.instagram,
            onchange: (e) => {
              setSocial({ ...social, instagram: e.target.value });
            },
          },
          {
            title: "Whatsapp",
            value: social?.whatsapp,
            onchange: (e) => {
              setSocial({ ...social, whatsapp: e.target.value });
            },
          },
          {
            title: "Linkedin",
            value: social?.linkedin,
            onchange: (e) => {
              setSocial({ ...social, linkedin: e.target.value });
            },
          },
          {
            title: "Telegram",
            value: social?.telegram,
            onchange: (e) => {
              setSocial({ ...social, telegram: e.target.value });
            },
          },
        ].map((e, i) => {
          return (
            <div
              key={i}
              className="grid py-1 mb-1"
              style={{ gridTemplateColumns: "20% 80%" }}
            >
              <p className="text-center">{e?.title}</p>
              <input
                type="text"
                value={e?.value}
                onChange={e?.onchange}
                className="border outline-none px-3 py-0.5 w-[30vw] mx-auto rounded-md"
              />
            </div>
          );
        })}
        <button
          onClick={(e) => {
            axios
              .post(`${BASE_URL}/admin/add-social-media`, {
                id: "6568a501578c5ea6034f21cd",
                ...social,
              })
              .then((res) => {
                if (res.status == 200) {
                  toast.success("Saved successfully");
                }
              })
              .catch((err) => {
                toast.error(err.message);
              });
          }}
          className="border ml-[5vw] bg-newBlue text-white px-7 py-0.5 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TruBuddiesSocial;
