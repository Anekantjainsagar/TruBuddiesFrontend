"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../../../Components/Navbar";
import Image from "next/image";
import { format } from "timeago.js";
import bg from "../../../../(website)/Assets/User/purple bg.png";
import dotBg from "../../../../(website)/Assets/User/dots bg.png";
import Context from "../../../../Context/Context";
import { io } from "socket.io-client";
import { IoMdSend } from "react-icons/io";
import { BASE_URL, URL } from "../../../../(website)/Components/Utils/url";
import { AiOutlineLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
import axios from "axios";
import { getCookie } from "cookies-next";
import { CgCommunity } from "react-icons/cg";
import GroupChatsUser from "../../../../(website)/group-chats/model";

const TrubuddyChat = ({ params }) => {
  const id = params.id;
  const context = React.useContext(Context);
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

  const history = useRouter();
  const socket = io(URL, {
    reconnection: true,
    reconnectionDelay: 1000, // milliseconds
    reconnectionAttempts: 3, // number of attempts
  });
  const chatContainerRef = useRef();
  const [messageInput, setMessageInput] = useState("");
  const [groupMessages, setGroupMessages] = useState([]);
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
    socket.emit("join", { userId: context?.trubuddy?._id });
  }, [context?.trubuddy, groupMessages]);

  // On group chat message submission
  const handleGroupMessage = (e) => {
    if (messageInput.trim() === "") {
      return;
    }
    //send message to the server
    if (context?.trubuddy?._id && messageInput) {
      setMessageInput("");
      socket.emit("chat", {
        from: context?.trubuddy?._id,
        message: messageInput,
        id: "65429c9f26aaf64195859089",
        name: context?.trubuddy?.name,
        profile: context?.trubuddy?.profile,
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
      console.log(saveMessage);
      setGroupMessages((prevMessage) => [...prevMessage, saveMessage]);
    });
    return () => {
      socket.off("chat");
    };
  }, []);

  return (
    <div>
      <Navbar />
      <GroupChatsUser modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
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
                  history.push("/trubuddy/community");
                }}
              />
              <CgCommunity
                size={45}
                className="font-bold text-newBlue p-1 border-2 border-newBlue rounded-full"
              />
              <div className="ml-3">
                <h1 className="font-semibold text-lg">Common Community</h1>
                <p className="text-xs md:text-sm">
                  The Buddy You Need The Most
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-newBlue via-newOcean to-newBlue h-[2px]"></div>
          </div>
          <div className="h-[90%] md:h-[86%] chatBg">
            <div
              ref={chatContainerRef}
              className="px-3 md:px-10 h-[94%] md:h-[91%] pt-3 overflow-y-scroll"
            >
              {context?.groupMessages.map((e, i) => {
                return (
                  <ChatBlock
                    key={i}
                    data={e}
                    me={trubuddy?._id == e?.sender}
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
                    me={trubuddy?._id == e?.sender}
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
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
    </div>
  );
};

const ChatBlock = ({ me, data, setIsOpen, modalIsOpen }) => {
  const { setCommunityClicked } = useContext(Context);

  return (
    <div>
      <div
        className={`${
          me ? "float-right items-end" : "float-left items-start"
        } flex flex-col`}
      >
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
              width={10000}
              height={10000}
              className="w-[14vw] md:w-[3vw] md:h-[3vw] h-[14vw] object-cover object-center rounded-full"
            />
            <p className="font-medium ml-2 text-lg text-white">{data?.name}</p>
          </div>
          <p className="text-white mt-0.5">{data?.message}</p>
          <p className="text-end text-white text-xs mt-0.5">
            {format(data?.time)}
          </p>
        </div>
      </div>
      <div className="clear-both"></div>
    </div>
  );
};

export default TrubuddyChat;
