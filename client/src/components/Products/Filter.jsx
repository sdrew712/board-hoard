import React from "react";
import { handleFilter } from "../../boardsData";

const Filter = ({ isFiltered, setIsFiltered, filterTerm, setFilterTerm }) => {
  const toggleFilter = (buttonClicked) => {
    if (buttonClicked === filterTerm) {
      setIsFiltered(!isFiltered);
    } else {
      setIsFiltered((isFiltered = true));
    }
  };

  return (
    <div style={{ float: "left" }}>
      {" "}
      Filters
      <div>
        <h2>brand</h2>
        <button
          onClick={(e) => {
            setFilterTerm(e.target.innerText);
            handleFilter(filterTerm);
            toggleFilter(e.target.innerText);
          }}
        >
          Landyachtz
        </button>
        <button
          onClick={(e) => {
            setFilterTerm(e.target.innerText);
            handleFilter(filterTerm);
            toggleFilter(e.target.innerText);
          }}
        >
          Zenit
        </button>
        <button
          onClick={(e) => {
            setFilterTerm(e.target.innerText);
            handleFilter(filterTerm);
            toggleFilter(e.target.innerText);
          }}
        >
          Moonshine MFG
        </button>
        <button
          onClick={(e) => {
            setFilterTerm(e.target.innerText);
            handleFilter(filterTerm);
            toggleFilter(e.target.innerText);
          }}
        >
          Loaded
        </button>
        <button
          onClick={(e) => {
            setFilterTerm(e.target.innerText);
            handleFilter(filterTerm);
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
