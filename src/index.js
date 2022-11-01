import React from "react";
import App from "./App.js";
import { createRoot } from "react-dom/client";

import "./styles/base.scss";

const root = createRoot(document.getElementById("app"));
root.render(<App />);
