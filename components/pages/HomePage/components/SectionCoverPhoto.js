/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import ModalChangeCover from "./ModalChangeCover";

const SectionCoverPhoto = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="relative w-full h-60">
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            layout="fill"
            alt="cover"
            objectFit="cover"
            className="rounded hover:opacity-60 opacity-100 transition-all"
          />
        </div>
        <div className="z-50 absolute bottom-4 right-4">
          <img
            onClick={() => setModalOpen(true)}
            src="/assets/icons/image-add.svg"
            alt="add-image"
            className={`w-10 cursor-pointer`}
          />
        </div>
      </div>
      <ModalChangeCover
        modalOpen={modalOpen}
        handleClose={() => setModalOpen(!modalOpen)}
      />
    </>
  );
};

export default SectionCoverPhoto;
