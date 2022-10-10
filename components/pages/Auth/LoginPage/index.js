import React, { useState } from "react";
import FormLogin from "./components/FormLogin";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthLayout from "../components/AuthLayout";
import axios from "../../../../lib/axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useSnackbar } from "react-simple-snackbar";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [openSnackbar] = useSnackbar();

  const LoginSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(
        /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
        "Phone number is not valid, the prefix must start with the number 62."
      )
      .required("Required"),
    password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
      .required("Required"),
  });
  const formLogin = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
      typePassword: true,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, action) => {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("phone", values.phoneNumber);
        formData.append("password", values.password);
        formData.append("latlong", "2020,2020");
        formData.append("device_token", "100");
        formData.append("device_type", 2);

        const res = await axios.post("/api/v1/oauth/sign_in", formData);
        if (res.data.data.user.access_token) {
          Cookies.set("accessToken", res.data.data.user.access_token);
          router.push("/");
          action.resetForm();
          openSnackbar("Login Success");
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        openSnackbar("Login Failed: check console");
        setLoading(false);
      }
    },
  });
  return (
    <AuthLayout title="Login">
      <FormLogin loading={loading} formik={formLogin} />
    </AuthLayout>
  );
};

export default LoginPage;
