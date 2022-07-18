import { useEffect, useState } from "react";

export const LoggingCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  });

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((c) => c + 1)}> + </button>
      <button onClick={() => setCounter((c) => c - 1)}> - </button>
    </>
  );
};
