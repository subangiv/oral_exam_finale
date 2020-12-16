import "./SelectField.modules.scss";

function SelectField(props) {
  return (
    <div className={props.className + " container"} style={props.style}>
      <div className="textfield" style={props.selectFieldStyle}>
        <select
          required={props.required}
          pattern={props.pattern}
          name={props.name}
          value={props.inputValue}
          size={props.inputSize}
          maxLength={props.maxLength}
          min={props.min}
          style={props.selectStyle}
          onChange={props.onChange}
          onInput={props.onInput}
          onKeyDown={props.onKeyDown}
          onBlur={props.onBlur}
          onInvalid={props.onInvalid}
          children={props.options}
        />
        <label htmlFor={props.labelFor} children={props.label}></label>
      </div>
      {props.children}
    </div>
  );
}

export default SelectField;
