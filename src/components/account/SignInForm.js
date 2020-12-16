import React, { useState, useEffect } from "react";
import styles from "./Account.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SignUpForm from "./SignUpForm";

const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const onSubmit = (person) => {
    localStorage.setItem("user", JSON.stringify(person));
  };

  // if there's a user show the message below

  return (
    <section className={styles.form__wrapper}>
      <h6>Log in to PolloPollo</h6>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
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
              type="password"
              name="password"
              className="form-control"
              id="inputForPassword"
              placeholder="Enter password"
              ref={register({
                required: {
                  value: true,
                  message: "Please enter password",
                },
              })}
            />
            <label htmlFor="inputForPassword">Password</label>
            {errors.password && (
              <span className={`${styles.errorMessage} mandatory`}>
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
        <button type="submit" className={styles.btn}>
          Sign in
        </button>
        <p>or</p>
        <button className={styles.btn__outline}>
          <Link to="/sign-up">Sign up</Link>
        </button>
      </form>
    </section>
  );
};
export default SignInForm;
