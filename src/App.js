import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import FilterButton from "./components/filter/FilterButton";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <FilterButton children="Filter" className="btn rounded btn-primary" /> */}
      <Footer />
    </div>
  );
}

export default App;
