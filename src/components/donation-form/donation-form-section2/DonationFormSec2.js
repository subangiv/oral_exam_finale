import React from "react";
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

  return (
    <>
      <li className={styles.step2}>Card details</li>
      <fieldset className={styles.eachStep}>
        <TextField className="input-primary" />
        <TextField
          className="input-primary"
          labelFor="fullname"
          label="Fullname"
          inputPlaceHolder="Enter your full name here"
          inputSize={isTablet ? "30" : "20"}
          inputValue={props.cardInputs.cardname}
          onChange={props.onCardNameChange}
          textFieldStyle={responsiveInputs}
          style={responsiveInputs}
        />
        <TextField
          className="input-primary"
          labelFor="card-number"
          label="Card number"
          inputPlaceHolder="XXXX  XXXX  XXXX  XXXX"
          inputSize={isTablet ? "30" : "20"}
          maxLength="16"
          inputValue={props.cardInputs.cardnumber}
          onChange={props.onCardNumberChange}
        />
        <div className={styles.inputWrapper}>
          <TextField
            className="input-primary"
            labelFor="expiry-date"
            label="Expiry date"
            inputPlaceHolder="MM/YY"
            inputSize="10"
            maxLength="5"
            inputValue={props.cardInputs.expiry}
            onChange={props.onExpiryChange}
          />
          <TextField
            className="input-primary"
            labelFor="cvv"
            label="CVV"
            inputPlaceHolder="XXX"
            maxLength="3"
            inputSize="4"
            inputValue={props.cardInputs.cvv}
            onChange={props.onCVVChange}
          />
        </div>
      </fieldset>
      <li className={styles.step2last}>Billing address</li>
      <fieldset className={styles.eachStep}>
        <TextField
          className="input-primary"
          labelFor="address-line1"
          label="Address line 1"
          inputPlaceHolder="Street name"
          inputSize={isTablet ? "30" : "20"}
          inputValue={props.billingAdd.address1}
          onChange={props.onAddress1Change}
        />
        <TextField
          className="input-primary"
          labelFor="address-line2"
          label="Address line 2"
          inputPlaceHolder="House number, Apartment number"
          inputSize={isTablet ? "30" : "20"}
          inputValue={props.billingAdd.address2}
          onChange={props.onAddress2Change}
        />
        <TextField
          className="input-primary"
          labelFor="city"
          label="City"
          inputPlaceHolder="City"
          inputSize={isTablet ? "30" : "20"}
          inputValue={props.billingAdd.city}
          onChange={props.onCityChange}
        />
        <div className={styles.inputWrapper}>
          <TextField
            className="input-primary"
            labelFor="zipcode"
            label="ZIP"
            inputPlaceHolder="ZIP Code"
            maxLength="4"
            inputSize="4"
            inputValue={props.billingAdd.zip}
            onChange={props.onZipChange}
          />
          <TextField
            className="input-primary"
            labelFor="state-province"
            label="State/Province"
            inputPlaceHolder="State / Province"
            inputSize="11"
            inputValue={props.billingAdd.stateprovince}
            onChange={props.onStateProvinceChange}
          />
        </div>
        <TextField
          className="input-primary"
          labelFor="phone-number"
          label="Phone number"
          inputPlaceHolder="Phone number"
          inputSize={isTablet ? "30" : "20"}
          inputValue={props.billingAdd.phonenum}
          onChange={props.onPhoneNumberChange}
        />
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
          <button className="btn rounded btn-donate">Donate</button>
        </div>
      </fieldset>
    </>
  );
}
