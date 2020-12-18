//import "./App.css";
//import React from "react";
//import Routes from "./components/Routes/Routes";

//function App() {
//  const [isLoggedIn, setIsLoggedIn] = useState(false);

//return <Routes isLoggedIn={isLoggedIn} />;
// import InputField from "./components/input-field/InputField";
// import ProductsPage from "./components/products-page/ProductsPage";
// import ApplicationsPage from "./components/applications-page/ApplicationsPage";
// import React from "react";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import SignUp from "./components/account/SignUp";
// import SignIn from "./components/account/SignIn";
// import LandingPage from "./components/landingpage/LandingPage";
// import AboutPage from "./components/aboutpage/AboutPage";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Routes from "./components/Routes/Routes";
// const App = (props) => props.children;

import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import Routes from "./components/routes/Routes";
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  console.log(open)
  
 useEffect(() => {
   console.log(localStorage.getItem("user"));
   logInHandler();
 }, []);

console.log(isLoggedIn);
 function logInHandler() {
   const person = JSON.parse(localStorage.getItem("user"));
  if (person === null || person.isLoggedIn === false) {
    setIsLoggedIn(false);
 } else {
    setIsLoggedIn(true);
    setUser(person);
}
}


  return (
    <Suspense
      fallback={
        <div className={"lazy-loader"}>
          <div role="alert" aria-live="assertive" className={"spinner"}></div>
          <span>Loading...</span>
        </div>
      }
    >
      <Routes isLoggedIn={isLoggedIn} user={user} logInHandler={logInHandler} clickOffer={()=>setOpen(true)} />
      <Dialog open={open}>
          <DialogTitle>Proof of concept</DialogTitle>
          <DialogContent>
            <DialogContentText>
              As this part is out of scope for the exams project, applying for a
              product is not avaible.
            </DialogContentText>
          </DialogContent>
          <button
            onClick={()=>setOpen(false)}
            className={"btn btn-primary rounded"}
            style={{width: "200px", margin: "0 auto", marginBottom: "8px"}}
          >
            Understood
          </button>
        </Dialog>
    </Suspense>
  );
}

export default App;
