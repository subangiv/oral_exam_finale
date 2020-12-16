import React from "react";
import styles from "./EndingPayment.module.scss";
import testimg from "../../images/test-image.jpg";

export default function SuccessImg() {
  return (
    <section className={styles.img__div}>
      <img src={testimg} alt="" />
    </section>
  );
}
