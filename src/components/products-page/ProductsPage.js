import React, { useState, useEffect } from "react";
import ProductCard from "../product-card/ProductCard";
import styles from "./ProductsPage.module.scss";
import text from "./static/product-page.json"
import "../product-card/ProductCard"
import countries from "../../common/countries.json";
import FilterSelect from "../filter-select/FilterSelect";
import SortSelect from "../sort-select/SortSelect";
import Dialog from "@material-ui/core/Dialog";
import { Button, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

  const productsShown = 2;


function ProductsPage(props) {
    const [shownProducts, setShownProducts] = useState([]);
    const [index, setIndex] = useState(0);
    const [total, setTotal] = useState(0)
    const [pending, setPending] = useState(true);
    const [sortOption, setSortOption] = useState("newest");
    const [filterOption, setFilterOption] = useState("")
    const [toggleFilter, setToggleFilter] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);
    const [open, setOpen] = useState(false);


    const filterOptions = countries;

    useEffect(() => {
        if(shownProducts.length === 0 && index === 0) {
            getData(showProducts, "?max="+productsShown + "&totals=true");
            console.log(shownProducts);
            }
      });

    function showProducts(data) {
        setShownProducts([...shownProducts].concat(data.data));
        setIndex(index+productsShown);
        setTotal(data.totals.total);        
    }

    function loadProductsHandler(){
        console.log(index)
          setPending(true);
          if (!isFiltered) {
          getData(showProducts, "?skip=" + index + "&max=" + productsShown + "&totals=true");
          console.log("not filtered")
          } else {
            getData(showProducts, "?filter="+ filterOption +"&skip=" + index + "&max=" + productsShown + "&totals=true")
          }
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

      function sortList(selected, array) {
        let sorted;
        if (selected === sortOptions[0].value) {
          sorted =  array.sort((a,b) => new Date(b.created) - new Date(a.created));
        }
        if (selected === sortOptions[1].value) {
          sorted =  array.sort((a,b) => new Date(a.created) - new Date(b.created));
        }
        else if (selected === sortOptions[2].value) {
          sorted =  array.sort((a,b) => a.price - b.price);
        }
        else if (selected === sortOptions[3].value) {
          sorted =  array.sort((a,b) => b.price - a.price);
        } 
    
        return sorted
    }
      
      function sortChangeHandler(e) {
        const selected = e.target.value;
        setSortOption(e.target.value);
        setShownProducts(sortList(selected, [...shownProducts] ));
      }

      function filterChangeHandler(e) {
        const selected = e.target.value;
        setFilterOption(selected);
        setShownProducts([])
        setPending(true);
        if (selected === "all") {
            getData(filterProduct, "?max=" + productsShown + "&totals=true");
            setIsFiltered(false);
        } else {
            getData(filterProduct, "?filter="+ selected + "&max=" + productsShown + "&totals=true")
            setIsFiltered(true);
        }
      }

      function filterProduct(data) {
        setShownProducts(data.data);
        setIndex(productsShown);
        setTotal(data.totals.total);   
      }

      function openHandler() {
        setOpen(true);
      }

      function handleClose() {
        setOpen(false);
      }

    return (
        <main>
            <article className={styles.page}>
                <section className={styles.topSection}>
                    <div className={styles.bannerWrapper}>
                        <img className={styles.banner} src={process.env.PUBLIC_URL + "product-banner.png"}></img>
                    </div>
                    <section className={styles.paragraphWrapper}>
                        <h1 className={"primary-text display-1"}>Products</h1>
                        <p className={styles.paragraph + " primary-text"}>{text.paragraph1}</p>
                        <p className={styles.paragraph + " primary-text"}>{text.paragraph2}</p>
                    </section>
                </section>
                <Dialog open={open}>
                  <DialogTitle>
                    Proof of concept
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      As this part is out of scope for the exams project, applying for a product is not avaible.
                    </DialogContentText>
                  </DialogContent>
                  <button onClick={handleClose} className={"btn btn-primary rounded " + styles.outOfScope}>Understood</button>
                </Dialog>

                <div className={styles.filterSortGroup}>
                    <div className={styles.filterSortWrapper}>
                      <SortSelect sortOption={sortOption} sortOptions={sortOptions} sortChangeHandler={sortChangeHandler} />
                      <button onClick={()=>{ setToggleFilter(!toggleFilter) }}className={"btn rounded btn-primary " + styles.filterButton}>Filter</button>
                      </div>
                      {toggleFilter &&
                      <FilterSelect all="All countries" filterOption={filterOption} filterOptions={countries} filterChangeHandler={filterChangeHandler}/>
                      }
                    </div>

                {shownProducts.length > 0 &&
                    <ul className={styles.productList}>
                    {shownProducts.map((card) => <ProductCard key={card._id} openHandler={openHandler} {...card}/>)}
                    </ul>
                  }

                  {(shownProducts.length <= 0 && !pending) &&
                    <p>Unfortunately, there's no products from this country yet</p>
                  }

                {pending &&
                <div className={"spinner"}></div>}

                {shownProducts.length !== total  && (
                <button className={"btn outlined rounded btn-primary " + styles.loadingBtn} onClick={loadProductsHandler} >Load more...</button>
                )}
            </article>
        </main>
    );
  }
  
  export default ProductsPage;