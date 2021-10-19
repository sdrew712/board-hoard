import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    //do thing where you send searchterm off

    try {
      const result = await axios.get("http://localhost:3001/api/filter", {
        params: { searchTerm: searchTerm },
      });
      console.log(result.data);
      // return result.data;
    } catch (err) {
      console.error(err);
    }
  };

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
