import React from "react";
import Button from "../../../utils/Button";
import TextInput from "../../../utils/TextInput";

const SectionEductionHistory = ({ formik, handleSubmit, loading }) => {
  const { values, handleChange, errors, touched, handleBlur } = formik;
  return (
    <div className="border rounded border-primary-black p-4 mt-5 shadow-md">
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
          <TextInput
            value={values.schoolName}
            onChange={handleChange}
            name="schoolName"
            id="schoolName"
            onBlur={handleBlur}
            error={errors.schoolName && touched.schoolName}
          />
          {errors.schoolName && touched.schoolName && (
            <p className="text-xs mt-1 text-primary-red">{errors.schoolName}</p>
          )}
        </div>
        <div>
          <p className="mb-1 text-sm text-gray-600">Tahun Lulus</p>
          <TextInput
            type="date"
            name="graduationDate"
            id="graduationDate"
            onChange={handleChange}
            value={values.graduationDate}
            onBlur={handleBlur}
            error={errors.graduationDate && touched.graduationDate}
          />
          {errors.graduationDate && touched.graduationDate && (
            <p className="text-xs mt-1 text-primary-red">
              {errors.graduationDate}
            </p>
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-start">
        <Button loading={loading} onClick={handleSubmit} className="w-1/3">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SectionEductionHistory;
