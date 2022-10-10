import React from "react";
import TextInput from "../../../utils/TextInput";
import Button from "../../../utils/Button";
import SelectInput from "../../../utils/SelectInput";

const SectionGeneralInformation = ({ formik, handleSubmit, loading }) => {
  const { values, handleChange, errors, handleBlur, touched } = formik;
  return (
    <div className="border p-4 border-primary-black rounded shadow-md">
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
          <TextInput
            value={values.name}
            onChange={handleChange}
            name="name"
            id="name"
            onBlur={handleBlur}
            error={errors.name && touched.name}
          />
          {errors.name && touched.name && (
            <p className="text-xs mt-1 text-primary-red">{errors.name}</p>
          )}
        </div>
        <div>
          <p className="mb-1 text-sm text-gray-600">Birthday</p>
          <TextInput
            value={values.birthday}
            onChange={handleChange}
            name="birthday"
            type="date"
            onBlur={handleBlur}
            error={errors.birthday && touched.birthday}
          />
          {errors.birthday && touched.birthday && (
            <p className="text-xs mt-1 text-primary-red">{errors.birthday}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-3">
        <div>
          <p className="mb-1 text-sm text-gray-600">Biografi</p>
          <TextInput
            value={values.biografi}
            onChange={handleChange}
            name="biografi"
            onBlur={handleBlur}
            error={errors.biografi && touched.biografi}
          />
          {errors.biografi && touched.biografi && (
            <p className="text-xs mt-1 text-primary-red">{errors.biografi}</p>
          )}
        </div>
        <div>
          <p className="mb-1 text-sm text-gray-600">Gender</p>
          <SelectInput
            name="gender"
            autoComplete="gender"
            className="block w-full rounded border border-primary-black  bg-white py-2 px-3 shadow-sm focus:outline-none sm:text-sm"
            value={values.gender}
            onChange={handleChange}
            error={errors.gender && touched.gender}
          >
            <option value={0}>Laki-laki</option>
            <option value={1}>Perempuan</option>
          </SelectInput>
          {errors.gender && touched.gender && (
            <p className="text-xs mt-1 text-primary-red">{errors.gender}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-3">
        <div>
          <p className="mb-1 text-sm text-gray-600">Hometown</p>
          <TextInput
            value={values.hometown}
            onChange={handleChange}
            name="hometown"
            onBlur={handleBlur}
            error={errors.hometown && touched.hometown}
          />
          {errors.hometown && touched.hometown && (
            <p className="text-xs mt-1 text-primary-red">{errors.hometown}</p>
          )}
        </div>
      </div>
      <div className="flex justify-start mt-4">
        <Button loading={loading} onClick={handleSubmit} className="w-1/3">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SectionGeneralInformation;
