import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`group relative flex w-full justify-center rounded-md border
           border-primary-black bg-primary-green py-2 px-4 text-sm text-white
            hover:bg-primary-light-green focus:outline-none focus:ring-2 focus:ring-primary-green 
            focus:ring-offset-2 transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
