import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home/index";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
