import React, { useEffect, useState } from "react";
import { RestDB } from "./data/APIRequest";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./DonationPage.module.scss";
import DonationImage from "../../assets/images/donation-img-small.png";
import DonationForm from "../donation-form/DonationForm";

export default function DonationPage(props) {
  const location = useLocation();
  const applicationId = location.state.application;
  console.log(location.state);
  console.log(props);

  const [application, setApplication] = useState([]);
  useEffect(() => {
    RestDB.getOneApplication(setApplication, applicationId);
  }, [applicationId]);

  const [isGuestMode, setGuestMode] = useState(false);
  const clickGuest = () => {
    setGuestMode(true);
  };
  const history = useHistory();
  const clickSignIn = () => {
    history.push("/sign-in");
  };
  const clickSignUp = () => {
    history.push("/sign-up");
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
            Support people in crisis in Venezuela Your donation will not only
            feed and care for families, young children, and elder in need - your
            gift will also help heal and rebuild lives during these difficult
            times.
          </p>
        </div>
      </section>
      {!isGuestMode ? (
        <div className={styles.donationBtns}>
          {application.length !== 0 ? (
            <>
              <button
                className="btn outlined rounded btn-primary"
                onClick={clickGuest}
                children="Continue as guest"
              ></button>
              <button
                className="btn outlined rounded btn-primary"
                children=" Sign in"
                onClick={clickSignIn}
              />
              <button
                className="btn outlined rounded btn-primary"
                children="Sign up"
                onClick={clickSignUp}
              />
            </>
          ) : (
            <div role="alert" aria-live="assertive" className={"spinner"}></div>
          )}
        </div>
      ) : (
        <h4 style={{ margin: "4vh auto" }}>Continue as guest</h4>
      )}
      {isGuestMode && <DonationForm application={application} />}
    </main>
  );
}
