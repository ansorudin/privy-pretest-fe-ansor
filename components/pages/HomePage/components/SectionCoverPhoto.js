/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import ModalChangeCover from "./ModalChangeCover";

const SectionCoverPhoto = ({ dataUser, callback }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="relative w-full h-60">
        <div className="relative w-full h-full">
          <Image
            src={
              dataUser?.cover_picture?.url || "/assets/images/default-cover.jpg"
            }
            layout="fill"
            alt="cover"
            objectFit="cover"
            className={`${
              isHovered ? "opacity-60" : "opacity-100"
            } rounded transition-all`}
          />
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="z-30 absolute bottom-4 right-4"
        >
          <img
            onClick={() => setModalOpen(true)}
            src="/assets/icons/image-add.svg"
            alt="add-image"
            className={`w-10 cursor-pointer`}
          />
        </div>
      </div>
      <ModalChangeCover
        callback={callback}
        modalOpen={modalOpen}
        handleClose={() => setModalOpen(!modalOpen)}
      />
    </>
  );
};

export default SectionCoverPhoto;
