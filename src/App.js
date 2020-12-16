import './App.css';
import React, { Suspense, useEffect, useState } from "react";
import Routes from './components/routes/Routes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(localStorage.getItem("user"));
    logInHandler();
  }, []);

  console.log(isLoggedIn)
  function logInHandler() {
    const user = localStorage.getItem("user");

    if(user === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }

  return (
    <Suspense fallback={<div className={"lazy-loader"}><div role="alert" aria-live="assertive" className={"spinner"}></div>
    <span>Loading...</span></div>}>
      <Routes isLoggedIn={isLoggedIn}/>
    </Suspense>
  );
}

export default App;
