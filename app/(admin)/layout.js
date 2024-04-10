"use client";
import { maliFont, noto_sans } from "../(website)/Components/Utils/font";
import Navbar from "./Components/Navbar";
import State from "../Context/State";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className={`${noto_sans.className}`}>
      <State>
        <div className="flex items-start justify-between">
          <div
            className={`${pathname !== "/admin/login" ? "block" : "hidden"}`}
          >
            <Navbar />
          </div>
          <div className="w-[82vw]">{children}</div>
        </div>
      </State>
    </div>
  );
}
