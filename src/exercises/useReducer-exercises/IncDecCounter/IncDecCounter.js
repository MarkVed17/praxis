import { useCounter } from "./counter-context";

export const IncDecCounter = () => {
  const { counter, dispatch } = useCounter();

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 42 })}>
        + 42
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        - 10
      </button>
    </>
  );
};
