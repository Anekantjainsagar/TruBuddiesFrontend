"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef, useContext } from "react";
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
import GroupChatsUser from "./model";

const GroupChats = () => {
  const context = React.useContext(Context);
  const { login } = React.useContext(Context);
  const socket = io(URL, {
    reconnection: true,
    reconnectionDelay: 1000, // milliseconds
    reconnectionAttempts: 3, // number of attempts
  });
  const chatContainerRef = useRef();
  const [groupMessages, setGroupMessages] = useState([]);
  const pathname = usePathname();
  const [modalIsOpen, setIsOpen] = useState(false);

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
  }, [context?.user, groupMessages]);

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
      <GroupChatsUser modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <div className={`${pathname.includes("/chats/") ? "hidden" : "block"}`}>
        <Sidebar />
      </div>
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
              className="px-3 md:px-10 h-full pt-3 overflow-y-scroll"
            >
              {context?.groupMessages.map((e, i) => {
                return (
                  <ChatBlock
                    setIsOpen={setIsOpen}
                    modalIsOpen={modalIsOpen}
                    key={i}
                    data={e}
                    me={login?._id == e?.sender}
                  />
                );
              })}
              {groupMessages.map((e, i) => {
                return (
                  <ChatBlock
                    setIsOpen={setIsOpen}
                    modalIsOpen={modalIsOpen}
                    key={i}
                    data={e}
                    me={login?._id == e?.sender}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={`${pathname.includes("/chats/") ? "hidden" : "block"}`}>
        <RightGroupBar />
      </div>
    </div>
  );
};

const ChatBlock = ({ data, setIsOpen, modalIsOpen }) => {
  const { setCommunityClicked } = useContext(Context);

  return (
    <div
      onClick={(e) => {
        setCommunityClicked(data);
        setIsOpen(!modalIsOpen);
      }}
      className="bg-gradient-to-r from-[#407BFF] to-[#92E3A9] rounded-2xl w-fit px-4 py-2 mt-3 cursor-pointer"
    >
      <div className="flex items-center">
        <Image
          src={data?.profile}
          alt={data?.profile?.src}
          width={10000}
          height={10000}
          className="w-[3vw] h-[3vw] object-cover object-center rounded-full"
        />
        <p className="font-medium ml-2 text-white">{data?.name}</p>
      </div>
      <p className="text-white">{data?.message}</p>
      <div className="flex text-white text-xs items-end justify-between w-full mt-1">
        <p className="w-6/12 text-start">{format(data?.time)}</p>
        <p className="text-gray-100">Reply now..</p>
      </div>
    </div>
  );
};
export default GroupChats;
