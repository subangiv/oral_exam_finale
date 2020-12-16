import styles from "./Account.module.scss";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function ProfileSide() {
  // logout the user
  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    setLogout(true);
  };
  const [logout, setLogout] = useState(false);
  const btnWidth = {
    width: "225px",
    margin: "10px 0",
  };
  if (logout) {
    return <Redirect to="/" />;
  }
  return (
    <div className={styles.wrapper__right}>
      <h1>Profile</h1>
      <div style={btnWidth} className={styles.lightpurple__div}>
        <h6>Your balance</h6>
        <h4>0 USD</h4>
      </div>
      <button style={btnWidth} className="btn rounded btn-disabled">
        Top up
      </button>
      <button style={btnWidth} className="btn rounded btn-donate">
        Donate more?
      </button>
      <button
        style={btnWidth}
        className="btn rounded btn-primary"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}

export default ProfileSide;
