import React, { useState } from "react";
import Mousemove from "./Mousemove";

import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <div>
        <button onClick={() => setToggle((prevState) => setToggle(!prevState))}>
          Toggle
        </button>
      </div>
      {toggle ? <Mousemove /> : "Click me"}
    </div>
  );
}

export default App;
