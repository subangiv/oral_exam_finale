import "./InputArea.modules.scss";

function InputArea(props) {
  return (
    <div className={props.className + " container"} style={props.style}>
      <div className="inputarea" style={props.inputAreaStyle}>
        <textarea
          placeholder={props.inputPlaceHolder}
          type={props.type}
          name={props.name}
          value={props.inputValue}
          cols={props.cols}
          rows={props.rows}
          onChange={props.onChange}
        />
        <label htmlFor={props.labelFor} children={props.label} />
      </div>
    </div>
  );
}

export default InputArea;
