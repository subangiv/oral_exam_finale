import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HelpPage from "./components/help_page/HelpPage";

function App() {
  return (
    <div className="App">
      <Header />
      <HelpPage />
      <Footer />
    </div>
  );
}

export default App;
