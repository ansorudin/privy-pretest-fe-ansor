import React from "react";

const SelectInput = ({ children, error, ...props }) => {
  return (
    <select
      {...props}
      className={`${
        error
          ? "text-primary-red border-primary-red ring-primary-red ring-1 ring-offset-1"
          : "text-gray-900 border-primary-black"
      } block w-full rounded border bg-white py-2 px-3 shadow-sm focus:outline-none sm:text-sm`}
    >
      {children}
    </select>
  );
};

export default SelectInput;
