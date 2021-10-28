import React, { useEffect } from "react";

import TextField from "@material-ui/core/TextField";

const Search = ({ setIsFiltered, searchTerm, setSearchTerm, setDebouncedSearchTerm }) => {
  //create timer for debounced term
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm, setDebouncedSearchTerm]);

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        value={searchTerm}
        onChange={({ target }) => {
          setSearchTerm(target.value);
          setIsFiltered(true);
        }}
      />
    </div>
  );
};

export default Search;
