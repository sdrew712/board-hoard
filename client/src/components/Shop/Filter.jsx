import React, { useEffect } from "react";
import { filterBoardsData } from "./boardsData";
import FilterButton from "./FilterButton";

const Filter = ({
  setBoardsData,
  isFiltered,
  setIsFiltered,
  brandFilterTerms,
  setBrandFilterTerms,
  categoryFilterTerms,
  setCategoryFilterTerms,
}) => {
  //if button clicked is the same as one in the state array, change the array to remove it from the filter state
  const handleBrandFilterTerms = (buttonClicked) => {
    if (brandFilterTerms.includes(buttonClicked)) {
      setBrandFilterTerms(
        brandFilterTerms.filter((term) => {
          return term !== buttonClicked;
        })
      );
    }
    //else if it is not a filter term yet, add it to the filter term state
    else {
      setBrandFilterTerms([...brandFilterTerms, buttonClicked]);
    }
  };

  const handleCategoryFilterTerms = (buttonClicked) => {
    if (categoryFilterTerms.includes(buttonClicked)) {
      setCategoryFilterTerms(
        categoryFilterTerms.filter((term) => {
          return term !== buttonClicked;
        })
      );
    } else {
      setCategoryFilterTerms([...categoryFilterTerms, buttonClicked]);
    }
  };

  useEffect(() => {
    if (brandFilterTerms.length || categoryFilterTerms.length > 0) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [brandFilterTerms, categoryFilterTerms, setIsFiltered]);

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
        <h2>brand</h2>
        <FilterButton
          filterTermState={brandFilterTerms}
          handleFilterTermState={handleBrandFilterTerms}
          filterButtonText="Landyachtz"
        />
        <FilterButton
          filterTermState={brandFilterTerms}
          handleFilterTermState={handleBrandFilterTerms}
          filterButtonText="Zenit"
        />
        <FilterButton
          filterTermState={brandFilterTerms}
          handleFilterTermState={handleBrandFilterTerms}
          filterButtonText="Moonshine MFG"
        />
        <FilterButton
          filterTermState={brandFilterTerms}
          handleFilterTermState={handleBrandFilterTerms}
          filterButtonText="Loaded"
        />
        <FilterButton
          filterTermState={brandFilterTerms}
          handleFilterTermState={handleBrandFilterTerms}
          filterButtonText="Rayne"
        />

        <h2>category</h2>
        <FilterButton
          filterTermState={categoryFilterTerms}
          handleFilterTermState={handleCategoryFilterTerms}
          filterButtonText="Dance"
        />
        <FilterButton
          filterTermState={categoryFilterTerms}
          handleFilterTermState={handleCategoryFilterTerms}
          filterButtonText="Freestyle"
        />
        <FilterButton
          filterTermState={categoryFilterTerms}
          handleFilterTermState={handleCategoryFilterTerms}
          filterButtonText="Downhill"
        />
      </div>
    </div>
  );
};

export default Filter;
