import React from "react";
import styles from "../DonationForm.module.scss";
import TextField from "../../textfield/TextField";
import InputArea from "../../input-area/InputArea";
import AmexIcon from "../../../assets/images/icon-simple-americanexpress.png";
import VisaIcon from "../../../assets/images/icon-awesome-cc-visa.png";
import MCardIcon from "../../../assets/images/icon-awesome-cc-mastercard.png";
import PayPalIcon from "../../../assets/images/icon-awesome-cc-paypal.png";

export default function Step1(props) {
  console.log(props);
  return (
    <>
      <li className={styles.step1}>Select your payment method *</li>
      <fieldset className={styles.eachStep}>
        <div className={styles.paymentMethods}>
          <p for="paypal-creditcard" className={styles.creditcardLabel}>
            PayPal/Credit card
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img src={PayPalIcon} alt="PayPal method"></img>
            <img src={VisaIcon} alt="Visa method"></img>
            <img src={MCardIcon} alt="PayPal method"></img>
            <img src={AmexIcon} alt="PayPal method"></img>
          </div>
        </div>
        <div></div>
      </fieldset>
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
