import React, { useState } from "react";
import styles from "./DonationForm.module.scss";
import { Steps, Step } from "react-step-builder";
import Step1 from "./step-1/Step1";
import Step2 from "./step-2/Step2";
import DetailedCard from "../detailed-card/DetailedCard";

export default function DonationForm(props) {
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
    setCardInputs({ ...cardInputs, cardnumber: e.target.value });
  };
  const onExpiryChange = (e) => {
    setCardInputs({ ...cardInputs, expiry: e.target.value });
  };
  const onCVVChange = (e) => {
    setCardInputs({ ...cardInputs, cvv: e.target.value });
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
    setBillingAdd({ ...billingAdd, zip: e.target.value });
  };
  const onStateProvinceChange = (e) => {
    setBillingAdd({ ...billingAdd, stateprovince: e.target.value });
  };
  const onPhoneNumberChange = (e) => {
    setBillingAdd({ ...billingAdd, phonenum: e.target.value });
  };
  const onClick = () => {
    console.log(personalInputs);
    console.log(cardInputs);
  };

  return (
    <section className={styles.donateSection}>
      <DetailedCard />
      <form onSubmit={onClick}>
        <ol className={styles.listOfSteps}>
          <Steps>
            <Step
              component={Step1}
              personalInputs={personalInputs}
              onFistNameChange={onFistNameChange}
              onLastNameChange={onLastNameChange}
              onEmailChange={onEmailChange}
              onMessageChange={onMessageChange}
            ></Step>
            <Step
              component={Step2}
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
