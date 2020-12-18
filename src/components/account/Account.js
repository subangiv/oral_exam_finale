import React, { useState, useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import styles from "./Account.module.scss";
import ProfileSide from "./ProfileSide";

function Account(props) {
  return (
    <div className={styles.profile__wrapper}>
      <ProfileInfo />
      <ProfileSide logOutHandler={(user) => props.logOutHandler(user)} />
    </div>
  );
}

export default Account;
