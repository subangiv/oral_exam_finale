import React from "react";
import styles from "./ContactPage.module.scss";
import ContactForm from "../contact_form/ContactForm";
import FigureforBanner from "../../assets/images/contact_figure.png";
import { useMediaQuery } from "react-responsive";

export default function ContactPage(props) {
  const isDeskTop = useMediaQuery({ query: "(min-width: 991.98px)" });

  const Title = () => {
    return <h1 className="display-1">Contact</h1>;
  };

  const Text = (props) => {
    return (
      <p className={props.className}>
        Feel free to join our community or help desk on Discord or Twitter.
        <br />
        <br />
        Or send a email for questions or press inquiries on:
        casper@pollopollo.org
      </p>
    );
  };

  return (
    <main className={styles.contactPage}>
      <div className={styles.leftColumnWrapper}>
        {!isDeskTop && <Title style={{ marginBottom: "2vw" }} />}
        <div className={styles.bannerWrapper}>
          <img src={FigureforBanner} alt="figure with computer" />
          {isDeskTop ? (
            <div>
              <Title />
              <Text className={styles.contactTextWrapper} />
            </div>
          ) : null}
        </div>
        {isDeskTop ? null : <Text className={styles.contactTextWrapper} />}
      </div>
      <ContactForm />
    </main>
  );
}
