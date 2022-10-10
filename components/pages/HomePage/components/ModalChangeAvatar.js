/* eslint-disable @next/next/no-img-element */
import { useFormik } from "formik";
import React from "react";
import Button from "../../../utils/Button";
import FileInput from "../../../utils/FileInput";
import Modal from "../../../utils/Modal";
import axios from "../../../../lib/axios";

const ModalChangeAvatar = ({ modalOpen, handleClose, callback }) => {
  const formImageGallery = useFormik({
    initialValues: {
      image: null,
    },
    onSubmit: async (values, action) => {
      try {
        const formData = new FormData();
        formData.append("image", values.image[0]);
        const res = await axios.post(`/api/v1/uploads/profile`, formData);

        if (res.data.data.user_picture) {
          const user = new FormData();
          user.append("id", res.data.data.user_picture.id);
          await axios.post("/api/v1/uploads/profile/default", user);
          callback();
        }

        action.resetForm();
        handleClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  const { values, setFieldValue, handleSubmit } = formImageGallery;

  return (
    <Modal title="Change Avatar" open={modalOpen} handleClose={handleClose}>
      <div className="">
        {values.image && (
          <div className="border px-3 py-2 rounded-lg shadow flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <img src="/assets/icons/image.svg" alt="icon" />
              {values.image[0]?.path && (
                <p className="text-sm font-light">
                  {values.image[0]?.path.length > 30
                    ? `${values.image[0].path?.slice(0, 30)} ...`
                    : values.image[0].path}
                </p>
              )}
            </div>
            <img
              onClick={() => setFieldValue("coverImage", null)}
              src="/assets/icons/off-outline-close.svg"
              alt="close"
              className="cursor-pointer"
            />
          </div>
        )}
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Avatar Photo
        </label>
        <FileInput
          id="gallery-upload"
          handleImage={(e) => setFieldValue("image", e)}
          acceptType="PNG, JPG, JPEG"
          maxSize="500KB"
        />
      </div>
      <div className="mt-4">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Modal>
  );
};

export default ModalChangeAvatar;
