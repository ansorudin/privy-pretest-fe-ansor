/* eslint-disable @next/next/no-img-element */
import React from "react";
import moment from "moment";

const CardMessage = ({ senderImage, senderName, createdAt, message }) => {
  return (
    <div className="border border-primary-black rounded p-4 bg-white">
      <div className="flex items-center mb-3 gap-3">
        <img
          src={senderImage}
          alt={senderName}
          className="w-12 h-12 border rounded object-cover"
        />
        <div className="text-sm">
          <p>{senderName}</p>
          <p className="text-xs text-primary-black">
            {moment(createdAt).format("MMM Do YYYY hh:mm")}
          </p>
        </div>
      </div>
      <p className="text-sm line-clamp-4 text-primary-black font-light">
        {message}
      </p>
    </div>
  );
};

export default CardMessage;
