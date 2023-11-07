"use client";
import React, { useEffect, useState } from "react";
import Context from "./Context";
import { usePathname } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "../(website)/Components/Utils/url";
import { getCookie } from "cookies-next";

const B2BState = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [login, setLogin] = useState();
  const [messages, setMessages] = useState([]);
  const [groupMessages, setGroupMessages] = useState([]);
  const [clickedUser, setClickedUser] = useState({
    _id: "653e7db453ca29141ac51c15",
  });
  const [showEditProfile, setShowEditProfile] = useState(false);

  // Admin states
  const [adminUsers, setAdminUsers] = useState([]);

  const getUser = () => {
    axios
      .post(`${BASE_URL}/login/get-user`, { token: getCookie("token") })
      .then((response) => {
        setLogin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, [getCookie("token")]);

  const getMessages = () => {
    axios
      .post(`${BASE_URL}/chat/getMessages/${clickedUser?._id}`, {
        token: getCookie("token"),
      })
      .then((res) => {
        console.log(res.data);
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getGroupChats = (id) => {
    axios
      .post(`${BASE_URL}/chat/getGroupChats/${id}`)
      .then((res) => {
        console.log(res.data);
        setGroupMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllUsers = () => {
    axios
      .get(`${BASE_URL}/admin/get-users`, (res) => {
        console.log(res);
        setAdminUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const admin = { getAllUsers, adminUsers };

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
        setLogin,
        getGroupChats,
        groupMessages,
        showEditProfile,
        getUser,
        setShowEditProfile,
        admin,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default B2BState;
