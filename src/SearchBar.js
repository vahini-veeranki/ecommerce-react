import React from "react";

const SearchBar = ({ search, setSearch, onEnter }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        value={search}
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}

        // 🔥 Add this here
        onKeyDown={(e) => {
          if (e.key === "Enter") onEnter(search);
        }}
      />
    </div>
  );
};

export default SearchBar;


