import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const toSearchPage = () => {
    history.push(`/search/q=${search}`);
  };

  return (
    <nav>
      <div className="nav-wrapper brown darken-2">
        <div className="row container">
          <div className="col s10 m6">
            <form className="search-form" onSubmit={toSearchPage}>
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  placeholder="Search for a Meal..."
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
          <div className="col s2 m6 ">
            <ul id="nav-mobile" class="right ">
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
// show-on-medium-and-up
// hide-on-med-and-down
