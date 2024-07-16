"use client";
import React, { useContext, useState } from "react";
import { noto_sans } from "../../../../(website)/Components/Utils/font";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ServiceContext from "../../../../Context/ServiceContext";

const Library = () => {
  const [search, setSearch] = useState("");
  const history = useRouter();
  const context = useContext(ServiceContext);

  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5 overflow-y-auto`}>
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">Events</h1>
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
              history.push("/admin/services/social-support/add-new");
            }}
            className="text-white bg-newBlue px-3 ml-3 py-1 rounded-md"
          >
            + Add New
          </button>
        </div>
      </div>
      <div className="grid mt-5 grid-cols-5 gap-x-5 pb-5 gap-y-5">
        {context?.events
          ?.filter((e) => {
            if (search) {
              return e?.title?.toLowerCase()?.includes(search?.toLowerCase());
            }
            return e;
          })
          ?.map((e, i) => {
            return <Block key={i} data={e} />;
          })}
      </div>
    </div>
  );
};

const Block = ({ data }) => {
  const history = useRouter();

  return (
    <div
      onClick={(e) => {
        history.push(`/admin/services/social-support/update/${data?._id}`);
      }}
      className="py-3 px-3 relative flex flex-col items-center justify-center cursor-pointer rounded-lg bg-gray-200 hover:scale-105 transition-all"
    >
      <p className="absolute top-3 right-3 text-black border border-black bg-gray-200 hover:opacity-50 transition-all px-2 rounded-md">
        {data?.category?.title}
      </p>
      <Image
        src={data?.thumbnail}
        width={1000}
        height={1000}
        alt={data?.thumbnail?.src}
        className="w-[20vw] h-[400px] object-cover object-center rounded-md"
      />
      <p className="noto_sans mt-1 text-xl font-semibold text-center">
        {data?.title}
      </p>
      <p className="text-lg text-center text-gray-600">
        {new Date(data?.date)?.toString()?.slice(0, 16)}
      </p>
      <p className="text-lg text-center text-gray-600">Time:- {data?.time}</p>
      {data?.location ? (
        <p className="text-lg text-center text-gray-600">{data?.location}</p>
      ) : (
        <p className="text-lg text-center text-gray-600 opacity-0">location</p>
      )}
    </div>
  );
};

export default Library;
