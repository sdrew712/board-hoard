import React, { useEffect } from "react";

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
      <input
        type="text"
        id="search"
        name="searchtext"
        placeholder="Search"
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
