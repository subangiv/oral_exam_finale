import './App.css';
import React, { useEffect, useState } from "react";
import Routes from './components/Routes/Routes';

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
    <Routes isLoggedIn={isLoggedIn}/>
  );
}

export default App;
