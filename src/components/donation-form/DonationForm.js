import React, { useState } from "react";
import { RestDB } from "../../modules/APIRequests";
import styles from "./DonationForm.module.scss";
import { Steps, Step } from "react-step-builder";
import DonationFormSec1 from "./donation-form-section1/DonationFormSec1";
import DonationFormSec2 from "./donation-form-section2/DonationFormSec2";
import DetailedCard from "../detailed-card/DetailedCard";

export default function DonationForm(props) {
  console.log(props);
  //Inputs in sections 1 & 2
  const [personalInputs, setPersonalInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
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

  //Inputs in section 3
  const [cardInputs, setCardInputs] = useState({
    cardname: "",
    cardnumber: "",
    expiry: "",
    cvv: "",
  });

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
  const onSubmitDonationForm = (e) => {
    e.preventDefault();
    console.error(e.target.value);
    if (
      personalInputs.firstname.length === 0 &&
      personalInputs.lastname.length === 0 &&
      personalInputs.email.length === 0 &&
      cardInputs.cardname.length === 0 &&
      cardInputs.cardnumber.length === 0 &&
      cardInputs.cvv.length === 0 &&
      cardInputs.expiry.length === 0 &&
      billingAdd.address1.length === 0 &&
      billingAdd.address2.length === 0 &&
      billingAdd.city.length === 0 &&
      billingAdd.zip.length === 0 &&
      billingAdd.stateprovince.length === 0
    ) {
      console.log("everything is empty");
    } else {
      //TODO: link to Success Page
      RestDB.postADonation(personalInputs, cardInputs, billingAdd);
    }
  };

  return (
    <section className={styles.donateSection}>
      <DetailedCard />
      <form onSubmit={onSubmitDonationForm}>
        <ol className={styles.listOfSteps}>
          <Steps>
            <Step
              component={DonationFormSec1}
              personalInputs={personalInputs}
              onFistNameChange={onFistNameChange}
              onLastNameChange={onLastNameChange}
              onEmailChange={onEmailChange}
              onMessageChange={onMessageChange}
            ></Step>
            <Step
              component={DonationFormSec2}
              cardInputs={cardInputs}
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
            <Step component={<h1>Success</h1>}></Step>
          </Steps>
        </ol>
      </form>
    </section>
  );
}
