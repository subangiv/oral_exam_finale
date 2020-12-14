import './App.css';
import InputField from './components/input-field/InputField'
import ProductsPage from './components/products-page/ProductsPage'
import ApplicationsPage from './components/applications-page/ApplicationsPage'
import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      &emsp; &emsp;
      <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/applications">
            <ApplicationsPage/>
          </Route>
          <Route path="/products">
            <ProductsPage/>
          </Route>
          <Route path="/">
          <ProductsPage/>
          </Route>
        </Switch>
      <Footer />
    </div>

    
    </Router>
  );
}

export default App;
