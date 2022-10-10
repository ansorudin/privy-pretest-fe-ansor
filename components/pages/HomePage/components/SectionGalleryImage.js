import Image from "next/image";
import React, { useState } from "react";
import Button from "../../../utils/Button";
import ModalAddPhotos from "./ModalAddPhotos";

const SectionGalleryImage = ({ dataUser, callback }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="border border-primary-black p-4 rounded grid grid-cols-2 grid-flow-row auto-rows-min gap-3 mb-6 md:mb-0">
        {dataUser?.user_pictures?.map((item, idx) => (
          <div
            key={idx.toString()}
            className="relative w-full h-24 rounded ring-2 ring-offset-1 ring-primary-green"
          >
            <Image
              src={item.picture.url}
              layout="fill"
              objectFit="cover"
              alt="galery-image"
              className="rounded grayscale hover:grayscale-0  transition-all"
            />
          </div>
        ))}
        <div className="col-span-2">
          <Button onClick={() => setOpenModal(!openModal)}>Add Photo</Button>
        </div>
      </div>
      <ModalAddPhotos
        modalOpen={openModal}
        handleClose={() => setOpenModal(!openModal)}
        callback={callback}
      />
    </>
  );
};

export default SectionGalleryImage;
