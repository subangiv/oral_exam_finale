import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Account.module.scss";
import { useForm } from "react-hook-form";
import Alert from "@material-ui/lab/Alert";

const SignInFormTest = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isClickedSignIn, setIsClickedSignIn] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser + "logged in user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  const history = useHistory();
  const clickSignUp = () => {
    history.push("/sign-up");
    // localStorage.setItem("use", "");
  };
  const personEmail = user.email;
  const personPass = user.password;
  const userData = localStorage.getItem("user");
  // login the user
  const onSubmit = () => {
    console.log(user);
    setIsClickedSignIn(true);
    const personEmail = user.email;
    const personPass = user.password;
    //if there's a user show the message below
    if (personPass === password && personEmail === email) {
      setSubmitted(true);
      const person = localStorage.getItem("user");
      const newPerson = JSON.parse(person);
      newPerson.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(newPerson));
      props.logIn();
      history.push("/account");
    }
  };

  // if there's no user, show the login form
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
              onChange={(event) => setEmail(event.target.value)}
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
              onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="inputForPassword">Password</label>
            {errors.password && (
              <span className={`${styles.errorMessage} mandatory`}>
                {errors.password.message}
              </span>
            )}
          </div>
        </div>
        {/* User's info is not found in localStorage */}
        {isClickedSignIn && userData === null && (
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
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignInFormTest;
