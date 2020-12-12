import './App.css';
import InputField from './components/input-field/InputField'
import ProductsPage from './components/products-page/ProductsPage'
import ApplicationsPage from './components/applications-page/ApplicationsPage'
import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
     
      <Header />
      &emsp; &emsp;
      <ApplicationsPage/>
      <Footer />
    </div>
  );
}

export default App;
