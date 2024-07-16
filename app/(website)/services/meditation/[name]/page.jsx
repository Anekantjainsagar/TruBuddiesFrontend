"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

import element from "../../../../Images/Services/yoga/block/element 1.png";
import element2 from "../../../../Images/Services/yoga/block/element 2.png";
import yogaPos from "../../../../Images/Services/yoga/block/position.png";
import ServiceContext from "../../../../Context/ServiceContext";

const SeprateYoga = ({ params }) => {
  const { name } = params;
  const [data, setData] = useState();
  const context = useContext(ServiceContext);

  useEffect(() => {
    if (context?.meditations) {
      let yoga = context?.meditations?.find((e) => e?._id == name);
      setData({
        thumbnail: yoga?.thumbnail,
        title: yoga?.title,
        poses: yoga?.poses,
      });
    }
  }, [context?.meditations, name]);

  return (
    <div className="pt-16 bg-gradient-to-r from-[#A9B2FF] to-white">
      <div className="relative">
        <Image src={element} alt="Element" className="absolute z-10" />
        <div className="z-20 relative py-3">
          <h1 className="pt-3 text-3xl font-semibold text-center">
            {data?.title}
          </h1>
          <p className="text-gray-500 pb-4 text-center">
            Audio | Video | Article
          </p>
          <div className="flex items-center justify-center py-7 mt-3">
            <div
              style={{ borderRadius: "10rem 3rem 3rem 10rem" }}
              className="bg-[#094886] w-[18vw] h-[8vh] flex items-end justify-between p-2"
            >
              <span className="bg-white cursor-pointer h-full w-[3vw] rounded-full flex items-center justify-center text-xl">
                <FaPlay />
              </span>
              <Image
                src={yogaPos}
                alt="Yoga position"
                className="w-[10vw] -mr-5 -mb-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh] bg-gray-300 z-20 relative"></div>
      <div className="relative overflow-hidden">
        <div className="absolute z-10">
          <Image src={element2} alt="Element 2" className="z-10 -mt-60" />
        </div>
        <div className="relative z-20 py-16 px-12">
          <h1 className="text-3xl font-medium">Steps -</h1>
          {data?.poses?.map((e, i) => {
            return (
              <div
                key={i}
                className={`flex items-center ${
                  i % 2 == 0 ? "flex-row" : "flex-row-reverse"
                } justify-between w-full mb-5`}
              >
                <div className="w-9/12">
                  <h1 className="font-medium text-2xl">
                    {i + 1}. {e?.title}
                  </h1>
                  <p className="text-lg">{e?.description}</p>
                </div>
                <Image
                  src={e?.img}
                  className="w-2/12"
                  alt={e?.img?.src}
                  width={1000}
                  height={1000}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeprateYoga;
