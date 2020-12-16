import styles from "./Account.module.scss";
import SignUpForm from "./SignUpForm";
import signupprofile from "../../svg/sign-up.svg";

function SignUp() {
  return (
    <section className={styles.container}>
      <img className={styles.profile__img} src={signupprofile} alt="" />
      <SignUpForm />
    </section>
  );
}

export default SignUp;
