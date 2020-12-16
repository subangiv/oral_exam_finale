import { useState } from "react";
import ShowText from "../show-text/ShowText";
import styles from "./ApplicationCard.module.scss";
import flags from "../../logic/countryFlag";
import { getAllByPlaceholderText } from "@testing-library/react";

function ApplicationCard(props) {
const [detailsToggle, setDetailsToggle] = useState(false);

function convertDate(date) {
 const convertedDate = new Date(date);
 const str = convertedDate.toString();
 const index = str.search("GMT");

 return str.slice(0,index);
}

    return ( 
     <li className={styles.applicationCardListItem}>
         <article className={styles.applicationCardItem}>
             <section className={styles.applicationCardTop}>
                <div className={styles.applicationCardWrapper}>
                    <div className={styles.applicationCardImageWrapper}>
                        <img className={styles.applicationCardImage} src={"https://exampollopollo-e360.restdb.io/media/"+props.applicant[0].image[0]} alt=""/>
                        {flags.getFlag(props.applicant[0].country, styles.applicationCardFlag)}
                    </div>
                    <section className={styles.applicationCardInfo}>
                        <hgroup className={styles.applicationCardHeading}>
                            <h2 className={"display-4 " + styles.applicationCardTitle }>{props.product[0].title}</h2>
                            <h3 className={"display-5"}>{props.applicant[0].first_name + " " + props.applicant[0].last_name}</h3>
                        </hgroup>
                        <ShowText text={props.motivation} maxLength={55}/>
                    </section>
                </div>
                <section className={styles.applicationCardInteraction}>
                    <button onClick={() => {setDetailsToggle(!detailsToggle)}} className={styles.detailsButton}><b>{!detailsToggle ? "▼" : "▲"}</b> Details</button>
                    <button onClick={() => {props.clickDonateHandler(props._id)}} className="btn btn-secondary rounded secondary-text">Donate ${props.product[0].price}</button>
                </section>
            </section>
            {detailsToggle &&
                <section className={styles.expandCollapse}>
                    <ul className={styles.statistics}>
                        <li>Created: {convertDate(props.created)}</li>
                    </ul>
                </section>
            }
         </article>
     </li>
    );
  }
  
  export default ApplicationCard;
