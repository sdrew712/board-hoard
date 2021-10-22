import React, { useState, useEffect } from "react";
import { filterBoardsData } from "./boardsData";
import FilterButton from "./FilterButton";
import Search from "./Search";

const Filter = ({ getBoardsData, setBoardsData, isFiltered, setIsFiltered }) => {
  const [brandFilterTerms, setBrandFilterTerms] = useState([]);
  const [categoryFilterTerms, setCategoryFilterTerms] = useState([]);
  const [flexFilterTerms, setFlexFilterTerms] = useState([]);

  useEffect(() => {
    if (isFiltered === true) {
      filterBoardsData(brandFilterTerms, categoryFilterTerms, flexFilterTerms).then((res) => {
        setBoardsData(Object.entries(res));
      });
    }
  }, [setBoardsData, isFiltered, brandFilterTerms, categoryFilterTerms, flexFilterTerms]);

  return (
    <div style={{ float: "left" }}>
      Filters
      <div>
        <button
          onClick={() => {
            getBoardsData().then((res) => {
              setBoardsData(Object.entries(res));
            });
            setIsFiltered(false);
            setBrandFilterTerms([]);
            setCategoryFilterTerms([]);
            setFlexFilterTerms([]);
          }}
        >
          Clear filters
        </button>

        <Search setBoardsData={setBoardsData} />

        <h2>brand</h2>
        <FilterButton
          setIsFiltered={setIsFiltered}
          filterTerms={brandFilterTerms}
          setFilterTerms={setBrandFilterTerms}
          filterButtonText="Landyachtz"
        />
        <FilterButton
          setIsFiltered={setIsFiltered}
          filterTerms={brandFilterTerms}
          setFilterTerms={setBrandFilterTerms}
          filterButtonText="Zenit"
        />
        <FilterButton
          setIsFiltered={setIsFiltered}
          filterTerms={brandFilterTerms}
          setFilterTerms={setBrandFilterTerms}
          filterButtonText="Moonshine MFG"
        />
        <FilterButton
          setIsFiltered={setIsFiltered}
          filterTerms={brandFilterTerms}
          setFilterTerms={setBrandFilterTerms}
          filterButtonText="Loaded"
        />
        <FilterButton
          setIsFiltered={setIsFiltered}
          filterTerms={brandFilterTerms}
          setFilterTerms={setBrandFilterTerms}
          filterButtonText="Rayne"
        />

        <h2>category</h2>
        <FilterButton
          setIsFiltered={setIsFiltered}
          filterTerms={categoryFilterTerms}
          setFilterTerms={setCategoryFilterTerms}
          filterButtonText="Dance"
        />
        <FilterButton
          setIsFiltered={setIsFiltered}
          filterTerms={categoryFilterTerms}
          setFilterTerms={setCategoryFilterTerms}
          filterButtonText="Freestyle"
        />
        <FilterButton
          setIsFiltered={setIsFiltered}
          filterTerms={categoryFilterTerms}
          setFilterTerms={setCategoryFilterTerms}
          filterButtonText="Downhill"
        />

        <h2>flex</h2>
        <FilterButton
          setIsFiltered={setIsFiltered}
          filterTerms={flexFilterTerms}
          setFilterTerms={setFlexFilterTerms}
          filterButtonText="Soft"
        />
        <FilterButton
          setIsFiltered={setIsFiltered}
          filterTerms={flexFilterTerms}
          setFilterTerms={setFlexFilterTerms}
          filterButtonText="Medium"
        />
        <FilterButton
          setIsFiltered={setIsFiltered}
          filterTerms={flexFilterTerms}
          setFilterTerms={setFlexFilterTerms}
          filterButtonText="Stiff"
        />
      </div>
    </div>
  );
};

export default Filter;
