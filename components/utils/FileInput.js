import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileInput = ({ handleImage }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      handleImage(acceptedFiles);
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="flex h-44 w-full flex-col items-center justify-center rounded-md border  border-dashed px-2 pt-1 pb-2 text-primary-black">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="mt-3 text-xs">
          Drop image disini, atau{" "}
          <span className="text-primary-green font-medium cursor-pointer">
            browse
          </span>
        </div>
        <div className="text-xs text-primary-gray mt-2">
          Maksimal ukuran 2 MB
        </div>
      </div>
    </div>
  );
};

export default FileInput;
