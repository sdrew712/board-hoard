import React, { useState, useEffect } from "react";
import { filterBoardsData } from "./boardsData";
import FilterButton from "./FilterButton";
import DropDown from "./DropDown";
import Search from "./Search";

const Filters = ({ getBoardsData, setBoardsData, isFiltered, setIsFiltered }) => {
  const [brandFilterTerms, setBrandFilterTerms] = useState([]);
  const [categoryFilterTerms, setCategoryFilterTerms] = useState([]);
  const [flexFilterTerms, setFlexFilterTerms] = useState([]);
  const [sortByTerm, setSortByTerm] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    if (debouncedSearchTerm.toLowerCase() === "longboard") {
      alert("What are you even searching for?");
      setDebouncedSearchTerm("");
      setSearchTerm("");
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (isFiltered === true) {
      filterBoardsData(brandFilterTerms, categoryFilterTerms, flexFilterTerms, debouncedSearchTerm, sortByTerm).then(
        (res) => {
          setBoardsData(Object.entries(res));
        }
      );
    }
  }, [
    setBoardsData,
    isFiltered,
    brandFilterTerms,
    categoryFilterTerms,
    flexFilterTerms,
    debouncedSearchTerm,
    sortByTerm,
  ]);

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
            setSearchTerm("");
          }}
        >
          Clear filters
        </button>

        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setIsFiltered={setIsFiltered}
          setDebouncedSearchTerm={setDebouncedSearchTerm}
        />

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

        <h2>Sort by</h2>
        <DropDown
          labelOptions={[
            { text: "Lowest Price", value: "asc" },
            { text: "Highest Price", value: "desc" },
          ]}
          setFilterTerm={setSortByTerm}
          setIsFiltered={setIsFiltered}
        />
      </div>
    </div>
  );
};

export default Filters;
