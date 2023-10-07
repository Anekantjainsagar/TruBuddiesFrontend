import React from "react";
import logo from "@/app/Assets/Home/Logo Image.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[2vw] py-2 w-full fixed top-0 left-0">
      <Image src={logo} alt="Logo image" className="w-[3.5vw]" />
      <div className="flex items-center justify-between w-2/6">
        {[
          {
            name: "Home",
            route: "",
          },
          { name: "About us", route: "" },
          { name: "Services", route: "" },
          {
            name: "Contact",
            route: "",
          },
        ].map((e, i) => {
          return (
            <p key={i} className="uppercase cursor-pointer font-semibold">
              {e.name}
            </p>
          );
        })}
      </div>
      <div>
        <button className="font-semibold px-4 bg-white mr-3 text-newBlue py-1 rounded-md">
          Login
        </button>
        <button className="font-semibold px-4 bg-newBlue text-white py-1 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
