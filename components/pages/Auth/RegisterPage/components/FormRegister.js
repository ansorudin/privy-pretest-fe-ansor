/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "../../../../utils/Button";
import TextInput from "../../../../utils/TextInput";

const FormRegister = ({ formik, loading }) => {
  const {
    values,
    handleChange,
    setFieldValue,
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = formik;
  return (
    <form className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm space-y-3">
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
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <TextInput
            id="password"
            name="password"
            type={values.typePassword ? "password" : "text"}
            autoComplete="current-password"
            placeholder="Password"
            error={errors.password && touched.password}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            endAddorment={
              <img
                onClick={() =>
                  setFieldValue("typePassword", !values.typePassword)
                }
                src={
                  values.typePassword
                    ? "/assets/icons/eye-slashed.svg"
                    : "/assets/icons/eye-open.svg"
                }
                className="w-6 cursor-pointer"
                alt="eye"
              />
            }
          />
          {errors.password && touched.password && (
            <p className="text-xs mt-1 text-primary-red">{errors.password}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Country
          </label>
          <TextInput
            id="country"
            name="country"
            type="text"
            autoComplete="country"
            placeholder="Country"
            error={errors.country && touched.country}
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.country && touched.country && (
            <p className="text-xs mt-1 text-primary-red">{errors.country}</p>
          )}
        </div>
      </div>
      <div>
        <Button loading={loading} type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </div>
      <div className="text-center">
        <p className="text-xs">
          Already have accout?{" "}
          <span className="font-medium underline cursor-pointer">
            <Link href="/auth/login">Sign now</Link>
          </span>
        </p>
      </div>
    </form>
  );
};

export default FormRegister;
