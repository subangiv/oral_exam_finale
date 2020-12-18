import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./EndingPayment.module.scss";

export default function SuccessText() {
  const history = useHistory();
  const clickReturn = () => {
    history.push("/applications");
  };

  return (
    <section className={styles.text__div}>
      <div className={styles.text__div__wrapper}>
        <h1>Thank you so much for your donation</h1>
        <p>
          It will be sent to the producer immediately. If the producer can't
          receive your donation, the money will be transferred back to your
          account within 7 days.
        </p>
        <button className="btn rounded btn-secondary" onClick={clickReturn}>
          Return to application
        </button>
      </div>
    </section>
  );
}
