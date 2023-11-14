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
  const [clickedUser, setClickedUser] = useState({});
  const [showEditProfile, setShowEditProfile] = useState(false);

  const [trubuddy, setTrubuddy] = useState();
  const [showTrubuddyEdit, setShowTrubuddyEdit] = useState(false);
  const [clickedBuddy, setClickedBuddy] = useState({
    _id: "653ba550d4139488f6ec3cd4",
  });

  // Admin states
  const [adminUsers, setAdminUsers] = useState([]);
  const [adminUserConfig, setAdminUserConfig] = useState("");
  const [adminTrubuddies, setAdminTrubuddies] = useState([]);
  const [adminTrubuddyConfig, setAdminTrubuddyConfig] = useState("");

  const getUser = () => {
    if (getCookie("token")) {
      axios
        .post(`${BASE_URL}/login/get-user`, { token: getCookie("token") })
        .then((response) => {
          setLogin(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getTrubuddyLogin = () => {
    if (getCookie("trubuddy_token")) {
      axios
        .post(`${BASE_URL}/trubuddy/get`, {
          token: getCookie("trubuddy_token"),
        })
        .then((res) => {
          setTrubuddy(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getUser();
  }, [getCookie("token")]);

  const getMessages = (id, buddy) => {
    axios
      .post(`${BASE_URL}/chat/getMessages/${id}`, {
        token: buddy ? getCookie("trubuddy_token") : getCookie("token"),
      })
      .then((res) => {
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
        setGroupMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllUsers = () => {
    axios
      .get(`${BASE_URL}/admin/get-users?search=${adminUserConfig}`)
      .then((res) => {
        setAdminUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllTrubuddies = () => {
    axios
      .get(`${BASE_URL}/admin/get-trubuddies?search=${adminTrubuddyConfig}`)
      .then((res) => {
        setAdminTrubuddies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, [adminUserConfig]);

  useEffect(() => {
    getAllTrubuddies();
  }, [adminTrubuddyConfig]);

  const admin = {
    getAllUsers,
    adminUsers,
    setAdminUserConfig,
    adminUserConfig,
    getAllTrubuddies,
    adminTrubuddies,
    adminTrubuddyConfig,
    setAdminTrubuddyConfig,
  };

  useEffect(() => {
    getTrubuddyLogin();
  }, [getCookie("trubuddy_token")]);

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
        getTrubuddyLogin,
        trubuddy,
        showTrubuddyEdit,
        setShowTrubuddyEdit,
        clickedBuddy,
        setClickedBuddy,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default B2BState;
