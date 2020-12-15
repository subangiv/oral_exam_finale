import React, { useState, useRef, forwardRef } from "react";
import styles from "../DonationForm.module.scss";
import TextField from "../../textfield/TextField";
import InputArea from "../../input-area/InputArea";
import AmexIcon from "../../../assets/images/icon-simple-americanexpress.png";
import VisaIcon from "../../../assets/images/icon-awesome-cc-visa.png";
import MCardIcon from "../../../assets/images/icon-awesome-cc-mastercard.png";
import PayPalIcon from "../../../assets/images/icon-awesome-cc-paypal.png";
import ObyteIcon from "../../../assets/images/obyte-icon.png";

export default function DonationFormSec1(props) {
  const PaymentMethods = ({ methodLabel, children, onClick, method }) => {
    return (
      <div className={styles.paymentMethods} onClick={onClick}>
        <p className={styles.methodsLabel}>{methodLabel}</p>
        <div className={styles.paymentImg}>{children}</div>
      </div>
    );
  };

  const clickOnePayment = (e) => {
    e.target.style.borderWidth = "2px";
    e.target.firstChild.style.fontWeight = "800";
  };
  return (
    <>
      <li className={styles.step1}>Select your payment method *</li>
      <fieldset className={styles.eachStep}>
        <PaymentMethods
          methodLabel="PayPal/Creditcard"
          onClick={clickOnePayment}
        >
          <img src={PayPalIcon} alt="PayPal method" />
          <img src={VisaIcon} alt="Visa method" />
          <img src={MCardIcon} alt="MasterCard method" />
          <img src={AmexIcon} alt="Amex method" />
        </PaymentMethods>
        <PaymentMethods methodLabel="Obyte" onClick={clickOnePayment}>
          <a href="https://obyte.org">
            <img src={ObyteIcon} alt="Obyte method" />
          </a>
        </PaymentMethods>
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
