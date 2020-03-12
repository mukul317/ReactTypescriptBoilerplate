import React from "react";
import ReactDOM from "react-dom";
import { unregister } from "./serviceWorker";

ReactDOM.render(<h1>React Typescript Boilerplate</h1>, document.getElementById("root") as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
