import React from "react";
import styles from "./ContactPage.module.scss";
import ContactForm from "../contact_form/ContactForm";
import FigureforBanner from "../../assets/images/contact_figure.png";
import { ReactSVG } from "react-svg";
import { useMediaQuery } from "react-responsive";

export default function ContactPage(props) {
  const isDeskTop = useMediaQuery({ query: "(min-width: 991.98px)" });

  const Title = () => {
    return <h1 className="display-1">Contact</h1>;
  };
  const Text = () => {
    return (
      <p>
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
        {!isDeskTop && <Title />}
        <div className={styles.bannerWrapper}>
          <img src={FigureforBanner} alt="figure with computer" />
          {/* <ReactSVG
            src={FigureforBanner}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error);
                return;
              }
            }}
            beforeInjection={(svg) => {
              svg.classList.add("contactFigure");
            }}
          /> */}
          {isDeskTop ? (
            <div>
              <Title />
              <Text />
            </div>
          ) : null}
        </div>
        {isDeskTop ? null : <Text className={styles.contactTextWrapper} />}
      </div>
      <ContactForm />
    </main>
  );
}
