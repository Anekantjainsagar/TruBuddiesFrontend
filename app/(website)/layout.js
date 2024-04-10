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
import LoginModal from "./Components/login";
import Head from "next/head";

import { GoogleOAuthProvider } from "@react-oauth/google";

export default function RootLayout({ children }) {
  const { modalIsOpen, setIsOpen } = useContext(Context);
  const pathname = usePathname();
  const history = useRouter();

  return (
    <div className={`${maliFont.className}`}>
      <LoginModal />
      <State>
        <div className={`${pathname.includes("chats") ? "hidden" : "block"}`}>
          <Head>
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3501133654906163"
              crossorigin="anonymous"
            ></script>
            <meta
              name="google-adsense-account"
              content="ca-pub-3501133654906163"
            />
          </Head>
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
                if (getCookie("token")) {
                  history.push("/chats");
                } else {
                  setIsOpen(true);
                }
              }}
            />
          </div>
          <Navbar />
        </div>
        {children}
        <Footer />
        {/* </GoogleOAuthProvider> */}
      </State>
    </div>
  );
}
