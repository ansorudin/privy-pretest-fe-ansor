import Image from "next/image";
import React from "react";

const SectionAvatarPhoto = () => {
  return (
    <div className="relative h-28 w-28 rounded-full -mt-16 ml-8 ">
      <Image
        src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        layout="fill"
        alt="cover"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
};

export default SectionAvatarPhoto;
