import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./component/GlobalStyles";
import _ from "lodash";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>
);

function component() {
  const element = document.createElement("div");
  const button = document.createElement("button");
  //const br = document.createElement("br");

  //button.innerHTML = "Click me and look at the console!";
  //element.innerHTML = _.join(["Hello", "webpack"], " ");
  //element.appendChild(br);
  //element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = (e) =>
    import(/* webpackChunkName: "print" */ "./print").then((module) => {
      const print = module.default;

      print();
    });

  return element;
}
document.body.appendChild(component());
