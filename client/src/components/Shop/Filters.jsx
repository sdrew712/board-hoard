import React, { useState, useEffect } from "react";
import { filterBoardsData } from "./boardsData";
import FilterButton from "./FilterButton";
import Search from "./Search";

const Filter = ({
  getBoardsData,
  setBoardsData,
  isFiltered,
  setIsFiltered,
}) => {
  const [brandFilterTerms, setBrandFilterTerms] = useState([]);
  const [categoryFilterTerms, setCategoryFilterTerms] = useState([]);

  useEffect(() => {
    if (brandFilterTerms.length || categoryFilterTerms.length > 0) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [setIsFiltered, brandFilterTerms, categoryFilterTerms]);

  useEffect(() => {
    if (isFiltered === true) {
      filterBoardsData(brandFilterTerms, categoryFilterTerms).then((res) => {
        setBoardsData(Object.entries(res));
      });
    }
  }, [setBoardsData, isFiltered, brandFilterTerms, categoryFilterTerms]);

  return (
    <div style={{ float: "left" }}>
      Filters
      <div>
        <button
          onClick={() => {
            getBoardsData().then((res) => {
              setBoardsData(Object.entries(res));
            });
            setBrandFilterTerms([]);
            setCategoryFilterTerms([]);
          }}
        >
          Clear filters
        </button>

        <Search setBoardsData={setBoardsData} />

        <h2>brand</h2>
        <FilterButton
          filterTerms={brandFilterTerms}
          setFilterTerms={setBrandFilterTerms}
          filterButtonText="Landyachtz"
        />
        <FilterButton
          filterTerms={brandFilterTerms}
          setFilterTerms={setBrandFilterTerms}
          filterButtonText="Zenit"
        />
        <FilterButton
          filterTerms={brandFilterTerms}
          setFilterTerms={setBrandFilterTerms}
          filterButtonText="Moonshine MFG"
        />
        <FilterButton
          filterTerms={brandFilterTerms}
          setFilterTerms={setBrandFilterTerms}
          filterButtonText="Loaded"
        />
        <FilterButton
          filterTerms={brandFilterTerms}
          setFilterTerms={setBrandFilterTerms}
          filterButtonText="Rayne"
        />

        <h2>category</h2>
        <FilterButton
          filterTerms={categoryFilterTerms}
          setFilterTerms={setCategoryFilterTerms}
          filterButtonText="Dance"
        />
        <FilterButton
          filterTerms={categoryFilterTerms}
          setFilterTerms={setCategoryFilterTerms}
          filterButtonText="Freestyle"
        />
        <FilterButton
          filterTerms={categoryFilterTerms}
          setFilterTerms={setCategoryFilterTerms}
          filterButtonText="Downhill"
        />
      </div>
    </div>
  );
};

export default Filter;
