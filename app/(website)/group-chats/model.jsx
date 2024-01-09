"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import Image from "next/image";
import Context from "../../Context/Context";
import { IoMdSend } from "react-icons/io";
import { io } from "socket.io-client";
import { URL } from "../Components/Utils/url";
import { format } from "timeago.js";

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
    zIndex: 1001, // Adjust the value as
    padding: 0,
    border: 0,
    background: "transparent",
  },
};

const GroupChatsUser = ({ modalIsOpen, setIsOpen }) => {
  const { communityClicked } = useContext(Context);
  const context = React.useContext(Context);
  const { login } = React.useContext(Context);
  const socket = io(URL, {
    reconnection: true,
    reconnectionDelay: 1000, // milliseconds
    reconnectionAttempts: 3, // number of attempts
  });
  const chatContainerRef = useRef();
  const [messageInput, setMessageInput] = useState("");
  const [groupMessages, setGroupMessages] = useState([]);

  // Scrolling on new message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [groupMessages, communityClicked]);

  // Connecting it with socket server
  useEffect(() => {
    socket.emit("connection");
    socket.emit("join", { userId: context?.login?._id });
  }, [context?.user, groupMessages]);

  // On group chat message submission
  const handleGroupMessage = (e) => {
    if (messageInput.trim() === "") {
      return;
    }
    //send message to the server
    if (context?.login?._id && messageInput) {
      setMessageInput("");
      socket.emit("user-chat", {
        from: context?.login?._id,
        message: messageInput,
        id: "65429c9f26aaf64195859089",
        profile: context?.login?.profile,
        name: context?.login?.anonymous,
        _id: communityClicked?._id,
      });
    } else {
      alert("Internal server error");
    }
  };

  // On group chat
  useEffect(() => {
    socket.on("user-chat", (saveMessage) => {
      setGroupMessages((prevMessage) => [...prevMessage, saveMessage]);
    });
    return () => {
      socket.off("user-chat");
    };
  }, []);

  return (
    <div className="z-50 ">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={(e) => {
          setIsOpen(!modalIsOpen);
        }}
        style={customStyles}
      >
        <div className="w-[95vw] md:w-[60vw] bg-gradient-to-r from-[#407BFF] to-[#92E3A9] text-white h-[80vh] rounded-3xl px-4 py-3">
          <div className="border-b border-b-white pb-2">
            <div className="flex items-center">
              <Image
                src={communityClicked?.profile}
                width={10000}
                height={10000}
                className="w-[13vw] md:w-[3vw] h-[13vw] md:h-[3vw] rounded-full object-cover object-center"
              />
              <p className="ml-2 text-xl md:text-lg font-semibold">
                Anekant Jain
              </p>
            </div>
            <h1 className="mt-2 md:text-base text-lg">
              {communityClicked?.message}
            </h1>
          </div>
          <div
            className="h-[80%] md:h-[76%] overflow-y-scroll py-2 px-2 md:px-5"
            ref={chatContainerRef}
          >
            {communityClicked?.messages?.map((e, i) => {
              return (
                <ChatBlock key={i} data={e} me={login?._id == e?.sender} />
              );
            })}
            {groupMessages
              ?.filter((e) => {
                return e?.son === communityClicked?._id;
              })
              .map((e, i) => {
                return (
                  <ChatBlock key={i} data={e} me={login?._id == e?.sender} />
                );
              })}
          </div>
          <div className="h-[5%] md:h-[10%] flex items-center justify-between">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => {
                setMessageInput(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  handleGroupMessage();
                  setMessageInput("");
                }
              }}
              placeholder="Type here..."
              className="bg-transparent outline-none w-11/12 border py-1.5 px-5 placeholder:text-gray-100 rounded-full"
            />
            <button
              onClick={(e) => {
                handleGroupMessage();
                setMessageInput("");
              }}
              className="border outline-none w-2/12 md:w-1/12 ml-3 flex items-center justify-center py-0.5 rounded-full"
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
            </button>
          </div>
        </div>
      </Modal>
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
        <div className="flex items-center">
          <Image
            src={data?.profile}
            width={10000}
            height={10000}
            className={`w-[10vw] md:w-[2.5vw] ${
              !me ? "block" : "hidden"
            } mr-2 rounded-full h-[10vw] md:h-[2.5vw] object-cover object-center`}
          />
          <div
            className={`${
              me
                ? "text-newBlue bg-white bg-transparent"
                : "text-white bg-newChatBlue"
            } w-fit px-3 md:px-5 py-0.5 md:py-1 rounded-lg border`}
          >
            {data?.message}
          </div>
          <Image
            src={data?.profile}
            width={10000}
            height={10000}
            className={`w-[10vw] md:w-[2.5vw] ${
              me ? "block" : "hidden"
            } ml-2 rounded-full h-[10vw] md:h-[2.5vw] object-cover object-center`}
          />
        </div>
        <p
          className={`text-gray-200 mt-0.5 text-xs md:text-sm ${
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

export default GroupChatsUser;
