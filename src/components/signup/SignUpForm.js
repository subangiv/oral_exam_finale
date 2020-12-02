import InputField from "../input-field/InputField";
import styles from "./SignUp.module.scss";

function SignUpForm() {
  return (
    <section className={styles.form__wrapper}>
      <h6>Register a new user</h6>
      <InputField
        label="First name"
        className="input-primary"
        type="text"
        placeholder="Enter your first name here"
      />
      <InputField
        label="Last name"
        className="input-primary"
        type="text"
        placeholder="Enter your last name here"
      />
      <InputField
        label="Email"
        className="input-primary"
        type="email"
        placeholder="Enter your email here"
      />
      <InputField
        label="Select a country"
        className="input-primary"
        type="country"
        list="countries"
        placeholder="Select a country"
      />
      <InputField
        label="Password"
        className="input-primary"
        type="password"
        placeholder="Enter your password"
      />
      <InputField
        label="Confirm password"
        className="input-primary"
        type="password"
        placeholder="Confirm your password"
      />
      <button className={styles.btn}>Register</button>
      <p>or</p>
      <button className={styles.btn__outline}>Sign In</button>
    </section>
  );
}
export default SignUpForm;
