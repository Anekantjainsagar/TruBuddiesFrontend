"use client";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import Context from "../../Context/Context";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "../Components/Utils/url";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
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
  const [page, setPage] = useState(1);
  const [speaks, setSpeaks] = useState("");
  const [experty, setExperty] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    profession: "",
    city: "",
    state: "",
    nationality: "",
    gender: "",
    profile: "",
    languages: [],
    discussions: [],
    anonymous: "",
  });

  useEffect(() => {
    setUser({
      name: login?.name,
      email: login?.email,
      profession: login?.profession,
      city: login?.city,
      languages: login?.languages,
      state: login?.state,
      nationality: login?.nationality,
      gender: login?.gender,
      profile: login?.profile,
      discussions: login?.discussions,
      anonymous: login?.anonymous,
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

  const onFileSubmit = (e) => {
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
        setUser({ ...user, profile: res.url });
      })
      .catch((err) => {});
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
          className={`completeBg ${noto_sans.className} w-[80vw] md:w-[35vw] flex flex-col items-center`}
        >
          <h1 className="text-2xl text-newBlue w-full md:text-center text-start font-bold">
            Complete your Profile
          </h1>
          <div className="w-full mt-3">
            <h1 className="text-xl font-semibold">Personal Info </h1>
            <p>You are completely anonymous , nobody can see your details</p>
            {page === 1 ? (
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
                  {
                    title: "Anonymous Name",
                    value: user?.anonymous,
                    onchange: (e) => {
                      setUser({ ...user, anonymous: e.target.value });
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
                        }  border-2 px-3 py-1 rounded-lg w-[95%] md:w-full outline-none mt-1 border-newBlue`}
                      />
                    </div>
                  );
                })}
              </div>
            ) : page == 2 ? (
              <>
                <div className="grid grid-cols-2 mt-5">
                  <div className="mb-3 mx-auto">
                    <p className={`font-semibold`}>Profile Photo :</p>
                    <input
                      type={"file"}
                      onChange={(e) => onFileSubmit(e)}
                      className={`border-2 px-3 py-1 rounded-lg w-[95%] md:w-full outline-none mt-1 border-newBlue`}
                    />
                  </div>
                  {[
                    {
                      title: "Gender",
                      value: user?.gender,
                      onchange: (e) => {
                        setUser({ ...user, gender: e.target.value });
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
                          }  border-2 px-3 py-1 rounded-lg outline-none w-[95%] md:w-full mt-1 border-newBlue`}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mb-3 mx-auto">
                  <p className={`font-semibold`}>Languages :</p>
                  <div className="mt-2 px-2 md:px-3">
                    {user?.languages?.map((e, i) => {
                      return (
                        <div className="flex items-center w-full mb-4" key={i}>
                          <input
                            type="text"
                            value={e}
                            onChange={(val) => {
                              let arr = user.languages;
                              let index = arr.indexOf(e);
                              arr[index] = val.target.value;
                              setUser({
                                ...user,
                                languages: arr,
                              });
                            }}
                            className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                          />
                          <div className="pl-4">
                            <AiOutlineClose
                              className="bg-lightRed p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                              size={35}
                              onClick={(event) => {
                                let arr = user?.speaks;
                                let pos = arr.indexOf(e);
                                arr.splice(pos, 1);
                                setUser({
                                  ...user,
                                  languages: arr,
                                });
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex items-center w-full mb-4">
                      <input
                        type="text"
                        value={speaks}
                        placeholder="Speaks"
                        onChange={(e) => {
                          setSpeaks(e.target.value);
                        }}
                        className="border-2 border-newBlue outline-none text-gray-600 w-full rounded-md px-4 py-1"
                      />
                      <div
                        onClick={(event) => {
                          setUser({
                            ...user,
                            languages: [...user.languages, speaks],
                          });
                          setSpeaks("");
                        }}
                        className="ml-2 md:ml-4 w-[40vw] md:w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer "
                      >
                        Save
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="mt-5">
                <div className="mb-3 mx-auto">
                  <p className={`font-semibold`}>What You need to discuss :</p>
                  <div className="mt-2 px-1 md:px-3">
                    {user?.discussions?.map((e, i) => {
                      return (
                        <div className="flex items-center w-full mb-4" key={i}>
                          <input
                            type="text"
                            value={e}
                            onChange={(val) => {
                              let arr = user.discussions;
                              let index = arr.indexOf(e);
                              arr[index] = val.target.value;
                              setUser({
                                ...user,
                                discussions: arr,
                              });
                            }}
                            className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                          />
                          <div className="pl-4">
                            <AiOutlineClose
                              className="bg-lightRed p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                              size={35}
                              onClick={(event) => {
                                let arr = user?.discussions;
                                let pos = arr.indexOf(e);
                                arr.splice(pos, 1);
                                setUser({
                                  ...user,
                                  discussions: arr,
                                });
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex items-center w-full mb-4">
                      <input
                        type="text"
                        value={experty}
                        placeholder="Problems"
                        onChange={(e) => {
                          setExperty(e.target.value);
                        }}
                        className="border-2 border-newBlue outline-none text-gray-600 w-full rounded-md px-4 py-1"
                      />
                      <div
                        onClick={(event) => {
                          setUser({
                            ...user,
                            discussions: [...user.discussions, experty],
                          });
                          setExperty("");
                        }}
                        className="ml-2 md:ml-4 w-[40vw] md:w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer "
                      >
                        Save
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {page == 3 ? (
              <div className="flex items-center justify-center">
                <button
                  disabled={page == 1}
                  onClick={(e) => {
                    setPage(page - 1);
                  }}
                  className={`px-7 mr-3 py-1.5 shadow-md shadow-gray-400 text-white mx-auto block mt-2 rounded-lg font-semibold ${
                    page == 1 ? "bg-blue-200" : "bg-newBlue"
                  }`}
                >
                  Prev
                </button>
                <button
                  onClick={onSubmit}
                  className="bg-newBlue px-7 py-1.5 shadow-md shadow-gray-400 text-white mx-auto block mt-2 rounded-lg font-semibold"
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <button
                  disabled={page == 1}
                  onClick={(e) => {
                    setPage(page - 1);
                  }}
                  className={`px-7 mr-3 py-1.5 shadow-md shadow-gray-400 text-white mx-auto block mt-2 rounded-lg font-semibold ${
                    page == 1 ? "bg-blue-200" : "bg-newBlue"
                  }`}
                >
                  Prev
                </button>
                <button
                  onClick={(e) => {
                    setPage(page + 1);
                  }}
                  className="bg-newBlue px-7 py-1.5 shadow-md shadow-gray-400 text-white mx-auto block mt-2 rounded-lg font-semibold"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditProfile;
