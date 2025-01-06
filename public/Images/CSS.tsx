import * as React from "react";
import type { SVGProps } from "react";
const CSS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#0277BD" rx={60} />
    <path
      fill="#EBEBEB"
      d="m53.753 102.651 2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zM128.095 218.841v-33.233l-.14.037-35.574-9.605-2.274-25.476H58.042l4.475 50.154 65.431 18.164z"
    />
    <path
      fill="#fff"
      d="m167.318 134.593-3.708 41.426-35.625 9.616v33.231l65.483-18.148.48-5.397 7.506-84.092.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"
    />
  </svg>
);
export { CSS };