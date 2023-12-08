"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { io } from "socket.io-client";
import { format } from "timeago.js";
import { URL } from "../../(website)/Components/Utils/url";
import Context from "../../Context/Context";
import { usePathname } from "next/navigation";
import RightGroupBar from "../Component/RightGroupBar";
import { CgCommunity } from "react-icons/cg";
import Navbar from "../../(website)/Components/Utils/Navbar";
import { maliFont } from "../Components/Utils/font";
import Sidebar from "../Component/Sidebar";

const GroupChats = () => {
  const context = React.useContext(Context);
  const { login } = React.useContext(Context);
  const socket = io(URL);
  const chatContainerRef = useRef();
  const [messageInput, setMessageInput] = useState("");
  const [groupMessages, setGroupMessages] = useState([]);
  const pathname = usePathname();

  // Scrolling on new message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [groupMessages, context?.groupMessages]);

  // Connecting it with socket server
  useEffect(() => {
    socket.emit("connection");
    socket.emit("join", { userId: context?.login?._id });
  }, [context?.user]);

  // On group chat message submission
  const handleGroupMessage = (e) => {
    if (messageInput.trim() === "") {
      return;
    }
    //send message to the server
    if (context?.login?._id && messageInput) {
      setMessageInput("");
      socket.emit("chat", {
        from: context?.login?._id,
        message: messageInput,
        id: "65429c9f26aaf64195859089",
        profile: context?.login?.profile,
      });
    } else {
      alert("Internal server error");
    }
  };

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

  return (
    <div
      className={`w-full h-[100vh] bg-[#eff3ff] md:px-5 py-[1vw] flex md:flex-row flex-col items-center ${maliFont.className}`}
    >
      <div className={`${pathname.includes("/chats/") ? "hidden" : "block"}`}>
        <Sidebar />
      </div>
      <>
        <div className="md:hidden block">
          <Navbar />
        </div>
        <div className="hidden md:block border w-full md:w-[73vw] p-[2px] h-[47vh] md:mt-0 mt-1.5 md:h-full bg-gradient-to-tr from-newBlue to-newOcean shadow-md shadow-gray-600 mx-7 rounded-3xl">
          <div className="w-full h-full rounded-3xl bg-white">
            <div className="mx-6">
              <div className="py-2 flex items-center">
                <CgCommunity
                  size={45}
                  className="font-bold text-newBlue p-1 border-2 border-newBlue rounded-full"
                />
                <div className="ml-3">
                  <h1 className="font-bold">Common Community</h1>
                  <p className="text-sm">The Buddy You Need The Most</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-newBlue via-newOcean to-newBlue h-[2px]"></div>
            </div>
            <div className="h-[80%] md:h-[90%] chatBg">
              <div
                ref={chatContainerRef}
                className="px-3 md:px-10 h-[80%] md:h-[90%] pt-3 overflow-y-scroll"
              >
                {
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
                }
              </div>
              <div className="h-[16%] md:h-[10%] flex items-center justify-center">
                <div className="flex items-center w-full h-[96%] md:h-[65%] px-2 md:px-4">
                  <input
                    type="text"
                    value={messageInput}
                    onKeyDown={(e) => {
                      if (e.key == "Enter") {
                        handleGroupMessage();
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
                      handleGroupMessage();
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
        <div className={`${pathname.includes("/chats/") ? "hidden" : "block"}`}>
          <RightGroupBar />
        </div>
      </>
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
            width={100}
            height={100}
            className={`w-[10vw] md:w-[3vw] ${
              !me ? "block" : "hidden"
            } mr-2 rounded-full h-[10vw] md:h-[3vw] object-cover object-center`}
          />
          <div
            className={`${
              me
                ? "text-newBlue bg-transparent border-newBlue"
                : "text-white bg-newChatBlue border-white"
            } w-fit px-3 md:px-5 py-0.5 md:py-1 rounded-lg border-2`}
          >
            {data?.message}
          </div>
          <Image
            src={data?.profile}
            width={100}
            height={100}
            className={`w-[10vw] md:w-[3vw] ${
              me ? "block" : "hidden"
            } ml-2 rounded-full h-[10vw] md:h-[3vw] object-cover object-center`}
          />
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
