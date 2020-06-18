import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { withAuthentication } from "../lib/withAthetication";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { HomePage } from "./pages/Home.page";
import { PhoneDetailPage } from "./pages/PhoneDetail.page";

export const App = withAuthentication(() => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/phone/:id" component={PhoneDetailPage} />
    </Switch>
  </Router>
));
