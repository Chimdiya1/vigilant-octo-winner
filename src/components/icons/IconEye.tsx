import { IconAttributes } from "@/utils/types";
export const IconEye = ({
  size = 24,
  stroke = 1.5,
  className,
}: IconAttributes) => {
  const width = Math.round(size * (16 / 16));
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3866 8.00019C10.3866 9.32019 9.31995 10.3869 7.99995 10.3869C6.67995 10.3869 5.61328 9.32019 5.61328 8.00019C5.61328 6.68019 6.67995 5.61353 7.99995 5.61353C9.31995 5.61353 10.3866 6.68019 10.3866 8.00019Z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.9999 13.5136C10.3532 13.5136 12.5466 12.1269 14.0732 9.72689C14.6732 8.78689 14.6732 7.20689 14.0732 6.26689C12.5466 3.86689 10.3532 2.48022 7.9999 2.48022C5.64656 2.48022 3.45323 3.86689 1.92656 6.26689C1.32656 7.20689 1.32656 8.78689 1.92656 9.72689C3.45323 12.1269 5.64656 13.5136 7.9999 13.5136Z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
