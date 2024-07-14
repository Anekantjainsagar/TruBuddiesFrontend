"use client";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import parse from "html-react-parser";
import ServiceContext from "../../../../Context/ServiceContext";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";

const Book = ({ params }) => {
  const { id } = params;
  const bookRef = useRef(null);
  const [book, setBook] = useState();
  const [pages, setPages] = useState([]);
  const context = useContext(ServiceContext);

  useEffect(() => {
    if (context?.books) {
      let book = context?.books?.filter((e) => {
        return e?._id === id;
      });
      if (book) {
        book = book[0];
      }
      setBook(book);
    }
  }, [context?.books, id]);

  useEffect(() => {
    if (book && book.content) {
      const content = book.content;
      const contentArray = splitContentIntoPages(content);
      setPages(contentArray);
    }
  }, [book]);

  const splitContentIntoPages = (content) => {
    const words = content.split(" ");
    const wordsPerPage = 130;
    let pages = [];

    for (let i = 0; i < words.length; i += wordsPerPage) {
      pages.push(words.slice(i, i + wordsPerPage).join(" "));
    }
    return pages;
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 h-screen bg-white">
      <h2 className="text-3xl mb-5 font-semibold">{book?.title}</h2>
      <div className="w-full flex items-center justify-center relative">
        <div
          onClick={(e) => {
            bookRef.current.pageFlip().flipPrev();
          }}
          className="absolute left-20 md:block hidden text-6xl cursor-pointer"
        >
          <GrPrevious />
        </div>
        <HTMLFlipBook ref={bookRef} width={520} height={750}>
          <div className="bg-transparent"></div>
          <div className="flex justify-center items-center bg-transparent">
            <Image
              className="w-full h-full object-contain object-bottom"
              width={1000}
              height={1000}
              src={book?.thumbnail}
              alt={"Thumbnail"}
            />
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
                className="flex flex-col justify-center items-center bg-gray-100 p-8 shadow-xl shadow-gray-500"
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
        <div
          onClick={(e) => {
            bookRef.current.pageFlip().flipNext();
          }}
          className="absolute right-20 md:block hidden text-6xl cursor-pointer"
        >
          <GrNext />
        </div>
      </div>
      {window.innerWidth < 600 && (
        <div className="mt-8">
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
      )}
    </div>
  );
};

export default Book;
