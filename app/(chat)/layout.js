"use client";
import { maliFont } from "../(website)/Components/Utils/font";
import Sidebar from "./Component/Sidebar";
import RightBar from "./Component/RightBar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${maliFont.className}`}>
        <div
          className={`w-full h-[100vh] bg-[#eff3ff] px-5 py-[1vw] flex md:flex-row flex-col items-center ${maliFont.className}`}
        >
          <div
            className={`${pathname.includes("/chats/") ? "hidden" : "block"}`}
          >
            <Sidebar />
          </div>
          {children}
          <div
            className={`${pathname.includes("/chats/") ? "hidden" : "block"}`}
          >
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
