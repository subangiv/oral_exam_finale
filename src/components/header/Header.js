import React from "react";
import styles from "./Header.module.scss";
import BurgerMenu from "../burgermenu/BurgerMenu";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <h2 className={styles.polloName}>
        POLLO<span>POLLO</span>
      </h2>
      <div id="actionBtns" className={styles.actionBtns}>
        <button className="btn rounded btn-donate" children="Donate" />
        <button className="btn rounded btn-primary" children="Offer product" />
        <button
          className="btn rounded btn-primary"
          children="Apply for product"
        />
      </div>
      <BurgerMenu />
    </header>
  );
}
