import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    console.log("yurr" + searchTerm);
    //do thing where you send searchterm off
  };

  console.log(searchTerm);
  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          name="searchtext"
          placeholder="Search"
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
        />
        <button type="submit" onClick={handleSearchSubmit}>
          Send your message
        </button>
      </form>
    </div>
  );
};

export default Search;
