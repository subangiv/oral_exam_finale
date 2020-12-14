import React, { useState, useEffect } from "react";
import ProductCard from "../product-card/ProductCard";
import styles from "./ProductsPage.module.scss";
import text from "./static/product-page.json"
import "../product-card/ProductCard"

  const myCards = [
    {
        name: "Milk",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
        img: "milk.jpg",
        price: 5,
        country: "Venezuela, Bolivarian Republic of",
        landCode: "ve",
        id: 1,
        statistics: {
            lastDonation: "",
            completedDonations: {
                pastWeek:0,
                pastMonth: 0,
                allTime: 0,
            },
            pendingDonations: {
                pastWeek:0,
                pastMonth: 0,
                allTime: 0
            }
      }
    },
    {
        name: "Beef",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
        img: "beef.jpg",
        price: 5,
        country: "Venezuela, Bolivarian Republic of",
        landCode: "ve",
        id: 2,
        statistics: {
            lastDonation: "",
            completedDonations: {
                pastWeek:0,
                pastMonth: 0,
                allTime: 0,
            },
            pendingDonations: {
              pastWeek:0,
              pastMonth: 0,
              allTime: 0
            }
        }
    },
    {
        name: "Beef",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
        img: "beef.jpg",
        price: 5,
        country: "Venezuela, Bolivarian Republic of",
        landCode: "ve",
        id: 3,
        statistics: {
            lastDonation: "",
            completedDonations: {
                pastWeek:0,
                pastMonth: 0,
                allTime: 0,
            },
            pendingDonations: {
              pastWeek:0,
              pastMonth: 0,
              allTime: 0
            }
        }
    },
    {
        name: "Milk",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
        img: "milk.jpg",
        price: 5,
        country: "Venezuela, Bolivarian Republic of",
        landCode: "ve",
        id: 4,
        statistics: {
            lastDonation: "",
            completedDonations: {
                pastWeek:0,
                pastMonth: 0,
                allTime: 0,
            },
            pendingDonations: {
                pastWeek:0,
                pastMonth: 0,
                allTime: 0
            }
      }
    }, 
    {
        name: "Beef",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
        img: "beef.jpg",
        price: 5,
        country: "Venezuela, Bolivarian Republic of",
        landCode: "ve",
        id: 5,
        statistics: {
            lastDonation: "",
            completedDonations: {
                pastWeek:0,
                pastMonth: 0,
                allTime: 0,
            },
            pendingDonations: {
                pastWeek:0,
                pastMonth: 0,
                allTime: 0
            }
      }
    }
];
  const cards = myCards.map((card) => <ProductCard key={card.id} {...card}/>);
  const productsShown = 2;


function ProductsPage(props) {
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
        fetch("https://exampollopollo-e360.restdb.io/rest/products" + parameter, {
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
                        <div className={styles.filler}>
                        <img className={styles.banner} src={process.env.PUBLIC_URL + "products-images/products-img.png"}></img>
                        </div>
                    </div>
                    <section className={styles.paragraphWrapper}>
                        <h1 className={"primary-text display-2"}>Products</h1>
                        <p className={styles.paragraph + " primary-text"}>{text.paragraph1}</p>
                        <p className={styles.paragraph + " primary-text"}>{text.paragraph2}</p>
                    </section>
                </section>
                <ul className={styles.productList}>{shownProducts.map((card) => <ProductCard key={card._id} {...card}/>)}</ul>
                {pending &&
                <p>Loading ...</p>}

                {shownProducts.length !== total  && (
                <button className="btn outlined rounded btn-primary" onClick={loadProductsHandler} >Load more...</button>
                )}
            </article>
        </main>
    );
  }
  
  export default ProductsPage;