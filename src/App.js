import React from "react";
import { ButtonBar } from "./components/ButtonBar";
import { DisplayCount } from "./components/DisplayCount";

function App() {
  return (
    <div className="layout">
      <p>Hello world</p>
      <DisplayCount />
      <ButtonBar />
    </div>
  );
}

export { App };
