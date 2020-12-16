import styles from "./Account.module.scss";
import testimg from "../../images/test-image.jpg";
import placeholderimg from "../../svg/placeholder-img.svg";
import React, { useState, useEffect } from "react";

function ProfileInfo() {
  const person = localStorage.getItem("user");
  const personInfo = JSON.parse(person);
  const personName = personInfo.firstname + " " + personInfo.lastname;
  console.log(personInfo);

  return (
    <div className={styles.wrapper__left}>
      <img className={styles.profile__avatar} src={placeholderimg} alt="" />
      <div className={styles.purple__div}>
        <div className={styles.profile__text}>
          <h6>Name:</h6>
          <p>{personName}</p>
          <h6>Country:</h6>
          <p>{personInfo.country}</p>
          <h6>Email:</h6>
          <p>{personInfo.email}</p>
          <h6>Position:</h6>
          <p>{personInfo.position}</p>
        </div>
      </div>
    </div>
  );
}
export default ProfileInfo;
