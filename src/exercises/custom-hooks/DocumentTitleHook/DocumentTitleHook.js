import { useState } from "react";
import { useDocumentTitle } from "./useDocumentTitle";

export const DocumentTitleHook = () => {
  const [counter, setCounter] = useState(0);
  useDocumentTitle(counter);

  return <button onClick={() => setCounter((c) => c + 1)}>{counter}</button>;
};
