import React from "react";

const LeftBlueLight = () => {
  return (
    <svg
      width="634"
      height="634"
      viewBox="0 0 934 934"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-23vw] top-[30vw]"
    >
      <g filter="url(#filter0_d_223_1153)">
        <circle cx="467" cy="463" r="17" fill="#56A4FF" />
      </g>
      <defs>
        <filter
          id="filter0_d_223_1153"
          x="0"
          y="0"
          width="934"
          height="934"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="200"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_223_1153"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.3375 0 0 0 0 0.64225 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_223_1153"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_223_1153"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LeftBlueLight;
