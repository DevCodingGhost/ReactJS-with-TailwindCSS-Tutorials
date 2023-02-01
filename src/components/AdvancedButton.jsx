import PropTypes from "prop-types";
import { classNames } from "./classNames";

export const Button = ({ className, children, rounded, variant, ...props }) => (
  <button
    className={classNames(
      "px-4 py-2 cursor-pointer select-none [outline:none] shadow-md focus:ring-[1px] disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-100 disabled:shadow-inner",
      rounded ? "rounded" : "",
      variant === "primary"
        ? "bg-blue-500 hover:bg-blue-400 focus:ring-blue-300 text-white"
        : "",
      variant === "secondary"
        ? "bg-slate-500 hover:bg-slate-400 focus:ring-slate-300 text-white"
        : "",
      variant === "success"
        ? "bg-green-700 hover:bg-green-600 focus:ring-green-500 text-white"
        : "",
      variant === "danger"
        ? "bg-red-700 hover:bg-red-600 focus:ring-red-500 text-white"
        : "",
      variant === "warning"
        ? "bg-yellow-500 hover:bg-yellow-400 focus:ring-yellow-300 text-white"
        : "",
      variant === "info"
        ? "bg-cyan-700 hover:bg-cyan-600 focus:ring-cyan-500 text-white"
        : "",
      variant === "light"
        ? "bg-white hover:bg-gray-100 focus:ring-gray-300 text-gray-500"
        : "",
      variant === "dark"
        ? "bg-gray-700 hover:bg-gray-600 focus:ring-gray-500 text-white"
        : "",
      variant === "primary-outline"
        ? "text-blue-500 border-[1px] border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500"
        : "",
      variant === "secondary-outline"
        ? "text-slate-500 border-[1px] border-slate-500 hover:bg-slate-500 hover:text-white focus:ring-slate-500"
        : "",
      variant === "success-outline"
        ? "text-green-700 border-[1px] border-green-700 hover:bg-green-700 hover:text-white focus:ring-green-500"
        : "",
      variant === "danger-outline"
        ? "text-red-700 border-[1px] border-red-700 hover:bg-red-700 hover:text-white focus:ring-red-500"
        : "",
      variant === "warning-outline"
        ? "text-yellow-500 border-[1px] border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-500"
        : "",
      variant === "info-outline"
        ? "text-cyan-700 border-[1px] border-cyan-700 hover:bg-cyan-700 hover:text-white focus:ring-cyan-500"
        : "",
      variant === "light-outline"
        ? "text-gray-400 border-[1px] border-gray-300 hover:bg-gray-100 focus:ring-gray-300"
        : "",
      variant === "dark-outline"
        ? "text-gray-700 border-[1px] border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-gray-500"
        : "",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  rounded: false,
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  rounded: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "primary-outline",
    "secondary-outline",
    "success-outline",
    "danger-outline",
    "warning-outline",
    "info-outline",
    "light-outline",
    "dark-outline",
  ]),
};
