"use client";
import React, { useContext, useState } from "react";
import { noto_sans } from "../../../../(website)/Components/Utils/font";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ServiceContext from "../../../../Context/ServiceContext";

const YogaAdmin = () => {
  const [search, setSearch] = useState("");
  const history = useRouter();
  const context = useContext(ServiceContext);

  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5 overflow-y-auto`}>
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">Yoga</h1>
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
              history.push("/admin/services/yoga/add-new");
            }}
            className="text-white bg-newBlue px-3 ml-3 py-1 rounded-md"
          >
            + Add New
          </button>
        </div>
      </div>
      <div className="grid mt-5 grid-cols-4 px-3 gap-x-10 pb-5">
        {context?.yogas
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
                onClick={(event) => {
                  history.push(`/admin/services/yoga/update/${e?._id}`);
                }}
                className="border shadow-md my-5 text-black hover:text-white bg-transparent hover:bg-newDarkGreen cursor-pointer shadow-gray-400 w-fit p-2 border-gray-600 rounded-3xl mx-auto duration-500 hover:scale-105"
              >
                <Image
                  src={e?.thumbnail}
                  width={1000}
                  height={1000}
                  alt="Yoga thumbnail"
                  className="rounded-3xl"
                />
                <p className="text-center noto_sans font-semibold text-lg">
                  {e?.title}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default YogaAdmin;
