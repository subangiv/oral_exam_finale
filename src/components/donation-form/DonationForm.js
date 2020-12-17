import React, { useState } from "react";
import styles from "./DonationForm.module.scss";
import { Steps, Step } from "react-step-builder";
import DonationFormSec1 from "./donation-form-section1/DonationFormSec1";
import DonationFormSec2 from "./donation-form-section2/DonationFormSec2";
import DetailedCard from "../detailed-card/DetailedCard";
import Success from "../payment/Success";

export default function DonationForm(props) {
  //Inputs in sections 1 & 2
  const [personalInputs, setPersonalInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    communication: false,
  });
  const onFistNameChange = (e) => {
    setPersonalInputs({ ...personalInputs, firstname: e.target.value });
  };
  const onLastNameChange = (e) => {
    setPersonalInputs({ ...personalInputs, lastname: e.target.value });
  };
  const onEmailChange = (e) => {
    setPersonalInputs({ ...personalInputs, email: e.target.value });
  };
  const onMessageChange = (e) => {
    setPersonalInputs({ ...personalInputs, message: e.target.value });
  };
  const onCommunicationChange = (e) => {
    setPersonalInputs({ ...personalInputs, communication: e.target.checked });
  };

  //Inputs in section 3
  const [cardInputs, setCardInputs] = useState({
    country: "",
    cardname: "",
    cardnumber: "",
    expiry: "",
    cvv: "",
  });

  const onCountryChange = (e) => {
    setCardInputs({ ...cardInputs, country: e.target.value });
  };
  const onCardNameChange = (e) => {
    setCardInputs({ ...cardInputs, cardname: e.target.value });
  };
  const onCardNumberChange = (e) => {
    let formattedText = e.target.value
      .replace(/\s?/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    const onlyNumbers = e.target.validity.valid ? formattedText : "";
    setCardInputs({
      ...cardInputs,
      cardnumber: onlyNumbers,
    });
  };
  const onExpiryChange = (e) => {
    setCardInputs({ ...cardInputs, expiry: e.target.value });
  };
  const onCVVChange = (e) => {
    const onlyNumbers = e.target.validity.valid ? e.target.value : "";
    setCardInputs({ ...cardInputs, cvv: onlyNumbers });
  };

  //Inputs in section 4
  const [billingAdd, setBillingAdd] = useState({
    address1: "",
    address2: "",
    city: "",
    zip: "",
    stateprovince: "",
    phonenum: "",
  });
  const onAddress1Change = (e) => {
    setBillingAdd({ ...billingAdd, address1: e.target.value });
  };
  const onAddress2Change = (e) => {
    setBillingAdd({ ...billingAdd, address2: e.target.value });
  };
  const onCityChange = (e) => {
    setBillingAdd({ ...billingAdd, city: e.target.value });
  };
  const onZipChange = (e) => {
    const onlyNumbers = e.target.validity.valid ? e.target.value : "";
    setBillingAdd({ ...billingAdd, zip: onlyNumbers });
  };
  const onStateProvinceChange = (e) => {
    setBillingAdd({ ...billingAdd, stateprovince: e.target.value });
  };
  const onPhoneNumberChange = (e) => {
    const onlyNumbers = e.target.validity.valid ? e.target.value : "";
    setBillingAdd({ ...billingAdd, phonenum: onlyNumbers });
  };

  return (
    <section className={styles.donateSection}>
      <DetailedCard {...props} />
      <form noValidate="" autoComplete="off">
        <ol className={styles.listOfSteps}>
          <Steps>
            <Step
              component={DonationFormSec1}
              personalInputs={personalInputs}
              onFistNameChange={onFistNameChange}
              onLastNameChange={onLastNameChange}
              onEmailChange={onEmailChange}
              onMessageChange={onMessageChange}
              onCommunicationChange={onCommunicationChange}
            ></Step>
            <Step
              component={DonationFormSec2}
              personalInputs={personalInputs}
              onCommunicationChange={onCommunicationChange}
              cardInputs={cardInputs}
              onCountryChange={onCountryChange}
              onCardNameChange={onCardNameChange}
              onCardNumberChange={onCardNumberChange}
              onExpiryChange={onExpiryChange}
              onCVVChange={onCVVChange}
              billingAdd={billingAdd}
              onAddress1Change={onAddress1Change}
              onAddress2Change={onAddress2Change}
              onCityChange={onCityChange}
              onZipChange={onZipChange}
              onStateProvinceChange={onStateProvinceChange}
              onPhoneNumberChange={onPhoneNumberChange}
            ></Step>
            <Step component={Success}></Step>
          </Steps>
        </ol>
      </form>
    </section>
  );
}
