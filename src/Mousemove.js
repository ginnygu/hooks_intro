import React, { useState, useEffect } from "react";

function Mousemove() {
  const [mouseX, setMouseX] = useState("0");
  const [mouseY, setMouseY] = useState("0");

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      console.log("component Did UnMount");
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleMouseMove(e) {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }

  return (
    <div>
      <h1>Use Effect Intro!</h1>
      <p>Mouse X Position: {mouseX}</p>
      <p>Mouse Y Position: {mouseY}</p>
    </div>
  );
}

export default Mousemove;
