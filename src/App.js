import React, { Suspense } from "react";
import "./App.css";
// import Footer from "./components/footer/Footer";
function App() {
  const Footer = React.lazy(() => import("./components/footer/Footer"));
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
