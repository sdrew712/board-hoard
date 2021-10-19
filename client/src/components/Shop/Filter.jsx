import React from "react";
import { filterBoardsData } from "./boardsData";

const Filter = ({ isFiltered, setIsFiltered, filterTerms, setFilterTerms }) => {
  const handleFilterTerms = (buttonClicked) => {
    if (filterTerms.includes(buttonClicked)) {
      setFilterTerms(
        filterTerms.filter((term) => {
          return term !== buttonClicked;
        })
      );
    } else {
      setFilterTerms([...filterTerms, buttonClicked]);
    }
  };

  console.log(filterTerms.length);

  const toggleFilter = () => {
    if (filterTerms.length === 0) {
      console.log("hi");
      setIsFiltered(false);
    } else {
      setIsFiltered(true);
    }
  };

  toggleFilter();

  return (
    <div style={{ float: "left" }}>
      Filters
      <div>
        <h2>brand</h2>
        <button
          onClick={(e) => {
            filterBoardsData(filterTerms);
            handleFilterTerms(e.target.innerText);
          }}
        >
          Landyachtz
        </button>
        <button
          onClick={(e) => {
            filterBoardsData(filterTerms);
            handleFilterTerms(e.target.innerText);
          }}
        >
          Zenit
        </button>
        <button
          onClick={(e) => {
            filterBoardsData(filterTerms);
            handleFilterTerms(e.target.innerText);
          }}
        >
          Moonshine MFG
        </button>
        <button
          onClick={(e) => {
            filterBoardsData(filterTerms);
            handleFilterTerms(e.target.innerText);
          }}
        >
          Loaded
        </button>
        <button
          onClick={(e) => {
            filterBoardsData(filterTerms);
            handleFilterTerms(e.target.innerText);
          }}
        >
          Rayne
        </button>
      </div>
    </div>
  );
};

export default Filter;
