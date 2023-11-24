"use client";
import { useContext } from "react";
import Footer from "./Components/Utils/Footer";
import Navbar from "./Components/Utils/Navbar";
import { maliFont } from "./Components/Utils/font";
import logo from "./Assets/Home/Logo Image.png";

import State from "../Context/State";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import Context from "../Context/Context";

export default function RootLayout({ children }) {
  const { modalIsOpen, setIsOpen } = useContext(Context);
  const pathname = usePathname();
  const history = useRouter();

  return (
    <html lang="en">
      <body className={`${maliFont.className}`}>
        <State>
          <div
            className={`${
              pathname == "/" ? "block md:hidden" : "block"
            } fixed bottom-5 md:bottom-10 right-5 md:right-10 z-50 cursor-pointer`}
          >
            <Image
              src={logo}
              alt="Logo"
              className="bg-[#ffda56] rounded-full p-1.5 w-[13vw] md:w-[3.5vw]"
              onClick={(e) => {
                console.log(getCookie("token"));
                if (getCookie("token")) {
                  history.push("/chats");
                } else {
                  setIsOpen(!modalIsOpen);
                }
              }}
            />
          </div>
          <Navbar />
          {children}
          <Footer />
        </State>
      </body>
    </html>
  );
}
