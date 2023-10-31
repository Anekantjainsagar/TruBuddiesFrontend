"use client";
import React, { useEffect, useState } from "react";
import Context from "./Context";
import { usePathname } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "../(website)/Components/Utils/url";
import { getCookie } from "cookies-next";

const B2BState = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [login, setLogin] = useState({ _id: "653ba550d4139488f6ec3cd4" });
  const [messages, setMessages] = useState([]);
  const [clickedUser, setClickedUser] = useState({
    _id: "653e7db453ca29141ac51c15",
  });

  useEffect(() => {
    axios
      .post(`${BASE_URL}/login/get-user`, { token: getCookie("token") })
      .then((response) => {
        setLogin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getCookie("token")]);

  const getMessages = () => {
    axios
      .post(`${BASE_URL}/chat/getMessages/${clickedUser?._id}`, {
        token: getCookie("token"),
      })
      .then((res) => {
        console.log(res.data)
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Context.Provider
      value={{
        modalIsOpen: loginModal,
        setIsOpen: setLoginModal,
        clickedUser,
        setClickedUser,
        getMessages,
        messages,
        login,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default B2BState;
