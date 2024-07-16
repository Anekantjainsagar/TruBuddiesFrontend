"use client";
import React, { useState, useEffect, useContext } from "react";
import { noto_sans } from "../../../../../(website)/Components/Utils/font";
import AddNewCategory from "./AddNew";
import UpdateCategory from "./UpdateCategory";
import ServiceContext from "../../../../../Context/ServiceContext";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BASE_URL } from "../../../../../(website)/Components/Utils/url";
import axios from "axios";
import toast from "react-hot-toast";

const Category = () => {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const context = useContext(ServiceContext);
  const [data, setData] = useState();

  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5`}>
      <AddNewCategory modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <UpdateCategory
        modalIsOpen={modalIsOpen1}
        setIsOpen={setIsOpen1}
        data={data}
      />
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">Event Categories</h1>
        <div className="flex items-center">
          <p className="mr-2">Filter</p>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            className="outline-none rounded-md border px-2 py-0.5"
            placeholder="Search Here"
          />
          <button
            onClick={(e) => {
              setIsOpen(!modalIsOpen);
            }}
            className="text-white bg-newBlue px-3 ml-3 py-1 rounded-md"
          >
            + Add New
          </button>
        </div>
      </div>
      <div className="mt-5 text-lg">
        <div
          className="grid grid-cols-2 font-semibold text-xl mb-2"
          style={{ gridTemplateColumns: "20% 60% 20%" }}
        >
          <p className="text-center">Title</p>
          <p className="text-center">Description</p>
          <p className="text-center">Actions</p>
        </div>
        <div className="h-[85vh] overflow-y-auto">
          {context?.eventCategory
            ?.filter((e) => {
              if (search) {
                return e?.title?.toLowerCase().includes(search.toLowerCase());
              }
              return e;
            })
            ?.map((e, i) => {
              return (
                <div
                  key={i}
                  className="grid grid-cols-2 border py-2 mb-3 items-center"
                  style={{ gridTemplateColumns: "20% 60% 20%" }}
                >
                  <p className="text-center">{e?.title}</p>
                  <p className="text-center">{e?.description}</p>
                  <div className="flex items-center justify-center">
                    <AiOutlineEdit
                      onClick={() => {
                        setData(e);
                        setIsOpen1(!modalIsOpen1);
                      }}
                      className="bg-yellow-400 hover:bg-transparent cursor-pointer hover:text-yellow-400 border-transparent border hover:border-yellow-400 text-white p-1.5 text-3xl rounded-full"
                    />
                    <AiOutlineDelete
                      onClick={async () => {
                        let bool = window.confirm("Delete the item?");
                        if (bool) {
                          const res = await axios.delete(
                            `${BASE_URL}/services/social-support/delete-category/${e?._id}`
                          );
                          if (res.status == 200) {
                            context?.setEventCategory(
                              context?.eventCategory.filter(
                                (category) => category._id !== e?._id
                              )
                            );
                            toast.success(
                              "Event Category deleted successfully"
                            );
                          }
                        }
                      }}
                      className="bg-red-400 hover:bg-transparent cursor-pointer hover:text-red-400 border-transparent border hover:border-red-400 text-white p-1.5 text-3xl ml-2 rounded-full"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Category;
