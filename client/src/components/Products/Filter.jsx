import React from "react";
import { handleFilter } from "../../boardsData";

const Filter = ({ isFiltered, setIsFiltered, filterTerm, setFilterTerm }) => {
  const toggleFilter = () => {
    setIsFiltered((isFiltered = true));
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
            toggleFilter();
          }}
        >
          Landyachtz
        </button>
        <button
          value="Zenit"
          onClick={(e) => {
            setFilterTerm(e.target.value);
            handleFilter(filterTerm);
            toggleFilter();
          }}
        >
          Zenit
        </button>
      </div>
    </div>
  );
};

export default Filter;
