import React, { useState } from "react";
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

  console.log(props.user)
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
          <BurgerMenu isLoggedIn={props.isLoggedIn} user={props.user} />
        </>
      ) : (
        <>
          <ul className={styles.expanedMenuList}>
            <div className={styles.header__left}>
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
            </div>
            <div className={styles.header__middle}>
              <li>
                <Title />
              </li>
            </div>
            <div className={styles.header__right}>
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
                    <Link to="/account"  className={"primary-text"}  style={{ textDecoration: 'none' }} >{props.user.firstname}</Link>
                </li>
              )}
            </div>
          </ul>
          {props.isLoggedIn && (
          <div className={styles.balance}>Your balance: <span className={"display-5"}>0$</span></div>
          )}
        </>
      )}
    </header>
  );
}
