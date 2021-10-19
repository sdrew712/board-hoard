import React, { useEffect } from "react";
import { filterBoardsData } from "./boardsData";

const Filter = ({
  isFiltered,
  setIsFiltered,
  brandFilterTerms,
  setBrandFilterTerms,
}) => {
  const handleFilterTerms = (buttonClicked) => {
    if (brandFilterTerms.includes(buttonClicked)) {
      setBrandFilterTerms(
        brandFilterTerms.filter((term) => {
          return term !== buttonClicked;
        })
      );
    } else {
      setBrandFilterTerms([...brandFilterTerms, buttonClicked]);
    }
  };

  useEffect(() => {
    if (brandFilterTerms.length === 0) {
      console.log("hi");
      setIsFiltered(false);
    } else {
      setIsFiltered(true);
    }
  }, [brandFilterTerms, setIsFiltered]);

  return (
    <div style={{ float: "left" }}>
      Filters
      <div>
        <h2>brand</h2>
        <button
          onClick={(e) => {
            filterBoardsData(brandFilterTerms);
            handleFilterTerms(e.target.innerText);
          }}
        >
          Landyachtz
        </button>
        <button
          onClick={(e) => {
            filterBoardsData(brandFilterTerms);
            handleFilterTerms(e.target.innerText);
          }}
        >
          Zenit
        </button>
        <button
          onClick={(e) => {
            filterBoardsData(brandFilterTerms);
            handleFilterTerms(e.target.innerText);
          }}
        >
          Moonshine MFG
        </button>
        <button
          onClick={(e) => {
            filterBoardsData(brandFilterTerms);
            handleFilterTerms(e.target.innerText);
          }}
        >
          Loaded
        </button>
        <button
          onClick={(e) => {
            filterBoardsData(brandFilterTerms);
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
