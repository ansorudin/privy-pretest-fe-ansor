import React from "react";
import FormRegister from "./components/FormRegister";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthLayout from "../components/AuthLayout";
import axios from "axios";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const router = useRouter();

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
        const formData = new FormData();
        formData.append("phone", values.phoneNumber);
        formData.append("password", values.password);
        formData.append("country", values.country);
        formData.append("latlong", "2020,2020");
        formData.append("device_token", "100");
        formData.append("device_type", 2);

        const res = await axios.post(
          "http://pretest-qa.dcidev.id/api/v1/register",
          formData,
          {
            headers: {
              "Content-Type": "application/form-data",
              Accept: "application/json",
            },
          }
        );
        if (res.data.user.id) {
          router.push("/auth/input-otp");
        }
        action.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <AuthLayout title="Registration">
      <FormRegister formik={formRegister} />
    </AuthLayout>
  );
};

export default RegisterPage;
