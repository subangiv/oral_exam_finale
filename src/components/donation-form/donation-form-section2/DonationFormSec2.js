import React, { useRef } from "react";
import styles from "../DonationForm.module.scss";
import { useMediaQuery } from "react-responsive";
import TextField from "../../textfield/TextField";
import LongArrow from "../../../assets/svgs/long-arrow.svg";
import { ReactSVG } from "react-svg";

export default function DonationFormSec2(props) {
  const isTablet = useMediaQuery({ query: "(min-width: 767.98px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 991.98px)" });
  const responsiveInputs = {
    // width: isTablet ? "90%" : "max-content",
    justifyContent: "flex-start",
  };

  const msgStyle = {
    fontSize: "13px",
    alignSelf: "flex-start",
    margin: "0 0 0 1.5vw",
    color: "#8b489c",
  };
  const msgForSmallInputs = {
    fontSize: "13px",
    alignSelf: "flex-start",
    padding: "0 0 0 1.5vw",
    color: "#8b489c",
    maxWidth: "90px",
  };

  const capitalizeInput = (e) => {
    e.target.style.textTransform = "capitalize";
  };

  //Validate name
  const nameOnCard = useRef();
  const checkNameOnCard = (e) => {
    if (e.target.value.length === 0) {
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#8b489c";
      e.target.nextElementSibling.style.fontWeight = "800";
      e.target.nextElementSibling.style.color = "#8b489c";
      nameOnCard.current.textContent = "Name on card cannot be empty";
    } else {
      nameOnCard.current.textContent = "";
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "unset";
      e.target.nextElementSibling.style.color = "unset";
    }
  };

  //Validate card number
  const cardNumber = useRef();
  const checkCardNumber = (e) => {
    //https://regexlib.com/Search.aspx?k=credit&c=-1&m=-1&ps=20
    const cardPattern = /^(\d{4}-){3}\d{4}$|^(\d{4} ){3}\d{4}$|^\d{16}$/;
    if (!e.target.value.match(cardPattern)) {
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#8b489c";
      e.target.nextElementSibling.style.fontWeight = "800";
      e.target.nextElementSibling.style.color = "#8b489c";
      cardNumber.current.textContent = "Invalid card number";
      if (e.target.value.length === 0) {
        cardNumber.current.textContent = "Card number cannot be empty";
      }
    } else {
      cardNumber.current.textContent = "";
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "unset";
      e.target.nextElementSibling.style.color = "unset";
    }
  };
  const showCardNumEx = (e) => {
    cardNumber.current.textContent = "E.g. XXXX  XXXX  XXXX  XXXX";
    e.target.nextElementSibling.style.color = "#453266";
  };

  //Validate expiry date
  const expDate = useRef();
  const checkExpDate = (e) => {
    //https://regexlib.com/
    const expDatePattern = /^((0[1-9])|(1[0-2]))(\/){0,1}((\d{2})|(\d{4}))$/;
    if (!e.target.value.match(expDatePattern)) {
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#8b489c";
      e.target.nextElementSibling.style.fontWeight = "800";
      e.target.nextElementSibling.style.color = "#8b489c";
      expDate.current.textContent = "Invalid expiry date";
      if (e.target.value.length === 0) {
        expDate.current.textContent = "Expiry date cannot be empty";
      }
    } else {
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "unset";
      e.target.nextElementSibling.style.color = "unset";
      expDate.current.textContent = "";
    }
  };

  //Validate CVV code
  const cvvCode = useRef();
  const checkCVV = (e) => {
    if (e.target.value.length === 0) {
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#8b489c";
      e.target.nextElementSibling.style.fontWeight = "800";
      e.target.nextElementSibling.style.color = "#8b489c";
      cvvCode.current.textContent = "Expiry date cannot be empty";
    } else {
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "unset";
      e.target.nextElementSibling.style.color = "unset";
      cvvCode.current.textContent = "";
    }
  };

  //Validate address
  const addressL1 = useRef();
  const addressL2 = useRef();
  const checkAddress1 = (e) => {
    if (e.target.value.length === 0) {
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#8b489c";
      e.target.nextElementSibling.style.fontWeight = "800";
      e.target.nextElementSibling.style.color = "#8b489c";
      addressL1.current.textContent = "Please provide street name";
    } else {
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "unset";
      e.target.nextElementSibling.style.color = "unset";
      addressL1.current.textContent = "";
    }
  };
  const checkAddress2 = (e) => {
    if (e.target.value.length === 0) {
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#8b489c";
      e.target.nextElementSibling.style.fontWeight = "800";
      e.target.nextElementSibling.style.color = "#8b489c";
      addressL2.current.textContent = "Please provide house or apt. number";
    } else {
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "unset";
      e.target.nextElementSibling.style.color = "unset";
      addressL2.current.textContent = "";
    }
  };

  //Validate City
  const cityName = useRef();
  const checkCity = (e) => {
    if (e.target.value.length === 0) {
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#8b489c";
      e.target.nextElementSibling.style.fontWeight = "800";
      e.target.nextElementSibling.style.color = "#8b489c";
      cityName.current.textContent = "Please provide your city";
    } else {
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "unset";
      e.target.nextElementSibling.style.color = "unset";
      cityName.current.textContent = "";
    }
  };

  //Validate ZIP Code
  const zipCode = useRef();
  const checkZIP = (e) => {
    if (e.target.value.length === 0) {
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#8b489c";
      e.target.nextElementSibling.style.fontWeight = "800";
      e.target.nextElementSibling.style.color = "#8b489c";
      zipCode.current.textContent = "Zip Code cannot be empty";
    } else {
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "unset";
      e.target.nextElementSibling.style.color = "unset";
      zipCode.current.textContent = "";
    }
  };
  //Validate State Province
  const stateProvince = useRef();
  const checkStateProvince = (e) => {
    if (e.target.value.length === 0) {
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#8b489c";
      e.target.nextElementSibling.style.fontWeight = "800";
      e.target.nextElementSibling.style.color = "#8b489c";
      stateProvince.current.textContent = "State/Province cannot be empty";
    } else {
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "unset";
      e.target.nextElementSibling.style.color = "unset";
      stateProvince.current.textContent = "";
    }
  };
  //Validate phone number (optional)
  // const phoneNum = useRef();
  // const checkPhoneNum = (e) => {
  //   const phoneNumPattern = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
  //   if (e.target.value.length === 0) {
  //     e.target.style.borderWidth = "2px";
  //     e.target.style.borderColor = "#8b489c";
  //     e.target.nextElementSibling.style.fontWeight = "800";
  //     e.target.nextElementSibling.style.color = "#8b489c";
  //     phoneNum.current.textContent = "";
  //   } else {
  //     e.target.style.borderWidth = "1px";
  //     e.target.style.borderColor = "#453266";
  //     e.target.nextElementSibling.style.fontWeight = "unset";
  //     e.target.nextElementSibling.style.color = "unset";
  //     phoneNum.current.textContent = "";
  //   }
  // };

  return (
    <>
      <li className={styles.step2}>Card details *</li>
      <fieldset className={styles.eachStep}>
        {/* <TextField required className="input-primary" /> */}
        <TextField
          required
          type="text"
          className="input-primary"
          labelFor="name-on-card"
          label="Name on card"
          inputPlaceHolder="Enter your full name here"
          inputSize={isTablet ? "30" : "20"}
          inputValue={props.cardInputs.cardname}
          onChange={props.onCardNameChange}
          onKeyDown={capitalizeInput}
          onBlur={checkNameOnCard}
          textFieldStyle={responsiveInputs}
          style={responsiveInputs}
        >
          <span ref={nameOnCard} style={msgStyle}></span>
        </TextField>
        <TextField
          required
          type="text"
          pattern="[0-9 ]+"
          className="input-primary"
          labelFor="card-number"
          label="Card number"
          inputPlaceHolder="XXXX  XXXX  XXXX  XXXX"
          inputSize={isTablet ? "30" : "20"}
          maxLength="19"
          min="0"
          inputValue={props.cardInputs.cardnumber}
          onChange={props.onCardNumberChange}
          onBlur={checkCardNumber}
          onKeyDown={showCardNumEx}
        >
          <span ref={cardNumber} style={msgStyle}></span>
        </TextField>
        <div className={styles.inputWrapper}>
          <TextField
            required
            className="input-primary"
            labelFor="expiry-date"
            label="Expiry date"
            inputPlaceHolder="MM/YY"
            inputSize="10"
            maxLength="5"
            inputValue={props.cardInputs.expiry}
            onChange={props.onExpiryChange}
            onBlur={checkExpDate}
          >
            <span ref={expDate} style={msgForSmallInputs}></span>
          </TextField>
          <TextField
            required
            type="text"
            pattern="[0-9]*"
            className="input-primary"
            labelFor="cvv"
            label="CVV"
            inputPlaceHolder="XXX"
            maxLength="3"
            inputSize="4"
            inputValue={props.cardInputs.cvv}
            onChange={props.onCVVChange}
            onBlur={checkCVV}
          >
            <span ref={cvvCode} style={msgForSmallInputs}></span>
          </TextField>
        </div>
      </fieldset>
      <li className={styles.step2last}>Billing address *</li>
      <fieldset className={styles.eachStep}>
        <TextField
          type="text"
          className="input-primary"
          labelFor="address-line1"
          label="Address line 1"
          inputPlaceHolder="Street name"
          onKeyDown={capitalizeInput}
          inputSize={isTablet ? "30" : "20"}
          inputValue={props.billingAdd.address1}
          onChange={props.onAddress1Change}
          onBlur={checkAddress1}
        >
          <span ref={addressL1} style={msgStyle}></span>
        </TextField>
        <TextField
          type="text"
          className="input-primary"
          labelFor="address-line2"
          label="Address line 2"
          inputPlaceHolder="House number, Apartment number"
          inputSize={isTablet ? "30" : "20"}
          inputValue={props.billingAdd.address2}
          onChange={props.onAddress2Change}
          onBlur={checkAddress2}
        >
          <span ref={addressL2} style={msgStyle}></span>
        </TextField>
        <TextField
          required
          type="text"
          className="input-primary"
          labelFor="city"
          label="City"
          inputPlaceHolder="City"
          inputSize={isTablet ? "30" : "20"}
          inputValue={props.billingAdd.city}
          onChange={props.onCityChange}
          onBlur={checkCity}
        >
          <span ref={cityName} style={msgStyle}></span>
        </TextField>
        <div className={styles.inputWrapper}>
          <TextField
            required
            type="text"
            pattern="[0-9]*"
            className="input-primary"
            labelFor="zipcode"
            label="ZIP"
            inputPlaceHolder="ZIP Code"
            maxLength="4"
            inputSize="4"
            inputValue={props.billingAdd.zip}
            onChange={props.onZipChange}
            onBlur={checkZIP}
          >
            <span ref={zipCode} style={msgForSmallInputs}></span>
          </TextField>
          <TextField
            type="text"
            className="input-primary"
            labelFor="state-province"
            label="State/Province"
            inputPlaceHolder="State / Province"
            inputSize="12"
            inputValue={props.billingAdd.stateprovince}
            onChange={props.onStateProvinceChange}
            onKeyDown={capitalizeInput}
            onBlur={checkStateProvince}
          >
            <span ref={stateProvince} style={msgForSmallInputs}></span>
          </TextField>
        </div>
        <TextField
          type="text"
          pattern="[0-9]*"
          className="input-primary"
          labelFor="phone-number"
          label="Phone number"
          inputPlaceHolder="Phone number"
          inputSize={isTablet ? "30" : "20"}
          inputValue={props.billingAdd.phonenum}
          onChange={props.onPhoneNumberChange}
          // onBlur={checkPhoneNum}
        >
          <span style={msgStyle}></span>
        </TextField>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 50px 2fr 100px",
            gap: "15px",
            alignSelf: "center",
            width: "min-content",
          }}
        >
          <ReactSVG
            src={LongArrow}
            style={{ marginLeft: "5vw" }}
            onClick={props.prev}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error);
                return;
              }
            }}
          />
          <button className="btn rounded btn-donate"
          // onClick={props.next}
          >
            Donate
          </button>
        </div>
      </fieldset>
    </>
  );
}
