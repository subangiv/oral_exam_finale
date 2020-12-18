import React, { useState, useRef } from "react";
import styles from "./Account.module.scss";
import { useForm } from "react-hook-form";
import { Link, Redirect, useHistory } from "react-router-dom";
import data from "../../common/countries.json";
import ProductsPage from "../products-page/ProductsPage";
import SelectField from "../selectfield/SelectField";

const SignUpForm = (props) => {
  const { register, handleSubmit, errors, watch } = useForm();
  const [message, setMessage] = useState();
  const password = useRef({});
  password.current = watch("password", "");
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory();
  const clickSignIn = () => {
    history.push("/sign-in");
  };
  const onSubmit = (person) => {
    setSubmitted(true);
    const newPerson = { ...person };
    newPerson.isLoggedIn = true;
    localStorage.setItem("user", JSON.stringify(newPerson));
  };
  if (submitted) {
    return <Redirect to="/account" />;
  }
  return (
    <section className={styles.form__wrapper}>
      <h6>Register a new user</h6>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <div className="input-primary container">
          <div className="textfield textfield-flex">
            <input
              id="inputForOption"
              name="position"
              //type="select"
              aria-describedby="Select an option here"
              placeholder="Select an option here"
              list="positions"
              ref={register({
                required: {
                  value: true,
                  message: "Please select an option",
                },
              })}
            />
            <label htmlFor="inputForOption">Register as...</label>
            <datalist id="positions">
              <option value="Donor" />
            </datalist>
            {errors.position && (
              <span className={styles.text}>{errors.position.message}</span>
            )}
          </div>
        </div>
        <div className="input-primary container">
          <div className="textfield textfield-flex">
            <input
              id="inputForFirstName"
              name="firstname"
              type="text"
              aria-describedby="Enter your first name here"
              placeholder="Enter your first name here"
              ref={register({
                required: {
                  value: true,
                  message: "Please enter your first name",
                },
              })}
            />
            <label htmlFor="inputForFirstName">First name</label>
            {errors.firstname && (
              <span className={styles.text}>{errors.firstname.message}</span>
            )}
          </div>
        </div>
        <div className="input-primary container">
          <div className="textfield textfield-flex">
            <input
              id="inputForLastName"
              name="lastname"
              type="text"
              aria-describedby="Enter your last name here"
              placeholder="Enter your last name here"
              ref={register({
                required: {
                  value: true,
                  message: "Please enter your last name",
                },
              })}
            />
            <label htmlFor="inputForLastName">Last name</label>
            {errors.lastname && (
              <span className={styles.text}>{errors.lastname.message}</span>
            )}
          </div>
        </div>
        <div className="input-primary container">
          <div className="textfield textfield-flex">
            <input
              id="inputForEmail"
              name="email"
              type="email"
              className="form-control"
              aria-describedby="Enter email address"
              placeholder="Enter email address"
              ref={register({
                required: {
                  value: true,
                  message: "Please enter your email address",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid email address",
                },
              })}
            />
            <label htmlFor="inputForEmail">Email address</label>
            {errors.email && (
              <span className={`${styles.errorMessage} mandatory`}>
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div className="input-primary container">
          <div className="textfield textfield-flex">
            <input
              id="inputForCountry"
              name="country"
              //type="select"
              list="countries"
              aria-describedby="Choose your country here"
              placeholder="Choose your country here"
              ref={register({
                required: {
                  value: true,
                  message: "Please choose a country",
                },
              })}
            />
            <label htmlFor="inputForCountry">Country</label>
            <datalist id="countries">
              {data.map((country, key) => (
                <option key={key} value={country.name} />
              ))}
            </datalist>
            {errors.country && (
              <span className={styles.text}>{errors.country.message}</span>
            )}
          </div>
        </div>
        <div className="input-primary container">
          <div className="textfield textfield-flex">
            <input
              id="inputForPassword"
              name="password"
              type="password"
              aria-describedby="Enter your password here"
              placeholder="Enter your password here"
              ref={register({
                required: {
                  value: true,
                  message: "Please enter a password",
                },
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters are allowed",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum 20 characters are allowed",
                },
              })}
            />
            <label htmlFor="inputForPassword">Password</label>
            {errors.password && (
              <span className={styles.text}>{errors.password.message}</span>
            )}
          </div>
        </div>
        <div className="input-primary container">
          <div className="textfield textfield-flex">
            <input
              id="inputForPasswordRepeat"
              name="password_repeat"
              type="password"
              aria-describedby="Repeat your password here"
              placeholder="Repeat your password here"
              ref={register({
                validate: (value) =>
                  value === password.current || "Password does not match",
              })}
            />
            <label htmlFor="inputForPasswordRepeat">Repeat your password</label>
            {errors.password_repeat && (
              <span className={styles.text}>
                {errors.password_repeat.message}
              </span>
            )}
          </div>
        </div>

        <button type="submit" className={styles.btn}>
          Sign Up
        </button>
        <p>or</p>
        <button className={styles.btn__outline} onClick={clickSignIn}>
          Sign In
        </button>
      </form>
    </section>
  );
};
export default SignUpForm;
