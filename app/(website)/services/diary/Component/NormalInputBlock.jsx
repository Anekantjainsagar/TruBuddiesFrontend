import React from "react";

const NormalInputBlock = ({ className }) => {
  return (
    <div className={`${className}`}>
      <input
        type="text"
        className="w-full border-b-2 border-b-black outline-none bg-transparent text-3xl pb-1 px-2"
      />
    </div>
  );
};

export default NormalInputBlock;
