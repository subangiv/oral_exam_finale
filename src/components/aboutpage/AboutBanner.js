import React from "react";
import styles from "./AboutPage.module.scss";
import aboutbanner from "../../images/about-banner-img.png";

export default function AboutBanner() {
  return (
    <section className={styles.flex}>
      <div className={styles.flex__left}>
        <img src={aboutbanner} alt="about banner" />
      </div>
      <div className={styles.flex__right}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
        </p>
      </div>
    </section>
  );
}
