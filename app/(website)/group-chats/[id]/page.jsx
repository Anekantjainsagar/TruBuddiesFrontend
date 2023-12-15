"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef, useContext } from "react";
import { IoMdSend } from "react-icons/io";
import { io } from "socket.io-client";
import { format } from "timeago.js";
import { BASE_URL, URL } from "../../../(website)/Components/Utils/url";
import Context from "../../../Context/Context";
import { usePathname, useRouter } from "next/navigation";
import RightGroupBar from "../../Component/RightGroupBar";
import { CgCommunity } from "react-icons/cg";
import Navbar from "../../../(website)/Components/Utils/Navbar";
import { AiOutlineLeft } from "react-icons/ai";
import axios from "axios";
import { maliFont } from "../../Components/Utils/font";
import Sidebar from "../../Component/Sidebar";
import GroupChatsUser from "../model";

const GroupChats = () => {
  const context = React.useContext(Context);
  const { login } = React.useContext(Context);
  const socket = io(URL, {
    reconnection: true,
    reconnectionDelay: 1000, // milliseconds
    reconnectionAttempts: 3, // number of attempts
  });
  const history = useRouter();
  const chatContainerRef = useRef();
  const pathname = usePathname();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [groupMessages, setGroupMessages] = useState([]);

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
      className={`w-full h-[100vh] bg-[#eff3ff] md:px-5 py-[1vw] overflow-hidden flex md:flex-row flex-col items-center ${maliFont.className}`}
    >
      <GroupChatsUser modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <div className={`${pathname.includes("/chats/") ? "hidden" : "block"}`}>
        <Sidebar />
      </div>
      <div className="border w-[94vw] p-[2px] h-[98vh] md:h-full bg-gradient-to-tr from-newBlue to-newOcean shadow-md shadow-gray-600 rounded-3xl">
        <div className="w-full h-full rounded-3xl bg-white">
          <div className="mx-3">
            <div className="py-2 flex items-center">
              <AiOutlineLeft
                size={30}
                onClick={(e) => {
                  history.push("/group-chats");
                }}
                className="mr-2"
              />
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
          <div className="h-[95%] chatBg">
            <div
              ref={chatContainerRef}
              className="px-3 md:px-10 h-[97%] pt-3 overflow-y-scroll"
            >
              {context?.groupMessages.map((e, i) => {
                return (
                  <ChatBlock
                    key={i}
                    data={e}
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                  />
                );
              })}
              {groupMessages.map((e, i) => {
                return (
                  <ChatBlock
                    key={i}
                    data={e}
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatBlock = ({ setIsOpen, modalIsOpen, data }) => {
  const { setCommunityClicked } = useContext(Context);

  return (
    <div
      onClick={(e) => {
        setCommunityClicked(data);
        setIsOpen(!modalIsOpen);
      }}
      className="bg-gradient-to-r from-[#407BFF] to-[#92E3A9] rounded-2xl w-fit pl-3 pr-5 py-2 mb-3 cursor-pointer"
    >
      <div className="flex items-center">
        <Image
          src={data?.profile}
          alt={data?.profile?.src}
          width={100}
          height={100}
          className="w-[14vw] h-[14vw] object-cover object-center rounded-full"
        />
        <p className="font-medium ml-2 text-lg text-white">{data?.name}</p>
      </div>
      <p className="text-white mt-0.5">{data?.message}</p>
      <p className="text-end text-white text-xs mt-0.5">{format(data?.time)}</p>
    </div>
  );
};

export default GroupChats;
