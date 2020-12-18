import styles from "./Account.module.scss";
import SignInForm from "./SignInForm";
import signinprofile from "../../svg/sign-in.svg";

function SignUp(props) {
  return (
    <section className={styles.container}>
      <img className={styles.profile__img} src={signinprofile} alt="" />
      <SignInForm logIn={() => props.logIn()} />
    </section>
  );
}

export default SignUp;
