"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Block from "../Block";
import ServiceContext from "../../../../Context/ServiceContext";

const SocialSupport = ({ params }) => {
  const { id } = params;
  const history = useRouter();
  const context = useContext(ServiceContext);
  const [data, setData] = useState();

  useEffect(() => {
    if (context?.eventCategory) {
      const event = context?.eventCategory?.find((e) => e?._id === id);
      setData(event);
    }
  }, [id, context?.eventCategory]);

  return (
    <div className={`bg-gradient-to-r pt-24 from-[#b2e1f8] to-[#AAEEEA]/0`}>
      <div className="pb-10">
        <h1 className={`text-5xl noto_sans font-semibold text-center`}>
          {data?.title}
        </h1>
        <p className="text-xl text-gray-800 w-4/12 text-center mx-auto">
          {data?.description}
        </p>
        <div className="grid grid-cols-4 py-5 gap-y-8">
          {context?.events
            ?.filter((ev) => {
              return ev?.category?._id === data?._id;
            })
            ?.map((e, i) => {
              return <Block data={e} key={i} />;
            })}
          {context?.events
            ?.filter((ev) => {
              return ev?.category?._id === data?._id;
            })
            ?.map((e, i) => {
              return <Block data={e} key={i} />;
            })}
          {context?.events
            ?.filter((ev) => {
              return ev?.category?._id === data?._id;
            })
            ?.map((e, i) => {
              return <Block data={e} key={i} />;
            })}
          {context?.events
            ?.filter((ev) => {
              return ev?.category?._id === data?._id;
            })
            ?.map((e, i) => {
              return <Block data={e} key={i} />;
            })}
          {context?.events
            ?.filter((ev) => {
              return ev?.category?._id === data?._id;
            })
            ?.map((e, i) => {
              return <Block data={e} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default SocialSupport;
