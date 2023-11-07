"use client";
import React from "react";
import { noto_sans } from "../../(website)/Components/Utils/font";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
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
          { title: "Our Team", routes: "/admin/team" },
          {
            title: "Social Media and Contact Links",
            routes: "/admin/social-media",
          },
          { title: "FAQ's Question", routes: "/admin/faqs" },
          { title: "Articles", routes: "/admin" },
          { title: "About Us Content", routes: "/admin" },
        ].map((e, i) => {
          return (
            <p
              key={i}
              className={`text-white text-start py-1 cursor-pointer mb-2 ${
                pathname == e?.routes ? "bg-[#407BFF] pl-9" : "pl-4"
              }`}
              onClick={(event) => {
                history.push(e?.routes);
              }}
            >
              {e?.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
