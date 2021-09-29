import React from "react";

function Search({isSearch, setIsSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setIsSearch(e.target.value)}
        value={isSearch}
      />
    </div>
  );
}

export default Search;
