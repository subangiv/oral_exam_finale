import React from "react";
import styles from "./LandingPage.module.scss";
import landingpageimg from "../images/landing-page-banner.png";

export default function LandingPage() {
  return (
    <section className={styles.flex}>
      <div className={styles.flex__right}>
        <div className={styles.padding__left__large}>
          <h1>
            We bring donors, applicants, and providers of physical products
            together.
          </h1>
          <p>
            Program started in 2018 and represent effective way to reduce
            poverty and hunger in Venezuela.
          </p>
          <button className="btn rounded btn-secondary">Donate</button>
        </div>
      </div>
      <div className={styles.flex__left}>
        <img src={landingpageimg} />
        <div className={styles.purplebox__large}></div>
      </div>
    </section>
  );
}
