import React from "react";
import { filterBoardsData } from "./boardsData";

const FilterButton = ({
  filterTermState,
  handleFilterTermState,
  filterButtonText,
}) => {
  return (
    <button
      onClick={(e) => {
        filterBoardsData(filterTermState);
        // @ts-ignore
        handleFilterTermState(e.target.innerText);
      }}
    >
      {filterButtonText}
    </button>
  );
};

export default FilterButton;
