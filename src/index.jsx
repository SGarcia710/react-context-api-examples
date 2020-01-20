import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { StoreProvider } from "./Store";
import Root from "./Routes";

ReactDOM.render(
  <StoreProvider>
    <Root />
  </StoreProvider>,
  document.getElementById("root")
);
