/* eslint-disable @next/next/no-img-element */
import React from "react";

const Modal = ({ open, handleClose, children, title }) => {
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } w-full h-full fixed top-0 flex justify-center items-center z-50`}
    >
      <div className="absolute w-full h-full bg-black opacity-20" />
      <div
        className={`relative z-50 text-primary-black bg-white min-w-[500px] rounded-md shadow`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <p>{title}</p>
          <img
            onClick={handleClose}
            src="/assets/icons/off-outline-close.svg"
            alt="icon-close"
            className="w-6 cursor-pointer"
          />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
