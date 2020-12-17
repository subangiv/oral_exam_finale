import { useState, useRef } from "react";
import styles from "./QACard.module.scss";
import { ReactSVG } from "react-svg";
import QAArrow from "../../assets/svgs/qa_arrow.svg";

export default function QACard(props) {
  const arrow = useRef(null);
  const [cardClosed, setCardClosed] = useState(true);
  const expandAnswer = () => {
    setCardClosed(!cardClosed);
  };

  const cardOpened = {
    backgroundColor: !cardClosed ? "rgba(219, 208, 239, 0.25)" : "unset",
    border: !cardClosed ? "none" : null,
  };

  return (
    <div className={styles.cardContainer} style={cardOpened}>
      <ReactSVG
        src={QAArrow}
        ref={arrow}
        className={styles.qaArrow}
        afterInjection={(error, svg) => {
          if (error) {
            console.error(error);
            return;
          }
        }}
        beforeInjection={(svg) => {
          svg.classList.add("svgQAArrow");
          svg.setAttribute("style", "width: 15px");
          svg.setAttribute("style", "height: 15px");
          if (cardClosed) {
            svg.style.transform = "rotate(-90deg)";
          } else {
            svg.style.transform = "rotate(0deg) ease-in-out";
          }
        }}
        onClick={expandAnswer}
        //TODO: animate rotation of the arrow
        // className={!cardClosed && styles.animateArrow}
      />
      <div className={styles.contentWrapper} children={props.children}>
        <h4 className="display-4">{props.question}</h4>
        {!cardClosed && (
          <p style={{ margin: "3vw 0 0 0" }}>
            {props.answer}{" "}
            <a href={props.href} className={styles.link}>
              {props.linkText}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
