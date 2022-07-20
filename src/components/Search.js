import React, {useState} from "react";

function Search({searchPlant, onSearchChange}) {

  return (
    <div  className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={ (e) => onSearchChange(e.target.value) }
        value={ searchPlant }

      />
    </div>
  );
}

export default Search;
