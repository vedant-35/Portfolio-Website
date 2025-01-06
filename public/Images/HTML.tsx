import * as React from "react";
import type { SVGProps } from "react";
const HTML = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#E14E1D" rx={60} />
    <path
      fill="#fff"
      d="m48 38 8.61 96.593h110.71l-3.715 41.43-35.646 9.638-35.579-9.624-2.379-26.602H57.94l4.585 51.281 65.427 18.172 65.51-18.172 8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"
    />
    <path
      fill="#EBEBEB"
      d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zM128 185.647l-.041.014-35.579-9.624-2.379-26.602H57.94l4.585 51.281 65.427 18.172.049-.014z"
    />
  </svg>
);
export { HTML };