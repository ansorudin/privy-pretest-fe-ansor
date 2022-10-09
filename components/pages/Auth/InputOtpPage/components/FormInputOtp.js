/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../../../utils/Button";
import OtpInput from "../../../../utils/OtpInput";

const FormInputOtp = ({ formik }) => {
  const { setFieldValue, errors, handleSubmit } = formik;

  return (
    <form className="mt-8 space-y-6">
      <div className="rounded-md px-10">
        <OtpInput length={4} parseValue={(e) => setFieldValue("otp", e)} />
        {errors.otp && (
          <p className="text-xs mt-1 text-primary-red">{errors.otp}</p>
        )}
      </div>
      <div className="flex justify-center">
        <Button className="w-1/2" type="submit" onClick={handleSubmit}>
          Verifikasi
        </Button>
      </div>
      <div className="border-t-2 flex items-center justify-center py-5">
        <p className="text-sm cursor-pointer underline hover:text-primary-blue transition">
          Kirim Ulang Kode OTP
        </p>
      </div>
    </form>
  );
};

export default FormInputOtp;
