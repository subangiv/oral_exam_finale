import "./TextField.modules.scss";

function TextField(props) {
  return (
    <div className={props.className + " container"} style={props.style}>
      <div className="textfield" style={props.textFieldStyle}>
        <input
          type={props.type}
          required={props.required}
          placeholder={props.inputPlaceHolder}
          pattern={props.pattern}
          name={props.name}
          value={props.inputValue}
          size={props.inputSize}
          maxLength={props.maxLength}
          min={props.min}
          style={{ width: "100%" }}
          onChange={props.onChange}
          onInput={props.onInput}
          onKeyDown={props.onKeyDown}
          onKeyUp={props.onKeyUp}
          onBlur={props.onBlur}
          onInvalid={props.onInvalid}
        />
        <label htmlFor={props.labelFor} children={props.label}></label>
      </div>
      {props.children}
    </div>
  );
}

export default TextField;
