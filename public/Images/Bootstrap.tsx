import * as React from "react";
import type { SVGProps } from "react";
const Bootstrap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="url(#prefix__a)" rx={60} />
    <g filter="url(#prefix__b)">
      <path
        fill="url(#prefix__c)"
        d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497 0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628 0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627 0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268 0 14.719-10.343 22.551-29.87 22.551z"
      />
      <path
        stroke="#fff"
        strokeWidth={2}
        d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497 0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628 0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627 0 13.493-10.343 21.041-29.096 21.041H97.653V77.267Zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268 0 14.719-10.343 22.551-29.87 22.551h-29.87Z"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__a"
        x1={0}
        x2={256}
        y1={0}
        y2={256}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9013FE" />
        <stop offset={1} stopColor="#6B11F4" />
      </linearGradient>
      <linearGradient
        id="prefix__c"
        x1={85.793}
        x2={148.541}
        y1={68.962}
        y2={175.084}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F1E5FC" />
      </linearGradient>
      <filter
        id="prefix__b"
        width={137.529}
        height={170.157}
        x={59}
        y={47}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={8} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_158_100" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_158_100"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export { Bootstrap };