import "./InputField.modules.scss";
import data from "../json/countries.json";

function InputField(props) {
  return (
    <div className={props.className + " container"}>
      <div className="textfield">
        <input
          placeholder={props.placeholder}
          type={props.type}
          list={props.list}
        />
        <label>{props.label}</label>
        <datalist id="countries">
          {data.map((country, key) => (
            <option key={key} value={country.country} />
          ))}
        </datalist>
      </div>
    </div>
  );
}

export default InputField;
