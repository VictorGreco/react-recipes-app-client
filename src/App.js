import React from "react";
import { Switch, Route } from "react-router-dom";

import ROUTES from "./utils/routes";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <Switch>
      <Route path={ROUTES.LOGIN}>
        <Login />
      </Route>
      <Route path={ROUTES.SIGNUP}>
        <SignUp />
      </Route>
      <Route path={ROUTES.RECIPE}>
        <Recipe />
      </Route>
      <Route path={ROUTES.HOME} exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
