import React from "react";
import ReactDOM from "react-dom";

var fname = "salah";
var lname = "bouakaz";

var number = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
