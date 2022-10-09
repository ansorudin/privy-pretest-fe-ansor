import React, { useEffect, useState } from "react";

const OtpInput = ({ parseValue }) => {
  const [values, setValues] = useState({
    value0: "",
    value1: "",
    value2: "",
    value3: "",
  });

  useEffect(() => {
    const handleChangeOtp = () => {
      let result = "";
      for (const prop in values) {
        result += values[prop];
      }
      parseValue(result);
    };
    handleChangeOtp();
  }, [values]);

  return (
    <div className="flex gap-10">
      {Array.from(Array(4).keys()).map((item, idx) => (
        <input
          value={values[`value${idx}`]}
          onChange={(e) =>
            setValues({ ...values, [`value${idx}`]: e.target.value })
          }
          key={idx.toString()}
          className="otp border border-primary-black rounded text-gray-900 placeholder-gray-500 relative block w-full 
          appearance-none px-3 py-2 focus:z-10 focus:outline-none text-sm text-center"
          type="text"
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default OtpInput;
