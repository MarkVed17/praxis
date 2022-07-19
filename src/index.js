import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import setupUsersMockServer from "./exercises/useEffect-exercises/api/users-mock.server";
import setupProductsMockServer from "./exercises/useEffect-exercises/api/products-mock.server";
import setupAddressesMockServer from "./exercises/useEffect-exercises/api/addresses-mock.server";

import App from "./App";

// setupUsersMockServer();
// setupProductsMockServer();
setupAddressesMockServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
