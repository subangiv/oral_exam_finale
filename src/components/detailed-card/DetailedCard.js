import React from "react";
import styles from "./DetailedCard.module.scss";

export default function DetailedCard(props) {
  return (
    <section>
      <h4>You are helping Rafael!</h4>
      <article className={styles.applicantCard}>
        <h5>Combo chicken @ $5</h5>
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
