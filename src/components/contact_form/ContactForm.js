import React from "react";
import styles from "./ContactForm.module.scss";
import TextField from "../textFieldStyle/TextField";
import InputArea from "../input-area/InputArea";
import { useMediaQuery } from "react-responsive";

export default function ContactForm(props) {
  const isTablet = useMediaQuery({ query: "(min-width: 767.98px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 991.98px)" });

  return (
    <form className={styles.formStyle}>
      <TextField
        type="text"
        name="email"
        label="Email"
        inputSize={isTablet ? "40" : "30"}
        inputPlaceHolder="Write your email"
        className="input-primary"
        textFieldStyle={{ width: "100%" }}
        style={{ width: "100%" }}
      ></TextField>
      <TextField
        type="text"
        name="inquiry"
        label="Inquiry"
        inputSize={isTablet ? "40" : "30"}
        inputPlaceHolder="Inquiry"
        className="input-primary"
        textFieldStyle={{ width: "100%" }}
        style={{ width: "100%" }}
      ></TextField>
      <InputArea
        type="text"
        name="message"
        label="Message"
        labelFor="message"
        cols={isTablet ? "34" : "26"}
        rows={isTablet ? "8" : "5"}
        inputPlaceHolder="Write your message here..."
        className="input-primary container"
        textFieldStyle={{ width: "100%" }}
        style={{ width: "100%" }}
      />
      <button
        className="btn rounded btn-primary sendPos"
        style={{ alignSelf: "center", width: isBigScreen && "100%" }}
        children="Send"
      />
    </form>
  );
}
