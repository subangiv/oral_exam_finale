import React from "react";
import styles from "./DonationPage.module.scss";
import DonationImage from "../../assets/images/donation-img-small.png";

export default function DonationPage(props) {
  return (
    <main className={styles.donationPage}>
      <div className={styles.donationBox}>
        <img
          src={DonationImage}
          alt="donation page's banner"
          className={styles.donationImg}
        />
      </div>
      <h1 className="display-1">Donations</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur.
      </p>
    </main>
  );
}
