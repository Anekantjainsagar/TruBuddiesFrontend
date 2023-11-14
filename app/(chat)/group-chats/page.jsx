"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { io } from "socket.io-client";
import { format } from "timeago.js";
import { URL } from "../../(website)/Components/Utils/url";
import Context from "../../Context/Context";

const GroupChats = () => {
  const context = React.useContext(Context);
  const { login, clickedUser } = React.useContext(Context);
  const socket = io(URL);
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
    <div className="border w-full md:w-[73vw] p-[2px] h-[47vh] md:mt-0 mt-1.5 md:h-full bg-gradient-to-tr from-newBlue to-newOcean shadow-md shadow-gray-600 mx-7 rounded-3xl">
      {clickedUser?._id ? (
        <div className="w-full h-full rounded-3xl bg-white">
          <div className="mx-6">
            <div className="py-2 flex items-center">
              <Image
                src={clickedUser?.profile}
                width={100}
                height={100}
                alt="Profile image"
                className="w-[3.5vw] rounded-full"
              />
              <div className="ml-3">
                <h1 className="font-bold">{clickedUser?.name}</h1>
                <p className="text-sm">Hey!! What Are You Up To.</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-newBlue via-newOcean to-newBlue h-[2px]"></div>
          </div>
          <div className="h-[80%] md:h-[90%] chatBg">
            <div
              ref={chatContainerRef}
              className="px-3 md:px-10 h-[80%] md:h-[90%] pt-3 overflow-y-scroll"
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
      ) : (
        <div className="w-full flex items-center justify-center chatBg h-full rounded-3xl bg-white">
          <p className="text-2xl">Select a Trubuddy to Start Chat</p>
        </div>
      )}
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

export default GroupChats;
