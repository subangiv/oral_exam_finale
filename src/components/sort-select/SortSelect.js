import styles from "./SortSelect.module.scss"

function SortSelect(props) {

        return (
        <select value={props.sortOption} onChange={(e)=> props.sortChangeHandler(e)} className={`${styles.sortSelection} ${styles.selection}`} >
            {props.sortOptions.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select> 
        );
}
  
  
  export default SortSelect;
