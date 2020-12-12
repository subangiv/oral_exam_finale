import { useState } from "react";
import ShowText from "../show-text/ShowText";
import styles from "./ApplicationCard.module.scss";

function ApplicationCard(props) {

const [detailsToggle, setDetailsToggle] = useState(false)
const [showToggle, setShowToggle] = useState(false);


    return (
     <li className={styles.applicationCardListItem}>
         <article className={styles.applicationCardItem}>
             <section className={styles.applicationCardTop}>
                <div className={styles.applicationCardWrapper}>
                    <img className={styles.applicationCardImage} src={"https://exampollopollo-e360.restdb.io/media/"+props.applicant[0].image[0]} alt=""/>
                    <section className={styles.applicationCardInfo}>
                        <hgroup className={styles.applicationCardHeading}>
                            <h2 className={"display-4 " + styles.applicationCardTitle }>{props.product[0].title}</h2>
                        </hgroup>
                        <ShowText text={props.motivation} maxLength={60}/>
                    </section>
                </div>
                <img className="application-card-flag flag" src="" alt=""/>
                <section className={styles.applicationCardInteraction}>
                    <button onClick={() => {setDetailsToggle(!detailsToggle)}} className={styles.detailsButton}><b>+</b> Details</button>
                    <button className="btn btn-secondary rounded secondary-text">Donate ${props.product[0].price}</button>
                </section>
            </section>
            {detailsToggle &&
                <section className={styles.expandCollapse}>
                    <ul className={styles.statistics}>
                        <li>Recieved by applicants {props.recieved} times.</li>
                        <li>Last recieved by an applicant at {props.lastDonation}</li>
                    </ul>
                    <a href="#" className={"primary-text"}>View producer's profile</a>
                </section>
            }
         </article>
     </li>
    );
  }
  
  export default ApplicationCard;
