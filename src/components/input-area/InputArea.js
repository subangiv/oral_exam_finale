import "./InputArea.modules.scss";

function InputArea(props) {
  return (
    <div className={props.className + " container"}>
      <div className="inputarea">
        <textarea
          placeholder={props.inputPlaceHolder}
          type={props.type}
          name={props.name}
          value={props.inputValue}
          cols={props.cols}
          rows={props.rows}
        />
        <label htmlFor={props.labelFor} children={props.label} />
      </div>
    </div>
  );
}

export default InputArea;
