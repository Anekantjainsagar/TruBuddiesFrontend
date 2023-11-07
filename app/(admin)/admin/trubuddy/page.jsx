import React from "react";
import { maliFont, noto_sans } from "../../../(website)/Components/Utils/font";

const TruBuddyProfile = () => {
  return (
    <div className={`h-[100vh] ${noto_sans.className} px-5`}>
      {/* TOpbar */}
      <div className="flex items-center justify-between py-3">
        <h1 className="text-2xl font-semibold">TruBuddies Profile</h1>
        <div className="flex items-center">
          <p className="mr-2">Filter</p>
          <input
            type="search"
            className="outline-none rounded-md border px-2 py-0.5"
            placeholder="Search Here"
          />
          <button className="text-white bg-newBlue px-3 ml-3 py-1 rounded-md">
            + Add New
          </button>
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
          <p className="text-center">Status</p>
        </div>
      </div>
      <div className="mt-3 h-[80vh] overflow-scroll">
        <div
          className="grid py-1 mb-1"
          style={{ gridTemplateColumns: "20% 20% 20% 15% 12% 13%" }}
        >
          <p className="text-center">Name</p>
          <p className="text-center">Email Id</p>
          <p className="text-center">Phone no</p>
          <p className="text-center">Location</p>
          <p className="text-center">Gender</p>
          <p className="text-center">
            <select name="" id="" className="outline-none px-3">
              <option value="Active" className="active">
                Active
              </option>
              <option value="Inactive" className="inactive">
                Inactive
              </option>
            </select>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TruBuddyProfile;
