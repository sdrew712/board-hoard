import React, { useState, useEffect } from "react";
import { filterBoardsData } from "./boardsData";
import FilterButton from "./FilterButton";
import Search from "./Search";

const Filter = ({ getBoardsData, setBoardsData, isFiltered, setIsFiltered }) => {
  const [brandFilterTerms, setBrandFilterTerms] = useState([]);
  const [categoryFilterTerms, setCategoryFilterTerms] = useState([]);
  const [flexFilterTerms, setFlexFilterTerms] = useState([]);

  useEffect(() => {
    if (brandFilterTerms.length || categoryFilterTerms.length > 0 || flexFilterTerms.length > 0) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [setIsFiltered, brandFilterTerms, categoryFilterTerms, flexFilterTerms]);

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

        <h2>flex</h2>
        <FilterButton
          filterTerms={flexFilterTerms}
          setFilterTerms={setFlexFilterTerms}
          filterButtonText="Soft"
        />
        <FilterButton
          filterTerms={flexFilterTerms}
          setFilterTerms={setFlexFilterTerms}
          filterButtonText="Medium"
        />
        <FilterButton
          filterTerms={flexFilterTerms}
          setFilterTerms={setFlexFilterTerms}
          filterButtonText="Stiff"
        />
      </div>
    </div>
  );
};

export default Filter;
