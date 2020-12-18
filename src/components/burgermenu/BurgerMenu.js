import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./BurgerMenu.module.scss";
import headerclasses from "../header/Header.module.scss";
import { ReactSVG } from "react-svg";
import PollopolloLogo from "../../assets/svgs/pollopollo_logo.svg";

export default function BurgerMenu(props) {
  const bar1 = useRef(null);
  const bar2 = useRef(null);
  const bar3 = useRef(null);
  const bars = useRef(null);

  const [open, setOpen] = useState(false);
  const toggleOpenMenu = (e) => {
    setOpen(!open);
    animateBars();
  };

  const animateBars = () => {
    console.log(!open); //true
    if (!open) {
      //transform burgermenu icon
      bar1.current.style.transform = "rotate(135deg) translate(5px, -6px)";
      bar2.current.style.opacity = "0";
      bar2.current.style.left = "-60px";
      bar3.current.style.transform = "rotate(-135deg) translate(3px, 4px)";
    } else {
      //remove transformation
      bar1.current.style.transform = "unset";
      bar2.current.style.opacity = "unset";
      bar2.current.style.left = "unset";
      bar3.current.style.transform = "unset";
    }
  };

  const clickCloseMenu = (e) => {
    e.stopPropagation();
    console.log(!open);
    setOpen(!open);
    animateBars();
  };

  const MenuList = ({ children, open }) => {
    const content = open && <>{children}</>;
    return content;
  };

  return (
    <nav className={styles.navi}>
      <button ref={bars} className={styles.bars} onClick={toggleOpenMenu}>
        <span ref={bar1} className={styles.bar}></span>
        <span ref={bar2} className={styles.bar}></span>
        <span ref={bar3} className={styles.bar}></span>
      </button>
      <MenuList open={open}>
        {open === true && (
          <div className={styles.menuList} open={open}>
            <ul id="menuList">
              <li>
                <Link className="primary-text" to="/" onClick={clickCloseMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="primary-text"
                  to="/about"
                  onClick={clickCloseMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="primary-text"
                  to="/applications"
                  onClick={clickCloseMenu}
                >
                  Applications
                </Link>
              </li>
              <li>
                <Link
                  className="primary-text"
                  to="/products"
                  onClick={clickCloseMenu}
                >
                  Products
                </Link>
              </li>
              <li className={styles.separateBar}>
                <hr />
              </li>
              {!props.isLoggedIn && (
                <li>
                  <Link
                    className="primary-text"
                    to="/sign-in"
                    onClick={clickCloseMenu}
                  >
                    Sign in
                  </Link>
                </li>
              )}
              {!props.isLoggedIn && (
                <li>
                  <Link
                    className="primary-text"
                    to="/sign-up"
                    onClick={clickCloseMenu}
                  >
                    Sign up
                  </Link>
                </li>
              )}
              {props.isLoggedIn && (
                <li>
                  <Link
                    className="primary-text"
                    to="/account"
                    onClick={clickCloseMenu}
                  >
                    {props.user.firstname}
                  </Link>
                </li>
              )}
            </ul>
            <div id="polloPolloLogo" className={styles.logoWrapper}>
              <ReactSVG
                src={PollopolloLogo}
                afterInjection={(error, svg) => {
                  if (error) {
                    console.error(error);
                    return;
                  }
                }}
                beforeInjection={(svg) => {
                  svg.classList.add("svgPolloPolloLogo");
                  svg.setAttribute("style", "width: 50px");
                  svg.setAttribute("style", "height: 7vh");
                }}
              />
              <h2 className={headerclasses.polloName}>
                POLLO<span>POLLO</span>
              </h2>
            </div>
          </div>
        )}
      </MenuList>
    </nav>
  );
}
