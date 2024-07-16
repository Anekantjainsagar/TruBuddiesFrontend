"use client";
import React, { useState } from "react";
import { noto_sans } from "../../(website)/Components/Utils/font";
import { usePathname, useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

const Navbar = () => {
  const history = useRouter();

  return (
    <div
      className={`w-[18vw] flex flex-col items-center bg-newDarkBlue h-[100vh] py-2 ${noto_sans.className}`}
    >
      <h1 className="text-white text-2xl font-semibold mb-2">
        Admin Dashboard
      </h1>
      <div className="w-full">
        {[
          { title: "Uses's Data", routes: "/admin/user" },
          { title: "Trubuddies Profile", routes: "/admin/trubuddy" },
          {
            title: "Social Media and Contact Links",
            routes: "/admin/social-media",
          },
          { title: "FAQ's Question", routes: "/admin/faqs" },
          {
            title: "Service: Yoga",
            routes: "/admin/services/yoga",
          },
          {
            title: "Service: Meditation",
            routes: "/admin/services/meditation",
          },
          {
            title: "Service: Library",
            adds: [
              { title: "Books", routes: "/admin/services/library" },
              {
                title: "Book Categories",
                routes: "/admin/services/library/categories",
              },
            ],
          },
          { title: "Queries", routes: "/admin/queries" },
          { title: "Support", routes: "/admin/support" },
          { title: "Popup", routes: "/admin/popup" },
        ].map((e, i) => {
          return <Block e={e} key={i} />;
        })}
        <p
          className={`text-white text-start py-1 pl-4 hover:pl-9 hover:bg-[#407BFF] transition-all cursor-pointer mb-2`}
          onClick={(event) => {
            deleteCookie("admin_token");
            history.push("/admin/login");
          }}
        >
          Logout
        </p>
      </div>
    </div>
  );
};

const Block = ({ e }) => {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();
  const history = useRouter();

  return (
    <>
      <p
        className={`text-white flex items-center justify-between text-start py-1 hover:pl-9 hover:bg-[#407BFF] transition-all cursor-pointer mb-2 ${
          pathname == e?.routes || opened ? "bg-[#407BFF] pl-9" : "pl-4"
        }`}
        onClick={(event) => {
          if (e?.adds) {
            setOpened(!opened);
          } else {
            history.push(e?.routes);
          }
        }}
      >
        {e?.title}
        {e?.adds && opened && <AiOutlineDown className="mr-2" />}
        {e?.adds && !opened && <AiOutlineRight className="mr-2" />}
      </p>
      {e?.adds && opened && (
        <div>
          {e?.adds.map((ev, i) => {
            return (
              <p
                className={`text-white flex items-center justify-between text-start py-1 hover:pl-20 hover:bg-[#407BFF]/40 transition-all cursor-pointer mb-2 ${
                  pathname == ev?.routes ? "bg-[#407BFF]/40 pl-20" : "pl-16"
                }`}
                onClick={(event) => {
                  history.push(ev?.routes);
                }}
                key={i}
              >
                {ev?.title}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
