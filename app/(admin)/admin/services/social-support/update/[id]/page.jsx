"use client";
import React, { useState, useEffect, useContext } from "react";
import { noto_sans } from "../../../../../../(website)/Components/Utils/font";
import axios from "axios";
import { BASE_URL } from "../../../../../../(website)/Components/Utils/url";
import ServiceContext from "../../../../../../Context/ServiceContext";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";

const Library = ({ params }) => {
  const { id } = params;
  const [thumbnail, setThumbnail] = useState("");
  const context = useContext(ServiceContext);
  const history = useRouter();
  const [sTime, setsTime] = useState();
  const [eTime, seteTime] = useState();
  const [data, setData] = useState({
    title: "",
    category: "",
    date: "",
    location: "",
  });

  useEffect(() => {
    if (context?.events) {
      let book = context?.events?.filter((e) => {
        return e?._id === id;
      });
      if (book) {
        book = book[0];
      }
      const time = book?.time?.split("-");
      const datePart = book?.date?.split("T")[0];
      setThumbnail(book?.thumbnail);
      setData({
        title: book?.title,
        category: book?.category?._id,
        date: datePart,
        location: book?.location,
      });
      if (time) {
        setsTime(time[0]);
        seteTime(time[1]);
      }
    }
  }, [context?.events, id]);

  const saveBook = () => {
    if (
      data?.title &&
      data?.category &&
      sTime &&
      eTime &&
      data?.date &&
      thumbnail
    ) {
      axios
        .put(`${BASE_URL}/services/social-support/update-support/${id}`, {
          ...data,
          thumbnail,
          time: sTime + "-" + eTime,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Event updated successfully");
            context?.setEvents(
              context?.events.map((book) => (book._id === id ? res.data : book))
            );
            history.push("/admin/services/social-support");
          }
        });
    } else {
      toast.error("Please fill all the details");
    }
  };

  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5 overflow-y-auto`}>
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">Update Event</h1>
        <AiOutlineDelete
          onClick={async () => {
            let bool = window.confirm("Delete the item?");
            if (bool) {
              const res = await axios.delete(
                `${BASE_URL}/services/social-support/delete-support/${id}`
              );
              if (res.status == 200) {
                context?.setEvents(
                  context?.events.filter((ev) => ev._id !== id)
                );
                history.push("/admin/services/social-support");
                toast.success("Event deleted successfully");
              }
            }
          }}
          className="bg-red-400 hover:bg-transparent cursor-pointer hover:text-red-400 border-transparent border hover:border-red-400 text-white p-1.5 text-4xl ml-2 rounded-full"
        />
      </div>
      <div className="flex items-start justify-between mt-5 px-2">
        <div className="w-[65%] flex flex-col items-center">
          <input
            type="text"
            placeholder="Title"
            value={data?.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className="border w-full mb-4 outline-none px-4 py-1 rounded-md"
          />
          <select
            name="category"
            id="category"
            className="border w-full mb-4 outline-none px-4 py-1 rounded-md"
            value={data?.category}
            onChange={(e) => {
              setData({ ...data, category: e.target.value });
            }}
          >
            {context?.eventCategory?.map((e, i) => {
              return (
                <option value={e?._id} key={i}>
                  {e?.title}
                </option>
              );
            })}
          </select>
          <div className="flex items-center justify-between w-full px-0.5">
            <div className="flex items-center">
              <p className="mr-3 text-lg">Date:- </p>
              <input
                type="date"
                value={data?.date}
                onChange={(e) => setData({ ...data, date: e.target.value })}
                className="border w-full outline-none px-4 py-1 rounded-md"
              />
            </div>
            <div className="flex items-center">
              <p className="mr-3 text-lg">Time:- </p>
              <input
                type="time"
                placeholder="Title"
                value={sTime}
                onChange={(e) => setsTime(e.target.value)}
                className="border w-full outline-none px-4 py-1 rounded-md mr-2"
              />
              <input
                type="time"
                placeholder="Title"
                value={eTime}
                onChange={(e) => seteTime(e.target.value)}
                className="border w-full outline-none px-4 py-1 rounded-md"
              />
            </div>
            <div className="flex items-center">
              <p className="mr-3 text-lg">Location:- </p>
              <input
                type="text"
                placeholder="Location"
                value={data?.location}
                onChange={(e) => setData({ ...data, location: e.target.value })}
                className="border w-full outline-none px-4 py-1 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="w-4/12">
          {thumbnail ? (
            <Image
              width={1000}
              height={1000}
              src={thumbnail}
              className="object-cover w-full object-center rounded-md"
            />
          ) : (
            <div className="h-[50vh] w-full bg-gray-200 rounded-md"></div>
          )}
          <input
            type="file"
            className="my-3"
            onChange={(e) => {
              const formData = new FormData();
              formData.append("file", e.target.files[0]);
              formData.append("upload_preset", "upload_photo");
              formData.append("cloud_name", "dfpnkqrjw");

              fetch("https://api.Cloudinary.com/v1_1/dfpnkqrjw/image/upload", {
                method: "POST",
                body: formData,
              })
                .then((res) => res.json())
                .then((res) => {
                  setThumbnail(res.url);
                })
                .catch((err) => {});
            }}
          />
        </div>
      </div>
      <button
        onClick={(e) => {
          saveBook();
        }}
        className="bg-newBlue mb-5 text-white py-2 w-full text-center font-semibold mt-4 rounded-md text-lg"
      >
        Save Event
      </button>
    </div>
  );
};

export default Library;
