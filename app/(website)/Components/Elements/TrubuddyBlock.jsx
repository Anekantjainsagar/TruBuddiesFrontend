"use client";
import { useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../Utils/url";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Context from "../../../Context/Context";
import male from "../../Assets/Home/icons/male.png";
import female from "../../Assets/Home/icons/female.png";
import Tilt from "react-parallax-tilt";
import { noto_sans } from "../Utils/font";
import Image from "next/image";

const TrubuddyBlock = ({ data, big }) => {
  const history = useRouter();
  const { getUser, setClickedUser, login } = useContext(Context);

  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <div
        onClick={(e) => {
          history.push(`/trubuddies/${data?._id}`);
        }}
        className={` bg-white cursor-pointer rounded-3xl ${
          big ? "mb-5" : "mb-9"
        } border md:mx-0 mx-auto ${
          big ? "w-[95%] md:w-[21.5vw]" : "w-[80%] md:w-[23vw]"
        } py-[3vw] md:py-[1vw] px-[4vw] md:px-[1.5vw] flex flex-col items-center relative trubuddiesBg`}
      >
        <div className="w-full h-full">
          <div className="flex items-center w-full justify-start">
            <Image
              src={data?.profile}
              width={100}
              height={100}
              alt="Image"
              className="w-[32vw] md:w-[6.5vw] border-4 border-newLightBlue rounded-full"
            />
            <div className="ml-3">
              <h1 className="mt-1 md:mt-2 mb-0 text-xl font-semibold">
                {data?.name}
              </h1>
              <p className="border-2 px-2 flex items-center rounded-3xl text-sm border-newBlue w-fit mt-1">
                {data?.gender?.toLowerCase() == "male" ? (
                  <Image src={male} alt="Male" className="mr-1" />
                ) : (
                  <Image src={female} alt="Male" className="mr-1" />
                )}
                {data?.gender}
              </p>
            </div>
          </div>
          <div className={`${noto_sans.className}`}>
            <h1 className="text-xl mt-2 md:mt-3 mb-0">Expertise</h1>
            <div className="grid grid-cols-2 gap-x-3">
              {data?.otherExpertise?.slice(0, 2).map((e) => {
                return (
                  <div
                    className="px-3 py-0.5 rounded-full mt-2 text-center border-2 border-newBlue"
                    key={e}
                  >
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`${noto_sans.className} px-1`}>
            <h1 className="text-xl mt-2 md:mt-3 mb-0">About</h1>
            <p className="text-gray-400 text-[16px]">
              {data?.bio ? data?.bio?.slice(0, 200) + "..." : ""}
            </p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!login?.trubuddies?.includes(data?._id)) {
              axios
                .post(`${BASE_URL}/login/start-chat/${data?._id}`, {
                  token: getCookie("token"),
                })
                .then((res) => {
                  if (res.status == 200) {
                    setClickedUser(data);
                    setTimeout(() => {
                      getUser();
                      history.push("/chats");
                    }, 500);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              setClickedUser(data);
              history.push("/chats");
            }
          }}
          className="bg-newBlue w-full cursor-pointer text-white py-1 rounded-full mt-0 md:mt-5"
        >
          Start Chat
        </button>
      </div>
    </Tilt>
  );
};

export default TrubuddyBlock;
