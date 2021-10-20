import React from "react";

const FilterButton = ({
  filterTermState,
  handleFilterTermState,
  filterButtonText,
}) => {
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
