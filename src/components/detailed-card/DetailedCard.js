import React from "react";
import styles from "./DetailedCard.module.scss";
import countryFlags from "../../logic/countryFlag";

export default function DetailedCard(props) {
  const thisApplicant = props.application.applicant[0];
  const productApplied = props.application.product[0];

  return (
    <section>
      <h4>
        You are helping{" "}
        <span className="display-4">{thisApplicant.first_name}</span>!
      </h4>
      <article className={styles.applicantCard}>
        <div className={styles.imgContainer}>
          <img
            src={
              "https://exampollopollo-e360.restdb.io/media/" +
              thisApplicant.image[0]
            }
            alt="applicant profile pic"
          />
          {countryFlags.getFlag(thisApplicant.country, styles.flag)}
        </div>
        <h5 className={styles.eachElm + " display-5"}>
          {productApplied.title} @ ${productApplied.price}
        </h5>
        <h5 className={styles.eachElm + " display-5"}>
          {thisApplicant.first_name}
        </h5>
        <p className={styles.eachElm}>
          MOTIVATION: <span>{props.application.motivation}</span>
        </p>
        <p className={styles.eachElm}>
          COUNTRY: <span>{thisApplicant.country}</span>
        </p>
      </article>
    </section>
  );
}
