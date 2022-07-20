import { useAsync } from "./useAsync";

export const AsyncHook = () => {
  const { status, data, error } = useAsync("vedant");

  return (
    <>
      {status === "loading" && <p> Loading... </p>}
      {status === "error" && <p style={{ color: "red" }}> {error}</p>}
      {status === "success" && <p> {data} </p>}
    </>
  );
};
