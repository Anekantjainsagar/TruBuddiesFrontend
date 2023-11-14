"use client";
import { useRouter } from "next/navigation";
import { maliFont } from "../(website)/Components/Utils/font";
import logo from "../(website)/Assets/Home/Logo Image.png";
import Image from "next/image";

export default function RootLayout({ children }) {
  const history = useRouter();

  return (
    <html lang="en">
      <div className="fixed bottom-5 md:bottom-10 right-5 md:right-10 z-50 cursor-pointer">
        <Image
          src={logo}
          alt="Logo"
          className="bg-[#ffda56] rounded-full p-1.5 w-[13vw] md:w-[3.5vw]"
          onClick={(e) => {
            history.push("/trubuddy/buddies");
          }}
        />
      </div>
      <body className={`${maliFont.className}`}>{children}</body>
    </html>
  );
}
