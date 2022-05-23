import React, { useState } from "react";
import "./style.css";

function Handler() {
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button
        className="test"
        onClick={() => {
          if (!clicked) setMessage("Hello React");
          else setMessage("");
          setClicked(!clicked);
        }}
      >
        {clicked ? "Hide hello react" : "Show hello react"}
      </button>
      <p>{message}</p>
      <button
        className="test"
        onClick={() => {
          alert("Hello react");
        }}
      >
        Show Alert
      </button>
    </div>
  );
}

export default Handler;
