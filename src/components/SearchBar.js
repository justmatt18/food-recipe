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
        <div className="container">
          <div className="row">
            <div className="col s10">
              <form>
                <div className="input-field">
                  <input
                    id="search"
                    type="search"
                    required
                    placeholder="Search for a Meal..."
                  />
                  <label className="label-icon" for="search">
                    <i className="material-icons">search</i>
                  </label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
            <div className="col s2">
              <ul id="nav-mobile" class="right ">
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
// show-on-medium-and-up
// hide-on-med-and-down
