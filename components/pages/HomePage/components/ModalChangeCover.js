/* eslint-disable @next/next/no-img-element */
import { useFormik } from "formik";
import React from "react";
import Button from "../../../utils/Button";
import FileInput from "../../../utils/FileInput";
import Modal from "../../../utils/Modal";
import axios from "../../../../lib/axios";

const ModalChangeCover = ({ modalOpen, handleClose, callback }) => {
  const formImageGallery = useFormik({
    initialValues: {
      coverImage: null,
    },
    onSubmit: async (values, action) => {
      try {
        const formData = new FormData();
        formData.append("image", values.coverImage[0]);
        await axios.post(`/api/v1/uploads/cover`, formData);
        callback();
        action.resetForm();
        handleClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  const { values, setFieldValue, handleSubmit } = formImageGallery;

  return (
    <Modal title="Add Photo Gallery" open={modalOpen} handleClose={handleClose}>
      <div className="">
        {values.coverImage && (
          <div className="border px-3 py-2 rounded-lg shadow flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <img src="/assets/icons/image.svg" alt="icon" />
              {values.coverImage[0]?.path && (
                <p className="text-sm font-light">
                  {values.coverImage[0]?.path.length > 30
                    ? `${values.coverImage[0].path?.slice(0, 30)} ...`
                    : values.coverImage[0].path}
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
          Cover Photo
        </label>
        <FileInput
          id="gallery-upload"
          handleImage={(e) => setFieldValue("coverImage", e)}
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

export default ModalChangeCover;
