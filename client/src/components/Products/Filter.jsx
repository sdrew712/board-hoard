import React from "react";
import { handleFilter } from "../../boardsData";

const Filter = ({ isFiltered, setIsFiltered, filterTerm, setFilterTerm }) => {
  const toggleFilter = (buttonClicked) => {
    console.log(buttonClicked);
    console.log(filterTerm);

    if (buttonClicked === filterTerm) {
      setIsFiltered(!isFiltered);
      console.log(isFiltered);
    } else {
      setIsFiltered((isFiltered = true));
      console.log(isFiltered);
    }
  };

  return (
    <div style={{ float: "left" }}>
      {" "}
      Filters
      <div>
        <h2>brand</h2>
        <button
          value="Landyachtz"
          onClick={(e) => {
            setFilterTerm(e.target.value);
            handleFilter(filterTerm);
            toggleFilter(e.target.value);
          }}
        >
          Landyachtz
        </button>
        <button
          value="Zenit"
          onClick={(e) => {
            setFilterTerm(e.target.value);
            handleFilter(filterTerm);
            toggleFilter(e.target.value);
          }}
        >
          Zenit
        </button>
      </div>
    </div>
  );
};

export default Filter;
