import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import Login from "./components/Login";
import AboutPage from "./components/AboutPage";

ReactDOM.render(
  <Provider store={store}>
    <AboutPage />
  </Provider>,
  document.getElementById("root")
);
