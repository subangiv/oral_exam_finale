import React, { useState } from "react";
import InputField from "../input-field/InputField";
import styles from "./Account.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import data from "../json/countries.json";

const SignUpForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState();
  const onSubmit = (data) => console.log(data);

  return (
    <section className={styles.form__wrapper}>
      <h6>Register a new user</h6>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <div className="input-primary container">
          <div className="textfield textfield-flex">
            <input
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
            <label htmlFor="firstname">First name</label>
            {errors.firstname && (
              <span className={styles.text}>{errors.firstname.message}</span>
            )}
          </div>
        </div>
        <div className="input-primary container">
          <div className="textfield textfield-flex">
            <input
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
            <label htmlFor="lastname">Last name</label>
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
              name="country"
              type="select"
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
            <label htmlFor="country">Country</label>
            <datalist id="countries">
              {data.map((country, key) => (
                <option key={key} value={country.country} />
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
              name="password"
              type="password"
              aria-describedby="Enter your password here"
              placeholder="CEnter your password here"
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
            <label htmlFor="password">Password</label>
            {errors.password && (
              <span className={styles.text}>{errors.password.message}</span>
            )}
          </div>
        </div>

        <button type="submit" className={styles.btn}>
          Sign up
        </button>
        <p>or</p>
        <button className={styles.btn__outline}>
          <Link to="/sign-in">Sign in</Link>
        </button>
      </form>
    </section>
  );
};
export default SignUpForm;
