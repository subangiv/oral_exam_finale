import React, { useState, useRef } from "react";
import styles from "./ContactForm.module.scss";
import TextField from "../textfield/TextField";
import InputArea from "../input-area/InputArea";
import { useMediaQuery } from "react-responsive";
import { RestDB } from "../../modules/APIRequests";

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

  //validate email
  const contactEmail = useRef();
  const checkEmail = (e) => {
    const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!e.target.value.match(emailPattern)) {
      contactEmail.current.textContent = "Invalid email provided";
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "800";
    }
  };

  //Validate message field
  const messageField = useRef();
  const checkEmptyMessage = (e) => {
    if (e.target.value === 0) {
      messageField.current.textContent = "Please write your message";
    }
  };

  //Submit form
  const confirmMsg = useRef();
  const onSubmitContactForm = (e) => {
    e.preventDefault();
    if (inputValues.email.length === 0 && inputValues.message.length === 0) {
      contactEmail.current.textContent = "Please provide your email";
      messageField.current.textContent = "Please write your message";
    } else {
      //clear all inputs
      setInputValues({ ...inputValues, email: "", inquiry: "", message: "" });
      //show success message
      confirmMsg.current.textContent = "Your message is sucessfully sent!";
      confirmMsg.current.style.color = "#8b489c";
      //send POST request
      RestDB.postContactRequest(inputValues);
    }
  };

  return (
    <form
      className={styles.formStyle}
      onSubmit={onSubmitContactForm}
      noValidate=""
    >
      <TextField
        required
        type="text"
        name="email"
        label="Email *"
        labelFor="email"
        inputSize={isTablet ? "40" : "30"}
        inputPlaceHolder="Write your email"
        className="input-primary"
        textFieldStyle={{ width: "100%" }}
        style={{ width: "100%" }}
        inputValue={inputValues.email}
        onChange={onChangeEmail}
        onBlur={checkEmail}
      >
        <span ref={contactEmail} className={styles.alertMsg}></span>
      </TextField>
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
        required
        type="text"
        name="message"
        label="Message *"
        labelFor="message"
        cols={isTablet ? "34" : "26"}
        rows={isTablet ? "8" : "5"}
        inputPlaceHolder="Write your message here..."
        className="textarea-primary"
        textFieldStyle={{ width: "100%" }}
        style={{ width: "100%" }}
        inputValue={inputValues.message}
        onChange={onChangeMsg}
        onBlur={checkEmptyMessage}
      >
        <span ref={messageField} className={styles.alertMsg}></span>
      </InputArea>
      <button
        className={styles.sendPos + " btn rounded btn-primary"}
        type="submit"
        style={{ width: isBigScreen && "100%" }}
        onClick={onSubmitContactForm}
        children="Send"
      />
      <span ref={confirmMsg} className={styles.successMsg}></span>
    </form>
  );
}
