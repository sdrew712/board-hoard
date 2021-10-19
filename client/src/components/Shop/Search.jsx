import React, { useState } from "react";
import axios from "axios";
import { searchBoardsData } from "./boardsData";

const Search = ({ setBoardsData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    try {
      searchBoardsData(searchTerm).then((res) => {
        setBoardsData(Object.entries(res));
        console.log(res);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={() => handleSearchSubmit(searchTerm)}>
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
