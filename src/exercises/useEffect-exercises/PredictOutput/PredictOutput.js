import { useEffect, useState } from "react";

export const PredictOutput = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("from useEffect...", counter);
  });

  function incrementClickHandler() {
    setCounter((counter) => {
      console.log("from click handler...", counter);
      return counter + 1;
    });
  }

  console.log("before render...", counter);
  return (
    <div className="App">
      <h1>{counter} </h1>
      <button onClick={incrementClickHandler}>Increment </button>
    </div>
  );
};
