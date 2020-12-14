import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import TextField from "../textfield/TextField";
import InputArea from "../input-area/InputArea";
import { useMediaQuery } from "react-responsive";
import { RestDB } from "../../modules/APIRequest";

export default function ContactForm(props) {
  const isTablet = useMediaQuery({ query: "(min-width: 767.98px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 991.98px)" });

  const [inputValues, setInputValues] = useState({
    email: "",
    inquiry: "",
    message: "",
  });

  const onChangeEmail = (e) => {
    setInputValues({ ...inputValues, email: e.target.value });
  };
  const onChangeInquiry = (e) => {
    setInputValues({ ...inputValues, inquiry: e.target.value });
  };
  const onChangeMsg = (e) => {
    setInputValues({ ...inputValues, message: e.target.value });
  };
  const onSubmitContactForm = (e) => {
    e.preventDefault();
    RestDB.postContactRequest(inputValues);
  };
  return (
    <form className={styles.formStyle} onSubmit={onSubmitContactForm}>
      <TextField
        type="text"
        name="email"
        label="Email"
        labelFor="email"
        inputSize={isTablet ? "40" : "30"}
        inputPlaceHolder="Write your email"
        className="input-primary"
        textFieldStyle={{ width: "100%" }}
        style={{ width: "100%" }}
        inputValue={inputValues.email}
        onChange={onChangeEmail}
      ></TextField>
      <TextField
        type="text"
        name="inquiry"
        label="Inquiry"
        labelFor="inquiry"
        inputSize={isTablet ? "40" : "30"}
        inputPlaceHolder="Inquiry"
        className="input-primary"
        textFieldStyle={{ width: "100%" }}
        style={{ width: "100%" }}
        inputValue={inputValues.inquiry}
        onChange={onChangeInquiry}
      ></TextField>
      <InputArea
        type="text"
        name="message"
        label="Message"
        labelFor="message"
        cols={isTablet ? "34" : "26"}
        rows={isTablet ? "8" : "5"}
        inputPlaceHolder="Write your message here..."
        className="textarea-primary"
        textFieldStyle={{ width: "100%" }}
        style={{ width: "100%" }}
        inputValue={inputValues.msg}
        onChange={onChangeMsg}
      />
      <button
        className="btn rounded btn-primary sendPos"
        type="submit"
        style={{ alignSelf: "center", width: isBigScreen && "100%" }}
        children="Send"
      />
    </form>
  );
}
