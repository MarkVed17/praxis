import { useEffect } from "react";

// custom hook
export const useDocumentTitle = (counter) => {
  useEffect(() => {
    document.title = counter;
  }, [counter]);
};
