import styles from "./HelpPage.module.scss";
// import cardStyles from "../QAcard/QACard.module.scss";
import QACard from "../QAcard/QACard";
import helpBannerImg from "../../assets/images/help_splash.jpg";

const FAQlist = [
  {
    question: "Why can I only use Obyte cryptocurrency for donations?",
    answer:
      "The entire PolloPollo platform is built on the Obyte platform. To enable donations in other currencies, a more complex setup is required, both in terms of technology as well as regulatory frameworks. We do plan to enable other currencies as well.",
  },
  {
    question: "Where can I acquire Bytes for donations?",
    answer: "Bytes can be bought at several cryptocurrency exchanges.",
    link: "https://obyte.org/#exchanges",
    linkText: "See the exchange list here",
  },
  {
    question: "Why is there no applications showing?",
    answer:
      "If applicants haven't applied for donation of products, there are no open applications. PolloPollo does not control when applicants apply for donations of products.",
  },
  {
    question: "Is there a way to support the PolloPollo project directly?",
    answer:
      "We rely 100% on the work of volunteers, and always welcome more to help us improve the platform. Please join our and let us know you want to help.",
    link: "https://discord.pollopollo.org",
    linkText: "Community Discord",
  },
  {
    question: "Is there a way to financially support PolloPollo?",
    answer:
      "Thanks to the generous partners helping us, the operational cost of the platform is close to zero. The best help would be to make donations regularly or suggesting new improvements to the platform.",
  },
];

export default function HelpPage(props) {
  return (
    <main className={styles.helpPage}>
      <section className={styles.topWrapper}>
        <div className={styles.bannerWrapper}>
          {/* <div className={styles.banner}></div> */}
          <img src={helpBannerImg} alt="help banner" />
        </div>
        <div id="intro" className={styles.sections}>
          <h1 className="display-1">Help</h1>
          <p className="display-6">
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
          {FAQlist.map((faq, index) => (
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
          Or feel free to{" "}
          <a href="#" className={styles.faqLink}>
            contact us
          </a>
          .
        </p>
      </section>
    </main>
  );
}
