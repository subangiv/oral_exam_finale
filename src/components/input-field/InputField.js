import "./InputField.modules.scss";

function InputField(props) {
  return (
    <div className={props.className + " container"} style={props.style}>
      <div className="textfield" style={props.textFieldStyle}>
        <input
          placeholder={props.inputPlaceHolder}
          type={props.type}
          name={props.name}
          value={props.inputValue}
          size={props.inputSize}
          maxLength={props.maxLength}
          style={{ width: "100%" }}
        />
        <label htmlFor={props.labelFor} children={props.label}></label>
      </div>
    </div>
  );
}

export default InputField;
