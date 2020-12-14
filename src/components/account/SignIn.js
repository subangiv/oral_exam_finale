import styles from "./Account.module.scss";
import SignInForm from "./SignInForm";
import signupprofile from "../../svg/sign-up.svg";

function SignUp() {
  return (
    <section className={styles.container}>
      <img className={styles.profile__img} src={signupprofile} alt="" />
      <SignInForm />
    </section>
  );
}

export default SignUp;
