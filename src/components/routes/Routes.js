import React, { lazy } from "react";
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
import Success from "../payment/Success";
import Account from "../account/Account";
const LandingPage = lazy(() => import("../landingpage/LandingPage"));
const AboutPage = lazy(() => import("../aboutpage/AboutPage"));
const ApplicationsPage = lazy(() => import("../applications-page/ApplicationsPage"));
const ProductsPage = lazy(() => import("../products-page/ProductsPage"));
const DonationPage = lazy(() => import("../donation_page/DonationPage"));
const HelpPage = lazy(() => import("../help_page/HelpPage"));
const ContactPage = lazy(() => import("../contact_page/ContactPage"));



function Routes(props) {

  return (
  <Router {...props}>
    <Header logOutHandler={()=>props.logInHandler()} clickOffer={() => props.clickOffer()} {...props} />
    <Switch>
      <Route path="/about" render={()=>
        <AboutPage />}>
      </Route>
      <Route path="/applications" render={() =>
        <ApplicationsPage isLoggedIn={props.isLoggedIn} />}>
      </Route>
      <Route path="/products" render={()=>
        <ProductsPage />}>
      </Route>
      <Route path="/help" render={()=>
        <HelpPage />}>
      </Route>
      <Route path="/contact" render={()=>
        <ContactPage />}>
      </Route>
      <Route path="/donations" render={()=>
        <DonationPage />}>
      </Route>
      <Route path="/success">
        <Success />
      </Route>
      <Route path="/sign-in">
        <SignIn logIn={() => props.logInHandler()}/>
      </Route>
      <Route path="/sign-up">
        <SignUp handleLogin={() => {
          props.logInHandler();
        }} />
      </Route>
      <Route path="/account">
        <Account logOutHandler={(user) => props.logInHandler(user)} />
      </Route>
      <Route path="/" render={() => <LandingPage/>}/>
    </Switch>
    <Footer />
  </Router>
  )
};
export default Routes;
