import { countries } from "country-flag-icons";

const sortOptions = [
    {
      label: "Sort by: Newest",
      value: "newest"
    },
    {
      label: "Sort by: Oldest",
      value: "oldest"
    },
    {
      label: "Sort by: Lowest price",
      value: "lowestPrice"
    },
    {
      label: "Sort by: Highest price",
      value: "highestPrice"
    }
  ]

const filterOptions = countries;

  function sortList(selected, array) {
    let sorted;
    if (selected === sortOptions[0].value) {
      sorted =  array.sort((a,b) => new Date(b.created) - new Date(a.created));
    }
    if (selected === sortOptions[1].value) {
      sorted =  array.sort((a,b) => new Date(a.created) - new Date(b.created));
    }
    else if (selected === sortOptions[2].value) {
      sorted =  array.sort((a,b) => a.product[0].price - b.product[0].price);
    }
    else if (selected === sortOptions[3].value) {
      sorted =  array.sort((a,b) => b.product[0].price - a.product[0].price);
    } 

    return sorted
}

const sort = {sortList, sortOptions}
export default sort;

