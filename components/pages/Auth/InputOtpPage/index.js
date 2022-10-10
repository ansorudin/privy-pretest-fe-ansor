import React, { useState } from "react";
import { useFormik } from "formik";
import AuthLayout from "../components/AuthLayout";
import FormInputOtp from "./components/FormInputOtp";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import * as Yup from "yup";
import axios from "../../../../lib/axios";
import { useSnackbar } from "react-simple-snackbar";

const InputOtpPage = () => {
  const [openSnackbar] = useSnackbar();
  const router = useRouter();
  const [isRequestOtp, setIsRequestOtp] = useState(false);
  const [loading, setLoading] = useState(false);

  const FormOtpSchemaSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(
        /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
        "Phone number is not valid, the prefix must start with the number 62."
      )
      .required("Required"),
  });

  const formInputOtp = useFormik({
    initialValues: {
      userId: Cookies.get("userId") || "",
      otp: "",
      phoneNumber: "",
    },
    enableReinitialize: true,
    validationSchema: FormOtpSchemaSchema,
  });

  const { values } = formInputOtp;

  const handleSubmitOtp = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("user_id", values.userId);
      formData.append("otp_code", values.otp);

      const res = await axios.post("/api/v1/register/otp/match", formData);
      if (res.data.data.user.access_token) {
        Cookies.set("accessToken", res.data.data.user.access_token);
        router.push("/");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      openSnackbar("Match OTP Failed: check console");
      setLoading(false);
    }
  };

  const handleRequestOtp = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("phone", values.phoneNumber);

      const res = await axios.post("/api/v1/register/otp/request", formData);
      if (res.data.data.user.id) {
        Cookies.set("userId", res.data.data.user.id);
        setIsRequestOtp(false);
        openSnackbar("Check text in your handphone");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      openSnackbar("Request OTP Failed: check console");
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Input OTP">
      <FormInputOtp
        formik={formInputOtp}
        handleRequestOtp={() => setIsRequestOtp(true)}
        handleSendOtp={() => handleRequestOtp()}
        isRequest={isRequestOtp}
        handleSubmit={handleSubmitOtp}
      />
    </AuthLayout>
  );
};

export default InputOtpPage;
