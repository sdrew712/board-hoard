import React from "react";

const FilterButton = ({ filterTerms, setFilterTerms, filterButtonText }) => {
  const handleFilterTerms = (buttonClicked, filterTerms, setFilterTerms) => {
    //if button clicked is the same as one in the state array, change the array to remove it from the filter state
    if (filterTerms.includes(buttonClicked)) {
      setFilterTerms(
        filterTerms.filter((term) => {
          return term !== buttonClicked;
        })
      );
    }
    //else if it is not a filter term yet, add it to the filter term state
    else {
      setFilterTerms([...filterTerms, buttonClicked]);
    }
  };

  return (
    <button
      onClick={(e) => {
        handleFilterTerms(filterButtonText, filterTerms, setFilterTerms);
      }}
    >
      {filterButtonText}
    </button>
  );
};

export default FilterButton;
