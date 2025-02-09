import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { CountProvider } from "./contexts/CountContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <CountProvider>
    <App />
  </CountProvider>
);
