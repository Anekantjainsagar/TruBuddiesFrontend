"use client";
import React, { useContext, useState } from "react";
import { noto_sans } from "../../../../../(website)/Components/Utils/font";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ServiceContext from "../../../../../Context/ServiceContext";
import toast from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "../../../../../(website)/Components/Utils/url";
import { AiOutlineDelete } from "react-icons/ai";

const YogaAdmin = () => {
  const history = useRouter();
  const context = useContext(ServiceContext);
  const [data, setData] = useState({
    thumbnail: "",
    poses: [],
    title: "",
  });

  const saveYoga = () => {
    if (data?.thumbnail && data?.poses && data?.title) {
      axios
        .post(`${BASE_URL}/services/yoga/`, { ...data })
        .then((response) => {
          if (response.status === 201) {
            toast.success("Yoga Position Added Successfully");
            history.push("/admin/services/yoga");
            context?.setYogas([...context?.yogas, response.data]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please fill all the details");
    }
  };

  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5 overflow-y-auto`}>
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">Add New Yoga</h1>
      </div>
      <div className="flex items-start justify-between">
        <div className="w-8/12">
          <input
            type="text"
            placeholder="Title"
            className="w-full outline-none border px-3 py-1 rounded-md"
            value={data?.title}
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
          />
        </div>
        <div className="w-[32%] flex flex-col items-center justify-center">
          {data?.thumbnail ? (
            <Image
              width={1000}
              height={1000}
              src={data?.thumbnail}
              className="object-cover w-full object-center rounded-md"
            />
          ) : (
            <div className="h-[30vh] w-full bg-gray-200 rounded-md"></div>
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
                  setData({ ...data, thumbnail: res.url });
                })
                .catch((err) => {});
            }}
          />
        </div>
      </div>
      <div className="w-full my-5 flex flex-col items-center justify-center">
        {data?.poses?.map((e, i) => {
          if (Object.keys(e) == 0) {
            return <InputBlock data={data} setData={setData} key={i} />;
          }
          return (
            <Block
              key={i}
              data={e}
              originalData={data}
              setOriginalData={setData}
            />
          );
        })}
        <button
          onClick={(e) => {
            if (data?.poses?.length == 0) {
              setData({ ...data, poses: [...data.poses, {}] });
            } else {
              if (
                Object.keys(data?.poses[data?.poses.length - 1]).length !== 0
              ) {
                console.log("I'm adding");
                setData({ ...data, poses: [...data.poses, {}] });
              } else {
              }
            }
          }}
          className="bg-newBlue mt-3 px-8 py-1 text-white rounded-md"
        >
          Add Block
        </button>
      </div>
      <button
        onClick={(e) => {
          saveYoga();
        }}
        className="bg-newBlue w-full font-semibold py-2 mb-5 text-lg text-white rounded-md"
      >
        Save Yoga Position
      </button>
    </div>
  );
};

const Block = ({ data, originalData, setOriginalData }) => {
  return (
    <div className="w-full flex items-center justify-between p-2 rounded-md border my-2 border-gray-300 relative">
      <div className="w-[24%] flex flex-col items-center justify-center">
        <Image
          width={1000}
          height={1000}
          src={data?.img}
          alt={data?.img?.src}
          className="object-cover object-top aspect-squre w-8/12 rounded-md"
        />
      </div>
      <div className="w-[75%]">
        <h4 className="font-semibold text-xl">{data?.title}</h4>
        <p className="text-lg">{data?.description}</p>
      </div>
      <AiOutlineDelete
        onClick={async () => {
          let bool = window.confirm("Delete the item?");
          if (bool) {
            let temp = originalData?.poses;
            let idx = temp.findIndex((obj) => obj._id === data?._id);
            if (idx >= 0) {
              temp.splice(idx, 1);
            }
            setOriginalData({ ...originalData, poses: temp });
          }
        }}
        className="bg-red-400 hover:bg-transparent cursor-pointer hover:text-red-400 border-transparent border hover:border-red-400 text-white p-1.5 text-3xl ml-2 rounded-full absolute right-2 top-2"
      />
    </div>
  );
};

const InputBlock = ({ data, setData }) => {
  const [blockData, setBlockData] = useState({
    img: "",
    title: "",
    description: "",
  });

  return (
    <div className="w-full flex items-start justify-between p-2 rounded-md border border-gray-100/90">
      <div className="w-[24%] flex flex-col items-center justify-center">
        {blockData?.img ? (
          <Image
            width={1000}
            height={1000}
            src={blockData?.img}
            className="object-cover object-top aspect-squre w-8/12 rounded-md"
          />
        ) : (
          <div className="h-[20vh] w-full bg-gray-200 rounded-md"></div>
        )}
        <input
          type="file"
          className="mt-2 text-sm"
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
                setBlockData({ ...blockData, img: res.url });
              })
              .catch((err) => {});
          }}
        />
      </div>
      <div className="w-[75%]">
        <input
          type="text"
          placeholder="Yoga Position Name"
          className="w-full outline-none border px-3 py-1 rounded-md"
          value={blockData?.title}
          onChange={(e) => {
            setBlockData({ ...blockData, title: e.target.value });
          }}
        />
        <textarea
          className="w-full outline-none border px-3 py-1 rounded-md mt-4"
          placeholder="Yoga Position Description"
          rows={5}
          value={blockData?.description}
          onChange={(e) => {
            setBlockData({ ...blockData, description: e.target.value });
          }}
        ></textarea>
        <button
          onClick={(e) => {
            if (blockData?.title && blockData?.description && blockData?.img) {
              const newData = data?.poses.slice(0, -1);
              newData.push({
                img: blockData?.img,
                title: blockData?.title,
                description: blockData?.description,
              });
              setData({ ...data, poses: newData });
              setBlockData({ img: "", title: "", description: "" });
            } else {
              toast.error("Please fill all the details");
            }
          }}
          className="bg-newBlue/90 text-white float-right text-sm py-1 px-5 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default YogaAdmin;
