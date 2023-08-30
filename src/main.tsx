import React from "react";
import ReactDOM from "react-dom/client";
import { PokePage } from "./PokePage.tsx";

import "./styles/global.styles.scss";
import { Toast } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PokePage />
    <Toast />
  </React.StrictMode>
);
