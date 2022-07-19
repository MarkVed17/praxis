import { useEffect, useState } from "react";

export const LoggingCounterOnce = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`Hey! This is the initial value of Counter: ${counter}`);
  }, []);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((c) => c + 1)}> + </button>
      <button onClick={() => setCounter((c) => c - 1)}> - </button>
    </>
  );
};
