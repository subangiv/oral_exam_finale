import ProductCard from "../product-card/ProductCard";
import styles from "./ProductsPage.module.scss";
import text from "./static/product-page.json"
import "../product-card/ProductCard"

  const myCards = [
    {
        productName: "Milk",
        productDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
        productImg: "milk.jpg",
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
        productName: "cheese",
        productDesc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.",
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
  ];
  const cards = myCards.map((card) => <ProductCard key={card.id} {...card}/>);

function ProductsPage(props) {

    return (
        <main>
            <h1 className={"primary-text"}>Products</h1>
            <img className={styles.filler}></img>
            <p>{text.paragraph1}</p>
            <p>{text.paragraph2}</p>
            <ul>{cards}</ul>
            <button>Load more...</button>
        </main>
    );
  }
  
  export default ProductsPage;