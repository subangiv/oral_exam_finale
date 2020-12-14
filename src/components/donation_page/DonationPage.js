import React, { useState } from "react";
import styles from "./DonationPage.module.scss";
import DonationImage from "../../assets/images/donation-img-small.png";
import DonationForm from "../donation-form/DonationForm";

export default function DonationPage(props) {
  const [isGuestMode, setGuestMode] = useState(false);
  const clickGuest = () => {
    setGuestMode(true);
  };

  const [isSignIn, setSignIn] = useState(false);
  const clickSignIn = () => {
    setSignIn(true);
  };

  const [isSignUp, setSignUp] = useState(false);
  const clickSignUp = () => {
    setSignUp(true);
  };
  return (
    <main className={styles.donationPage}>
      <section className={styles.donationIntro}>
        <div className={styles.donationBox}>
          <img
            src={DonationImage}
            alt="donation page's banner"
            className={styles.donationImg}
          />
        </div>
        <div className={styles.introText}>
          <h1 className="display-1">Donations</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
          </p>
        </div>
      </section>
      <div className={styles.donationBtns}>
        <button
          className="btn rounded btn-secondary outlined"
          onClick={clickGuest}
        >
          Continue as guest
        </button>
        <button
          className="btn rounded btn-secondary outlined"
          onClick={clickSignIn}
        >
          Sign in
        </button>
        <button
          className="btn rounded btn-secondary outlined"
          onClick={clickSignUp}
        >
          Sign up
        </button>
      </div>
      {isGuestMode && <DonationForm />}
    </main>
  );
}
