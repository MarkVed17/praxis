import { useState } from "react";

export const PasswordMatcher = () => {
  const [password, setPassword] = useState({
    passwordOne: "",
    passwordTwo: ""
  });

  const { passwordOne, passwordTwo } = password;

  return (
    <>
      <div>
        <label>Enter a password</label>
        <input
          type="password"
          onChange={(e) =>
            setPassword({ ...password, passwordOne: e.target.value })
          }
        />
      </div>
      <div>
        <label>Re-enter password</label>
        <input
          type="password"
          onChange={(e) =>
            setPassword({ ...password, passwordTwo: e.target.value })
          }
        />
      </div>
      {passwordOne !== "" && passwordTwo !== "" ? (
        passwordOne !== "" &&
        passwordTwo !== "" &&
        passwordOne === passwordTwo ? (
          <p>Passwords match</p>
        ) : (
          <p>Passwords don't match!</p>
        )
      ) : (
        ""
      )}
    </>
  );
};
