//Not used//npm install axios
import React, { useState, useRef } from "react";
import styles from "./Account.module.scss";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import { useLocalStorage } from "react-use";

function Store() {
  const userEmail = document.getElementById("inputForEmail");
  const userPassword = document.getElementById("inputForPassword");

  localStorage.setItem("inputForEmail", userEmail.value);
  localStorage.setItem("inputForPassword", userPassword.value);
}
