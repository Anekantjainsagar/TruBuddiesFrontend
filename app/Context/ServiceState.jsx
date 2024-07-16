"use client";
import React, { useEffect, useState } from "react";
import ServiceContext from "./ServiceContext";
import axios from "axios";
import { BASE_URL } from "../(website)/Components/Utils/url";

const ServiceState = (props) => {
  const [bookCategory, setBookCategory] = useState([]);
  const [books, setBooks] = useState([]);
  const [yogas, setYogas] = useState([]);
  const [meditations, setMeditations] = useState([]);
  const [events, setEvents] = useState([]);
  const [eventCategory, setEventCategory] = useState([]);

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

  const getBooks = () => {
    axios
      .get(`${BASE_URL}/services/library/get-books/`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getYogas = () => {
    axios
      .get(`${BASE_URL}/services/yoga/`)
      .then((response) => {
        setYogas(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMeditations = () => {
    axios
      .get(`${BASE_URL}/services/meditation/`)
      .then((response) => {
        setMeditations(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEventCategory = () => {
    axios
      .get(`${BASE_URL}/services/social-support/get-category/`)
      .then((response) => {
        setEventCategory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEvents = () => {
    axios
      .get(`${BASE_URL}/services/social-support/get-supports/`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBookCategory();
    getBooks();
    getYogas();
    getMeditations();
    getEvents();
    getEventCategory();
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        getBookCategory,
        bookCategory,
        setBookCategory,
        books,
        setBooks,
        getBooks,
        yogas,
        setYogas,
        getYogas,
        meditations,
        setMeditations,
        getMeditations,
        events,
        setEvents,
        getEvents,
        eventCategory,
        setEventCategory,
        getEventCategory,
      }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServiceState;
