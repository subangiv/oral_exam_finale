import Flags from 'country-flag-icons/react/3x2';
import countries from "../common/countries.json"


function findCountry(array, value) {
    const country = array.find(object => object.name === value);
    return country;
    
}

function getFlag(country, className) {
    const {name, code} = findCountry(countries, country);
    const Flag = Flags[code];
    
    return <Flag title={name} className={className}/>
}

const flags = {findCountry, getFlag}
export default flags;