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

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
    setIsFiltered(true);

    if (target.value === "") {
      setIsFiltered(false);
    }
  };

  return (
    <div>
      <TextField id="standard-basic" label="Search" variant="standard" value={searchTerm} onChange={handleSearch} />
    </div>
  );
};

export default Search;
