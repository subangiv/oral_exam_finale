import React, { useState, useEffect } from "react";
import ApplicationCard from "../application-card/ApplicationCard";
import styles from "./ApplicationsPage.module.scss";
import text from "./static/applications-page.json"
import "../application-card/ApplicationCard"
import countries from "../../common/countries.json";

//   const cards = myCards.map((card) => <ProductCard key={card.id} {...card}/>);
  const productsShown = 2;


function ApplicationsPage(props) {
    const [shownProducts, setShownProducts] = useState([]);
    const [index, setIndex] = useState(0);
    const [total, setTotal] = useState(0)
    const [pending, setPending] = useState(true);
    const [sortOption, setSortOption] = useState("newest")
    const [filterOption, setFilterOption] = useState("")
    const [toggleFilter, setToggleFilter] = useState(false);


    useEffect(() => {
        if(shownProducts.length === 0) {
        getData(showProducts, "?max="+productsShown + "&totals=true");
        console.log(shownProducts);
        }
      }, []);

    function showProducts(data) {
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

      const sortOptions = [
        {
          label: "Sort by: Newest",
          value: "newest"
        },
        {
          label: "Sort by: Oldest",
          value: "oldest"
        },
        {
          label: "Sort by: Lowest price",
          value: "lowestPrice"
        },
        {
          label: "Sort by: Highest price",
          value: "highestPrice"
        }
      ]

      const filterOptions = countries;

      function sortChangeHandler(e) {
        const selected = e.target.value;
        setSortOption(e.target.value);
          setShownProducts(sortList(selected));
        
      }

      function filterChangeHandler(e) {
        const selected = e.target.value;
        setFilterOption(selected);
        setPending(true);
        if (selected === "all") {
          getData((filterApplication), "?skip=" + index + "&max=" + productsShown + "&totals=true")
        } else {
        getData(filterApplication, "?q={}&filter="+selected + "&totals=true")
        }
      }

      function filterApplication(data) {
        setShownProducts(data);
        setIndex(productsShown);
        setTotal(data.totals.total);   

      }
      function sortList(selected) {
        let sorted;
        if (selected === sortOptions[0].value) {
          sorted =  [...shownProducts].sort((a,b) => new Date(b.created) - new Date(a.created));
        }
        if (selected === sortOptions[1].value) {
          sorted =  [...shownProducts].sort((a,b) => new Date(a.created) - new Date(b.created));
        }
        else if (selected === sortOptions[2].value) {
          sorted =  [...shownProducts].sort((a,b) => a.product[0].price - b.product[0].price);
        }
        else if (selected === sortOptions[3].value) {
          sorted =  [...shownProducts].sort((a,b) => b.product[0].price - a.product[0].price);
        } 

        console.log(sorted)

        return sorted
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
                <section className={styles.productsWrapper}>
                  <div className={styles.filterSortGroup}>
                    <select value={sortOption} onChange={sortChangeHandler} className={styles.sortSelection} >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    <div className={styles.filterWrapper}>
                      <button onClick={()=>{ setToggleFilter(!toggleFilter) }}className={"btn rounded btn-primary " + styles.filterButton}>Filter</button>
                      {/* {toggleFilter &&
                        <select value={filterOption} onChange={filterChangeHandler} className={`${styles.filterSelect}`} >
                          <option value="all">All countries</option>
                          {filterOptions.map((option) => (
                            <option key={option.code} value={option.code}>{option.name}</option>
                        ))}
                        </select>
                      } */}
                    </div>
                  </div>
                  <ul className={styles.applicationList}>
                    {shownProducts.map((card) => <ApplicationCard key={card._id} {...card}/>)}
                  </ul>
                  {pending &&
                  <p>Loading ...</p>}

                  {shownProducts.length !== total  && (
                  <button className="btn outlined rounded btn-primary" onClick={loadProductsHandler} >Load more...</button>
                  )}
                </section>
            </article>
        </main>
    );
  }
  
  export default ApplicationsPage;