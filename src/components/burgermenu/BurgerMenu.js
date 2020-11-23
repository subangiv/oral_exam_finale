import React, { useState, useRef } from "react";
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
  const clickOpenMenu = () => {
    setOpen(!open);

    if (open === false) {
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

  const MenuList = ({ children, open }) => {
    const content = open && <>{children}</>;
    return content;
  };

  return (
    <nav className={styles.navi}>
        <div
          ref={bars}
          className={styles.bars}
          onClick={clickOpenMenu}
          open={open}
        >
          <span ref={bar1} className={styles.bar}></span>
          <span ref={bar2} className={styles.bar}></span>
          <span ref={bar3} className={styles.bar}></span>
        </div>
      <MenuList open={open}>
        {open === true && (
          <div className={styles.menuList} open={open}>
            <ul id="menuList">
              <li>Home</li>
              <li>About</li>
              <li>Donations</li>
              <li>Applications</li>
              <li>Products</li>
              <li className={styles.separateBar}>
                <hr />
              </li>
              <li>Sign in</li>
              <li>Register</li>
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
