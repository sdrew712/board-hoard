import React from "react";

const FilterButton = ({ setIsFiltered, filterTerms, setFilterTerms, filterButtonText }) => {
  const handleFilterTerms = (buttonClicked) => {
    //if button clicked is the same as one in the state array, change the array to remove it from the filter state
    setIsFiltered(false);
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
