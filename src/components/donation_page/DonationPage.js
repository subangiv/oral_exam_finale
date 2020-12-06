import React from "react";
import styles from "./DonationPage.module.scss";
import DonationImage from "../../assets/images/donation-img-small.png";

export default function DonationPage(props) {
  return (
    <main className={styles.donationPage}>
      <div className={styles.donationBanner}>
        <img src={DonationImage} alt="figure with computer" />
      </div>
      <h1 className="display-1">Donations</h1>
    </main>
  );
}
