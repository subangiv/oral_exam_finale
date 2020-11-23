import "./InputField.module.scss";

function InputField(props) {

    return (
     <div className={props.className + " container"}>
        <div className="textfield">
          <input placeholder="E.g. John Doe" type={props.type}/>
          <label>Label</label>
        </div>
      </div>
    );
  }
  
  export default InputField;