"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../../../Components/Navbar";
import Image from "next/image";
import { format } from "timeago.js";
import bg from "../../../../(website)/Assets/User/purple bg.png";
import dotBg from "../../../../(website)/Assets/User/dots bg.png";
import Context from "../../../../Context/Context";
import picture from "../../../../(website)/Assets/Chats/picture.png";
import { io } from "socket.io-client";
import { IoMdSend } from "react-icons/io";
import { BASE_URL, URL } from "../../../../(website)/Components/Utils/url";
import { AiOutlineLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getCookie } from "cookies-next";

const TrubuddyChat = ({ params }) => {
  const id = params.id;
  const { trubuddy, getTrubuddyLogin } = useContext(Context);
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .post(`${BASE_URL}/login/get-one/${id}`, {
        token: getCookie("trubuddy_token"),
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    getTrubuddyLogin();
  }, []);

  const context = React.useContext(Context);
  const socket = io(URL);
  const history = useRouter();
  const chatContainerRef = useRef();
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  // Scrolling on new message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [context?.messages, messages]);

  // Connecting it with socket server
  useEffect(() => {
    socket.emit("connection");
    socket.emit("join", { userId: context?.trubuddy?._id });
  }, [context?.trubuddy]);

  useEffect(() => {
    axios
      .post(`${BASE_URL}/trubuddy/seen/${id}`, {
        token: getCookie("trubuddy_token"),
      })
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  }, [context?.messages, messages]);

  // On one to one chat message submission
  const handleMessageSubmit = (e) => {
    if (messageInput.trim() === "") {
      return;
    }
    //send message to the server
    if (context?.trubuddy?._id && messageInput && id) {
      setMessageInput("");
      socket.emit("message", {
        from: context?.trubuddy?._id,
        message: messageInput,
        to: id,
      });
    } else {
      alert("Internal server error");
    }
  };

  // Getting all old one to one chat messages
  useEffect(() => {
    if (id) {
      context.getMessages(id, true);
    }
  }, [context?.clickedBuddy]);

  // On message
  useEffect(() => {
    socket.on("message", (saveMessage) => {
      setMessages((prevMessage) => [...prevMessage, saveMessage]);
    });
    return () => {
      socket.off("message");
    };
  }, [messages]);

  return (
    <div>
      <Navbar />
      <div className="absolute top-0 left-0 z-0">
        <Image
          src={bg}
          alt="Bg"
          className="h-[20vh] md:h-[35vh] object-cover object-center"
        />
        <Image src={dotBg} alt="Dots bg" className="md:block hidden" />
      </div>
      <div className="absolute z-10 bg-white w-[85vw] md:overflow-auto overflow-hidden md:w-[70vw] h-[85vh] md:h-[75vh] flex flex-col items-center rounded-lg bottom-0 left-1/2 -translate-x-1/2 shadow-xl shadow-gray-500">
        <div className="w-full h-full rounded-3xl bg-white">
          <div className="mx-2 md:mx-6">
            <div className="py-2 flex items-center">
              <AiOutlineLeft
                size={
                  typeof window != "undefined"
                    ? window.innerWidth < 550
                      ? 25
                      : 30
                    : 0
                }
                className="mr-2 cursor-pointer"
                onClick={(e) => {
                  history.push("/trubuddy/buddies");
                }}
              />
              <Image
                src={user?.profile}
                width={100}
                height={100}
                alt="Profile image"
                className="w-[12vw] md:w-[3.5vw] md:h-[3.5vw] h-[12vw] object-cover object-center rounded-full border"
              />
              <div className="ml-3">
                <h1 className="font-semibold text-lg md:text-xl">
                  {user?.name}
                </h1>
                <p className="text-xs md:text-sm">Hey!! What Are You Up To.</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-newBlue via-newOcean to-newBlue h-[2px]"></div>
          </div>
          <div className="h-[90%] md:h-[86%] chatBg">
            <div
              ref={chatContainerRef}
              className="px-3 md:px-10 h-[90%] md:h-[90%] pt-3 overflow-y-scroll"
            >
              {context?.messages
                ?.filter((e) => {
                  return (
                    (e.sender === context?.trubuddy?._id &&
                      e.receiver === id) ||
                    (e.receiver === context?.trubuddy?._id &&
                      e.sender === id)
                  );
                })
                .map((e, i) => {
                  return (
                    <ChatBlock
                      key={i}
                      data={e}
                      me={trubuddy?._id == e?.sender}
                    />
                  );
                })}
              {messages
                ?.filter((e) => {
                  return (
                    (e.sender === context?.trubuddy?._id &&
                      e.receiver === id) ||
                    (e.receiver === context?.trubuddy?._id &&
                      e.sender === id)
                  );
                })
                .map((e, i) => {
                  return (
                    <ChatBlock
                      key={i}
                      data={e}
                      me={trubuddy?._id == e?.sender}
                    />
                  );
                })}
            </div>
            <div className="h-[7%] md:h-[10%] flex items-center justify-center">
              <div className="flex items-center w-full h-[98%] md:h-[85%] px-3 md:px-4">
                <input
                  type="text"
                  value={messageInput}
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      handleMessageSubmit();
                      setMessageInput("");
                    }
                  }}
                  onChange={(e) => {
                    setMessageInput(e.target.value);
                  }}
                  placeholder="Type Your Message Here"
                  className="border-[3px] w-[85%] md:w-[95%] h-full px-4 rounded-s-lg md:rounded-s-2xl border-newBlue md:text-base text-sm outline-none"
                />
                <div
                  onClick={(e) => {
                    handleMessageSubmit();
                    setMessageInput("");
                  }}
                  className="bg-newBlue w-[15%] md:w-[5%] cursor-pointer h-full rounded-e-lg md:rounded-e-2xl flex items-center justify-center"
                >
                  <IoMdSend
                    className="text-white"
                    size={
                      typeof window != "undefined"
                        ? window?.innerWidth < 500
                          ? 29
                          : 30
                        : 0
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatBlock = ({ me, data }) => {
  return (
    <div className="mb-2 md:mb-4">
      <div
        className={`${
          me ? "float-right items-end" : "float-left items-start"
        } flex flex-col`}
      >
        <div
          className={`${
            me
              ? "text-newBlue bg-transparent border-newBlue"
              : "text-white bg-newChatBlue border-white"
          } w-fit px-3 md:px-5 py-0.5 md:py-1 rounded-lg border-2`}
        >
          {data?.message}
        </div>
        <p
          className={`text-gray-400 text-xs md:text-sm ${
            me ? "text-end mr-1" : "text-start ml-1"
          }`}
        >
          {format(data?.time)}
        </p>
      </div>
      <div className="clear-both"></div>
    </div>
  );
};

export default TrubuddyChat;
