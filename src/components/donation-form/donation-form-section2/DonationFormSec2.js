import React, { useEffect, useRef } from "react";
import countries from "../../../common/countries.json";
import { RestDB } from "../../../modules/APIRequests";
import { useHistory } from "react-router-dom";
import styles from "../DonationForm.module.scss";
import { useMediaQuery } from "react-responsive";
import { ReactSVG } from "react-svg";
import TextField from "../../textfield/TextField";
import SelectField from "../../selectfield/SelectField";
import LongArrow from "../../../assets/svgs/long-arrow.svg";

//Extra Styling for inputs and span only on this page
const responsiveInputs = {
  justifyContent: "flex-start",
};

const msgStyle = {
  fontSize: "12px",
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

export default function DonationFormSec2(props) {
  const isTablet = useMediaQuery({ query: "(min-width: 767.98px)" });
  // const isBigScreen = useMediaQuery({ query: "(min-width: 991.98px)" });

  //Add default value in countries array
  useEffect(() => {
    const emptySelect = {
      name: "Select your country here...",
      code: "",
    };

    return countries ? countries.unshift(emptySelect) : null;
  }, []);

  //Text inputs are capitalized as writing
  const capitalizeInput = (e) => {
    e.target.style.textTransform = "capitalize";
  };

  //Validate country
  const countryField = useRef();
  const checkCountry = (e) => {
    if (e.target.value.length === 0) {
      countryField.current.textContent = "Please select your country";
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "800";
    } else {
      countryField.current.textContent = "";
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "unset";
      e.target.nextElementSibling.style.fontWeight = "unset";
    }
  };

  //Validate name
  const nameOnCard = useRef();
  const checkNameOnCard = (e) => {
    if (e.target.value.length === 0) {
      nameOnCard.current.textContent = "Please provide name on credit card";
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "800";
    } else {
      nameOnCard.current.textContent = "";
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "unset";
      e.target.nextElementSibling.style.fontWeight = "unset";
    }
  };

  //Validate card number
  const cardNumber = useRef();
  const checkCardNumber = (e) => {
    //https://regexlib.com/Search.aspx?k=credit&c=-1&m=-1&ps=20
    const cardPattern = /^(\d{4}-){3}\d{4}$|^(\d{4} ){3}\d{4}$|^\d{16}$/;
    if (!e.target.value.match(cardPattern)) {
      cardNumber.current.textContent = "Invalid card number";
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "800";
      if (e.target.value.length === 0) {
        cardNumber.current.textContent = "Card number cannot be empty";
      }
    } else {
      cardNumber.current.textContent = "";
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "unset";
      e.target.nextElementSibling.style.fontWeight = "unset";
    }
  };

  //Validate expiry date
  const expDate = useRef();
  const checkExpDate = (e) => {
    //https://regexlib.com/
    const expDatePattern = /^((0[1-9])|(1[0-2]))(\/){0,1}((\d{2})|(\d{4}))$/;
    if (!e.target.value.match(expDatePattern)) {
      expDate.current.textContent = "Invalid expiry date";
      e.target.style.borderWidth = "2px";
      e.target.style.borderColor = "#453266";
      e.target.nextElementSibling.style.fontWeight = "800";
      if (e.target.value.length === 0) {
        expDate.current.textContent = "Expiry date cannot be empty";
      }
    } else {
      expDate.current.textContent = "";
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "unset";
      e.target.nextElementSibling.style.fontWeight = "unset";
    }
  };

  //Validate CVV code
  const cvvCode = useRef();
  const checkCVV = (e) => {
    if (e.target.value.length === 0) {
      cvvCode.current.textContent = "Please enter CVV code";
      e.target.nextElementSibling.style.fontWeight = "800"; //label
      e.target.style.borderColor = "#453266"; //input
      e.target.style.borderWidth = "2px"; //input
    } else {
      cvvCode.current.textContent = "";
      e.target.nextElementSibling.style.fontWeight = "unset";
      e.target.style.borderWidth = "1px";
      e.target.style.borderColor = "unset";
    }
  };

  const history = useHistory();
  const onSubmitDonationForm = (e) => {
    e.preventDefault();
    if (
      props.cardInputs.country.length === 0 &&
      props.cardInputs.cardname.length === 0 &&
      props.cardInputs.cardnumber.length === 0 &&
      props.cardInputs.cvv.length === 0 &&
      props.cardInputs.expiry.length === 0
    ) {
      countryField.current.textContent = "Please select your country";
      nameOnCard.current.textContent = "Please provide name on credit card";
      cardNumber.current.textContent = "Please provide card number";
      expDate.current.textContent = "Please provide expiry date";
      cvvCode.current.textContent = "Please enter CVV code";
    } else {
      props.next();
      history.push("/success");
      RestDB.postADonation(
        props.personalInputs,
        props.cardInputs,
        props.billingAdd
      );
    }
  };

  return (
    <>
      <li className={styles.step2}>Card details *</li>
      <fieldset className={styles.eachStep}>
        <SelectField
          required
          className="input-primary"
          selectFieldStyle={responsiveInputs}
          style={responsiveInputs}
          selectStyle={{ width: isTablet ? "94%" : "89%" }}
          labelFor="select-countries"
          label="Select a country"
          inputValue={props.cardInputs.country}
          onChange={props.onCountryChange}
          onBlur={checkCountry}
          options={countries.map((country, i) => (
            <option key={i} value={country.code} children={country.name} />
          ))}
        >
          <span ref={countryField} style={msgStyle}></span>
        </SelectField>
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
          <span ref={nameOnCard} className={styles.message}></span>
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
          // onKeyDown={showCardNumEx}
        >
          <span ref={cardNumber} className={styles.message}></span>
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
      <li className={styles.step2last}>Billing address</li>
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
          // onBlur={checkAddress1}
        >
          {/* <span ref={addressL1} className={styles.message}></span> */}
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
          // onBlur={checkAddress2}
        >
          {/* <span ref={addressL2} className={styles.message}></span> */}
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
          // onBlur={checkCity}
        >
          {/* <span ref={cityName} className={styles.message}></span> */}
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
            // onBlur={checkZIP}
          >
            {/* <span ref={zipCode} style={msgForSmallInputs}></span> */}
          </TextField>
          <TextField
            type="text"
            className="input-primary"
            labelFor="state-province"
            label="State/Province"
            inputPlaceHolder="State / Province"
            inputSize="10"
            inputValue={props.billingAdd.stateprovince}
            onChange={props.onStateProvinceChange}
            onKeyDown={capitalizeInput}
            // onBlur={checkStateProvince}
          >
            {/* <span ref={stateProvince} style={msgForSmallInputs}></span> */}
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
          <span className={styles.message}></span>
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
          <button
            type="submit"
            className="btn rounded btn-donate"
            onClick={onSubmitDonationForm}
          >
            Donate
          </button>
        </div>
      </fieldset>
    </>
  );
}
