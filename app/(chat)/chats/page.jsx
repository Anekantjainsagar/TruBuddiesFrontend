"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import profile from "../../(website)/Assets/Chats/profile.png";
import { AiFillMessage, AiOutlinePlus } from "react-icons/ai";
import { IoIosPeople, IoMdSend } from "react-icons/io";
import { BiExit } from "react-icons/bi";
import { maliFont, noto_sans } from "../../(website)/Components/Utils/font";
import { io } from "socket.io-client";
import { format } from "timeago.js";
import { URL } from "../../(website)/Components/Utils/url";

import Context from "../../Context/Context";

import picture from "../../(website)/Assets/Chats/picture.png";
import { useRouter } from "next/navigation";

import male from "../../(website)/Assets/Home/icons/male white.png";
import female from "../../(website)/Assets/Home/icons/female.png";

const Chats = () => {
  const context = React.useContext(Context);
  const { login } = React.useContext(Context);
  const socket = io(URL);
  const history = useRouter();
  const chatContainerRef = useRef();
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [isGroupChat, setIsGroupChat] = useState(false);
  const [groupMessages, setGroupMessages] = useState([]);

  // Scrolling on new message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [context?.messages, messages, groupMessages, context?.groupMessages]);

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
    if (context?.login?._id && messageInput && context?.clickedUser?._id) {
      setMessageInput("");
      socket.emit("message", {
        from: context?.login?._id,
        message: messageInput,
        to: context?.clickedUser?._id,
      });
    } else {
      alert("Internal server error");
    }
  };

  // On group chat message submission
  const handleGroupMessage = (e) => {
    if (messageInput.trim() === "") {
      return;
    }
    //send message to the server
    console.log(context?.login);
    if (context?.login?._id && messageInput && context?.clickedUser?._id) {
      setMessageInput("");
      socket.emit("chat", {
        from: context?.login?._id,
        message: messageInput,
        id: "65429c9f26aaf64195859089",
      });
    } else {
      alert("Internal server error");
    }
  };

  // Getting all old one to one chat messages
  useEffect(() => {
    if (context?.clickedUser?._id) {
      context.getMessages(context?.clickedUser?._id);
    }
  }, [context?.clickedUser]);

  // Getting old group chats
  useEffect(() => {
    context.getGroupChats("65429c9f26aaf64195859089");
  }, []);

  // On group chat
  useEffect(() => {
    socket.on("chat", (saveMessage) => {
      setGroupMessages((prevMessage) => [...prevMessage, saveMessage]);
    });
    return () => {
      socket.off("chat");
    };
  }, []);

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
      className={`w-full h-[100vh] bg-[#eff3ff] px-5 py-[1vw] flex md:flex-row flex-col items-center ${maliFont.className}`}
    >
      <div className="bg-newBlue md:flex hidden h-full py-3 px-2 rounded-3xl flex-col items-center justify-between">
        <div>
          <Image src={profile} alt="Profile" />
          <AiFillMessage
            className="w-full my-5 cursor-pointer text-[#a4c0ff]"
            size={35}
          />
          <IoIosPeople
            className="w-full my-4 text-[#a4c0ff] cursor-pointer"
            size={38}
          />
        </div>
        <BiExit className="w-full text-[#a4c0ff] cursor-pointer" size={35} />
      </div>
      <div className="border w-full md:w-[73vw] p-[2px] h-[47vh] md:mt-0 mt-1.5 md:h-full bg-gradient-to-tr from-newBlue to-newOcean shadow-md shadow-gray-600 mx-7 rounded-3xl">
        <div className="w-full h-full rounded-3xl bg-white">
          <div className="mx-6">
            <div className="py-2 flex items-center">
              <Image src={picture} alt="Profile image" className="w-[3.5vw]" />
              <div className="ml-3">
                <h1 className="font-bold">TruBuddy 01</h1>
                <p className="text-sm">Hey!! What Are You Up To.</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-newBlue via-newOcean to-newBlue h-[2px]"></div>
          </div>
          <div className="h-[80%] md:h-[90%] chatBg">
            <div
              ref={chatContainerRef}
              className="px-3 md:px-6 h-[80%] md:h-[90%] pt-3 overflow-y-scroll"
            >
              {isGroupChat ? (
                <>
                  {context?.groupMessages.map((e, i) => {
                    return (
                      <ChatBlock
                        key={i}
                        data={e}
                        me={login?._id == e?.sender}
                      />
                    );
                  })}
                  {groupMessages.map((e, i) => {
                    return (
                      <ChatBlock
                        key={i}
                        data={e}
                        me={login?._id == e?.sender}
                      />
                    );
                  })}
                </>
              ) : (
                <>
                  {context?.messages
                    ?.filter((e) => {
                      return (
                        (e.sender === context?.login?._id &&
                          e.receiver === context?.clickedUser?._id) ||
                        (e.receiver === context?.login?._id &&
                          e.sender === context?.clickedUser?._id)
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
                          e.receiver === context?.clickedUser?._id) ||
                        (e.receiver === context?.login?._id &&
                          e.sender === context?.clickedUser?._id)
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
                </>
              )}
            </div>
            <div className="h-[16%] md:h-[10%] flex items-center justify-center">
              <div className="flex items-center w-full h-[96%] md:h-[65%] px-2 md:px-4">
                <input
                  type="text"
                  value={messageInput}
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      if (isGroupChat) {
                        handleGroupMessage();
                      } else {
                        handleMessageSubmit();
                      }
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
                    if (isGroupChat) {
                      handleGroupMessage();
                    } else {
                      handleMessageSubmit();
                    }
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
      <div className="w-full md:mt-0 mt-4 md:w-[20vw] h-full flex flex-col items-center justify-between">
        <div className="border md:block hidden w-full p-[2px] h-[48%] bg-gradient-to-tr from-newBlue to-newOcean shadow-md shadow-gray-600 rounded-3xl">
          <div className="w-full h-full rounded-3xl bg-white py-5">
            <h1
              className={`text-2xl font-semibold text-center ${maliFont.className}`}
            >
              My TruBuddies
            </h1>
            <div className="grid grid-cols-3 px-5 py-5 gap-y-5 gap-x-8">
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
                onClick={(e) => {
                  setIsGroupChat(false);
                }}
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
                onClick={(e) => {
                  setIsGroupChat(false);
                }}
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
                onClick={(e) => {
                  setIsGroupChat(false);
                }}
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
                onClick={(e) => {
                  setIsGroupChat(false);
                }}
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
                onClick={(e) => {
                  setIsGroupChat(false);
                }}
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
                onClick={(e) => {
                  setIsGroupChat(false);
                }}
              />
              <Image
                src={picture}
                alt="Logo image"
                className="cursor-pointer"
                onClick={(e) => {
                  setIsGroupChat(false);
                }}
              />
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={(e) => {
                  history.push("/trubuddies");
                }}
              >
                <div className="w-[4vw] text-black flex items-center justify-center pb-3 bg-gray-200 h-[4vw] border-[3px] border-newBlue rounded-full text-4xl font-bold">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border w-full p-[2px] h-fit md:h-[48%] md:bg-gradient-to-tr from-newBlue to-newOcean md:shadow-md md:shadow-gray-600 rounded-3xl">
          <div className="w-full h-full rounded-3xl bg-white relative py-0 md:py-5 md:communityBg">
            <h1
              className={`text-2xl z-50 md:pt-0 pt-1 font-semibold text-center ${maliFont.className}`}
            >
              Community
            </h1>
            <div className="z-50 py-3 md:py-5 px-6">
              <div
                onClick={(e) => {
                  setIsGroupChat(true);
                }}
                className="bg-gradient-to-br rounded-xl shadow-lg z-50 shadow-gray-400 cursor-pointer from-newBlue to-newOcean w-full px-4 py-3"
              >
                <div className="flex items-center">
                  <Image
                    src={picture}
                    className="w-[12vw] md:w-[2.5vw]"
                    alt="Profile"
                  />
                  <div className="ml-1">
                    <h1 className="text-white font-semibold text-[15px]">
                      Zuzutsu Kaisen
                    </h1>
                    <div className="flex items-center text-white text-xs">
                      <Image
                        src={male}
                        alt="Male"
                        className="text-white w-[10px]"
                      />
                      <p className="ml-1">Male</p>
                    </div>
                  </div>
                </div>
                <p className="text-white text-lg mt-1 leading-[23px] font-semibold">
                  “ Why mental health is Important?{" "}
                </p>
              </div>
              <div
                onClick={(e) => {
                  setIsGroupChat(true);
                }}
                className="bg-gradient-to-br mt-4 rounded-xl shadow-lg z-50 shadow-gray-400 cursor-pointer from-[#FFE27B] to-[#FD7DE1] w-full px-4 py-3"
              >
                <div className="flex items-center">
                  <Image
                    src={picture}
                    className="w-[12vw] md:w-[2.5vw]"
                    alt="Profile"
                  />
                  <div className="ml-1">
                    <h1 className="text-black font-semibold text-[15px]">
                      Zuzutsu Kaisen
                    </h1>
                    <div className="flex items-center text-black text-xs">
                      <Image
                        src={female}
                        alt="Male"
                        className="text-black w-[10px]"
                      />
                      <p className="ml-1">Male</p>
                    </div>
                  </div>
                </div>
                <p className="text-black text-lg mt-1 leading-[23px] font-semibold">
                  “ Why mental health is Important?{" "}
                </p>
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

export default Chats;
