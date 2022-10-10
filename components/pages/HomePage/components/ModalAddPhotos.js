/* eslint-disable @next/next/no-img-element */
import { useFormik } from "formik";
import React from "react";
import Button from "../../../utils/Button";
import FileInput from "../../../utils/FileInput";
import Modal from "../../../utils/Modal";
import axios from "../../../../lib/axios";

const ModalAddPhotos = ({ modalOpen, handleClose, callback }) => {
  const formImageGallery = useFormik({
    initialValues: {
      imageGallery: [],
    },
    onSubmit: async (values, action) => {
      try {
        const promise = [];
        values.imageGallery.forEach((image, idx) => {
          const formData = new FormData();
          formData.append("image", image);
          axios.post(`/api/v1/uploads/profile`, formData);
        });
        Promise.all(promise);
        action.resetForm();
        handleClose();
        callback();
      } catch (error) {
        console.log(error);
      }
    },
  });
  const { values, setFieldValue, handleSubmit } = formImageGallery;

  const handleDeleteGallery = (idx) => {
    const removingFile = values.imageGallery;
    removingFile.splice(idx, 1);
    setFieldValue("imageGallery", removingFile);
  };

  return (
    <Modal title="Add Photo Gallery" open={modalOpen} handleClose={handleClose}>
      <div className="">
        {values.imageGallery.length > 0 && (
          <div className="grid grid-cols-2 mb-4 gap-3">
            {values.imageGallery.map((item, idx) => (
              <div
                key={idx.toString()}
                className="border px-3 py-2 rounded-lg shadow flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img src="/assets/icons/image.svg" alt="icon" />
                  {item.path && (
                    <p className="text-sm font-light">
                      {item.path.length > 30
                        ? `${item.path?.slice(0, 30)} ...`
                        : item.path}
                    </p>
                  )}
                </div>
                <img
                  onClick={() => handleDeleteGallery(idx)}
                  src="/assets/icons/off-outline-close.svg"
                  alt="close"
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gallery photo
        </label>
        <FileInput
          id="gallery-upload"
          handleImage={(e) =>
            setFieldValue("imageGallery", [...values.imageGallery, ...e])
          }
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

export default ModalAddPhotos;
