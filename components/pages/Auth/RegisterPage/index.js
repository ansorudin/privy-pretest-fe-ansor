import React, { useState } from "react";
import FormRegister from "./components/FormRegister";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthLayout from "../components/AuthLayout";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "../../../../lib/axios";
import { useSnackbar } from "react-simple-snackbar";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [openSnackbar] = useSnackbar();

  const RegisterSchema = Yup.object().shape({
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
    country: Yup.string().required("Required"),
  });
  const formRegister = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
      country: "",
      typePassword: true,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, action) => {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("phone", values.phoneNumber);
        formData.append("password", values.password);
        formData.append("country", values.country);
        formData.append("latlong", "2020,2020");
        formData.append("device_token", "100");
        formData.append("device_type", 2);

        const res = await axios.post("/api/v1/register", formData);
        if (res.data) {
          Cookies.set("userId", res.data.data.user.id);
          router.push("/auth/input-otp");
        }
        action.resetForm();
        setLoading(false);
        openSnackbar("Register Success");
      } catch (error) {
        console.log(error);
        setLoading(false);
        openSnackbar("Register Failed");
      }
    },
  });
  return (
    <AuthLayout title="Registration">
      <FormRegister formik={formRegister} loading={loading} />
    </AuthLayout>
  );
};

export default RegisterPage;
