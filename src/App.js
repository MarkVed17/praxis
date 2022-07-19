import {
  Counter,
  AgeChecker,
  PasswordMatcher,
  CharacterCounter,
  DisableSubmit,
  PasswordVisibility,
  AddToCart,
  ToDoApp,
  ThemeToggle
} from "./exercises/useState-excercises";
import {
  GETproducts,
  GETusers,
  LoggingCounter,
  LoggingCounterOnce,
  PredictOutput,
  Wishlist
} from "./exercises/useEffect-exercises";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <AgeChecker /> */}
      {/* <PasswordMatcher /> */}
      {/* <CharacterCounter /> */}
      {/* <DisableSubmit /> */}
      {/* <PasswordVisibility /> */}
      {/* <AddToCart /> */}
      {/* <ToDoApp /> */}
      {/* <ThemeToggle /> */}
      {/* <LoggingCounter /> */}
      {/* <PredictOutput /> */}
      {/* <Wishlist /> */}
      {/* <LoggingCounterOnce /> */}
      {/* <GETusers /> */}
      <GETproducts />
    </div>
  );
}
