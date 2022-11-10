import React, { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

function DisplayCount() {
  const { count } = useContext(CountContext);

  return (
    <div>
      <h1>The count is {count}</h1>
    </div>
  );
}

export { DisplayCount };
