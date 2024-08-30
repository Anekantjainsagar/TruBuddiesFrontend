import React from "react";

const InputBlock = ({ className }) => {
  return (
    <div className={`${className} flex items-end`}>
      <div class="inline-flex items-center">
        <label class="relative flex items-center p-3 cursor-pointer">
          <input
            type="checkbox"
            class="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none border-2 border-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-16 before:w-16 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
            id="check"
          />
          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
      </div>
      <input
        type="text"
        className="ml-4 mb-2.5 px-2 pb-1 text-3xl w-full bg-transparent border-b-2 border-b-black outline-none"
      />
    </div>
  );
};

export default InputBlock;
