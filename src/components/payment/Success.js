import React, { useState } from "react";
import styles from "./EndingPayment.module.scss";
import SuccessText from "./SuccessText";
import SuccessImg from "./SuccessImg";
//import Confetti from "react-dom-confetti";
import Confetti from "react-confetti";

export default function Success() {
  const colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];
  const initialVelocityX = 4;
  const initialVelocityY = 20;
  const gravity = 0.3;

  return (
    <section className={styles.wrapper}>
      <SuccessText />
      <SuccessImg />
      <Confetti
        colors={colors}
        initialVelocityX={initialVelocityX}
        initialVelocityY={initialVelocityY}
        gravity={gravity}
      />
    </section>
  );
}
