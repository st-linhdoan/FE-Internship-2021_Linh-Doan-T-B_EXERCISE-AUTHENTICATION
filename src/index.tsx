import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { I18nextProvider } from "react-i18next";
import i18n from "./app/share/helper/i18n";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./app/pages/Home";
import Login from "./app/pages/Login";
import Register from "./app/pages/Register";

ReactDOM.render(
  <Router>
    <I18nextProvider i18n={i18n}>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </App>
    </I18nextProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
