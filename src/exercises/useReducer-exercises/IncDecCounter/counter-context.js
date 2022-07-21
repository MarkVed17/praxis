import { createContext, useContext, useReducer } from "react";

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

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleClickReducer, { counter: 0 });
  const { counter } = state; // destructuring state

  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
