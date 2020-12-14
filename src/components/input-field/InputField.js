import data from "../json/countries.json";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../account/Account.module.scss";
import "./InputField.module.scss";

function InputField(props) {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={props.className + " container"}>
      <div className="textfield">
        <input
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
          list={props.list}
          ref={props.ref}
          required={props.required}
          pattern={props.pattern}
        />
        <label htmlFor={props.htmlFor}>{props.label}</label>
        <datalist id="countries">
          {data.map((country, key) => (
            <option key={key} value={country.country} />
          ))}
        </datalist>
        {errors.email && (
          <span className={`${styles.errorMessage} mandatory`}>
            {errors.email.message}
          </span>
        )}
      </div>
    </div>
  );
}

export default InputField;
