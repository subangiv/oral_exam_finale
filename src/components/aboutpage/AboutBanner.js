import React from "react";
import styles from "./AboutPage.module.scss";
import aboutbanner from "../../images/about-banner-img.webp";

export default function AboutBanner() {
  return (
    <section className={styles.flex}>
      <div className={styles.flex__left}>
        <img src={aboutbanner} alt="about banner" />
      </div>
      <div className={styles.flex__right}>
        <h1>About Us</h1>
        <p>
          PolloPollo is a non-profit peer-to-peer charity project that directly
          connects people in need with people who want to help - without the
          need for any intermediaries. PolloPollo has three kinds of users:
          producers, applicants and donors. A producer offers products that
          applicants apply for. A donor donates money to pay for the product of
          an application.
        </p>
      </div>
    </section>
  );
}
