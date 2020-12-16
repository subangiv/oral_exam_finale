import React from "react";
import styles from "./DetailedCard.module.scss";
import exampleImg from "../../assets/images/help_image.png";

export default function DetailedCard(props) {
  return (
    <section>
      <h4>You are helping Rafael!</h4>
      <article className={styles.applicantCard}>
        <div className={styles.imgContainer}>
          <img src={exampleImg} alt="applicant profile pic" />
        </div>
        <h5>
          Combo chicken @ $5 <span></span>
        </h5>
        <p>
          MOTIVATION:
          <span>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </span>
        </p>
        <p>
          ADDRESS: <span>Lorem ipsum</span>
        </p>
        <p>
          COUNTRY: <span>Lorem ipsum</span>
        </p>
      </article>
    </section>
  );
}
