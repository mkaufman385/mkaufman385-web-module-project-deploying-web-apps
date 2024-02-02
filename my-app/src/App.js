import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClickPlus = () => {
    setCounter(counter + 1);
  };

  const handleClickMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      Matt's Counter App
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh",
          border: "2px dashed #666",
        }}
      >
        {counter}
      </div>
      <div className="buttons">
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleClickPlus}
        >
          Increment
        </button>
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleClickMinus}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
