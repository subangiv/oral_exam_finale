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
          Donation return policy here. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
        </p>
        <button className="btn rounded btn-secondary" onClick={clickReturn}>
          Return to application
        </button>
      </div>
    </section>
  );
}
