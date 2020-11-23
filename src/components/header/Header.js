import React from "react";
import styles from "./Header.module.scss";
import BurgerMenu from "../burgermenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";

export default function Header(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const ActionButtons = () => {
    return (
      <div className={styles.actionBtns}>
        <button className="btn rounded btn-donate" children="Donate" />
        <button className="btn rounded btn-primary" children="Offer product" />
        <button
          className="btn rounded btn-primary"
          children="Apply for product"
        />
      </div>
    );
  };
  const Title = () => {
    return (
      <h2 className={styles.polloName}>
        POLLO<span>POLLO</span>
      </h2>
    );
  };
  return (
    <header className={styles.header}>
      {isMobile ? (
        <>
          <Title />
          <ActionButtons />
          <BurgerMenu />
        </>
      ) : (
        <>
          <ul className={styles.expanedMenuList}>
            <li>About</li>
            <li>Donations</li>
            <li>Applications</li>
            <li>Products</li>
            <li>
              <Title />
            </li>
            <li>
              <ActionButtons />
            </li>
            <li>Sign in</li>
          </ul>
        </>
      )}
    </header>
  );
}
