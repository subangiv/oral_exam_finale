import './App.css';
import InputField from './components/input-field/InputField'
import ProductsPage from './components/products-page/ProductsPage'
import ApplicationsPage from './components/applications-page/ApplicationsPage'
import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SignUp from "./components/account/SignUp";
import SignIn from "./components/account/SignIn";
import LandingPage from "./components/landingpage/LandingPage";
import Aboutpage from "./components/aboutpage/AboutPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// const App = (props) => props.children;

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      &emsp; &emsp;
      <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/applications">
            <ApplicationsPage/>
          </Route>
          <Route path="/products">
            <ProductsPage/>
          </Route>
          <Route path="/">
          <LandingPage/>
          </Route>
        </Switch>
      <Footer />
    </div>

    
    </Router>
  );
}

export default App;
