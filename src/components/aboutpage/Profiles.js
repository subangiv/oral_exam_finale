import React from "react";
import styles from "./AboutPage.module.scss";
import data from "../json/profile.json";

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
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/profile-images/" +
                      profile.image
                    }
                    alt=""
                  />
                </div>
                <h5>{profile.name}</h5>
                <p>{profile.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
