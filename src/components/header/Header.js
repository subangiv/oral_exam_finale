import React from "react";
import styles from "./Header.module.scss";
import BurgerMenu from "../burgermenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";
import { Link, useHistory } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";
import UserMenu from "../user-menu/UserMenu";

export default function Header(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const history = useHistory();
  const clickDonate = () => {
    history.push("/applications");
  };

  const ActionButtons = () => {
    return (
      //TODO: add spaces between buttons
      <div className={styles.actionBtns}>
        <button
          className="btn rounded btn-donate"
          onClick={clickDonate}
          children="Donate"
        />
        <button
          className="btn rounded btn-primary-light"
          children="Offer product"
        />
        <button
          className="btn rounded btn-primary"
          children="Apply for product"
        />
      </div>
    );
  };

  const Title = () => {
    return (
      <Link to="/">
        <h2 className={styles.polloName}>
          POLLO<span>POLLO</span>
        </h2>
      </Link>
    );
  };

  return (
    <header className={styles.header}>
      {isMobile ? (
        <>
          <Title />
          <ActionButtons />
          <BurgerMenu isLoggedIn={props.isLoggedIn} />
        </>
      ) : (
        <ul className={styles.expanedMenuList}>
          <li>
            <Link className="primary-text" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="primary-text" to="/applications">
              Applications
            </Link>
          </li>
          <li>
            <Link className="primary-text" to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="primary-text" to="/help">
              Help
            </Link>
          </li>
          <li>
            <Title />
          </li>
          <li>
            <ActionButtons />
          </li>
          {!props.isLoggedIn && (
            <li>
              <Link className="primary-text" to="/sign-in">
                Sign in
              </Link>
            </li>
          )}
          {props.isLoggedIn && (
            <li className={styles.userLink}>
              <UserMenu />
            </li>
          )}
        </ul>
      )}
    </header>
  );
}
