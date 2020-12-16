import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./Account.module.scss";
import { useForm } from "react-hook-form";

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

 console.log("loggedInUser");

  // login the user
  const onSubmit = (person) => {
    console.log(user);
    const personEmail = user.email;
    const personPass = user.password;
    //if there's a user show the message below
    const signIn;
    if(personPass === passwor && personEmail === email){
        signIn = setSubmitted(true);
    }else if (user === null){
        signIn = alert("there's no user registered.");
    }else{
        signIn = alert("Your email or password is incorrect");
    }
    return signIn;  
  };

  if (submitted) {
    return <Redirect to="/account" />;
  }
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

export default SignInFormTest;
