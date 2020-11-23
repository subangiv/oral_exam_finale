import React from "react";
import styles from "./FilterButton.module.scss";

export default function FilterButton(props) {
  return (
    <select onClick={props.onClick} className={props.className}>
      {props.children}
      <option></option>
    </select>
  );
}
