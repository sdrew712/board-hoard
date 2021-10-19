import React from "react";
import { filterBoardsData } from "./boardsData";

const Filter = ({ isFiltered, setIsFiltered, filterTerms, setFilterTerms }) => {
  const toggleFilter = (buttonClicked) => {
    if (filterTerms?.includes(buttonClicked)) {
      setIsFiltered(!isFiltered);
    } else {
      setIsFiltered((isFiltered = true));
    }
  };

  return (
    <div style={{ float: "left" }}>
      Filters
      <div>
        <h2>brand</h2>
        <button
          onClick={(e) => {
            setFilterTerms([...filterTerms, e.target.innerText]);
            filterBoardsData(filterTerms);
            toggleFilter(e.target.innerText);
          }}
        >
          Landyachtz
        </button>
        <button
          onClick={(e) => {
            setFilterTerms([...filterTerms, e.target.innerText]);
            filterBoardsData(filterTerms);
            toggleFilter(e.target.innerText);
          }}
        >
          Zenit
        </button>
        <button
          onClick={(e) => {
            setFilterTerms([...filterTerms, e.target.innerText]);
            filterBoardsData(filterTerms);
            toggleFilter(e.target.innerText);
          }}
        >
          Moonshine MFG
        </button>
        <button
          onClick={(e) => {
            setFilterTerms([...filterTerms, e.target.innerText]);
            filterBoardsData(filterTerms);
            toggleFilter(e.target.innerText);
          }}
        >
          Loaded
        </button>
        <button
          onClick={(e) => {
            setFilterTerms([...filterTerms, e.target.innerText]);
            filterBoardsData(filterTerms);
            toggleFilter(e.target.innerText);
          }}
        >
          Rayne
        </button>
      </div>
    </div>
  );
};

export default Filter;
