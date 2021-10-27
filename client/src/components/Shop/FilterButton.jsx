import React from "react";

const FilterButton = ({ setIsFiltered, filterTerms, setFilterTerms, filterButtonText }) => {
  //handle filter terms and filtered state
  const handleFilterTerms = (buttonClicked) => {
    //if button clicked is in filter terms and if there are no more buttons left, set filtered to false
    if (filterTerms.includes(buttonClicked) && filterTerms.length <= 1) {
      setIsFiltered(false);
    }
    //if button clicked is the same as one in the state array, change the array to remove it from the filter state
    if (filterTerms.includes(buttonClicked)) {
      setFilterTerms(
        filterTerms.filter((term) => {
          return term !== buttonClicked;
        })
      );
    }
    //else if it is not a filter term yet, add it to the filter term state and set filtered to true
    else {
      setFilterTerms([...filterTerms, buttonClicked]);
      setIsFiltered(true);
    }
  };

  return (
    <button
      onClick={() => {
        handleFilterTerms(filterButtonText);
      }}
    >
      {filterButtonText}
    </button>
  );
};

export default FilterButton;
