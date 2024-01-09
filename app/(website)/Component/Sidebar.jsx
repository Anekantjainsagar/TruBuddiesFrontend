"use client";
import React, { useContext } from "react";
import Context from "../../Context/Context";
import Image from "next/image";
import { AiFillMessage } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { BiExit } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const { login } = useContext(Context);
  const pathname = usePathname();
  const history = useRouter();

  return (
    <div className="bg-newBlue md:flex hidden h-[97vh] py-3 px-3 rounded-3xl flex-col items-center justify-between">
      <div>
        <Image
          src={login?.profile}
          width={10000}
          height={10000}
          className="rounded-full w-[3.4vw] object-cover object-center h-[3vw] cursor-pointer"
          onClick={(e) => {
            history.push("/user/dashboard");
          }}
          alt="Profile"
        />
        <AiFillMessage
          className={`w-full my-5 cursor-pointer ${
            pathname == "/chats"
              ? "text-white"
              : "text-[#a4c0ff] hover:text-white"
          }`}
          onClick={(e) => {
            history.push("/chats");
          }}
          size={35}
        />
        <IoIosPeople
          className={`w-full my-4 text-[#a4c0ff] cursor-pointer hover:text-white  ${
            pathname == "/group-chats"
              ? "text-white"
              : "text-[#a4c0ff] hover:text-white"
          } transition-all`}
          onClick={(e) => {
            history.push("/group-chats");
          }}
          size={38}
        />
      </div>
      <BiExit
        onClick={(e) => {
          history.push("/");
        }}
        className="w-full text-[#a4c0ff] cursor-pointer hover:text-white"
        size={35}
      />
    </div>
  );
};

export default Sidebar;
