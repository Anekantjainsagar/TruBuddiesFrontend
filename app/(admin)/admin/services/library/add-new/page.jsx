"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import {
  maliFont,
  noto_sans,
} from "../../../../../(website)/Components/Utils/font";
import axios from "axios";
import { BASE_URL } from "../../../../../(website)/Components/Utils/url";
import { Editor } from "@tinymce/tinymce-react";
import ServiceContext from "../../../../../Context/ServiceContext";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Library = () => {
  const editorRef = useRef(null);
  const [thumbnail, setThumbnail] = useState("");
  const history = useRouter();
  const [data, setData] = useState({
    title: "",
    category: "",
  });
  const context = useContext(ServiceContext);

  useEffect(() => {
    if (context?.bookCategory?.length > 0) {
      const id = context?.bookCategory[0]?._id;
      setData({ ...data, category: id });
    }
  }, [context?.bookCategory]);

  const saveBook = () => {
    if (data?.title && data?.category && thumbnail) {
      axios
        .post(`${BASE_URL}/services/library/add-book`, {
          content: editorRef.current.getContent(),
          ...data,
          thumbnail,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Book added successfully");
            context?.setBooks([...context?.books, res.data]);
            history.push("/admin/services/library");
          }
        });
    } else {
      toast.error("Please fill all the details");
    }
  };

  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5 overflow-y-auto`}>
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">Add New Book</h1>
      </div>
      <div className="flex items-start justify-between mt-5 px-2">
        <div className="w-[31%] flex flex-col items-center">
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
            {context?.bookCategory?.map((e, i) => {
              return (
                <option value={e?._id} key={i}>
                  {e?.title}
                </option>
              );
            })}
          </select>
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
        <div className="w-8/12">
          <Editor
            apiKey="ikwsxyoq6c9y383gsmjsmqxon32gj0eqrawckjpqsq5sa5wm"
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: 800,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
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
        Save Book
      </button>
    </div>
  );
};

export default Library;
