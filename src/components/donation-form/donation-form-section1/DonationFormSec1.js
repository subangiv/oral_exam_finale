import React, { useRef } from "react";
import styles from "../DonationForm.module.scss";
import { useMediaQuery } from "react-responsive";
import TextField from "../../textfield/TextField";
import InputArea from "../../input-area/InputArea";
import AmexIcon from "../../../assets/images/icon-simple-americanexpress.png";
import VisaIcon from "../../../assets/images/icon-awesome-cc-visa.png";
import MCardIcon from "../../../assets/images/icon-awesome-cc-mastercard.png";
import PayPalIcon from "../../../assets/images/icon-awesome-cc-paypal.png";
import ObyteIcon from "../../../assets/images/obyte-icon.png";

export default function DonationFormSec1(props) {
  const isTablet = useMediaQuery({ query: "(min-width: 767.98px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 991.98px)" });
  const responsiveInputs = {
    width: isTablet ? "90%" : "max-content",
    justifyContent: "flex-start",
  };

  //Common box for payment methods
  const PaymentMethods = ({ methodLabel, children, onClick, style }) => {
    return (
      <div className={styles.paymentMethods} onClick={onClick}>
        <p className={styles.methodsLabel}>{methodLabel}</p>
        <div className={styles.paymentImg} style={style}>
          {children}
        </div>
      </div>
    );
  };

  //Highlight a payment box
  const clickOnePayment = (e) => {
    e.target.style.borderWidth = "2px";
    e.target.firstChild.style.fontWeight = "800";
  };

  //Validating Names
  const firstNameMsg = useRef();
  const lastNameMsg = useRef();
  const capitalizeInput = (e) => {
    e.target.style.textTransform = "capitalize";
  };

  const communication = useRef();
  //Validating Email
  const emailInput = useRef();
  const checkEmail = (e) => {
    const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!e.target.value.match(emailPattern)) {
      emailInput.current.textContent = "Your provided email is invallid";
      emailInput.current.style.color = "red";
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "800";
      if (e.target.value.length === 0) {
        emailInput.current.textContent = "Please fill in your email";
        emailInput.current.style.color = "red";
      }
    } else {
      emailInput.current.textContent = "";
      e.target.nextElementSibling.style.fontWeight = "unset";
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "unset";
    }
  };

  //Before proceeding check if email is filled
  const clickProceed = (e) => {
    e.preventDefault();
    if (
      communication.current.checked === true &&
      props.personalInputs.email.length === 0
    ) {
      emailInput.current.textContent =
        "Please fill in your email if you want to informed about this donation";
    } else if (
      (communication.current.checked === true &&
        props.personalInputs.email.length !== 0) ||
      (!communication.current.checked &&
        props.personalInputs.email.length === 0)
    ) {
      props.next();
    }
  };

  return (
    <>
      <li className={styles.step1} step1={props.step1}>
        Select your payment method *
      </li>
      <fieldset className={styles.step1Container}>
        <PaymentMethods
          methodLabel="PayPal/Creditcard"
          onClick={clickOnePayment}
          style={{
            display: "grid",
            gap: "1vw",
            gridTemplateColumns: "repeat(2, 50px)",
            justifyContent: "center",
            //center imags vertically
            position: "relative",
            top: "-5px",
          }}
        >
          <img src={PayPalIcon} alt="PayPal method" />
          <img src={VisaIcon} alt="Visa method" />
          <img src={MCardIcon} alt="MasterCard method" />
          <img src={AmexIcon} alt="Amex method" />
        </PaymentMethods>
        <PaymentMethods
          methodLabel="Obyte"
          onClick={clickOnePayment}
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
          }}
        >
          <a href="https://obyte.org">
            <img src={ObyteIcon} alt="Obyte method" />
          </a>
        </PaymentMethods>
      </fieldset>
      <li className={styles.step1}>
        Personal information <br />
        <span style={{ fontSize: "12px" }}>You can be anonymous here </span>
      </li>
      <fieldset className={styles.eachStep}>
        <TextField
          required
          type="text"
          className="input-primary"
          labelFor="first-name"
          label="First name"
          name="firstname"
          inputSize={isTablet ? "30" : "20"}
          inputPlaceHolder="Enter your first name here"
          inputValue={props.personalInputs.firstname}
          onChange={props.onFistNameChange}
          // onBlur={checkFirstName}
          onKeyDown={capitalizeInput}
          textFieldStyle={responsiveInputs}
          style={responsiveInputs}
        >
          <span ref={firstNameMsg} className={styles.message}></span>
        </TextField>
        <TextField
          required
          type="text"
          className="input-primary"
          labelFor="last-name"
          label="Last name"
          name="lastname"
          inputSize={isTablet ? "30" : "20"}
          inputPlaceHolder="Enter your last name here"
          inputValue={props.personalInputs.lastname}
          onChange={props.onLastNameChange}
          // onBlur={checkLastName}
          onKeyDown={capitalizeInput}
          textFieldStyle={responsiveInputs}
          style={responsiveInputs}
        >
          <span ref={lastNameMsg} className={styles.message}></span>
        </TextField>
        <TextField
          required
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          className="input-primary"
          labelFor="email"
          label="Email"
          name="email"
          inputSize={isTablet ? "30" : "20"}
          inputPlaceHolder="Enter your email here"
          inputValue={props.personalInputs.email}
          onChange={props.onEmailChange}
          onBlur={checkEmail}
          textFieldStyle={responsiveInputs}
          style={responsiveInputs}
        >
          <span ref={emailInput} className={styles.message}></span>
        </TextField>
        <InputArea
          type="text"
          className="textarea-primary"
          labelFor="message"
          label="Leave a message"
          inputPlaceHolder="Leave a message to this applicant"
          cols={isTablet ? "27" : "19"}
          rows="5"
          inputValue={props.personalInputs.message}
          onChange={props.onMessageChange}
          inputAreaStyle={responsiveInputs}
          style={responsiveInputs}
        />
        <div className={styles.checkBoxContainer}>
          <input
            type="checkbox"
            ref={communication}
            onChange={props.onCommunicationChange}
          />
          <span> I'd like to be informed about the donation</span>
        </div>
        <button
          className="btn rounded btn-donate"
          style={{ alignSelf: "center" }}
          onClick={clickProceed}
          disabled={props.isLast()}
        >
          Proceed
        </button>
      </fieldset>
    </>
  );
}
