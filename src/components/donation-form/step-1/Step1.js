import React from "react";
import styles from "../DonationForm.module.scss";
import TextField from "../../textfield/TextField";
import InputArea from "../../input-area/InputArea";

export default function Step1(props) {
  console.log(props);
  return (
    <>
      <li className={styles.step1}>Select your payment method *</li>
      <li className={styles.step1}>Personal information</li>
      <fieldset className={styles.eachStep}>
        <TextField
          className="input-primary"
          labelFor="first-name"
          label="First name"
          name="firstname"
          inputPlaceHolder="Enter your first name here"
          inputValue={props.personalInputs.firstname}
          onChange={props.onFistNameChange}
        />
        <TextField
          className="input-primary"
          labelFor="last-name"
          label="Last name"
          name="lastname"
          inputPlaceHolder="Enter your last name here"
          inputValue={props.personalInputs.lastname}
          onChange={props.onLastNameChange}
        />
        <TextField
          className="input-primary"
          labelFor="email"
          label="Email"
          name="email"
          inputPlaceHolder="Enter your email here"
          inputValue={props.personalInputs.email}
          onChange={props.onEmailChange}
        />
        <InputArea
          className="textarea-primary"
          labelFor="message"
          label="Leave a message"
          inputPlaceHolder="Leave a message to Rafael"
          rows="5"
          inputValue={props.personalInputs.message}
          onChange={props.onMessageChange}
        />
        <div className={styles.checkBoxContainer}>
          {/* <div className={styles.roundCheckBox}> */}
          <input type="checkbox" />
          {/* <label for="checkbox" className={styles.checkBoxLabel}></label> */}
          {/* </div> */}
          <p> I'd like to be informed about the donation</p>
        </div>
        <button
          className="btn rounded btn-secondary outlined"
          style={{ alignSelf: "center", marginRight: "30px" }}
          onClick={props.next}
          disabled={props.isLast()}
        >
          Next
        </button>
      </fieldset>
    </>
  );
}
