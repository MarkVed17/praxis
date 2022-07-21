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
  AddressManagement,
  GETproducts,
  GETusers,
  LoggingCounter,
  LoggingCounterOnce,
  PredictOutput,
  Wishlist
} from "./exercises/useEffect-exercises";
import { Cart, ProductListing } from "./exercises/useContext-exercises";
import {
  DocumentTitleHook,
  AsyncHook,
  LocalStorageHook
} from "./exercises/custom-hooks";
import {
  CartManagement,
  IncDecCounter
} from "./exercises/useReducer-exercises";
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
      {/* <GETproducts /> */}
      {/* <AddressManagement /> */}
      {/* <Cart />
      <ProductListing /> */}
      {/* <DocumentTitleHook /> */}
      {/* <AsyncHook /> */}
      {/* <LocalStorageHook /> */}
      {/* <IncDecCounter /> */}
      <CartManagement />
    </div>
  );
}
