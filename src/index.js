import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import setupMockServer from "./exercises/useEffect-exercises/api/mock.server";

import App from "./App";

setupMockServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
