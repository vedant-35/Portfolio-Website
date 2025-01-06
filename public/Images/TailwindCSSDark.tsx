import * as React from "react";
import type { SVGProps } from "react";
const TailwindCSSDark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#242938" rx={60} />
    <path
      fill="url(#prefix__a)"
      fillRule="evenodd"
      d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="prefix__a"
        x1={86.5}
        x2={163.5}
        y1={74}
        y2={185.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32B1C1" />
        <stop offset={1} stopColor="#14C6B7" />
      </linearGradient>
    </defs>
  </svg>
);
export { TailwindCSSDark };