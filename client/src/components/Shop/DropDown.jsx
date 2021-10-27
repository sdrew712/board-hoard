import React from "react";

const DropDown = ({ labelText, labelOptions, setFilterTerm, setIsFiltered }) => {
  const options = labelOptions.map((option) => {
    return <option value={option.value}>{option.text}</option>;
  });

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
