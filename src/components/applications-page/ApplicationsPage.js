import React, { useState, useEffect, useRef } from "react";
import ApplicationCard from "../application-card/ApplicationCard";
import styles from "./ApplicationsPage.module.scss";
import text from "./static/applications-page.json"
import "../application-card/ApplicationCard"
import countries from "../../common/countries.json";
import FilterSelect from "../filter-select/FilterSelect";
import SortSelect from "../sort-select/SortSelect";
import { wrapGrid } from 'animate-css-grid';

  const applicationsShown = 2;


function ApplicationsPage(props) {
    const [shownApplications, setShownApplications] = useState([]);
    const [index, setIndex] = useState(0);
    const [total, setTotal] = useState(0)
    const [pending, setPending] = useState(true);
    const [sortOption, setSortOption] = useState("newest")
    const [filterOption, setFilterOption] = useState("")
    const [toggleFilter, setToggleFilter] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);
    const grid = useRef();
  
    console.log(grid)
    wrapGrid(grid.current);

    useEffect(() => {
     
        if(shownApplications.length === 0 && index === 0) {
        getData(showApplications, "?max="+applicationsShown + "&totals=true");
        console.log(shownApplications);
        }
      });

      
    function showApplications(data) {
        setShownApplications([...shownApplications].concat(data.data));
        setIndex(index+applicationsShown);
        setTotal(data.totals.total);        
    }

    function loadApplicationsHandler(){
      console.log(index)
        setPending(true);
        if (!isFiltered) {
        getData(showApplications, "?skip=" + index + "&max=" + applicationsShown + "&totals=true")
        } else {
          getData(showApplications, "?filter="+ filterOption +"&skip=" + index + "&max=" + applicationsShown + "&totals=true")
        }
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

  const filterOptions = countries;


      function sortList(selected, array) {
        let sorted;
        if (selected === sortOptions[0].value) {
          sorted =  array.sort((a,b) => new Date(b.created) - new Date(a.created));
        }
        if (selected === sortOptions[1].value) {
          sorted =  array.sort((a,b) => new Date(a.created) - new Date(b.created));
        }
        else if (selected === sortOptions[2].value) {
          sorted =  array.sort((a,b) => a.product[0].price - b.product[0].price);
        }
        else if (selected === sortOptions[3].value) {
          sorted =  array.sort((a,b) => b.product[0].price - a.product[0].price);
        } 
    
        return sorted
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

      function sortChangeHandler(e) {
        const selected = e.target.value;
        setSortOption(e.target.value);
        setShownApplications(sortList(selected, [...shownApplications] ));
      }

      function filterChangeHandler(e) {
        const selected = e.target.value;
        setFilterOption(selected);
        setShownApplications([])
        setPending(true);
        if (selected === "all") {
          getData(filterApplication, "?max=" + applicationsShown + "&totals=true");
          setIsFiltered(false);
        } else {
          getData(filterApplication, "?filter="+ selected +"&skip=" + 0 + "&max=" + applicationsShown + "&totals=true")
          setIsFiltered(true);
        }
      }

      function filterApplication(data) {
        setShownApplications(data.data);
        setIndex(applicationsShown);
        setTotal(data.totals.total);   
      }
  
    return (
        <main>
            <article className={styles.page}>
                <section className={styles.topSection}>
                    <div className={styles.bannerWrapper}>
                        <img className={styles.banner} src={process.env.PUBLIC_URL + "application-banner-2.png"}></img>
                    </div>
                    <section className={`${styles.paragraphWrapper} ${styles.filler}`}>
                        <h1 className={"light-text display-1"}>{text.heading}</h1>
                        <p className={styles.paragraph + " light-text"}>{text.paragraph1}</p>
                        <p className={styles.paragraph + " light-text"}>{text.paragraph2}</p>
                    </section>
                </section>
                <section className={styles.applicationsWrapper}>
                  <div className={styles.filterSortGroup}>
                    <div className={styles.filterSortWrapper}>
                      <SortSelect sortOption={sortOption} sortOptions={sortOptions} sortChangeHandler={sortChangeHandler} />
                      <button onClick={()=>{ setToggleFilter(!toggleFilter) }}className={"btn rounded btn-primary " + styles.filterButton}>Filter</button>
                      </div>
                      {toggleFilter &&
                      <FilterSelect all="All countries" filterOption={filterOption} filterOptions={countries} filterChangeHandler={filterChangeHandler}/>
                      }
                    </div>
 
                  {shownApplications.length > 0 &&
                    <ul className={styles.applicationList} ref={grid}>
                    {shownApplications.map((card) => <ApplicationCard key={card._id} {...card}/>)}
                    </ul>
                  }

                  {(shownApplications.length <= 0 && !pending) &&
                    <h2 className={styles.noApplicationsText + " display-4"}>Sorry, there is no applications from this country</h2>
                  }
                  
                  {pending &&
                  <div className={"spinner"}>
                  </div>}

                  {shownApplications.length !== total  && (
                  <button className={"btn outlined rounded btn-primary " + styles.loadingBtn} onClick={loadApplicationsHandler} >Load more...</button>
                  )}
                </section>
            </article>
        </main>
    );
  }
  
  export default ApplicationsPage;