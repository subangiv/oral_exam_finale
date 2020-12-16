import React, { useState, useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import styles from "./Account.module.scss";
import ProfileSide from "./ProfileSide";

function Account() {
  return (
    <div className={styles.profile__wrapper}>
      <ProfileInfo />
      <ProfileSide />
    </div>
  );
}

export default Account;
