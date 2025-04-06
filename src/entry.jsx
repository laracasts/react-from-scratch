import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./app.css";
import { App } from "./app.jsx";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
