"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip";

const Book = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <HTMLFlipBook width={500} height={600} className="shadow-lg">
        <div className="bg-transparent"></div>
        <div className="flex flex-col justify-center items-center bg-blue-500 text-white p-8 shadow-xl shadow-gray-400">
          <h2 className="text-2xl">Book Cover</h2>
        </div>
        <div className="flex flex-col justify-center items-center bg-white p-8 shadow-inner">
          <h3 className="text-xl mb-4">Page 1</h3>
          <p>This is some dummy text for page 1.</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white p-8 shadow-inner">
          <h3 className="text-xl mb-4">Page 2</h3>
          <p>This is some dummy text for page 2.</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white p-8 shadow-inner">
          <h3 className="text-xl mb-4">Page 3</h3>
          <p>This is some dummy text for page 3.</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white p-8 shadow-inner">
          <h3 className="text-xl mb-4">Page 2</h3>
          <p>This is some dummy text for page 2.</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white p-8 shadow-inner">
          <h3 className="text-xl mb-4">Page 3</h3>
          <p>This is some dummy text for page 3.</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
