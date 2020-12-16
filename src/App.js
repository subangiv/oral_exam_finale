import './App.css';
import InputField from './components/input-field/InputField'
import ProductsPage from './components/products-page/ProductsPage'
import ApplicationsPage from './components/applications-page/ApplicationsPage'
import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SignUp from "./components/account/SignUp";
import SignIn from "./components/account/SignIn";
import LandingPage from "./components/landingpage/LandingPage";
import AboutPage from "./components/aboutpage/AboutPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from './components/Routes/Routes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(localStorage.getItem("user"));
    logInHandler();
  }, []);

  console.log(isLoggedIn)
  function logInHandler() {
    const user = localStorage.getItem("user");

    if(user === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }

  return (
    <Routes isLoggedIn={isLoggedIn}/>
  );
}

export default App;
