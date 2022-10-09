import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthLayout from "../components/AuthLayout";
import FormInputOtp from "./components/FormInputOtp";

const InputOtpPage = () => {
  const formInputOtp = useFormik({
    initialValues: {
      userId: "",
      otp: "",
    },
  });
  return (
    <AuthLayout title="Input OTP">
      <FormInputOtp formik={formInputOtp} />
    </AuthLayout>
  );
};

export default InputOtpPage;
