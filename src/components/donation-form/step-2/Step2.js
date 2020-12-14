import React from "react";
import styles from "../DonationForm.module.scss";
import TextField from "../../textfield/TextField";
import LongArrow from "../../../assets/svgs/long-arrow.svg";
import { ReactSVG } from "react-svg";

export default function Step2(props) {
  console.log(props);
  //Inputs in section 3
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
          inputValue={props.cardInputs.cardname}
          onChange={props.onCardNameChange}
        />
        <TextField
          className="input-primary"
          labelFor="card-number"
          label="Card number"
          inputPlaceHolder="XXXX  XXXX  XXXX  XXXX"
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
          inputValue={props.billingAdd.address1}
          onChange={props.onAddress1Change}
        />
        <TextField
          className="input-primary"
          labelFor="address-line2"
          label="Address line 2"
          inputPlaceHolder="House number, Apartment number"
          inputValue={props.billingAdd.address2}
          onChange={props.onAddress2Change}
        />
        <TextField
          className="input-primary"
          labelFor="city"
          label="City"
          inputPlaceHolder="City"
          inputValue={props.billingAdd.city}
          onChange={props.onCityChange}
        />
        <div className={styles.inputWrapper}>
          <TextField
            className="input-primary"
            labelFor="zipcode"
            label="Zip code"
            inputPlaceHolder="Zip code"
            maxLength="4"
            inputSize="7"
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
          inputValue={props.billingAdd.phonenum}
          onChange={props.onPhoneNumberChange}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 50px 2fr 100px",
            gap: "4vw",
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
