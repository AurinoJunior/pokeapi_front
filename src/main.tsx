import React from "react";
import ReactDOM from "react-dom/client";
import { PokePage } from "./PokePage.tsx";

import "./styles/global.styles.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PokePage />
  </React.StrictMode>
);
