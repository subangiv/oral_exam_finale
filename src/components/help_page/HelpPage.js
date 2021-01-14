import styles from "./HelpPage.module.scss";
import questions from "./static/questions.json";
import QACard from "../qAcard/QACard";
import helpBannerImg from "../../images/help-splash-compressed.jpg";

export default function HelpPage() {
  return (
    <main className={styles.helpPage}>
      <section className={styles.topWrapper}>
        <div className={styles.bannerWrapper}>
          {/* <div className={styles.banner}></div> */}
          <img src={helpBannerImg} alt="help banner" />
        </div>
        <div id="intro" className={styles.sections}>
          <h1 className="display-1">Help</h1>
          <p className="primary-text">
            We always strive to make the platform as easy and non-technical as
            possible, to stay relevant to people without technical or IT skills.
            We created some guides, that you can find in the section below.{" "}
          </p>
          <div className={styles.guideContainer}>
            <h2 className="display-2">Guides</h2>
            <a
              className={styles.guideLink}
              href="https://medium.com/@casper_43503/basic-principles-of-dlt-based-charity-platform-pollopollo-7ed59f65de3e"
            >
              How the platform works
            </a>
            <a
              className={styles.guideLink}
              href="https://docs.google.com/document/d/1sN_CIXZtkwUaHt9XB4NV-2DrJptvTksWPKL_Sa5zuy8/edit?usp=sharing"
            >
              Guides for producers
            </a>
          </div>
        </div>
      </section>

      <section id="faqSection" className={styles.sections}>
        <h2 className="display-2">Frequently Asked Questions</h2>
        <div className={styles.cardWrapper}>
          {questions.map((faq, index) => (
            <QACard
              key={index}
              question={faq.question}
              answer={
                faq.linkText === "Community Discord" ? (
                  <p>
                    {faq.answer.slice(0, 112)}&emsp;
                    <a href={faq.link} className={styles.faqLink}>
                      {faq.linkText}
                    </a>
                    {faq.answer.slice(112)}
                  </p>
                ) : (
                  faq.answer
                )
              }
              linkText={
                faq.linkText === "Community Discord" ? "" : faq.linkText
              }
              href={faq.linkText === "Community Discord" ? "" : faq.link}
            ></QACard>
          ))}
        </div>
      </section>

      <section id="ending" className={styles.sections}>
        <h2 className="display-2">
          Did you not find what you were looking for?{" "}
        </h2>
        <p>
          Check out our community and help desk on{" "}
          <a href="https://discord.gg/kQzuR4c" className={styles.faqLink}>
            Discord
          </a>{" "}
          or{" "}
          <a
            href="https://twitter.com/PolloPolloOrg"
            className={styles.faqLink}
          >
            Twitter
          </a>
          .
        </p>
        <p>
          Or fee l free to{" "}
          <a href="#" className={styles.faqLink}>
            contact us
          </a>
          .
        </p>
      </section>
    </main>
  );
}
