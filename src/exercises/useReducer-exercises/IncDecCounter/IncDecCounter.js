import { useReducer } from "react";

const handleClickReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload };

    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload };

    default:
      return state;
  }
};

export const IncDecCounter = () => {
  const [state, dispatch] = useReducer(handleClickReducer, { counter: 0 });
  const { counter } = state; // destructuring state

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
