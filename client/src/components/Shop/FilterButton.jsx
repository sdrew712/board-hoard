import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const FilterButton = ({ isFiltered, setIsFiltered, filterTerms, setFilterTerms, filterButtonText }) => {
  //toggle state for button
  const [toggled, setToggled] = useState(false);

  //handle filter terms and filtered state
  const handleFilterTerms = (buttonClicked) => {
    //if button clicked is the same as one in the state array, change the array to remove it from the filter state
    if (filterTerms.includes(buttonClicked)) {
      setFilterTerms(
        filterTerms.filter((term) => {
          return term !== buttonClicked;
        })
      );
    }
    //else if it is not a filter term yet, add it to the filter term state and set filtered to true
    else {
      setFilterTerms([...filterTerms, buttonClicked]);
    }
  };

  // if filtered state is false, set toggled to false
  useEffect(() => {
    if (!isFiltered) {
      setToggled(false);
    }
  }, [isFiltered]);

  return (
    <Button
      variant={toggled && isFiltered ? "contained" : "outlined"}
      color="secondary"
      sx={{ margin: "5px" }}
      onClick={() => {
        handleFilterTerms(filterButtonText);
        setToggled(!toggled);
      }}
    >
      {filterButtonText}
    </Button>
  );
};

export default FilterButton;
