import { useState } from "react";
import ShowText from "../show-text/ShowText";
import styles from "./ProductCard.module.scss";
import flags from "../../logic/countryFlag";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";


function ProductCard(props) {
    
const [isProducerOpen, setIsProducerOpen] = useState(false);
const [detailsToggle, setDetailsToggle] = useState(false)






const fullName = "".concat(props.producer[0].first_name, " ", props.producer[0].last_name);

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
                        <button onClick={() => {setDetailsToggle(!detailsToggle)}} className={styles.detailsButton}>{!detailsToggle ? "▼" : "▲"} Details</button>
                        <button onClick={() => props.openHandler()} className="btn btn-primary rounded">Apply</button>
                    </section>
                </section>
                {detailsToggle &&
                    <section className={styles.expandCollapse}>
                        <ul className={styles.statistics}>
                            <li>Recieved by applicants {props.recieved} times.</li>
                            <li>Last recieved by an applicant at {props.lastDonation}</li>
                        </ul>
                        <button onClick={() => setIsProducerOpen(true)} className={"btn primary-text"}>View producer's profile</button>
                    </section>
                }
                <Dialog open={isProducerOpen}>
                        <button onClick={() => setIsProducerOpen(false)} className={"btn " + styles.producerCardClose}>Close</button>

                        <section className={styles.producerCardTop}>
                            <div className={styles.productCardWrapper}>
                                <div className={styles.productCardImageWrapper}>
                                    <img className={styles.productCardImage} src={"https://exampollopollo-e360.restdb.io/media/"+props.image[0]} alt=""/>
                                    {flags.getFlag(props.producer[0].country, styles.productCardFlag)}
                                </div>
                                <section className={styles.productCardInfo}>
                                        <h2 className={"display-3"}>{fullName}</h2>
                                        <h3 className={"display-4 " + styles.producerCardCountry}>From {props.producer[0].country}</h3>
                                        <h4 className={"display-5 " + styles.producerCardAddress}>Address: {props.producer[0].address}</h4>

                                    <p className={styles.producerCardDesc}>{props.producer[0].description}</p>
                                </section>
                            </div>
                    
                        </section>
                </Dialog>
            </article>
        </li>
    );
  }
  
  export default ProductCard;
