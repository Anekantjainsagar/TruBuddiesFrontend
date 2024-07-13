"use client";
import React, { useEffect, useState } from "react";
import ServiceContext from "./ServiceContext";
import axios from "axios";
import { BASE_URL, URL } from "../(website)/Components/Utils/url";

const ServiceState = (props) => {
  const [bookCategory, setBookCategory] = useState([]);

  const getBookCategory = () => {
    axios
      .get(`${BASE_URL}/services/library/get-category/`)
      .then((response) => {
        setBookCategory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBookCategory();
  }, []);

  return (
    <ServiceContext.Provider
      value={{ getBookCategory, bookCategory, setBookCategory }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServiceState;
