import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import SignIn from "../account/SignIn";
import SignUp from "../account/SignUp";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Routes = (props) => (
  <Router {...props}>
    <Header />
    <Switch>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
    </Switch>
    <Footer />
  </Router>
);
export default Routes;
