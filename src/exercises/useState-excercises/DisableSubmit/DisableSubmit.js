import { useState } from "react";

export const DisableSubmit = () => {
  const [password, setPassword] = useState({
    passwordOne: "",
    passwordTwo: ""
  });

  const { passwordOne, passwordTwo } = password;

  return (
    <>
      <div>
        <label>Enter your password</label>
        <input
          onChange={(e) =>
            setPassword({ ...password, passwordOne: e.target.value })
          }
          type="password"
        />
      </div>
      <div>
        <label>Re-enter your password</label>
        <input
          onChange={(e) =>
            setPassword({ ...password, passwordTwo: e.target.value })
          }
          type="password"
        />
      </div>
      <button
        disabled={
          passwordOne === passwordTwo && passwordOne !== "" ? false : true
        }>
        Submit
      </button>
    </>
  );
};
