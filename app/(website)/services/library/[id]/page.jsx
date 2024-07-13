"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import parse from "html-react-parser";

const Book = () => {
  const bookRef = useRef(null);
  const [blog, setBlog] = useState();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    axios
      .get("https://consciousleap.co:5000/api/admin/get-blogs")
      .then((response) => {
        setBlog(response.data[13]);
      });
  }, []);

  useEffect(() => {
    if (blog && blog.description) {
      const content = blog.description;
      const contentArray = splitContentIntoPages(content);
      setPages(contentArray);
    }
  }, [blog]);

  const splitContentIntoPages = (content) => {
    const words = content.split(" ");
    const wordsPerPage = 120; // Adjust this number to fit the content on the page appropriately
    let pages = [];

    for (let i = 0; i < words.length; i += wordsPerPage) {
      pages.push(words.slice(i, i + wordsPerPage).join(" "));
    }
    return pages;
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 h-screen bg-gray-100">
      <HTMLFlipBook ref={bookRef} width={600} height={750}>
        <div className="bg-transparent"></div>
        <div className="flex flex-col justify-center items-center bg-blue-500 text-white p-8 shadow-xl shadow-gray-500">
          <h2 className="text-2xl">{blog?.title}</h2>
        </div>
        {pages.reduce((acc, pageContent, index, array) => {
          {
            /* if (index <= array.length - 1) {
            acc.push(
              <div key={`spacer-${index}`} className="bg-transparent"></div>
            );
          } */
          }
          acc.push(
            <div
              key={`main-${index}`}
              className="flex flex-col justify-center items-center bg-white p-8 shadow-xl shadow-gray-500"
            >
              <h3 className="text-xl mb-4">
                {parse(pageContent)}
                {index != array.length - 1 && "..."}
              </h3>
            </div>
          );
          return acc;
        }, [])}
      </HTMLFlipBook>
      <div className="mt-16">
        <button
          onClick={(e) => {
            bookRef.current.pageFlip().flipPrev();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Previous Page
        </button>
        <button
          onClick={(e) => {
            bookRef.current.pageFlip().flipNext();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Book;
