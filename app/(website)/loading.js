import React from "react";
import logo from "./Assets/Home/Logo Image.png";
import Image from "next/image";

const loading = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center text-3xl">
      <Image src={logo} alt={"logo"} className="animate w-[30vw]" />
    </div>
  );
};

export default loading;
