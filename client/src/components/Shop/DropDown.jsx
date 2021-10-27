import React from "react";

const DropDown = ({ labelText, labelOptions, setFilterTerm, setIsFiltered }) => {
  //map over labelOptions and return a list of options
  const options = labelOptions.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.text}
      </option>
    );
  });

  //when the user selects an option, set the filterTerm to the selected option's value
  const handleDropdownChange = (value) => {
    if (value) {
      setFilterTerm(value);
      setIsFiltered(true);
    } else {
      setFilterTerm("");
      setIsFiltered(false);
    }
  };

  return (
    <>
      <select
        name={labelText}
        id={labelText}
        onChange={({ target }) => {
          handleDropdownChange(target.value);
        }}
      >
        <option />
        {options}
      </select>
    </>
  );
};

export default DropDown;
