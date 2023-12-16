"use client";
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";

import Context from "../../Context/Context";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "../../(website)/Components/Utils/url";
import { getCookie } from "cookies-next";
import { maliFont, noto_sans } from "../../(website)/Components/Utils/font";
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
    borderRadius: "1.5rem",
  },
};

const EditProfileTrubuddy = () => {
  const { setShowTrubuddyEdit, showTrubuddyEdit, trubuddy, getTrubuddyLogin } =
    useContext(Context);
  const [page, setPage] = useState(1);
  const [user, setUser] = useState({
    name: "",
    email: "",
    bio: "",
    expertise: "",
    city: "",
    state: "",
    availability: "",
    gender: "",
    languages: [],
    otherExpertise: [],
    personality: [],
    anonymous: "",
    meeting_url: "",
  });
  const [speaks, setSpeaks] = useState("");
  const [experty, setExperty] = useState("");
  const [personality, setPersonality] = useState("");

  useEffect(() => {
    setUser({
      name: trubuddy?.name,
      email: trubuddy?.email,
      anonymous: trubuddy?.anonymous,
      city: trubuddy?.city,
      state: trubuddy?.state,
      gender: trubuddy?.gender,
      availability: trubuddy?.availability,
      profile: trubuddy?.profile,
      languages: trubuddy?.languages,
      otherExpertise: trubuddy?.otherExpertise,
      personality: trubuddy?.personality,
      bio: trubuddy?.bio,
      meeting_url: trubuddy?.meeting_url,
    });
  }, [trubuddy]);

  const onSubmit = () => {
    axios
      .post(`${BASE_URL}/trubuddy/update`, {
        ...user,
        token: getCookie("trubuddy_token"),
      })
      .then((res) => {
        if (res.status == 200) {
          getTrubuddyLogin();
          setShowTrubuddyEdit(false);
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
        isOpen={showTrubuddyEdit}
        onRequestClose={() => {
          setShowTrubuddyEdit(false);
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
                    title: "Anonymous Name",
                    value: user?.anonymous,
                    onchange: (e) => {
                      setUser({ ...user, anonymous: e.target.value });
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
                    title: "Availability",
                    value: user?.availability,
                    onchange: (e) => {
                      setUser({ ...user, availability: e.target.value });
                    },
                  },
                  {
                    title: "Meeting Url",
                    value: user?.meeting_url,
                    onchange: (e) => {
                      setUser({ ...user, meeting_url: e.target.value });
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
                        }  border-2 px-3 py-1 w-11/12 md:w-full rounded-lg outline-none mt-1 border-newBlue`}
                      />
                    </div>
                  );
                })}
              </div>
            ) : page == 2 ? (
              <div className="mt-5">
                <div className="grid grid-cols-2">
                  <div className="mb-3 mx-auto">
                    <p className={`font-semibold`}>Profile Photo :</p>
                    <input
                      type={"file"}
                      onChange={(e) => onFileSubmit(e)}
                      className={`border-2 px-3 py-1 rounded-lg w-11/12 md:w-full outline-none mt-1 border-newBlue`}
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
                          type={"text"}
                          placeholder={e?.title}
                          disabled={e?.title === "Name" || e?.title == "Email"}
                          value={e?.value}
                          onChange={e?.onchange}
                          className={`${
                            e?.title === "Name" || e?.title == "Email"
                              ? "text-gray-500"
                              : ""
                          }  border-2 px-3 py-1 rounded-lg w-11/12 md:w-full outline-none mt-1 border-newBlue`}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mb-3 mx-auto">
                  <p className={`font-semibold`}>Languages :</p>
                  <div className="mt-2 px-1 md:px-3">
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
                        className="ml-2 md:ml-4 w-[46vw] md:w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer "
                      >
                        Save
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : page == 3 ? (
              <div className="mt-5">
                <div className="mb-3 mx-auto">
                  <p className={`font-semibold`}>Other Expertise :</p>
                  <div className="mt-2 px-3 overflow-scroll max-h-[45vh] md:max-h-[60vh]">
                    {user?.otherExpertise?.map((e, i) => {
                      return (
                        <div className="flex items-center w-full mb-4" key={i}>
                          <input
                            type="text"
                            value={e}
                            onChange={(val) => {
                              let arr = user.otherExpertise;
                              let index = arr.indexOf(e);
                              arr[index] = val.target.value;
                              setUser({
                                ...user,
                                otherExpertise: arr,
                              });
                            }}
                            className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                          />
                          <div className="pl-4">
                            <AiOutlineClose
                              className="bg-lightRed p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                              size={35}
                              onClick={(event) => {
                                let arr = user?.otherExpertise;
                                let pos = arr.indexOf(e);
                                arr.splice(pos, 1);
                                setUser({
                                  ...user,
                                  otherExpertise: arr,
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
                        placeholder="Expertise"
                        onChange={(e) => {
                          setExperty(e.target.value);
                        }}
                        className="border-2 border-newBlue outline-none text-gray-600 w-full rounded-md px-4 py-1"
                      />
                      <div
                        onClick={(event) => {
                          setUser({
                            ...user,
                            otherExpertise: [...user.otherExpertise, experty],
                          });
                          setExperty("");
                        }}
                        className="ml-2 md:ml-4 w-[46vw] md:w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer "
                      >
                        Save
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : page == 4 ? (
              <div className="mt-5">
                <div className="mb-3 mx-auto">
                  <p className={`font-semibold`}>Personalilty :</p>
                  <div className="mt-2 px-3 overflow-scroll max-h-[45vh] md:max-h-[60vh]">
                    {user?.personality?.map((e, i) => {
                      return (
                        <div className="flex items-center w-full mb-4" key={i}>
                          <input
                            type="text"
                            value={e}
                            onChange={(val) => {
                              let arr = user.personality;
                              let index = arr.indexOf(e);
                              arr[index] = val.target.value;
                              setUser({
                                ...user,
                                personality: arr,
                              });
                            }}
                            className="border outline-none text-gray-600 w-full rounded-md px-4 py-1"
                          />
                          <div className="pl-4">
                            <AiOutlineClose
                              className="bg-lightRed p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                              size={35}
                              onClick={(event) => {
                                let arr = user?.personality;
                                let pos = arr.indexOf(e);
                                arr.splice(pos, 1);
                                setUser({
                                  ...user,
                                  personality: arr,
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
                        value={personality}
                        placeholder="Personality"
                        onChange={(e) => {
                          setPersonality(e.target.value);
                        }}
                        className="border-2 border-newBlue outline-none text-gray-600 w-full rounded-md px-4 py-1"
                      />
                      <div
                        onClick={(event) => {
                          setUser({
                            ...user,
                            personality: [...user.personality, personality],
                          });
                          setPersonality("");
                        }}
                        className="ml-2 md:ml-4 w-[46vw] md:w-[9vw] flex justify-center items-center py-1 bg-green-500 text-white rounded-lg cursor-pointer "
                      >
                        Save
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-2 md:mt-5">
                <div className="mb-3 mx-auto">
                  <p className={`font-semibold`}>Bio :</p>
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="5"
                    value={user?.bio}
                    onChange={(e) => {
                      setUser({ ...user, bio: e.target.value });
                    }}
                    className="border bg-transparent w-full outline-none rounded-md px-3 py-1 mt-1 md:mt-2"
                  ></textarea>
                </div>
              </div>
            )}
            {page != 5 ? (
              <div className="flex items-center justify-evenly">
                <button
                  disabled={page == 1}
                  onClick={(e) => {
                    setPage(page - 1);
                  }}
                  className={`px-7 py-1.5 shadow-md shadow-gray-400 text-white mt-2 rounded-lg font-semibold ${
                    page == 1 ? "bg-blue-200" : "bg-newBlue"
                  }`}
                >
                  Prev
                </button>
                <button
                  onClick={(e) => {
                    setPage(page + 1);
                  }}
                  className="bg-newBlue px-7 py-1.5 mr-3 shadow-md shadow-gray-400 text-white mt-2 rounded-lg font-semibold"
                >
                  Next
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-evenly">
                <button
                  disabled={page == 1}
                  onClick={(e) => {
                    setPage(page - 1);
                  }}
                  className={`px-7 py-1.5 shadow-md shadow-gray-400 text-white mt-2 rounded-lg font-semibold ${
                    page == 1 ? "bg-blue-200" : "bg-newBlue"
                  }`}
                >
                  Prev
                </button>
                <button
                  onClick={onSubmit}
                  className="bg-newBlue px-7 py-1.5 shadow-md shadow-gray-400 text-white mt-2 rounded-lg font-semibold"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditProfileTrubuddy;
