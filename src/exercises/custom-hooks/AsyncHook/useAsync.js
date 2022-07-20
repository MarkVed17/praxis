import { useEffect, useState } from "react";
import fakeFetch from "./fake-fetch";

export const useAsync = (msg) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function callAsync(load, shouldFail) {
      setStatus("loading");
      try {
        const response = await fakeFetch(load, shouldFail);
        setStatus("success");
        setData(response);
      } catch (error) {
        setStatus("error");
        setError(error);
      }
    }
    callAsync(msg);
  }, [msg]);

  return { status, data, error };
};
