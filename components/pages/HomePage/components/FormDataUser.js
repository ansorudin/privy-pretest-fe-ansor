import { useFormik } from "formik";
import React, { useState } from "react";
import SectionEductionHistory from "./SectionEductionHistory";
import SectionExperiece from "./SectionExperiece";
import SectionGeneralInformation from "./SectionGeneralInformation";
import * as Yup from "yup";
import axios from "../../../../lib/axios";
import { useSnackbar } from "react-simple-snackbar";

const FormDataUser = ({ data }) => {
  const [openSnackbar] = useSnackbar();
  const [loadingGI, setLoadingGI] = useState(false);
  const [loadingEdu, setLoadingEdu] = useState(false);
  const [loadingCareer, setLoadingCareer] = useState(false);

  const FormDataUserSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    birthday: Yup.string().required("Required"),
    biografi: Yup.string().required("Required"),
    hometown: Yup.string().required("Required"),
    schoolName: Yup.string().required("Required"),
    graduationDate: Yup.string().required("Required"),
    position: Yup.string().required("Required"),
    companyName: Yup.string().required("Required"),
    startingFrom: Yup.string().required("Required"),
    endingIn: Yup.string().required("Required"),
  });
  const formDataUser = useFormik({
    initialValues: {
      name: data?.name || "",
      gender: data?.gender === "male" ? "0" : "1" || "0",
      birthday: data?.birthday || "",
      biografi: data?.bio || "",
      hometown: data?.hometown || "",
      schoolName: data?.education?.school_name || "",
      graduationDate: data?.education?.graduation_time || "",
      position: data?.career?.position || "",
      companyName: data?.career?.company_name || "",
      startingFrom: data?.career?.starting_from || "",
      endingIn: data?.career?.ending_in || "",
    },
    validationSchema: FormDataUserSchema,
    enableReinitialize: true,
  });
  const { values } = formDataUser;

  const handleSubmitGeneralInformation = async () => {
    try {
      setLoadingGI(true);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("gender", Number(values.gender));
      formData.append("birthday", values.birthday);
      formData.append("hometown", values.hometown);
      formData.append("bio", values.biografi);

      await axios.post(`/api/v1/profile`, formData);
      openSnackbar("Update Informasi Umum Success");

      setLoadingGI(false);
    } catch (error) {
      console.log(error);
      openSnackbar("Update Informasi Umum Failed");
      setLoadingGI(false);
    }
  };

  const handleSubmitEducation = async () => {
    try {
      setLoadingEdu(true);
      const formData = new FormData();
      formData.append("school_name", values.schoolName);
      formData.append("graduation_time", values.graduationDate);

      await axios.post(`/api/v1/profile/education`, formData);
      openSnackbar("Update Education Success");

      setLoadingEdu(false);
    } catch (error) {
      console.log(error);
      openSnackbar("Update Education Failed");
      setLoadingEdu(false);
    }
  };

  const handleSubmitCareer = async () => {
    try {
      setLoadingCareer(true);
      const formData = new FormData();
      formData.append("position", values.position);
      formData.append("company_name", values.companyName);
      formData.append("starting_from", values.startingFrom);
      formData.append("ending_in", values.endingIn);

      await axios.post(`/api/v1/profile/career`, formData);
      openSnackbar("Update Career Success");

      setLoadingCareer(false);
    } catch (error) {
      console.log(error);
      openSnackbar("Update Career Failed");
      setLoadingCareer(false);
    }
  };

  return (
    <div className="col-span-3">
      <SectionGeneralInformation
        formik={formDataUser}
        handleSubmit={handleSubmitGeneralInformation}
        loading={loadingGI}
      />
      <SectionEductionHistory
        formik={formDataUser}
        handleSubmit={handleSubmitEducation}
        loading={loadingEdu}
      />
      <SectionExperiece
        formik={formDataUser}
        handleSubmit={handleSubmitCareer}
        loading={loadingCareer}
      />
    </div>
  );
};

export default FormDataUser;
