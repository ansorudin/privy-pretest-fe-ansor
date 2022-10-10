import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../../utils/Button";
import Modal from "../../utils/Modal";
import TextInput from "../../utils/TextInput";
import ModalAddPhotos from "./components/ModalAddPhotos";
import SectionAvatarPhoto from "./components/SectionAvatarPhoto";
import SectionCoverPhoto from "./components/SectionCoverPhoto";

const Homepage = () => {
  const [openModal, setOpenModal] = useState(false);
  const form = useFormik({
    initialValues: {
      gallery: null,
    },
  });

  const { values, setFieldValue } = form;

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto flex h-full flex-col py-12 px-4 sm:px-6 lg:px-8 border">
        <SectionCoverPhoto />
        <SectionAvatarPhoto />
        <div className="mt-5 grid grid-cols-4 gap-4 p-3">
          <div className="border border-primary-black p-4 rounded grid grid-cols-2 grid-flow-row auto-rows-min gap-3">
            {Array.from(Array(4).keys()).map((item, idx) => (
              <div
                key={idx.toString()}
                className="relative w-full h-24 rounded ring-2 ring-offset-1 ring-primary-green"
              >
                <Image
                  src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  layout="fill"
                  objectFit="cover"
                  alt="galery-image"
                  className="rounded grayscale hover:grayscale-0  transition-all"
                />
              </div>
            ))}
            <div className="col-span-2">
              <Button onClick={() => setOpenModal(!openModal)}>
                Add Photo
              </Button>
            </div>
          </div>
          <div className="border border-primary-black col-span-3 p-4 rounded">
            <div>
              <div className="pb-2 border-b">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Informasi Umum
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Berisi informasi umum yang kamu miliki.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-5">
                <div>
                  <p className="mb-1 text-sm text-gray-600">Nama</p>
                  <TextInput />
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">Birthday</p>
                  <TextInput type="date" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-3">
                <div>
                  <p className="mb-1 text-sm text-gray-600">Biografi</p>
                  <TextInput />
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">Gender</p>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded border border-primary-black  bg-white py-2 px-3 shadow-sm focus:outline-none sm:text-sm"
                  >
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="pb-2 border-b">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Pendidikan
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Berisi informasi riwayat pendidikan kamu.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-5">
                <div>
                  <p className="mb-1 text-sm text-gray-600">Nama Sekolah</p>
                  <TextInput />
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">Tahun Lulus</p>
                  <TextInput type="date" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="pb-2 border-b">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Riwayat Pekerjaan
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Berisi informasi riwayat pekerjaan kamu.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-5">
                <div>
                  <p className="mb-1 text-sm text-gray-600">Nama Perusahaan</p>
                  <TextInput />
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">Posisi</p>
                  <TextInput />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-3">
                <div>
                  <p className="mb-1 text-sm text-gray-600">Tahun Mulai</p>
                  <TextInput type="date" />
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-600">Tahun Selesai</p>
                  <TextInput type="date" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAddPhotos
        modalOpen={openModal}
        handleClose={() => setOpenModal(!openModal)}
        value={values.gallery}
        setFieldValue={setFieldValue}
      />
    </div>
  );
};

export default Homepage;
