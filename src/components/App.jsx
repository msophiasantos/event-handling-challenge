import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [changeColor, setChangeColor] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function colorClick() {
    setChangeColor(true);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: changeColor ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={colorClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
