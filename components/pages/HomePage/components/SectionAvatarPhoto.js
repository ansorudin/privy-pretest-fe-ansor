/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import ModalChangeAvatar from "./ModalChangeAvatar";

const SectionAvatarPhoto = ({ dataUser, callback }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="relative">
      <div className="relative h-28 w-28 rounded-full -mt-16 ml-8">
        <Image
          src={
            dataUser?.user_picture?.picture?.url ||
            "/assets/images/default-user.jpg"
          }
          layout="fill"
          alt="cover"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="z-30 absolute left-24 top-6">
        <img
          onClick={() => setModalOpen(true)}
          src="/assets/icons/image-add.svg"
          alt="add-image"
          className={`w-8 cursor-pointer`}
        />
      </div>
      <ModalChangeAvatar
        modalOpen={modalOpen}
        handleClose={() => setModalOpen(!modalOpen)}
        callback={callback}
      />
    </div>
  );
};

export default SectionAvatarPhoto;
