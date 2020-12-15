import React, { useState, useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import styles from "./Account.module.scss";
import ProfileSide from "./ProfileSide";
import { Redirect } from "react-router-dom";
import SignUp from "./SignUp";

function Account() {
  /*   const [user, setUser] = useState(false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser);
      setUser(true);
    }
  }, []); */

  return (
    <div className={styles.profile__wrapper}>
      <ProfileInfo />
      <ProfileSide />
    </div>
  );
}

export default Account;
