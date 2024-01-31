import React, { useState } from "react";
import FirstClass from "./ClassComponent";

const TestComponent = () => {
  const [count, setState] = useState(true);

  function handleClick() {
    const state = setState((prev) => !prev);
    console.log(state);
  }

  return (
    <div>
      {count ? <FirstClass /> : null}
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default TestComponent;
