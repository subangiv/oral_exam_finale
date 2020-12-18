import styles from "./Account.module.scss";
import SignUpForm from "./SignUpForm";
import signupprofile from "../../svg/sign-up.svg";

function SignUp(props) {

  return (
    <section className={styles.container}>
      <img className={styles.profile__img} src={signupprofile} alt="" />
      <SignUpForm handleLogin={()=> props.handleLogin()} />
    </section>
  );
}

export default SignUp;
