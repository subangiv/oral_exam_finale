import React from "react";
import styles from "./AboutPage.module.scss";
import data from "../json/profile.json";
import avatar from "../../images/test-image.jpg";
export default function Profiles() {
  return (
    <section className={styles.wrapper}>
      <h3>Meet the team</h3>
      <div className={styles.profile__grid}>
        {data.Profile.map((profile, i) => {
          return (
            <div key={i}>
              <div className={styles.profile__div}>
                <div className={styles.image__round}>
                  <img src={avatar} alt="" />
                </div>
                <p>{profile.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
