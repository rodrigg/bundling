import React from "react";
import ReactDOM from "react-dom";
import { HolaMundoComponent } from "./hola-mundo.component";
const style = require('./mystyles.scss');


console.log(`${process.env.NODE_ENV}`);
console.log(` : ${process.env.URL}`);

ReactDOM.render(
  <div className={style.pinkBackground}>
    <h1>Hola desde main</h1>
    <HolaMundoComponent/>
  </div>,

  document.getElementById("root")
);
