"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import Context from "../../../Context/Context";
import Image from "next/image";
import { BASE_URL } from "../../Components/Utils/url";
import axios from "axios";
import { getCookie } from "cookies-next";

const UpperTrubuddyBlock = ({ id, show }) => {
  const { setClickedUser } = useContext(Context);
  const [user, setUser] = useState();
  const history = useRouter();

  useEffect(() => {
    axios
      .post(`${BASE_URL}/trubuddy/get-one/${id}`, { token: getCookie("token") })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div
      className={`md:border-0 ${
        !show ? "border-b" : ""
      } flex md:p-0 p-1 relative`}
      onClick={(e) => {
        setClickedUser(user);
        if (typeof window != "undefined" && window.innerWidth < 550) {
          history.push(`/chats/${id}`);
        } else {
          history.push("/chats");
        }
      }}
    >
      <Image
        src={user?.profile}
        width={100}
        height={100}
        alt="Logo image"
        className={`cursor-pointer ${
          show
            ? "w-[16vw] h-[16vw] md:w-[5vw] md:h-[5vw] object-cover object-center"
            : "w-[16vw] h-[16vw] md:w-[5vw] md:h-[5vw] object-cover object-center"
        } rounded-full`}
      />
      {user?.unseen > 0 ? (
        <div
          className={`bg-newBlue md:block ${
            show ? "" : "hidden"
          } cursor-pointer px-2 absolute right-0 text-white bottom-0 rounded-full`}
        >
          {user?.unseen}
        </div>
      ) : null}
      <div className={`ml-2 md:hidden ${show ? "hidden" : ""}`}>
        <h1 className="font-semibold text-lg">{user?.name}</h1>
        <p className="-mt-1 text-sm">The Buddy You Need The Most</p>
      </div>
      {user?.unseen > 0 ? (
        <div
          className={`ml-2 text-end self-center absolute right-1 flex bg-newBlue text-white rounded-full h-fit items-center justify-center px-2 md:hidden ${
            show ? "hidden" : ""
          }`}
        >
          <p>{user?.unseen}</p>
        </div>
      ) : null}
    </div>
  );
};

export default UpperTrubuddyBlock;
