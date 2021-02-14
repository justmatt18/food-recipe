import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <nav>
      <div className="nav-wrapper brown darken-3">
        <form className="container">
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
