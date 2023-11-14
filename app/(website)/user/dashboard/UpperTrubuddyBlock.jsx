"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import Context from "../../../Context/Context";
import Image from "next/image";
import { BASE_URL } from "../../Components/Utils/url";
import axios from "axios";

const UpperTrubuddyBlock = ({ id }) => {
  const { setClickedUser } = useContext(Context);
  const [user, setUser] = useState();
  const history = useRouter();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/trubuddy/get-one/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div
      className="md:border-0 border-b flex md:p-0 p-1"
      onClick={(e) => {
        setClickedUser(user);
        if (typeof window != "undefined" && window.innerWidth < 550) {
          history.push(`/chats/${id}`);
        } else {
          history.push("/chats");
        }
      }}
    >
      <Image
        src={user?.profile}
        width={100}
        height={100}
        alt="Logo image"
        className="cursor-pointer md:w-full w-2/12 rounded-full"
      />
      <div className="ml-2 md:hidden">
        <h1 className="font-semibold text-lg">{user?.name}</h1>
        <p className="-mt-1 text-sm">hey!! What are you up to.</p>
      </div>
    </div>
  );
};

export default UpperTrubuddyBlock;
