import { useState } from "react";
import styles from "./ShowText.module.scss"

function ShowText(props) {

const [showToggle, setShowToggle] = useState(false);

    if (props.text.length <= props.maxLength) {
        return <p>{props.text}</p>
    } else {

        return (
            <p>
                {!showToggle ? `${props.text.substr(0, props.maxLength).trim()} (...) ` : props.text} <br/>
                {!showToggle ? (
                    <a onClick={() => setShowToggle(!showToggle)} className="primary-text"> Show more</a>
                    ) : (
                    <a onClick={() => setShowToggle(!showToggle)} className={styles.showLess + " primary-text"}> Show less</a>
                )}
            </p>
        );
    }
  }
  
  export default ShowText;
