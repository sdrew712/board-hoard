import React from "react";

const FilterButton = ({ handleFilterTermState, filterButtonText }) => {
  return (
    <button
      onClick={(e) => {
        // @ts-ignore
        handleFilterTermState(e.target.innerText);
      }}
    >
      {filterButtonText}
    </button>
  );
};

export default FilterButton;
