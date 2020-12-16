import React from "react";
import styles from "./LandingPage.module.scss";
import stepone from "../../svg/step-1.svg";
import steptwo from "../../svg/step-2.svg";
import stepthree from "../../svg/step-3.svg";
import stepfour from "../../svg/step-4.svg";
import stepfive from "../../svg/step-5.svg";

export default function StepsProcess() {
  return (
    <section className={styles.flex__column__purple}>
      <h3>How does it work?</h3>
      <div className={styles.grid__five}>
        <div className={styles.grid__box}>
          <div className={styles.grid__box__flex}>
            <h3>1</h3>
            <img src={stepone} alt="" />
          </div>
          <h6>
            A producer lists a product on pollopollo.org <br></br> e.g tomato
            plant
          </h6>
        </div>
        <div className={styles.grid__box}>
          <div className={styles.grid__box__flex}>
            <h3>2</h3>
            <img src={steptwo} alt="" />
          </div>
          <h6>
            A receiver wants the tomato plants to grow tomatoes and applies for
            them
          </h6>
        </div>
        <div className={styles.grid__box}>
          <div className={styles.grid__box__flex}>
            <h3>3</h3>
            <img src={stepthree} alt="" />
          </div>
          <h6>A donor funds for the tomato plant for the producer</h6>
        </div>
        <div className={styles.grid__box}>
          <div className={styles.grid__box__flex}>
            <h3>4</h3>
            <img src={stepfour} alt="" />
          </div>
          <h6>
            The payment is locked on a digital contract created between a donor
            and the producer
          </h6>
        </div>
        <div className={styles.grid__box}>
          <div className={styles.grid__box__flex}>
            <h3>5</h3>
            <img src={stepfive} alt="" />
          </div>
          <h6>
            When the receiver confirms the receipt of the tomato plants, funds
            are released to the producer
          </h6>
        </div>
      </div>
    </section>
  );
}
