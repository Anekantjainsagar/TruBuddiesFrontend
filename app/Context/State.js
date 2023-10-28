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

  return (
    <Context.Provider
      value={{
        login,
        modalIsOpen: loginModal,
        setIsOpen: setLoginModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default B2BState;
