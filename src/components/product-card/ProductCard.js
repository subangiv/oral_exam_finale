import { useState } from "react";
import ShowText from "../show-text/ShowText";
import styles from "./ProductCard.module.scss";
import flags from "../../logic/countryFlag";


function ProductCard(props) {

const [detailsToggle, setDetailsToggle] = useState(false)


    return (
        <li className={styles.productCardListItem}>
            <article className={styles.productCardItem}>
                <section className={styles.productCardTop}>
                    <div className={styles.productCardWrapper}>
                        <div className={styles.productCardImageWrapper}>
                            <img className={styles.productCardImage} src={"https://exampollopollo-e360.restdb.io/media/"+props.image[0]} alt=""/>
                            {flags.getFlag(props.producer[0].country, styles.productCardFlag)}
                        </div>
                        <section className={styles.productCardInfo}>
                            <hgroup className={styles.productCardHeading}>
                                <h2 className={"display-4 " + styles.productCardTitle }>{props.title}</h2>
                                <h3>{"$" + props.price}</h3>
                            </hgroup>
                            <ShowText text={props.description} maxLength={60}/>
                        </section>
                    </div>
                    <img className="product-card-flag flag" src="" alt=""/>
                    <section className={styles.productCardInteraction}>
                        <button onClick={() => {setDetailsToggle(!detailsToggle)}} className={styles.detailsButton}><b>+</b> Details</button>
                        <button className="btn btn-primary rounded">Apply</button>
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
  
  export default ProductCard;
