import React from "react";
import styles from "./LandingPage.module.scss";
import landingpageimg from "../../images/landingpage-img-compressed.jpg";

export default function Intro() {
  return (
    <section className={styles.flex__small}>
      <div className={styles.flex__left}>
        <img className={styles.intro__img} src={landingpageimg} alt="" />
        <div className={styles.purplelightbox}></div>
      </div>
      <div className={styles.flex__right}>
        <div className={styles.padding__left__large}>
          <h3>What is PolloPollo?</h3>
          <p style={{ textAlign: "left" }}>
            PolloPollo is a fully decentralized charitable platform using
            Distributed Ledger Technology. It brings donors, applicants and
            providers of physical products together.
          </p>
          <button
            className="btn btn-primary outlined rounded"
            style={{ top: "0", left: "0", transform: "translate(0, 0)" }}
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
