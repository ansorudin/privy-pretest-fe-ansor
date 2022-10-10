/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../../../utils/Button";
import OtpInput from "../../../../utils/OtpInput";
import TextInput from "../../../../utils/TextInput";

const FormInputOtp = ({
  formik,
  handleRequestOtp,
  handleSendOtp,
  isRequest,
  handleSubmit,
  loading,
}) => {
  const { setFieldValue, errors, values, handleChange, handleBlur, touched } =
    formik;

  if (isRequest) {
    return (
      <div className="mt-8 space-y-6">
        <div className="rounded-md px-10">
          <div>
            <label htmlFor="phoneNumber" className="sr-only">
              Phone Number
            </label>
            <TextInput
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              autoComplete="phoneNumber"
              placeholder="Phone Number"
              error={errors.phoneNumber && touched.phoneNumber}
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              startAddorment={<p className="text-primary-black">+62</p>}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <p className="text-xs mt-1 text-primary-red">
                {errors.phoneNumber}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <Button loading={loading} className="w-1/2" onClick={handleSendOtp}>
            Kirim OTP
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="rounded-md px-10">
        <OtpInput length={4} parseValue={(e) => setFieldValue("otp", e)} />
        {errors.otp && (
          <p className="text-xs mt-1 text-primary-red">{errors.otp}</p>
        )}
      </div>
      <div className="flex justify-center">
        <Button loading={loading} className="w-1/2" onClick={handleSubmit}>
          Verifikasi
        </Button>
      </div>
      <div className="border-t-2 flex items-center justify-center py-5">
        <p
          onClick={handleRequestOtp}
          className="text-sm cursor-pointer underline hover:text-primary-blue transition"
        >
          Kirim Ulang Kode OTP
        </p>
      </div>
    </div>
  );
};

export default FormInputOtp;
