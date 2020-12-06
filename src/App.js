import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HelpPage from "./components/help_page/HelpPage";
import ContactPage from "./components/contact_page/ContactPage";
import DonationPage from "./components/donation_page/DonationPage";

function App() {
  return (
    <div className="App">
      <Header />
      <DonationPage />
      <HelpPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
