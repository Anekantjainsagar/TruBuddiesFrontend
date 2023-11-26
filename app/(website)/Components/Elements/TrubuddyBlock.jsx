"use client";
import { useContext, useEffect } from "react";
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
  const {
    getUser,
    clickedUser,
    setClickedUser,
    login,
    modalIsOpen,
    setIsOpen,
  } = useContext(Context);

  useEffect(() => {
    console.log("Updated data in useEffect:", clickedUser);

    // Perform navigation logic here, e.g., history.push("/newPage");
  }, [clickedUser]);

  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <div
        onClick={(e) => {
          history.push(`/trubuddies/${data?._id}`);
        }}
        className={` bg-white cursor-pointer shadow-md shadow-gray-600 rounded-3xl ${
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
              className="w-[32vw] md:h-[6.5vw] h-[32vw] object-cover object-center md:w-[6.5vw] border-4 border-newLightBlue rounded-full"
            />
            <div className="ml-3">
              <h1 className="mt-1 md:mt-2 mb-0 text-xl font-semibold">
                {data?.anonymous ? data?.anonymous : data?.name}
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
            <div className="flex overflow-x-scroll hideScroll">
              {data?.otherExpertise?.slice(0, 2).map((e) => {
                return (
                  <div
                    className="py-0.5 w-fit px-5 whitespace-nowrap mr-2 rounded-full mt-2 text-center border-2 border-newBlue"
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
            <p className="text-gray-400 text-[16px] md:mb-0 mb-2">
              {data?.bio ? data?.bio?.slice(0, 50) + "..." : ""}
            </p>
          </div>
        </div>
        <button
          onClick={async (e) => {
            e.stopPropagation();
            setClickedUser({ ...data });
            if (getCookie("token")) {
              if (!login?.trubuddies?.includes(data?._id)) {
                axios
                  .post(`${BASE_URL}/login/start-chat/${data?._id}`, {
                    token: getCookie("token"),
                  })
                  .then((res) => {
                    if (res.status == 200) {
                      getUser();
                      if (
                        typeof window != undefined &&
                        window.innerWidth < 550
                      ) {
                        history.push(`/chats/${data?._id}`);
                      } else {
                        history.push("/chats");
                      }
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                if (typeof window != undefined && window.innerWidth < 550) {
                  history.push(`/chats/${data?._id}`);
                } else {
                  history.push("/chats");
                }
              }
            } else {
              setIsOpen(!modalIsOpen);
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
