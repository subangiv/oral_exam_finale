import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Account.module.scss";
import { useForm } from "react-hook-form";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

const SignInFormTest = () => {
  const { register, handleSubmit, errors } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const history = useHistory();
  const clickSignUp = () => {
    history.push("/sign-up");
  };

  // login the user
  const personEmail = user.email;
  const personPass = user.password;
  const userData = localStorage.getItem("user");
  const [isClickedSignIn, setIsClickedSignIn] = useState(false);
  console.log(userData);

  const emailMsg = useRef();
  const passMsg = useRef();
  const onSubmit = (e) => {
    console.log(email, password);
    e.preventDefault();
    setIsClickedSignIn(true);
    if (personPass === password && personEmail === email) {
      setSubmitted(true);
      history.push("/account");
    }
    if (email.length === 0 && password.length === 0) {
      console.log("empty");
      emailMsg.current.textContent = "Please enter your email";
      passMsg.current.textContent = "Please enter password";
    }
  };
  // const onSubmit = (person) => {
  //   console.log(user);
  //   setIsClickedSignIn(true);
  //   //if there's a user show the message below
  //   let signIn;
  //   if (personPass === password && personEmail === email) {
  //     setSubmitted(true);
  //   } else if (userData === null) {
  //     // signIn = alert(
  //     //   "There's no user registered with this email. Please sign up."
  //     // );
  //   //} else {
  //     // signIn = alert("Your email or password is incorrect");
  //   }
  //   // return signIn;
  // };

  // if (submitted) {
  //   return <Redirect to="/account" />;
  // }
  // if there's no user, show the login form
  return (
    <section className={styles.form__wrapper}>
      <h6>Log in to PolloPollo</h6>
      <form onSubmit={onSubmit} noValidate autoComplete="off">
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
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="inputForEmail">Email address</label>
            <span
              ref={emailMsg}
              className={`${styles.errorMessage} mandatory`}
            ></span>
            {/* {errors.email && (
              <span
                ref={emailMsg}
                className={`${styles.errorMessage} mandatory`}
              >
                {errors.email.message}
              </span>
            )} */}
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
              onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="inputForPassword">Password</label>
            <span
              ref={passMsg}
              className={`${styles.errorMessage} mandatory`}
            ></span>
            {/* {errors.password && (
              <span
                ref={passMsg}
                className={`${styles.errorMessage} mandatory`}
              >
                {errors.password.message}
              </span>
            )} */}
          </div>
        </div>
        {/* User's info is not found in localStorage */}
        {isClickedSignIn &&
          email.length !== 0 &&
          password.length !== 0 &&
          userData === null && (
            <Alert
              role="alert"
              variant="outlined"
              className={styles.alertMsgBox}
              severity="error"
              children="There's no user registered with this email. Please sign up."
            />
          )}
        {/* Either email of pass is matched with localStorage */}
        {isClickedSignIn &&
          userData !== null &&
          (personEmail !== email || personPass !== password) && (
            <Alert
              role="alert"
              variant="outlined"
              className={styles.alertMsgBox}
              severity="error"
              children="Your email or password is incorrect."
            />
          )}
        <button type="submit" className={styles.btn}>
          Sign in
        </button>
        <p>or</p>
        <button className={styles.btn__outline} onClick={clickSignUp}>
          Sign up
        </button>
      </form>
    </section>
  );
};

export default SignInFormTest;
