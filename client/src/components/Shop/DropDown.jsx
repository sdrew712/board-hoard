import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropDown = ({ labelText, labelOptions, setFilterTerm, setIsFiltered }) => {
  //map over labelOptions and return a list of options
  const menuItems = labelOptions.map((option) => {
    return (
      <MenuItem key={option.value} value={option.value}>
        {option.text}
      </MenuItem>
    );
  });

  //when the user selects an option, set the filterTerm to the selected option's value
  const handleDropdownChange = ({ target }) => {
    if (target.value) {
      setFilterTerm(target.value);
      setIsFiltered(true);
    }
    //if the user selects the empty option, set the filterTerm to an empty string
    else {
      setFilterTerm("");
      setIsFiltered(false);
    }
  };

  return (
    <>
      <FormControl variant="standard" style={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value=""
          onChange={handleDropdownChange}
          label={labelText}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {menuItems}
        </Select>
      </FormControl>
    </>
  );
};

export default DropDown;
