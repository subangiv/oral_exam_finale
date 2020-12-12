import React, { useState, useEffect } from "react";
import ApplicationCard from "../application-card/ApplicationCard";
import styles from "./ApplicationsPage.module.scss";
import text from "./static/applications-page.json"
import "../application-card/ApplicationCard"

//   const cards = myCards.map((card) => <ProductCard key={card.id} {...card}/>);
  const productsShown = 2;


function ApplicationsPage(props) {
    const [shownProducts, setShownProducts] = useState([]);
    const [index, setIndex] = useState(0);
    const [total, setTotal] = useState(0)
    const [pending, setPending] = useState(true);


    useEffect(() => {
        // showMoreProducts([...myCards], index, productsShown);
        if(shownProducts.length === 0) {
        getData(showProducts, "?max="+productsShown + "&totals=true");
        console.log(shownProducts);
        }
      }, []);

    function showProducts(data) {
        // console.log(newCards)
        console.log(data)
        setShownProducts([...shownProducts].concat(data.data));
        setIndex(index+productsShown);
        setTotal(data.totals.total);        
    }

    function loadProductsHandler(){
        setPending(true);
        getData(showProducts, "?skip=" + index + "&max=" + productsShown + "&totals=true")
    };

    function getData(callback, parameter) {
        fetch("https://exampollopollo-e360.restdb.io/rest/applications" + parameter, {
            method: "get",
            headers: {
            "x-apikey": "5fc678a84af3f9656800d169",
            "cache-control": "no-cache",
          },
        })
          .then((e) => e.json())
          .then((data) => {
            console.log(data);
            callback(data);
          })
          .then(() => {
            setPending(false);
          })
      }

    return (
        <main>
            <article className={styles.page}>
                <section className={styles.topSection}>
                    <div className={styles.bannerWrapper}>
                        <img className={styles.banner} src={process.env.PUBLIC_URL + "application-banner-2.png"}></img>
                    </div>
                    <section className={`${styles.paragraphWrapper} ${styles.filler}`}>
                        <h1 className={"light-text display-2"}>{text.heading}</h1>
                        <p className={styles.paragraph + " light-text"}>{text.paragraph1}</p>
                        <p className={styles.paragraph + " light-text"}>{text.paragraph2}</p>
                    </section>
                </section>
                <ul className={styles.applicationList}>{shownProducts.map((card) => <ApplicationCard key={card._id} {...card}/>)}</ul>
                {pending &&
                <p>Loading ...</p>}

                {shownProducts.length !== total  && (
                <button className="btn outlined rounded btn-primary" onClick={loadProductsHandler} >Load more...</button>
                )}
            </article>
        </main>
    );
  }
  
  export default ApplicationsPage;