import React from "react";

const TextInput = ({ startAddorment, endAddorment, error, ...props }) => {
  return (
    <div
      className={`${
        error
          ? "border-primary-red ring-primary-red ring-1 ring-offset-1"
          : "border-primary-black"
      }  flex items-center rounded border `}
    >
      {startAddorment && <span className="px-3 text-sm">{startAddorment}</span>}
      <input
        {...props}
        className={` ${startAddorment ? "rounded-r" : "rounded"} ${
          error
            ? "text-primary-red placeholder-primary-red"
            : "text-gray-900 placeholder-gray-500"
        } relative block w-full appearance-none px-3 py-2 focus:outline-none text-sm`}
      />
      {endAddorment && <span className="px-3 text-sm">{endAddorment}</span>}
    </div>
  );
};

export default TextInput;
