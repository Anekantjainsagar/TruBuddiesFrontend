import "./globals.css";
import { maliFont } from "./(website)/Components/Utils/font";
import State from "./Context/State";
import Head from "next/head";
import Loader from "./(website)/loading";

export const metadata = {
  title: "TruBuddies",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <State>
        {/* <Loader /> */}
        <body className={`${maliFont.className}`}>{children}</body>
      </State>
    </html>
  );
}
