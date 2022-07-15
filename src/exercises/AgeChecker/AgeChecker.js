import { useState } from "react";

export const AgeChecker = () => {
  const [ageInput, setAgeInput] = useState("");

  return (
    <>
      <label>Enter your age (in numbers)</label>
      <input onChange={(e) => setAgeInput(e.target.value)} />
      {ageInput ? (
        ageInput >= 18 ? (
          <p>You're a grown up! Behave like one.</p>
        ) : (
          <p>Slow down kiddo!</p>
        )
      ) : (
        ""
      )}
    </>
  );
};
