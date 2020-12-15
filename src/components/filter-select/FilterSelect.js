import styles from "./FilterSelect.module.scss"

function FilterSelect(props) {

        return (
            <select value={props.filterOption} onChange={(e)=> props.filterChangeHandler(e)} className={`${styles.filterSelect} ${styles.selection}`} >
                <option value="all">{props.all}</option>
                {props.filterOptions.map((option) => (
                <option key={option.code} value={option.name}>{option.name}</option>
            ))}
            </select>
        );
}
  
  
  export default FilterSelect;
