"use client";
import React, { useEffect } from "react";
import { maliFont, noto_sans } from "../../../(website)/Components/Utils/font";
import Context from "../../../Context/Context";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const AdminUser = () => {
  const history = useRouter();
  const { admin } = React.useContext(Context);

  useEffect(() => {
    if (!getCookie("admin_token")) {
      history.push("/admin/login");
    }
  }, []);

  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5`}>
      {/* TOpbar */}
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">
          User Data ({admin?.adminUsers?.length})
        </h1>
        <div className="flex items-center">
          <p className="mr-2">Filter</p>
          <input
            type="search"
            value={admin?.adminUserConfig}
            onChange={(e) => {
              admin?.setAdminUserConfig(e.target.value);
            }}
            className="outline-none rounded-md border px-2 py-0.5"
            placeholder="Search Here"
          />
        </div>
      </div>
      <div>
        <div
          className="grid mt-5"
          style={{ gridTemplateColumns: "20% 20% 20% 15% 12% 13%" }}
        >
          <p className="text-center">Name</p>
          <p className="text-center">Email Id</p>
          <p className="text-center">Phone no</p>
          <p className="text-center">Location</p>
          <p className="text-center">Gender</p>
          <p className="text-center">Age</p>
        </div>
      </div>
      <div className="mt-3 h-[80vh] overflow-scroll">
        {admin?.adminUsers?.map((e, i) => {
          return (
            <div
              className={`grid py-2 mb-2 break-words rounded-md ${
                i % 2 !== 0 ? "" : "bg-gray-200"
              }`}
              style={{ gridTemplateColumns: "20% 20% 20% 15% 12% 13%" }}
              key={i}
            >
              <p className="text-center">{e?.name}</p>
              <p className="text-center px-3">{e?.email}</p>
              <p className="text-center">{e?.phone}</p>
              <p className="text-center">{e?.location}</p>
              <p className="text-center">{e?.gender}</p>
              <p className="text-center">{e?.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminUser;
