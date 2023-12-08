"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { io } from "socket.io-client";
import { format } from "timeago.js";
import { BASE_URL, URL } from "../../../(website)/Components/Utils/url";
import Context from "../../../Context/Context";
import Navbar from "../../../(website)/Components/Utils/Navbar";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import axios from "axios";
import { getCookie } from "cookies-next";
import { maliFont } from "../../Components/Utils/font";
import Sidebar from "../../Component/Sidebar";
import Typewriter from "typewriter-effect";

const ChatPage = ({ params }) => {
  const context = React.useContext(Context);
  const { login } = React.useContext(Context);
  const socket = io(URL, {
    transports: ["polling", "websocket"],
    path: "/api/new/socket",
  });
  const pathname = usePathname();
  const history = useRouter();
  const chatContainerRef = useRef();
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    if (typeof window != "undefined" && window.innerWidth > 550) {
      history.push("/chats");
    }
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/trubuddy/get/${params?.id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params?.id]);

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
    socket.emit("join", { userId: context?.login?._id });
  }, [context?.user]);

  // On one to one chat message submission
  const handleMessageSubmit = (e) => {
    if (messageInput.trim() === "") {
      return;
    }
    //send message to the server
    if (context?.login?._id && messageInput && user?._id) {
      setMessageInput("");
      socket.emit("message", {
        from: context?.login?._id,
        message: messageInput,
        to: user?._id,
      });
    } else {
      alert("Internal server error");
    }
  };

  useEffect(() => {
    if (user?._id) {
      axios
        .post(`${BASE_URL}/login/seen/${user?._id}`, {
          token: getCookie("token"),
        })
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  }, [context?.messages, messages]);

  // Getting all old one to one chat messages
  useEffect(() => {
    if (user?._id) {
      context.getMessages(user?._id);
    }
  }, [user]);

  // On message
  useEffect(() => {
    socket.on("message", (saveMessage) => {
      setMessages((prevMessage) => [...prevMessage, saveMessage]);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <div
      className={`w-full h-[100vh] bg-[#eff3ff] md:px-5 py-[1vw] flex md:flex-row flex-col items-center ${maliFont.className}`}
    >
      <div className={`${pathname.includes("/chats/") ? "hidden" : "block"}`}>
        <Sidebar />
      </div>
      <div>
        <div className="border w-[98vw] overflow-hidden p-[2px] h-[98vh] bg-gradient-to-tr from-newBlue to-newOcean shadow-md shadow-gray-600 rounded-3xl">
          {user?._id ? (
            <div className="w-full h-full rounded-3xl bg-white">
              <div className="mx-3">
                <div className="py-2 flex items-center">
                  <AiOutlineLeft
                    size={30}
                    className="mr-2"
                    onClick={(e) => {
                      history.push("/chats");
                    }}
                  />
                  <Image
                    src={user?.profile}
                    width={100}
                    height={100}
                    alt="Profile image"
                    className="w-[15vw] h-[15vw] object-cover object-center rounded-full"
                  />
                  <div className="ml-3">
                    <h1 className="font-bold text-lg">
                      {user?.anonymous ? user?.anonymous : user?.name}
                    </h1>
                    <p className="text-sm">The Buddy You Need The Most</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-newBlue via-newOcean to-newBlue h-[2px]"></div>
              </div>
              <div className="h-[99%] chatBg">
                <div
                  ref={chatContainerRef}
                  className="px-3 md:px-10 h-[85.5%] pt-3 overflow-y-scroll"
                >
                  {context?.messages
                    ?.filter((e) => {
                      return (
                        (e.sender === context?.login?._id &&
                          e.receiver === user?._id) ||
                        (e.receiver === context?.login?._id &&
                          e.sender === user?._id)
                      );
                    })
                    .map((e, i) => {
                      return (
                        <ChatBlock
                          key={i}
                          data={e}
                          me={login?._id == e?.sender}
                        />
                      );
                    })}
                  {messages
                    ?.filter((e) => {
                      return (
                        (e.sender === context?.login?._id &&
                          e.receiver === user?._id) ||
                        (e.receiver === context?.login?._id &&
                          e.sender === user?._id)
                      );
                    })
                    .map((e, i) => {
                      return (
                        <ChatBlock
                          key={i}
                          data={e}
                          me={login?._id == e?.sender}
                        />
                      );
                    })}
                </div>
                <div className="h-[5%] flex items-center justify-center">
                  <div className="flex items-center w-full h-[96%] px-2 md:px-4">
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
          ) : null}
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

export default ChatPage;
