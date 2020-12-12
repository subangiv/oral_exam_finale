import { useState } from "react";

function ShowText(props) {

const [showToggle, setShowToggle] = useState(false);

    if (props.text.length <= props.maxLength) {
        return <p>{props.text}</p>
    } else {

        return (
            <p>
                {!showToggle ? `${props.text.substr(0, props.maxLength).trim()} ... ` : props.text}
                {!showToggle ? (
                    <a onClick={() => setShowToggle(!showToggle)}> Show more</a>
                    ) : (
                    <a onClick={() => setShowToggle(!showToggle)}> Show less</a>
                )}
            </p>
        );
    }
  }
  
  export default ShowText;
