import React from "react";
import profileBg from "../../../(website)/Assets/User/purple bg.png";
import dotsBg from "../../../(website)/Assets/User/dots bg.png";
import Image from "next/image";

const UserDashboard = () => {
  return (
    <div className="bg-white">
      <Image
        src={profileBg}
        alt="Profile bg"
        className="h-[40vh] object-cover object-bottom"
      />
      <Image
        src={dotsBg}
        alt="Dots bg"
        className="h-[65vh] object-cover object-center"
      />
    </div>
  );
};

export default UserDashboard;
