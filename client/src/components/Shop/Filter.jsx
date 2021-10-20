import React, { useEffect } from "react";
import FilterButton from "./FilterButton";

const Filter = ({
  isFiltered,
  setIsFiltered,
  brandFilterTerms,
  setBrandFilterTerms,
}) => {
  const handleBrandFilterTerms = (buttonClicked) => {
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
      </div>
    </div>
  );
};

export default Filter;
