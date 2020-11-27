import React, { Suspense } from "react";
import "./App.css";
// import Footer from "./components/footer/Footer";
const Footer = React.lazy(() => import("./components/footer/Footer"));
const Header = React.lazy(() => import("./components/header/Header"));
const LandingPage = React.lazy(() =>
  import("./components/landingpage/LandingPage")
);
function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <LandingPage />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
