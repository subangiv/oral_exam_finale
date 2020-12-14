import React from "react";
import styles from "./DetailedCard.module.scss";

export default function DetailedCard(props) {
  return (
    <>
      <h5>You are helping Rafael!</h5>
      <article className={styles.applicantCard}>
        <h4>Combo chicken @ $5</h4>
        <p>
          MOTIVATION:{" "}
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
    </>
  );
}
