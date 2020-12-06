import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HelpPage from "./components/help_page/HelpPage";
import DonationPage from "./components/donation_page/DonationPage";

function App() {
  return (
    <div className="App">
      <Header />
      <DonationPage />
      <HelpPage />
      <Footer />
    </div>
  );
}

export default App;
