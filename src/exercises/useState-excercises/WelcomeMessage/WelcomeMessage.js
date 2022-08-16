import { useState } from "react";

export const WelcomeMessage = () => {
  const [message, setMessage] = useState({ data: "", showMsg: false });
  const { data, showMsg } = message;

  return (
    <>
      <input
        onChange={(e) => {
          setMessage({ data: e.target.value, showMsg: false });
        }}
      />
      <button onClick={() => setMessage({ ...message, showMsg: !showMsg })}>
        Show Message
      </button>

      {showMsg && (
        <p>
          {data.length === 0
            ? ""
            : data.length % 2 === 0
            ? `Hi ${data}`
            : `Hello ${data}`}
        </p>
      )}
    </>
  );
};
