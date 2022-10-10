import React from "react";
import Button from "../../../utils/Button";
import TextInput from "../../../utils/TextInput";

const SectionExperiece = ({ formik, handleSubmit, loading }) => {
  const { values, handleChange, touched, handleBlur, errors } = formik;
  return (
    <div className="mt-5 p-4 border rounded border-primary-black">
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
          <TextInput
            value={values.companyName}
            onChange={handleChange}
            name="companyName"
            id="companyName"
            onBlur={handleBlur}
            error={errors.companyName && touched.companyName}
          />
          {errors.companyName && touched.companyName && (
            <p className="text-xs mt-1 text-primary-red">
              {errors.companyName}
            </p>
          )}
        </div>
        <div>
          <p className="mb-1 text-sm text-gray-600">Posisi</p>
          <TextInput
            value={values.position}
            onChange={handleChange}
            name="position"
            id="position"
            onBlur={handleBlur}
            error={errors.position && touched.position}
          />
          {errors.position && touched.position && (
            <p className="text-xs mt-1 text-primary-red">{errors.position}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-3">
        <div>
          <p className="mb-1 text-sm text-gray-600">Tahun Mulai</p>
          <TextInput
            type="date"
            value={values.startingFrom}
            onChange={handleChange}
            name="startingFrom"
            id="startingFrom"
            onBlur={handleBlur}
            error={errors.startingFrom && touched.startingFrom}
          />
          {errors.startingFrom && touched.startingFrom && (
            <p className="text-xs mt-1 text-primary-red">
              {errors.startingFrom}
            </p>
          )}
        </div>
        <div>
          <p className="mb-1 text-sm text-gray-600">Tahun Selesai</p>
          <TextInput
            type="date"
            value={values.endingIn}
            onChange={handleChange}
            name="endingIn"
            id="endingIn"
            onBlur={handleBlur}
            error={errors.endingIn && touched.endingIn}
          />
          {errors.endingIn && touched.endingIn && (
            <p className="text-xs mt-1 text-primary-red">{errors.endingIn}</p>
          )}
        </div>
      </div>
      <div className="flex justify-start mt-5">
        <Button loading={loading} onClick={handleSubmit} className="w-1/3">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SectionExperiece;
