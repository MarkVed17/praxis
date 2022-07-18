import { useState } from "react";

export const PasswordVisibility = () => {
  const [inputType, setInputType] = useState("password");
  const [toggle, setToggle] = useState("Show Password");

  const toggleInputType = () => {
    if (inputType === "password") {
      setInputType("text");
      setToggle("Hide Password");
    } else {
      setInputType("password");
      setToggle("Show Password");
    }
  };

  return (
    <>
      <input type={inputType} />
      <button onClick={toggleInputType}>{toggle}</button>
    </>
  );
};
